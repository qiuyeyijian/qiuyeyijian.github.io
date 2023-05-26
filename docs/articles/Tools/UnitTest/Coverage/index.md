# 代码覆盖率GCOV/LCOV

## 覆盖率的类型

先来看一下，当我们在说“覆盖率”的时候我们到底是指的什么。

实际上，代码覆盖率有下面几种类型：

- **函数覆盖率**：描述有多少比例的函数经过了测试。
- **语句覆盖率**：描述有多少比例的语句经过了测试。
- **分支覆盖率**：描述有多少比例的分支（例如：`if-else`，`case`语句）经过了测试。
- **条件覆盖率**：描述有多少比例的可能性经过了测试。

这其中，函数覆盖率最为简单，就不做说明了。

语句覆盖率是我们最常用的。因为它很直观的对应到我们写的每一行代码。

而分支覆盖率和条件覆盖率可能不太好理解，需要做一下说明。

以下面这个C语言函数为例：

```cpp
int foo (int x, int y) {
    int z = 0;
    if ((x > 0) && (y > 0)) {
        z = x;
    }
    return z;
}
```

这个函数中包含了一个`if`语句，因此`if`语句成立或者不成立构成了两个分支。所以如果只测试了`if`成立或者不成立的其中之一，其分支覆盖率只有 `1/2 = 50%`。

而条件覆盖率需要考虑每种可能性的情况。

对于`if (a && b)`这样的语句，其一共有四种可能的情况：

1. a = true, b = true
2. a = true, b = false
3. a = false, b = true
4. a = false, b = false

> 请读者思考一下：对于三层`if`嵌套，每个`if`语句包含三个布尔变量的代码，如果要做到100%的条件覆盖率，一共要测试多少种情况。
>
> 很显示，在编写代码的时候，尽可能的减少代码嵌套，并且简化逻辑运算是一项很好的习惯。
>
> 便于测试的代码也是便于理解和维护的，反之则反。

有了这些概念之后，我们就可以看懂测试报告中的覆盖率了。

## gcov

