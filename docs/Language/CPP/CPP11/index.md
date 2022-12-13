# C++11

## 原始字面量

在 C++11 中添加了定义原始字符串的字面量，定义方式为：`R“xxx(原始字符串)xxx”` 其中（）两边的字符串可以省略。原始字面量 R 可以直接表示字符串的实际含义，而不需要额外对字符串做转义或连接等操作。

```cpp
string str1 = "D:\\hello\\world\\test.text";
cout << str1 << endl;

string str2 = R"(D:\hello\world\test.text)";
cout << str2 << endl;
```

在`R“xxx(raw string)xxx”` 中，原始字符串必须用括号（）括起来，括号的前后可以加其他字符串，所加的字符串会被忽略，因此一般不指定，并且加的字符串必须在括号两边同时出现。

```cpp
string str2 = R"test(D:\hello\world\test.text)test";		// test会被忽略
cout << str2 << endl;
```

如果原始字符串中有包含`"( 或者 )"`，则括号前后需要加一些描述语句，否则造成错误。

```cpp
string str3 = R"test(D:\hello\"()"world\test.text)test";  // 随便加上一些唯一的描述字符串比如 test等
cout << str3 << endl;
```



## long long 类型

相比于 C++98 标准，C++11 整型的最大改变就是多了 long long。但事实上，long long 整型本来就离 C++ 标准很近，早在 1995 年，long long 就被提议写入 C++98 标准，却被 C++ 标准委员会拒绝了。而后来，long long 类型却进入了 C99 标准，而且也事实上也被很多编译器支持。于是辗转地，C++ 标准委员会又掉头决定将 long long 纳入 C++11 标准。

 C++11 标准规定该类型至少占 8 字节，它占的字节数越多，对应能够存储的数值也就越大。

```cpp
// 数字后面可以加 ll后缀，大小写或者混着写均可
long long n1 = 123ll;
unsigned long long n3 = 123ull;

cout << "long long 最大值：" << LLONG_MAX << endl;
cout << "long long 最小值：" << LLONG_MIN << endl;
cout << "unsigned long long 最大值：" << ULLONG_MAX << endl;
```

> * ` long long `、`long long int`、`signed long long`、`signed long long int`是等价的。
>
> * ` unsigned long long `和` unsigned long long int` 是等价的。

在 C++11 中一共只定义了以下 5 种标准的有符号整型：

 `signed char` 、`short int`、`int`、`long int`、`long long int`

标准同时规定，每一种有符号整型都有一种对应的无符号整数版本，且有符号整型与其对应的无符号整型具有相同的存储空间大小。比如与 signed int 对应的无符号版本的整型是 unsigned int。

当我们在 C++ 中处理数据的时候，如果参与运算的数据或者传递的参数类型不匹配，整型间会发生隐式的转换，这种过程通常被称为整型的提升。

> 关于这种整形提升的隐式转换遵循如下原则:
>
> * 长度越大的整型等级越高，比如 long long int 的等级会高于 int。
>
> * 长度相同的情况下，标准整型的等级高于扩展类型，比如 long long int 和 int64 如果都是 64 位长度，则 long long int 类型的等级更高。
>
> * 相同大小的有符号类型和无符号类型的等级相同，long long int 和 unsigned long long int的等级就相同。
>
> * 转换过程中，低等级整型需要转换为高等级整型，有符号的需要转换为无符号整形。



## final和override

### final

C++ 中增加了 final 关键字来限制某个类不能被继承，或者某个虚函数不能被重写，和 Jave 的 final 关键字的功能是类似的。如果使用 final 修饰函数，只能修饰虚函数，并且要把final关键字放到类或者函数的后面。

```cpp
class Base {
 private:
 public:
  // 基类当中定义一个纯虚函数
  virtual void print() = 0;
};

// 使用final修饰类
class Child final : public Base {
 public:
    // 使用final修饰函数
  void print() final { cout << "hello" << endl; }
};

class GrandChild : public Child {	// 错误，不能继承被final修饰的类
 public:
  void print() {}		//错误，不能重写被final修饰过的虚函数
};
```



### override

override 关键字确保在派生类中声明的重写函数与基类的虚函数有相同的签名，同时也明确表明将会重写基类的虚函数，这样就可以保证重写的虚函数的正确性，也提高了代码的可读性，和 final 一样这个关键字要写到方法的后面。

```cpp
class Base {
 private:
 public:
  // 基类当中定义一个纯虚函数
  virtual void print() = 0;
};

class Child : public Base {
 public:
  void print() override { cout << "hello" << endl; }
};
```

使用了 override 关键字之后，假设在重写过程中因为误操作，写错了函数名或者函数参数或者返回值编译器都会提示语法错误，提高了程序的正确性，降低了出错的概率。



## 模板

C++模板分为类模板和函数模板。

### 默认模板参数

C++11添加了对函数模板默认参数的支持。也就是或类模板和函数模板都可以有默认模板参数。

当所有模板参数都有默认参数时，**函数模板的调用如同一个普通函数**。**但对于类模板而言，哪怕所有参数都有默认参数，在使用时也必须在模板名后跟随 <> 来实例化。**

```cpp
template <typename T = int, T t = 520>
class Test {
 public:
  void print() { cout << "current value: " << t << endl; }
};

int main() {
    // 类模板 <>不能省略
  Test<> t;
  t.print();
  return 0;
}
```



**函数模板的默认模板参数在使用规则上和其他的默认参数也有一些不同，它没有必须写在参数表最后的限制。**这样当默认模板参数和模板参数自动推导结合起来时，书写就显得非常灵活了。我们可以指定函数模板中的一部分模板参数使用默认参数，另一部分使用自动推导

```cpp
template <typename R = int, typename N>
R func(N arg) {
  return arg;
}

int main() {
  auto ret1 = func(520);
  cout << "return value-1: " << ret1 << endl;

  auto ret2 = func<double>(52.134);
  cout << "return value-2: " << ret2 << endl;

  auto ret3 = func<int>(52.134);
  cout << "return value-3: " << ret3 << endl;

  auto ret4 = func<char, int>(100);
  cout << "return value-4: " << ret4 << endl;

  return 0;
}

```

当默认模板参数和模板参数自动推导同时使用时（优先级从高到低）：

1. 如果可以推导出参数类型则使用推导出的类型

2. 如果函数模板无法推导出参数类型，那么编译器会使用默认模板参数

3. 如果无法推导出模板参数类型并且没有设置默认模板参数，编译器就会报错

```cpp
template <typename T, typename U = char>
void func(T arg1 = 100, U arg2 = 100) {
  cout << "arg1: " << arg1 << ", arg2: " << arg2 << endl;
}

int main() {
  // 模板函数调用
  func('a');
  func(97, 'a');
    
  // 虽然函数模板指定了默认参数，但是类型推导不会参考函数模板的默认参数
  // func();    //编译报错
  return 0;
}
```

* 模板参数类型的自动推导是根据模板函数调用时指定的实参进行推断的，没有实参则无法推导
* **模板参数类型的自动推导不会参考函数模板中指定的默认参数。**





## 数值和字符串转换

### 数字转字符串

 使用 `to_string()` 方法可以非常方便地将各种数值类型转换为字符串类型。函数声明位于头文件`<string>`中。

```cpp
#include<string>
string str = to_string(1234);
```

### 字符串转为数值

由于 C++ 中的数值类型包括整形和浮点型，因此针对于不同的类型提供了不同的函数，通过调用这些函数可以将字符串类型转换为对应的数值类型。

```cpp
// 定义于头文件 <string>
int       stoi( const std::string& str, std::size_t* pos = 0, int base = 10 );
long      stol( const std::string& str, std::size_t* pos = 0, int base = 10 );
long long stoll( const std::string& str, std::size_t* pos = 0, int base = 10 );

unsigned long      stoul( const std::string& str, std::size_t* pos = 0, int base = 10 );
unsigned long long stoull( const std::string& str, std::size_t* pos = 0, int base = 10 );

float       stof( const std::string& str, std::size_t* pos = 0 );
double      stod( const std::string& str, std::size_t* pos = 0 );
long double stold( const std::string& str, std::size_t* pos = 0 );
```

> str：要转换的字符串
>
> pos：传出参数，记录从哪个字符开始无法继续进行解析，比如: 123abc, 传出的位置为 3
>
> base：若 base 为 0 ，则自动检测数值进制：若前缀为 0 ，则为八进制，若前缀为 0x 或 0X，则为十六进制，否则为十进制。

**这些函数虽然都有多个参数，但是除去第一个参数外其他都有默认值，一般情况下使用默认值就能满足需求。**

```cpp
int t1 = std::stoi("45");
float t2 = std::stof("3.1415");

int t3 = std::stoi("9821 test");
// int t4 = std::stoi("test 9821"); // 参数错误
```

* 如果字符串中所有字符都是数值类型，整个字符串会被转换为对应的数值，并通过返回值返回

* 如果字符串的前半部分字符是数值类型，后半部不是，那么前半部分会被转换为对应的数值，并通过返回值返回

* **如果字符第一个字符不是数值类型转换失败**



### 异常处理

```cpp
#include <stdexcept>
#include <iostream>
#include <string>
using namespace std;
 
int main()
{
	std::string y = "253647586946334221002101219955219971002";
	int x;
 
	try {
		x = stoi(y);
	}
	catch (std::invalid_argument&){
		// if no conversion could be performed
		cout << "Invalid_argument" << endl;
	}
	catch (std::out_of_range&){
		// if the converted value would fall out of the range of the result type 
		// or if the underlying function (std::strtol or std::strtoull) sets errno 
		// to ERANGE.
		cout << "Out of range" << endl;
	}
	catch (...) {
		// everything else
		cout << "Something else" << endl;
	}
	return 0;
}
```





## 断言

断言（assertion）是一种编程中常用的手段。在通常情况下，断言就是将一个返回值总是需要为真的判断表达式放在语句中，用于排除在设计的逻辑上不应该产生的情况。

比如：一个函数总需要输入在一定的范围内的参数，那么程序员就可以对该参数使用断言，以迫使在该参数发生异常的时候程序退出，从而避免程序陷入逻辑的混乱。 

从一些意义上讲，断言并不是正常程序所必需的，不过对于程序调试来说，通常断言能够帮助程序开发者快速定位那些违反了某些前提条件的程序错误。

如果我们要在 C++ 程序中使用断言，需要在程序中包含头文件 `<cassert>` 或 `<assert.h>`，头文件中为我们提供了 `assert` 宏，**用于在运行时进行断言。**

```cpp
#include<cassert>

char* creatArray(int size) {
  // 通过断言判断数组大小是否大于0
  assert(size > 0);  // 必须大于0，否则程序中断退出
  return new char[size];
}
```



### 静态断言

assert 是一个运行时断言，也就是说它只有在程序运行时才能起作用。C++11提供了静态断言。

静态断言 `static_assert`，所谓**静态就是在编译时就能够进行检查的断言**，使用时不需要引用头文件。静态断言的另一个好处是，可以自定义违反断言时的错误提示信息。静态断言使用起来非常简单，它接收两个参数：

> 参数1：断言表达式，这个表达式通常需要返回一个 bool值
>
> 参数2：警告信息，它通常就是一段字符串，在违反断言（表达式为false）时提示该信息

```cpp
static_assert(size > 0, "error: size must greater than 0");
```

**由于静态断言的表达式是在编译阶段进行检测，所以在它的表达式中不能出现变量，也就是说这个表达式必须是常量表达式。**



## noexcept

C++98异常被抛出后，从进入 try 块起，到异常被抛掷前，这期间在栈上构造的所有对象，都会被自动析构。析构的顺序与构造的顺序相反。这一过程称为**栈的解旋**。

C++11新标准提出了`noexcept`， 表示其修饰的函数不会抛出异常 。不过与 `throw ()` 动态异常声明不同的是，**在 C++11 中如果 noexcept 修饰的函数抛出了异常，编译器可以选择直接调用 `std::terminate () `函数来终止程序的运行，这比基于异常机制的 throw () 在效率上会高一些。**

这是因为异常机制会带来一些额外开销，比如函数抛出异常，会导致函数栈被依次地展开（栈解旋），并自动调用析构函数释放栈上的所有对象。

```cpp
double myDiv(int a, int b) noexcept {
  if (b == 0) {
    cout << "div by zero!\n";
    return -1;
  }
  return a / b;
}
```

noexcept 还可以可以接受一个常量表达式（被转成bool类型）作为参数：

```cpp
double divisionMethod(int a, int b) noexcept(常量表达式);
```

* 值为 true，表示函数不会抛出异常
* 值为 false，表示有可能抛出异常这里

**不带常量表达式的 noexcept 相当于声明了 noexcept（true），即不会抛出异常。**



## 自动类型推导

在 C++11 中增加了很多新的特性，比如可以使用 `auto` 自动推导变量的类型，还能够结合`decltype `来表示函数的返回值。

### auto

C++11 中 auto 并不代表一种实际的数据类型，只是一个类型声明的 “占位符”，auto 并不是万能的在任意场景下都能够推导出变量的实际类型，使用auto声明的变量必须要进行初始化，以让编译器推导出它的实际类型，在编译时将auto占位符替换为真正的类型。

```cpp
auto t1 = 3.14;
auto* t2 = &t1;
const auto t3 = t1;
```



### auto的限制

1、不能作为函数参数使用。因为只有在函数调用的时候才会给函数参数传递实参，auto 要求必须要给修饰的变量赋值，因此二者矛盾。

```cpp
int func(auto a, auto b){}		// 错误
```

2、不能用于类的非静态成员变量的初始化

```cpp
class Base {
  auto v1 = 0;			//  error
  static auto v2 = 0;	// error，类的静态非常量成员不允许在类内部直接初始化
  static const auto v3 = 10;		// ok
};
```

3、不能使用auto定义数组

```cpp
int arr[] = {1, 2, 3, 4};
auto t3[] = {1, 2, 3, 4};	// error, auto 无法定义数组
auto t2[] = arr;			// error, auto 无法定义数组
auto t1 = arr;				// ok
```

4、无法使用auto推导出模板参数