[gcov](https://gcc.gnu.org/onlinedocs/gcc/gcov.html)是由GCC工具链提供的代码覆盖率生成工具。它可以很方便的和GCC编译器配合使用。

通常情况下，安装好GCC工具链，也就同时包含了`gcov`命令行工具。

> 对于代码覆盖率工具所做的工作，可以简单的理解为：标记一次运行过程中，哪些代码被执行过，哪些没有执行。
>
> 因此，即便没有测试代码，直接运行编译产物也可以得到代码的覆盖率。只不过，通常情况下这样得到的覆盖率较低罢了。

### 使用

这里我们以另外一个简单的代码示例来说明gcov的使用。

```CPP
// test.c
#include <stdio.h>

int main (void) {
  for (int i = 1; i < 10; i++) {
      if (i % 3 == 0)
        printf ("%d is divisible by 3\n", i);
      if (i % 11 == 0)
        printf ("%d is divisible by 11\n", i);
  }
  return 0;
}
```

要通过gcov生成代码覆盖率。需要在编译时，增加参数`--coverage`。如果使用CMake构建，则需要`set(CMAKE_CXX_FLAGS "${CMAKE_CXX_FLAGS} --coverage")`

```
gcc --coverage test.c
```

此处的编译结果除了得到可执行文件`a.out`，还会得到一个`test.gcno`文件。该文件包含了代码与行号的信息，在生成覆盖率时会需要这个文件。

> `--coverage`等同于编译参数`-fprofile-arcs -ftest-coverage`以及在链接时增加`-lgcov`。参数说明参考：[Instrumentation Options (Using the GNU Compiler Collection (GCC))](https://gcc.gnu.org/onlinedocs/gcc/Instrumentation-Options.html?spm=a2c6h.12873639.article-detail.9.3fa465bc1ZP21j#Instrumentation-Options)
>
> 很显然，带`--coverage`编译参数得到的编译产物会比不带这个参数要包含更多的信息，因此编译产物会更大。所以这个参数只适合在需要生成代码覆盖率的时候才加上。对于正式发布的编译产物，不应该添加这个编译参数。

```bash
./a.out
```

当我们执行上面编译出来的可执行文件`a.out`时，我们还会得到每个源码文件对应的`gcda`后缀的文件。由`test.gcno`和`test.gcda`这两个文件，便可以得到代码的覆盖率结果了。

> 关于这两个文件的说明请参见这里：[Brief description of gcov data files](https://gcc.gnu.org/onlinedocs/gcc-4.1.2/gcc/gcov-Data-Files.html)

```bash
gcov test
```

只需要通过gcov指定源文件的名称（不需要带后缀）：`gcov test`，便可以得到包含覆盖率的结果文件 `test.c.gcov`了。

回顾一下我们刚刚的操作内容：

```bash
# 编译源文件
gcc --coverage test.c
# 查看生成物及大小
ll
# 运行程序
./a.out 
# 查看生成物及大小
ll
# 生成代码覆盖率文件.gcov
gcov test
# 查看生成物及大小
ll
```

我们可以`cat test.c.gcov`一下，查看覆盖率的结果：

这个结果应该还是很容易理解的，最左边一列描述了代码的覆盖情况：

- `-`： 表示该行代码不需要被计入覆盖率分析中
- `整数`： 表示被执行的次数
- `#####`：表示该行没有被覆盖

需要注意的是，`gcov` 对注释和空行的处理是基于源代码的，而不是基于编译后的代码。因此，在进行代码覆盖率分析时，需要确保源代码和编译后的代码一致，并且编译器没有对代码进行优化等操作，以确保分析结果的准确性和可靠性。

另外，注释和空行通常不会影响代码的实际执行路径和覆盖率，因此在分析覆盖率结果时，可以忽略这些行的影响，重点关注实际的代码执行情况和覆盖率分析结果。

## lcov

[gcov](https://gcc.gnu.org/onlinedocs/gcc/gcov.html)得到的结果是本文形式的。但很多时候，我们可能希望得到更加美观和便于浏览的结果。此时就可以使用[lcov](http://ltp.sourceforge.net/coverage/lcov.php)了。

lcov是gcov工具的图形前端。它收集多个源文件的gcov数据，并生成描述覆盖率的HTML页面。生成的结果中会包含概述页面，以方便浏览。

lcov支持我们前面提到的所有四种覆盖率。这个链接是lcov生成的报告样例：[lcov - code coverage report](http://ltp.sourceforge.net/coverage/lcov/output/index.html?spm=a2c6h.12873639.article-detail.25.3fa465bc1ZP21j)。

### 使用

对于lcov的使用方法可以通过下面这条命令查询：

```
lcov --help
```

通过输出我们可以看到，这个命令的参数有简短（例如`-c`）和完整（例如`--capture`)两种形式，其作用是一样的。

这里主要关注的下面这几个参数：

- `-c` 或者 `--capture` 指定从编译产物中收集覆盖率信息。
- `-d DIR` 或者 `--directory DIR` 指定编译产物的路径。
- `-e FILE PATTERN` 或者 `--extract FILE PATTERN` 从指定的文件中根据PATTERN过滤结果。
- `-o FILENAME` 或者 `--output-file FILENAME` 指定覆盖率输出的文件名称。

另外还有需要说明的是：

- lcov默认不会打开分支覆盖率，因此我们还需要增加这个参数来打开分支覆盖率的计算：`--rc lcov_branch_coverage=1`
- lcov输出的仍然是一个中间产物，我们还需要通过lcov软件包提供的另外一个命令`genhtml`来生成最终需要的html格式的覆盖率报告文件。同样的，为了打开分支覆盖率的计算，我们也要为这个命令增加`--rc genhtml_branch_coverage=1`参数

```bash
# lcov --rc lcov_branch_coverage=1 -d . -c -o collector.info 
lcov --rc lcov_branch_coverage=1 --directory . --capture --output-file coverage.info
```

覆盖率数据可能包含不需要覆盖的库和其他文件。使用 `lcov` 工具可以过滤掉这些文件。例如，过滤掉 `gtest` 库和任何其他不需要覆盖的文件：

```bash
lcov --rc lcov_branch_coverage=1 --remove coverage.info '/usr/*' '*gtest*' --output-file coverage.info
```

使用 `genhtml` 工具生成 HTML 报告。例如，使用以下命令生成报告：

```bash
genhtml --rc genhtml_branch_coverage=1 --legend coverage.info --output-directory coverage_report
```