```cpp
template <typename T>
struct Test{};

Test<double> t1;
Test<auto> t2 = t1;			// error, 无法推导出模板类型
```



### decltype

在某些情况下，不需要或者不能定义变量，但是希望得到某种类型，这时候就可以使用 C++11 提供的 decltype 关键字了，它的作用是在编译器编译的时候推导出一个表达式的类型。主要是为泛型编程而设计，以解决泛型编程中，由于有些类型由模板参数决定，而难以（甚至不可能）表示之的问题。

decltype 是 “declare type” 的缩写，意思是 “声明类型”。decltype 的推导是在编译期完成的，它只是用于表达式类型的推导，并不会计算表达式的值。

```cpp
//语法格式：	decltype (表达式)
int t1 = 10;
decltype(t1) t2 = 99;			// t2->int
decltype(t1+3.14) t3 = 6.18;	// t3->double
```

### decltype推导规则

**1、表达式为普通变量、普通表达式或者类表达式，使用decltype推导出的类型和表达式类型一致。**

```cpp
class Test {
 private:
 public:
  string text;
  const static int value = 110;
};

int main(int argc, char const* argv[]) {
  int t1 = 99;
  const int& t2 = t1;
  decltype(t1) a = t1;          // a => int
  decltype(t2) b = t1;          // b => const int&
  decltype(Test::value) c = 0;  // c => const int

  Test t;
  decltype(t.text) d = "Hello, world!";  // d => string

  return 0;
}
```



**2、表达式是函数调用，decltype推导出的类型和函数返回值一致。**

```cpp
int func01();
int& func02();
const int func03();
const int& func04();

int t1 = 100;
decltype(func01()) a = 0;   // a => int
decltype(func02()) b = t1;  // b => int&
decltype(func03()) c = 0;   // c => int
decltype(func04()) d = 0;	// d => const int&
```

函数 `func03()` 返回的是一个纯右值（在表达式执行结束后不再存在的数据，也就是临时性的数据），**对于纯右值而言，只有类类型可以携带const、volatile限定符**，除此之外需要忽略掉这两个限定符，因此推导出的变量 d 的类型为 `int` 而不是 `const int`。



**3、表达式是一个左值，或者被括号`( )`包围，则decltype推导出的是表达是类型的引用（如果有const、volatile限定符不能省略）。**

```cpp
int main(int argc, char const* argv[]) {
  int a = 10;
  decltype((a)) b = a;  // 带有括号的表达式，所以b的类型是 int&
  cout << &a << endl;   // a和b的地址是一样的
  cout << &b << endl;

  int x = 0;
  decltype(a += 10) c = x;  // a是一个左值，所以c的类型是 int&
  cout << &c << endl;       // c和x的地址是一样的
  cout << &x << endl;

  return 0;
}
```



### decltype的应用

关于 decltype 的应用多出现在泛型编程中。

```cpp
template <class T>
class Container {  // 要求T必须是一个容器类型
 private:
  // T()使用默认构造函数创建一个临时对象，T().begin()调用临时对象的begin成员函数
  decltype(T().begin()) m_it;  // 迭代器的类型使用decltype确定
 public:
  void func(T& c) {
    for (m_it = c.begin(); m_it != c.end(); ++m_it) {
      cout << *m_it << " ";
    }
    cout << endl;
  }
};

int main() {
  const list<int> lst{1, 2, 3, 4, 5, 6, 7, 8, 9};
  Container<const list<int>> obj;
  obj.func(lst);
  return 0;
}
```



### 返回类型后置

在C++11中增加了返回类型后置语法，**说明白一点就是将decltype和auto结合起来完成返回类型的推导，auto 会追踪 decltype() 推导出的类型**。其语法格式如下:

```cpp
auto func(参数1, 参数2, ...) -> decltype(参数表达式) {}
```

```cpp
int& func(int& a) { return a += 10; }

double func(double& a) { return a += 20.0; }

template <typename T>
// decltype里面的表达式不唯一，只要能推导出 类型即可
auto test(T& t) -> decltype(func(t)) {		// 返回值类型后置
  return func(t);
}

int main() {
  int x = 10;
  double y = 20;

  auto a = test<int>(x);
  auto b = test<double>(y);

  /* 对于函数模板，只要编译器可以自动推导出类型，则不需要加尖括号 */
  auto c = test(x);
  auto d = test(y);

  return 0;
}

```





## 基于范围的 for 循环

C++11中for语句的能力被进一步扩展，引入了范围for语句，用于遍历一个序列

```cpp
int arr[] = {1, 2, 3, 4};
for(auto x : arr) {
    printf("%d", x);
}
for(auto x : {1, 2, 3, 4}) {
    printf("%d", x);
}
```

上面的的for语句的写法有个缺点，多了一个复制的动作，也就是把数组arr中的元素依次复制到了x中，可以利用引用进行优化

```cpp
int arr[] = {1, 2, 3, 4};
// 遍历打印元素
for(const auto &x : arr) {
    printf("%d", x);
}

// 可以修改元素的值，但不能插入或删除元素，改变容器大小
for(auto &x : arr) {
    printf("%d", ++x);
}
```

一般来讲，一个容器只要其内部支持begin和end成员函数用于返回一个迭代器，能够指向容器的第一个元素和末端元素的后面，这种容器就可以支持范围for语句。

> 对于范围for语句中，不要在里边改变容器的容量，增加或者删除元素等。否则会导致输出混乱。可以修改元素自身的值（set容器除外）。

使用基于访问的 for 循环遍历关联性容器，auto 自动推导出的类型是容器中的 value_type，相当于一个对组（`std::pair`）对象。

```cpp
std::map<int, string> m{{1, "Lucy"}, {2, "Nancy"}, {3, "Rocky"}};

for (const auto& x : m) {
    cout << "id: " << x.first << ", name: " << x.second << endl;
}
```



### 元素只读

对应 `set ` 容器来说，内部元素都是只读的，这是由容器的特性决定的，因此在 for 循环中 `auto &` 会被视为 `const auto &` 。

除此之外，在遍历关联型容器时也会出现同样的问题，基于范围的for循环中，虽然可以得到一个std::pair引用，**但是我们是不能修改里边的first值的，也就是key值。**

### 访问次数

基于范围的 for 循环遍历的对象可以是一个表达式或者容器 / 数组等。假设我们对一个容器进行遍历，在遍历过程中 for 循环对这个容器只访问一次。

```cpp
vector<int> v{1, 2, 3, 4, 5};
vector<int>& getVect() {
  cout << "Get vector...\n";
  return v;
}

int main(int argc, char const* argv[]) {
  for (const auto x : getVect()) {
    printf("%d ", x);
  }
  return 0;
}
```

不论基于范围的 for 循环迭代了多少次，函数 `getVect() `只在第一次迭代之前被调用，得到这个容器对象之后就不会再去重新获取这个对象了。



## 指针空类型 nullptr

nullptr 是C++11引入的新关键字，代表“空指针”。nullptr 专用于初始化空类型指针，不同类型的指针变量都可以使用 nullptr 来初始化。

```cpp
int*    ptr1 = nullptr;
char*   ptr2 = nullptr;
double* ptr3 = nullptr;

char* p = NULL;	
char* q = nullptr;

if(p == nullptr) {...}		// 条件能成立
```

```cpp
cout << typeid(NULL).name() << endl;
cout << typeid(nullptr).name() << endl;
```

NULL和nullptr是两种不同的类型，以后对于指针的初始化尽可能使用nullptr代替NULL。某些方面可以避免整数和指针之间的混淆。

nullptr 无法隐式转换为整形，但是可以隐式匹配指针类型。在 C++11 标准下，相比 NULL 和 0，使用 nullptr 初始化空指针可以令我们编写的程序更加健壮。



## lambda表达式

lambda 表达式是 C++11 最重要也是最常用的特性之一，这是现代编程语言的一个特点，lambda 表达式有如下的一些优点：

* 声明式的编程风格：就地匿名定义目标函数或函数对象，不需要额外写一个命名函数或函数对象。

* 简洁：避免了代码膨胀和功能分散，让开发更加高效。

* 在需要的时间和地点实现功能闭包，使程序更加灵活。

lambda 表达式定义了一个匿名函数，并且可以捕获一定范围内的变量。lambda 表达式的语法形式简单归纳如下：

```cpp
[capture](params) opt -> ret {body;};
```

其中 capture 是捕获列表，params 是参数列表，opt 是函数选项，ret 是返回值类型，body 是函数体。

* 捕获列表 []: 捕获一定范围内的变量
* 参数列表 (): 和普通函数的参数列表一样，如果没有参数参数列表可以省略不写。

```cpp
auto f = [](){return 1;}	// 没有参数, 参数列表为空
auto f = []{return 1;}		// 没有参数, 参数列表省略不写
```

* opt 选项， 不需要可以省略

  > mutable: 可以修改按值传递进来的拷贝（注意是能修改拷贝，而不是值本身）
  > exception: 指定函数抛出的异常，如抛出整数类型的异常，可以使用 throw ();

* 返回值类型：在 C++11 中，lambda 表达式的返回值是通过返回值后置语法来定义的。

* 函数体：函数的实现，这部分不能省略，但函数体可以为空。

### 捕获列表

lambda 表达式的捕获列表可以捕获一定范围内的变量，具体使用方式如下：

- `[] ` - 不捕捉任何变量
- `[&] `- 捕获外部作用域中所有变量，并作为引用在函数体内使用 (按引用捕获)
- `[=]` - 捕获外部作用域中所有变量，并作为副本在函数体内使用 (按值捕获)。**拷贝的副本在匿名函数体内部是只读的**
- `[=, &foo]` - 按值捕获外部作用域中所有变量，并按照引用捕获外部变量 foo
- `[bar]` - 按值捕获 bar 变量，同时不捕获其他变量
- `[&bar]` - 按引用捕获 bar 变量，同时不捕获其他变量
- `[this]` - 捕获当前类中的 this 指针。让 lambda 表达式拥有和当前类成员函数同样的访问权限。如果已经使用了 & 或者 =, 默认添加此选项

```cpp
class Human {
 private:
  int age;

 public:
  void func(int a, int b) {
    // 按值捕获外部作用域中所有变量
    auto t2 = [=]() { return a + b + age; };

    //按引用捕获外部作用域中所有变量
    auto t3 = [&]() { return a + b + age; };

    // error, 捕获 this 指针，但没有捕获到变量a,b
    auto t5 = [this]() { return a + b + age; };

    // ok, 捕获 this 指针，a, b
    auto t6 = [this, a, b]() { return a + b + age; };

    // ok, 捕获 this 指针，访问并修改对象内部变量的值
    auto t7 = [this]() { return age++; };
  }
};

int main(int argc, char const *argv[]) {
  int a = 10, b = 20;
  // ok, 按引用捕获外部变量，可读写
  auto t1 = [&]() { return a++; };

  // error, 按值捕获外部变量，可读不能写
  auto t2 = [=]() { return a++; };

  // ok, 按引用捕获b, 其他所有按值捕获
  auto t3 = [=, &b]() { return a + (b++); };

  return 0;
}
```

> 在匿名函数内部，需要通过 lambda 表达式的捕获列表控制如何捕获外部变量，以及访问哪些变量。默认状态下 lambda 表达式无法修改通过按值捕获的外部变量，**如果希望修改这些外部变量，需要通过引用的方式进行捕获。**

### 返回值

一般情况下，不指定 lambda 表达式的返回值，编译器会根据 return 语句自动推导返回值的类型，但需要注意的是 labmda表达式不能通过列表初始化自动推导出返回值类型。

```cpp
// error，不能推导出返回值类型
auto f1 = []() {
  return {1, 2};	// 基于列表初始化推导返回值，错误
}
```



### 函数本质

使用 lambda 表达式捕获列表捕获外部变量，如果希望去修改按值捕获的外部变量，那么应该如何处理呢？这就需要使用 mutable 选项，被mutable修改是lambda表达式就算没有参数也要写明参数列表，并且可以去掉按值捕获的外部变量的只读（const）属性。

```cpp
int a = 10;
auto f2 = [=]()mutable {return a++; };     // ok, 虽然按值捕获，但是可以修改值
```

最后再剖析一下为什么通过值拷贝的方式捕获的外部变量是只读的:

> lambda表达式的类型在C++11中会被看做是一个带operator()的类，即仿函数。按照C++标准，lambda表达式的operator()默认是const的，一个const成员函数是无法修改成员变量值的。**mutable 选项的作用就在于取消 operator () 的 const 属性。**

因为 lambda 表达式在 C++ 中会被看做是一个仿函数，因此可以使用std::function和std::bind来存储和操作lambda表达式：

```cpp
int main(int argc, char const *argv[]) {
  // 包装可调用函数
  std::function<int(int)> f1 = [](int a) { return a; };

  // 绑定可调用函数
  std::function<int(int)> f2 =
      std::bind([](int a) { return a; }, std::placeholders::_1);

  cout << f1(100) << endl;
  cout << f2(200) << endl;
  return 0;
}
```

对于没有捕获任何变量的 lambda 表达式，还可以转换成一个普通的函数指针：

```cpp
// 定义函数指针
using func_ptr = int (*)(int);

// 没有捕获任何变量的Lambda表达式可以转换成一个函数指针
func_ptr func = [](int a) { return a; };

func(100);
```



## constexpr

### const

在 C++11 之前只有 const 关键字，从功能上来说这个关键字有双重语义：变量只读，修饰常量。**变量只读不等价于常量**

```cpp
void func(const int a) {
  const int n = 100;
  int arr1[a];  // error, a是一个只读变量，不是常量
  int arr2[n];  // ok, n是一个常量

  int t1 = 98;
  int t2 = 21;
  const int& b = t1;

  // error, b是一个常量引用，不是常量，是只读的，不能保证变量的值不能改变
  b = 200;

  // ok, b的值现在变为200
  t1 = 200;
}
```



### constexpr

在 C++11 中添加了一个新的关键字 `constexpr`，这个关键字是用来修饰常量表达式的。**所谓常量表达式，指的就是由多个（≥1）常量（值不会改变）组成并且在编译过程中就得到计算结果的表达式。**

在介绍 gcc/g++ 工作流程的时候说过，C++ 程序从编写完毕到执行分为四个阶段：**预处理、 编译、汇编和链接 4 个阶段**，得到可执行程序之后就可以运行了。

常量表达式和非常量表达式的计算时机不同，非常量表达式只能在程序运行阶段计算出结果，**但是常量表达式的计算往往发生在程序的编译阶段，这可以极大提高程序的执行效率**，因为表达式只需要在编译阶段计算一次，节省了每次程序运行时都需要计算一次的时间。

那么问题来了，编译器如何识别表达式是不是常量表达式呢？在 C++11 中添加了 constexpr 关键字之后就可以在程序中使用它来修改常量表达式，用来提高程序的执行效率。**在使用中建议将 const 和 constexpr 的功能区分开，即凡是表达“只读”语义的场景都使用 const，表达“常量”语义的场景都使用 constexpr。**

```cpp
// 在定义常量时，const 和 constexpr 是等价的
const int i = 98;			// 是一个常量表达式
constexpr int j = 21;		// 是一个常量表达式
```

> 对于 C++ 内置类型的数据，可以直接用 constexpr 修饰，但如果是自定义的数据类型（用 struct 或者 class 实现），直接用 constexpr 修饰是不行的。



### 常量表达式函数

了提高 C++ 程序的执行效率，我们可以将程序中值不需要发生变化的变量定义为常量，也可以使用 constexpr 修饰函数的返回值，这种函数被称作**常量表达式函数**，这些函数主要包括以下几种：**普通函数/类成员函数、类的构造函数、模板函数。**



### 修饰普通或者成员函数

必须满足以下条件：

1、函数必须要有返回值，并且 return 返回的表达式必须是常量表达式。

2、函数在使用之前，必须有对应的定义语句。

3、整个函数的函数体中，不能出现非常量表达式之外的语句（using 指令、typedef 语句以及 static_assert 断言、return 语句除外）。

```cpp
// error
constexpr void func1() {
  for (int i = 0; i < 10; ++i) {
    // cout 要在运行时才知道
    cout << "i: " << i << endl;
  }
}

// ok, 可以使用using
constexpr int func2() {
  using mytype = int;
  constexpr mytype a = 100;
  constexpr mytype b = 10;
  return a + b;
}
```

constexpr 隐含有`inline`属性，所以用constexpr修饰函数，函数应该尽可能简单。如果使用递归，则递归不要太深。

```cpp
constexpr uint64_t fact(uint64_t n) {
  if (n == 1) {
    return n;
  }
  return n * fact(n - 1);
}

int main(int argc, char const *argv[]) {
  // 加上constexpr，告诉编译器在编译时期确定结果
  // 种瓜得瓜种豆得豆，如果传入的是确定的常量，则编译时能计算出来
  constexpr auto v1 = fact(10);
  // 如果传入的是未确定的变量，则不能加constexpr, 只能运行时计算
  auto v2 = fact(argc);

  return 0;
}
```



### 修饰模板函数

C++11 语法中，constexpr 可以修饰函数模板，但由于模板中类型的不确定性，因此函数模板实例化后的模板函数是否符合常量表达式函数的要求也是不确定的。**如果 constexpr 修饰的模板函数实例化结果不满足常量表达式函数的要求，则 constexpr 会被自动忽略，即该函数就等同于一个普通函数。**

```cpp
typedef struct Person {
  const char* name;
  int age;
} Person;

// 定义函数模板
template <typename T>
constexpr T display(T t) {
  return t;
}

int main(int argc, char const* argv[]) {
  Person p{"lucky", 19};
  // 普通函数, 由于参数 p 是变量，所以实例化后的函数不是常量表达式函数，此时 constexpr 是无效的
  Person p1 = display(p);
  cout << "name: " << p1.name << ", age: " << p1.age << endl;

  // 常量表达式函数，参数是常量，符合常量表达式函数的要求，此时 constexpr 是有效的
  constexpr int t = display(250);
  cout << t << endl;
    
  // 参数是常量，符合常量表达式函数的要求，此时 constexpr 是有效的
  constexpr Person p2{"Rocky", 19};
  constexpr Person p3 = display(p2);
  cout << "name: " << p3.name << ", age: " << p3.age << endl;

  return 0;
}
```

###  修饰构造函数

如果想用直接得到一个常量对象，也可以使用 constexpr 修饰一个构造函数，这样就可以得到一个常量构造函数了。**常量构造函数有一个要求：构造函数的函数体必须为空，并且必须采用初始化列表的方式为各个成员赋值。**

```cpp
class Person {
 public:
  const char* name;
  int age;

 public:
  // 常量构造函数，使用初始化列表
  constexpr Person(const char* name, int age) : name(name), age(age) {}
};

int main(int argc, char const* argv[]) {
  constexpr Person p{"lucky", 19};
  cout << "name: " << p.name << ", age: " << p.age << endl;

  return 0;
}
```



## 委托构造和继承构造函数

### 委托构造函数

```cpp
class Father {
 public:
  string name;
  int age;
  int weight;

 public:
  Father();
  Father(string name) : name(name), age(0), weight(0) {}
  // 使用委托构造函数，可避免代码冗余
  Father(string name, int age) : Father(name) { age = age; }
  Father(string name, int age, int weight) : Father(name, age) {
    weight = weight;
  }

  void func(string name) { cout << "Father name: " << name << endl; }
  void func(string name, int age) {
    cout << "Father name: " << name << ", age: " << age << endl;
  }
};
```

**这种链式的构造函数调用不能形成一个闭环（死循环），否则会在运行期抛异常。**

如果要进行多层构造函数的链式调用，建议将构造函数的调用的写在初始列表中，而且其他成员变量的初始化必须在函数体中。

```cpp
// error, 调用Person(name)后，不能再跟其他参数
Person(string name, int age) : Person(name), age(age){}
```



### 继承构造函数

继承构造函数的使用方法是这样的：通过使用 `using 类名::构造函数名`（其实类名和构造函数名是一样的）来声明使用基类的构造函数，这样子类中就可以不定义相同的构造函数了，直接使用基类的构造函数来构造派生类对象。

```cpp
class Son : public Father {
 public:
  // 继承父类的构造函数
  using Father::Father;
  // 继承父类的func函数，使得父类的func函数不再被隐藏
  using Father::func;

  // 定义子类的func函数
  void func() { cout << "Son!!!" << endl; }
};

int main(int argc, char const* argv[]) {
  Son son("lucky");
  son.func();             // 调用子类的func函数
  son.func("Rocky", 19);  // 调用父类的func函数

  return 0;
}
```

子类中的 `func()` 函数隐藏了基类中的两个 func() 因此默认情况下通过子类对象只能调用无参的` func()`，在上面的子类代码中添加了 `using Father::func;` 之后，就可以通过子类对象直接调用父类中被隐藏的带参 `func() `函数了。



## 右值引用

你不知道你，所以你是你。如果你知道你，你就不是你。右值描述的是一种没有主人，没有名字，不能取地址的一个值或者对象，它在内存某个区域临时存储着。一旦你用一个变量绑定它，也就是给它起个别名，那么它就不再是右值而变成左值，因为它可以取地址了。

### 左值和右值

C++11 增加了一个新的类型，称为右值引用（ R-value reference），标记为 `&&`。

`lvalue `是 `loactor value `的缩写，`rvalue `是 `read value `的缩写

* 左值是指存储在内存中、有明确存储地址（可取地址）的数据；

* 右值是指可以提供数据值的数据（不可取地址），比如字面量，临时对象；

区分左值与右值的便捷方法是：**可以对表达式取地址（&）就是左值，否则为右值 。**所有有名字的变量或对象都是左值，而右值是匿名的。

C++11 中右值可以分为两种：一个是将亡值（ xvalue, expiring value），另一个则是纯右值（ prvalue, PureRvalue）：

* 纯右值：非引用返回的临时变量、运算表达式产生的临时变量、原始字面量和 lambda 表达式等

* 将亡值：与右值引用相关的表达式，比如，T&& 类型函数的返回值、 std::move 的返回值等。

> `++i`是直接给变量i加1，然后返回i本身，因为i是变量，所以可以被赋值，因此是左值表达式。
>
> `i++`先产生一个临时变量来保存i的值，用于使用目的，再给i加1，接着返回临时变量，之后系统再释放这个临时变量。临时变量被释放掉了，不能再被赋值，因此是右值表达式。



### 右值引用

右值引用就是对一个右值进行引用的类型。**因为右值是匿名的，所以我们只能通过引用的方式找到它。**无论声明左值引用还是右值引用都必须立即进行初始化，因为引用类型本身并不拥有所绑定对象的内存，只是该对象的一个别名。**通过右值引用的声明，该右值又“重获新生”，其生命周期与右值引用类型变量的生命周期一样，只要该变量还活着，该右值临时量将会一直存活下去。**

> 左值代表一个地址、一个变量的感觉。一般来讲，左值是一个持久的值，右值是一个短暂的值。右值要么是字面值常量，要么就是一个表达式求值过程中创建的临时对象，这个临时对象的特性为：
>
> * 所引用的对象将要被销毁
> * 该对象没有其他用户
>
> 所以右值引用能自由地接管所引用的对象资源。

```cpp
int i = 1;
int&& ri = i++;			// 将r1绑定到系统返回的临时变量，这时临时变量就不会再被销毁了
```

左值引用（绑定到左值）：引用那些希望改变值的对象，带一个`&`

const引用：也是左值引用，但是引用那些不希望改变值的对象，如常量等。常量引用也可以绑定到右值上，所以比较特殊。称为“万能引用”。

右值引用（绑定到右值）：C++11新概念。首先它也是一个引用，但侧重表示引用对象的值在使用之后就无需保留了（如临时变量），带两个`&`。主要用来绑定到那些“即将销毁/临时的对象”上。

```cpp
int value = 10;

int& lvalue = value;  // 左值引用，绑定到一个左值，为左值起个别名

const int& cvalue = value;  // 常量引用，也是左值引用，不能通过cvalue修改value的值
const int& cvalue2 = 10;  // 常量引用也可以绑定到右值上，所以比较特殊

int&& rvalue = 10;  // 右值引用，绑定到右值，也就是一个常量
rvalue = 20;        // 右值引用可以修改值
```

### 临时对象

减少临时对象的产生，可以提高程序的性能和效率。产生临时对象的情况有以下几种：

1. 以传值的方式给函数传递参数
2. 类型转换生成的临时对象/隐式类型转换以保证函数调用成功
3. 函数返回对象的时候
4. 类外的运算符重载





### 性能优化

在 C++ 中在进行对象赋值操作的时候，很多情况下会发生对象之间的深拷贝，如果堆内存很大，这个拷贝的代价也就非常大，在某些情况下，如果想要避免对象的深拷贝，就可以使用右值引用进行性能的优化。

右值引用是C++11引入的新概念，目的是提高程序运行效率问题，提高的手段是把复制对象变成移动对象。

右值引用具有移动语义，移动语义可以将资源（堆、系统对象等）通过浅拷贝从一个对象转移到另一个对象这样就能减少不必要的临时对象的创建、拷贝以及销毁，可以大幅提高 C++ 应用程序的性能。

```cpp
class Base {
 private:
  int* ptr;

 public:
  Base() : ptr(new int(100)) { cout << "Construct function" << endl; }

  // 拷贝构造函数
  Base(const Base& a) : ptr(new int(*a.ptr)) {
    cout << "Copy construct function" << endl;
  }

  // 移动构造函数
  Base(Base&& a) : ptr(a.ptr) {
    a.ptr = nullptr;
    cout << "Move construct" << endl;
  }

  ~Base() {
    cout << "Destruct function" << endl;

    delete ptr;
  }

 public:
};

//getter() 的返回值就是一个将亡值，也就是说是一个右值。
//在进行赋值操作的时候如果 = 右边是一个右值，那么移动构造函数就会被调用。
Base getter() {
  Base b;
  // 会返回一个临时对象
  return b;
}

int main(int argc, char const* argv[]) {
  // 会调用移动构造函数，将b绑定到getter返回的临时对象上，避免了深拷贝
  Base b = getter();

  return 0;
}
```

> 对于需要动态申请大量资源的类，应该设计移动构造函数，以提高程序效率。需要注意的是，我们一般在提供移动构造函数的同时，也会提供常量左值引用的拷贝构造函数，以保证移动不成还可以使用拷贝构造函数。

### 移动构造函数

C++规定：移动构造函数第一个参数就是一个右值引用参数，**C++根据传递进来的是否是一个右值实参来确定是否要调用移动构造函数或者移动赋值运算符。**

移动构造函数第一个参数是右值引用，如果有其他额外参数，那么这些参数必须有默认值。

（1）一般来讲，如果类使用使用new分配了大量内存，则需要使用移动构造函数和移动赋值运算符。

（2）不抛出异常的移动构造函数、移动赋值运算符都应该加上noexcept，用于通知编译器该函数本身不抛出异常，还可以提高编译效率。

（3）一个对象被移动完数据后，程序员有责任将使该对象处于可以被释放的状态。



### &&的特性

在 C++ 中，并不是所有情况下 && 都代表是一个右值引用，具体的场景体现在模板和自动类型推导中，如果是模板参数需要指定为 T&&，如果是自动类型推导需要指定为 auto &&，**在这两种场景下 && 被称作未定的引用类型。**另外还有一点需要额外注意` const T&&` 表示一个右值引用，不是未定引用类型。

```cpp
template <typename T>
void func01(T&& p);

template <typename T>
void func02(const T&& p);

int main(int argc, char const* argv[]) {
  int x = 10;

  func01(10);  // T&& 表示右值引用
  func01(x);   // T&& 表示右值引用

  func02(10);  // const T&& 表示右值引用，需要传入右值参数
  return 0;
}
```



```cpp
int x = 98, y = 21;
auto&& t1 = x;   // auto&& 表示一个整型的左值引用
auto&& t2 = 10;  // auto&& 表示一个整形的右值引用

// error,  decltype(x)&& 表示int&&，不能用左值去初始化右值
decltype(x)&& t3 = y;
```

由于上述代码中存在 T&& 或者 auto&& 这种未定引用类型，当它作为参数时，有可能被一个右值引用初始化，也有可能被一个左值引用初始化，**在进行类型推导时右值引用类型（&&）会发生变化，这种变化被称为引用折叠。**在 C++11 中引用折叠的规则如下：

* **通过右值推导 T&& 或者 auto&& 得到的是一个右值引用类型**

* 通过非右值（右值引用、左值、左值引用、常量右值引用、常量左值引用）推导 T&& 或者 auto&& 得到的是一个左值引用类型

```cpp
int&& t1 = 5;
auto&& t2 = t1;  // t1为右值引用，推导出的 auto&& 为左值引用
auto&& t3 = 5;   // 5为右值，推导出的 auto&& 为右值引用

int v1 = 5;
int& v2 = v1;
auto&& v3 = v2;  // v2为左值引用，推导出的auto&& 为左值引用
auto&& v4 = v1;  // a2为左值，推导出的auto&& 为左值引用

const int& s1 = 100;
const int&& s2 = 100;
auto&& s3 = s1;  // s1位常量左值引用，推导出的auto&& 为常量左值引用
auto&& s4 = s2;  // s2位常量右值引用，推导出的auto&& 为常量左值引用

const auto&& x = 5;  // x为右值引用，不需要推导，只能通过右值初始化
```



```cpp
void printValue(int& a) { cout << "l-value: " << a << endl; }

void printValue(int&& a) { cout << "r-value: " << a << endl; }

void forward(int&& a) { printValue(a); }

int main(int argc, char const* argv[]) {
  int t = 98;
  printValue(t);   // 左值 l-value
  printValue(21);  // 右值 r-value

  //一个右值引用作为函数参数的形参时，在函数内部转发该参数给内部其他函数时，它就变成一个左值，并不是原来的类型了
  forward(100);

  return 0;
}
```

最后总结一下关于 && 的使用：

- 左值和右值是独立于他们的类型的，右值引用类型可能是左值也可能是右值。
- **编译器会将已命名的右值引用视为左值，将未命名的右值引用视为右值。**
- auto&&或者函数参数类型自动推导的T&&是一个未定的引用类型，它可能是左值引用也可能是右值引用类型，这取决于初始化的值类型（上面有例子）。
- **通过右值推导 T&& 或者 auto&& 得到的是一个右值引用类型，其余都是左值引用类型。**



## 转移和完美转发

### std::move()

在 C++11 添加了右值引用，并且不能使用左值初始化右值引用，如果想要使用左值初始化一个右值引用需要借助 std::move () 函数，**使用std::move方法可以将左值转换为右值。**使用这个函数并不能移动任何东西，**而是和移动构造函数一样都具有移动语义，**将对象的状态或者所有权从一个对象转移到另一个对象，**只是转移，没有内存拷贝。**

从实现上讲，std::move 基本等同于一个类型转换：static_cast<T&&>(lvalue);，函数原型如下:

```cpp
template<class _Ty>
 // forward _Arg as movable
_NODISCARD constexpr remove_reference_t<_Ty>&& move(_Ty&& _Arg) _NOEXCEPT {	
    return (static_cast<remove_reference_t<_Ty>&&>(_Arg));
}
```

```cpp
int t1 = 98;
printf("%x\n", &t1);		// t1和t2地址相同

int&& t2 = std::move(t1);  // t1是一个左值，move(t1)为右值
printf("%x\n", &t2);
```

假设一个临时容器很大，并且需要将这个容器赋值给另一个容器，就可以执行如下操作：

```cpp
list<string> ls;
ls.push_back("hello");
ls.push_back("world");
......
list<string> ls1 = ls;        // 需要拷贝, 效率低
list<string> ls2 = move(ls);
```

如果不使用 `std::move`，拷贝的代价很大，性能较低。**使用 move 几乎没有任何代价，只是转换了资源的所有权。**

如果一个对象内部有较大的堆内存或者动态数组时，使用 move () 就可以非常方便的进行数据所有权的转移。

另外，我们也可以给类编写相应的**移动构造函数** `T::T(T&& a)` 和**具有移动语义的赋值函数**`T&& T::operator=(T&& a)`，在构造对象和赋值的时候尽可能的进行资源的重复利用，因为它们都是接收一个右值引用参数。



### forward

右值引用类型是独立于值的，**一个右值引用作为函数参数的形参时，在函数内部转发该参数给内部其他函数时，它就变成一个左值，并不是原来的类型了。**如果需要按照参数原来的类型转发到另一个函数，可以使用 C++11 提供的 `std::forward () `函数，该函数实现的功能称之为**完美转发**。

```cpp
// 函数原型
template <class T> T&& forward (typename remove_reference<T>::type& t) noexcept;
template <class T> T&& forward (typename remove_reference<T>::type&& t) noexcept;

// 精简之后的样子
std::forward<T>(t);
```

* 当T为左值引用类型时，t将被转换为T类型的左值
* 当T不是左值引用类型时，t将被转换为T类型的右值

```cpp
template <typename T>
void printValue(T& t) {
  cout << "l-value: " << t << endl;
}

template <typename T>
void printValue(T&& t) {
  cout << "r-value: " << t << endl;
}

template <typename T>
void testForward(T&& v) {
  printValue(v);
  printValue(std::move(v));
  printValue(std::forward<T>(v));

  cout << endl;
}

int main(int argc, char const* argv[]) {
  int t = 21;
  testForward(98);
  testForward(t);
  testForward(std::forward<int>(t));
  testForward(std::forward<int&>(t));
  testForward(std::forward<int&&>(t));

  return 0;
}
```



`testForward(98); `函数的形参为未定引用类型 T&&，实参为右值，初始化后被推导为一个右值引用

- `printValue(v); `已命名的右值 v，编译器会视为左值处理，实参为左值
- `printValue(move(v)); `已命名的右值编译器会视为左值处理，通过 move 又将其转换为右值，实参为右值
- `printValue(forward<T>(v)); `forward 的模板参数为右值引用，最终得到一个右值，实参为 右值

`testForward(t); `函数的形参为未定引用类型 T&&，实参为左值，初始化后被推导为一个左值引用

- `printValue(v); `实参为左值
- `printValue(move(v)); `通过 move 将左值转换为右值，实参为右值
- `printValue(forward<T>(v));` forward 的模板参数为左值引用，最终得到一个左值，实参为左值

`testForward(forward<int>(t)); `forward 的模板类型为 int，最终会得到一个右值，函数的形参为未定引用类型 T&& 被右值初始化后得到一个右值引用类型。所以结果同`testForward(98);`

`testForward(forward<int&>(t)); `forward 的模板类型为 int&，最终会得到一个左值，函数的形参为未定引用类型 T&& 被左值初始化后得到一个左值引用类型。所以结果通`testForward(t);`

`testForward(forward<int&&>(t));` forward 的模板类型为 int&&，最终会得到一个右值，函数的形参为未定引用类型 T&& 被右值初始化后得到一个右值引用类型。所以结果同`testForward(98);`



## 列表初始化

关于 C++ 中的变量，数组，对象等都有不同的初始化方法，在这些繁琐的初始化方法中没有任何一种方式适用于所有的情况。为了统一初始化方式，并且让初始化行为具有确定的效果，在 C++11 中提出了列表初始化的概念。

```cpp
class Person {
 public:
  Person(int id, string name) {
    cout << "id: " << id << ", name: " << name << endl;
  }
};

Person func() {
  // 返回一个匿名对象
  return {9527, "华安"};
}

int main(int argc, char const* argv[]) {
  int t1 = int{10};
  int t2{10};
  int* t3 = new int{98};
  int* arr1 = new int[3]{1, 2, 3};
  int arr2[]{1, 2, 3};

  Person p = func();

  return 0;
}
```



### 聚合体

使用列表初始化对对象初始化时，还需要判断这个对象对应的类型是不是一个聚合体。如果是，初始化列表中的数据就会拷贝到对象中。

```cpp
struct Test01 {
  int x, y;
} test01 = {12, 34};

struct Test02 {
  int x, y;
  Test02(int, int) : x(10), y(20) {}
} test02 = {12, 34};

int main(int argc, char const *argv[]) {
  // x:12, y: 34
  // test01是一个自定义的聚合类型，所以可以通过初始化列表初始化
  printf("test01.x: %d, test01.y: %d \n", test01.x, test01.y);

  // x:10, y: 20
  // 由于自定义一个构造函数，因此实际的初始化时通过这个构造函数完成的
  printf("test02.x: %d, test02.y: %d \n", test02.x, test02.y);
  return 0;
}
```

普通数组本身可以看做是一个聚合类型

满足以下条件的类（class、struct、union）可以被看做是一个聚合类型：

无用户自定义的构造函数、无基类、无虚函数。

无私有或保护的非静态数据成员。

```cpp
class T2 {
 public:  // 类中有私有成员，无法使用列表初始化进行初始化
  int x;
  long y;
  // 类中有非静态成员可以通过列表初始化进行初始化，但它不能初始化静态成员变量。
 protected:
  static int z;
} t{1, 100};

// 静态变量 z 不能使用列表初始化进行初始化，它的初始化遵循静态成员的初始化方式。
int T2::z = 2;
```

类中不能有使用 {} 和 = 直接初始化的非静态数据成员（从 c++14 开始就支持了）。

```cpp
class T3 {
 public:
  int x;
  double y = 1.34;
  int z[3]{1, 2, 3};
};

int main(void) {
  T3 t{520, 13.14, {6, 7, 8}};  // error, c++11不支持,从c++14开始就支持了
  return 0;
}
```



### 非聚合体

对于聚合类型的类可以直接使用列表初始化进行对象的初始化，如果不满足聚合条件还想使用列表初始化其实也是可以的，需要在类的内部自定义一个构造函数, 在构造函数中使用初始化列表对类成员变量进行初始化:

聚合类型的定义并非递归的，也就是说当一个类的非静态成员是非聚合类型时，这个类也可能是聚合类型。

```cpp
class T1 {
 private:
  int x;

 public:
  int y;

  // 构造函数
  T1(int a, int b) : x(a), y(b) { cout << "T1 construct function!" << endl; }
};

class T2 {
 public:
  T1 t1;
  int z;
};

int main(void) {
  // 由于 T1 包含私有成员，所以 T1 是非聚合类型。{1,2}调用的是 T1 的构造函数
  // 3 则是直接赋值 t2 的 z
  T2 t2{{1, 2}, 3};
  return 0;
}

```

尽管 T2 有一个非聚合类型的非静态成员 t1，T2 依然是一个聚合类型，可以直接使用列表初始化的方式进行初始化。

> 对于一个聚合类型，使用列表初始化相当于对其中的每个元素分别赋值。
>
> 而对于非聚合类型，则需要先自定义一个合适的构造函数，此时使用列表初始化将会调用它对应的构造函数。



### std::initializer_list

在 C++ 的 STL 容器中，可以**进行任意长度的数据的初始化**，使用初始化列表也只能进行固定参数的初始化，如果想要做到和 STL 一样有任意长度初始化的能力，可以使用 std::initializer_list 这个轻量级的类模板来实现。

先来介绍一下这个类模板的一些特点：

- 它是一个轻量级的容器类型，内部定义了迭代器 iterator 等容器必须的概念，遍历时得到的迭代器是只读的。
- 对于 `std::initializer_list<T>` 而言，它可以接收任意长度的初始化列表，**但是要求元素必须是同种类型 T**
- 在` std::initializer_list `内部有三个成员接口：`size(), begin(), end()。`
- `std::initializer_list `对象只能被整体初始化或者赋值。

**如果想要自定义一个函数并且接收任意个数的参数（变参函数）**，只需要将函数参数指定为 `std::initializer_list`，使用初始化列表` { } `作为实参进行数据传递即可。

```cpp
void show(const std::initializer_list<int>& a) {
  printf("size: %d\n", a.size());
  for (const auto& x : a) {
    printf("%d ", x);
  }
  printf("\n");
}

int main(int argc, char const* argv[]) {
  std::initializer_list<int> ilist = {1, 2, 3, 4, 5, 6, 7, 8};
  show(ilist);

  // 直接通过初始化列表传递数据
  show({2, 4, 6, 8});
}
```

`std::initializer_list`，因为在遍历这种类型的容器的时候得到的是一个只读的迭代器，因此我们不能修改里边的数据，只能通过值覆盖的方式进行容器内部数据的修改。虽然如此，在效率方面也无需担心，`std::initializer_list`的效率是非常高的，它的内部并不负责保存初始化列表中元素的拷贝，仅仅存储了初始化列表中元素的引用。



## using 的使用

### 定义别名

```cpp
// 使用using 代替typedef
typedef unsigned int  uint;
using uint = unsigned int;

// 使用typedef定义函数指针
typedef int(*func_ptr)(int, double);
// 使用using定义函数指针
using func_ptr1 = int(*)(int, double);

```

如果不是特别熟悉函数指针与 typedef，第一眼很难看出 func_ptr 其实是一个别名，其本质是一个函数指针，指向的函数返回类型是 int，函数参数有两个分别是 int，double 类型。

使用 using 定义函数指针别名的写法看起来就非常直观了，把别名的名字强制分离到了左边，而把别名对应的实际类型放在了右边，比较清晰，可读性比较好。

> using 语法和 typedef 一样，并不会创建出新的类型，它们只是给某些类型定义了新的别名。using 相较于 typedef 的优势在于定义函数指针别名时看起来更加直观，并且可以给模板定义别名。

### 模板别名

```cpp
// 给模板定义别名
template <typename T>
using mymap = map<int, T>;

int main(void) {
  // map的value指定为string类型
  mymap<string> m;
  m.insert(std::make_pair(1, "luffy"));
  m.insert(std::make_pair(2, "ace"));

  // map的value指定为int类型
  mymap<int> m1;
  m1.insert(std::make_pair(1, 100));
  m1.insert(std::make_pair(2, 200));

  return 0;
}
```

