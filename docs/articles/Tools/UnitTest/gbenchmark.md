# Google Benchmark

```cpp
#include <benchmark/benchmark.h>
void BM_DemoSleep(benchmark::State& state) {
  for (auto _ : state){
    //待测试的代码
  }
}
BENCHMARK(BM_DemoSleep); // 注册要测试的函数对象

BENCHMARK_MAIN(); // main函数，运行benchmark初始化和执行

```



### 直接使用Benchmark相应的接口

```cpp
#include <benchmark/benchmark.h>
#include <chrono>
#include <thread>

void BM_DemoSleep(benchmark::State& state) {
  for (auto _ : state){
    std::this_thread::sleep_for(std::chrono::nanoseconds(1000)); //待测试的代码
  }
}

void BM_DemoSleep1(benchmark::State& state, int id) {
  std::cout << "id:"<< id << std::endl;
  for (auto _ : state){
    std::this_thread::sleep_for(std::chrono::nanoseconds(1000));
  }
}

int main(int argc, char** argv) {
  ::benchmark::Initialize(&argc, argv); // 初始化Benchmark
  if (::benchmark::ReportUnrecognizedArguments(argc, argv)) return 1;
  
  // 使用函数指针注册
  ::benchmark::RegisterBenchmark("BM_DemoSleep", &BM_DemoSleep);
  // 使用Lamba函数注册
  ::benchmark::RegisterBenchmark("BM_DemoSleep1", [](benchmark::State& state){
    for (auto _ : state){
      std::this_thread::sleep_for(std::chrono::nanoseconds(1000));
    }
  });
  
  // 使用带参数的函数指针注册
  int id = 10;
  ::benchmark::RegisterBenchmark("BM_DemoSleep2", &BM_DemoSleep1, id);
  
  ::benchmark::RunSpecifiedBenchmarks(); // 运行
  ::benchmark::Shutdown(); 
}

```



## 配置参数

### Arg参数

```cpp
void BM_Arg(benchmark::State& state) {
  std::cout << "arg1:" << state.range(0) << "\n"; // state.range(0)获取参数
  for (auto _ : state) {
     std::this_thread::sleep_for(std::chrono::milliseconds(state.range(0)));
  }
}

int main(int argc, char** argv) {
  ::benchmark::Initialize(&argc, argv);
  if (::benchmark::ReportUnrecognizedArguments(argc, argv)) return 1;
  ::benchmark::RegisterBenchmark("BM_Arg", &BM_Arg)->Arg(10); // ->Arg()设置单个参数
    ::benchmark::RegisterBenchmark("BM_Arg", &BM_Arg)->Arg(10)->Arg(11); //分别以10，11参数运行BM_Arg
  ::benchmark::RunSpecifiedBenchmarks();
  ::benchmark::Shutdown(); 
}

```



### 测试多少次（iterations）

```cpp
::benchmark::RegisterBenchmark("BM_Arg", &BM_Arg)->Iterations(10); // 迭代执行10次，也就是for(auto _ : state){}循环会迭代10次

::benchmark::RegisterBenchmark("BM_Arg", &BM_Arg); // 会按照计算规则，迭代n次
```



### 重复多少次

指的是整个函数对象调用多少次，默认值是1

```cpp
::benchmark::RegisterBenchmark("BM_Arg", &BM_Arg)->Iterations(10)->Repetitions(3); // 迭代执行10次，也就是for(auto _ : state){}循环会迭代10次; 重复调用3次
```



### 统计分析结果

会统计每次的结果，然后输出分析结果:
mean: 平均值、median: 中值、stddev: 标准差、cv:标准差/平均值
自定义分析结果，比如最小值，最大值

```cpp
  typedef double(StatisticsFunc)(const std::vector<double>&);
  Benchmark* ComputeStatistics(std::string name, StatisticsFunc* statistics,
                               StatisticUnit unit = kTime);   
```



```cpp
::benchmark::RegisterBenchmark("BM_Arg", &BM_Arg)->Iterations(10)->Repetitions(10)->Unit(benchmark::kMillisecond)
  ->ComputeStatistics("max", [](const std::vector<double>& v)->double{
    return *std::max_element(v.begin(), v.end());
  }, benchmark::kTime)
  ->ComputeStatistics("min", [](const std::vector<double>& v)->double{
    return *std::min_element(v.begin(), v.end());
  }, benchmark::kTime);
```





## 命令行参数

| 命令行参数                                           | 含义                                                         |
| ---------------------------------------------------- | ------------------------------------------------------------ |
| `--benchmark_list_tests={true|false}`                | 列出执行的测试case，默认为false                              |
| `--benchmark_filter=<regex>`                         | 设置测试case过滤器，默认为：“.”                              |
| `--benchmark_format=<console | json | csv>`          | 指定命令行输出格式（console、json、csv三种），默认为：console |
| `--benchmark_out=<filename>`                         | 指定输出到指定文件，默认为：“”                               |
| `--benchmark_repetitions=n`                          | 重复次数                                                     |
| `--benchmark_report_aggregates_only={true | false}`  | 报告内容是否只上报聚合内容（省略每次repetition的内容）       |
| `--benchmark_display_aggregates_only={true | false}` | 屏幕输出内容是否只上报聚合内容（省略每次repetition的内容）   |

```cpp
./gt_template.exe --benchmark_out_format=csv --benchmark_out=1.csv
```







```cpp
#include <benchmark/benchmark.h>
#include <array>
 
constexpr int len = 6;
 
// constexpr function具有inline属性，你应该把它放在头文件中
constexpr auto my_pow(const int i)
{
    return i * i;
}
 
// 使用operator[]读取元素，依次存入1-6的平方
static void bench_array_operator(benchmark::State& state)
{
    std::array<int, len> arr;
    constexpr int i = 1;
    for (auto _: state) {
        arr[0] = my_pow(i);
        arr[1] = my_pow(i+1);
        arr[2] = my_pow(i+2);
        arr[3] = my_pow(i+3);
        arr[4] = my_pow(i+4);
        arr[5] = my_pow(i+5);
    }
}
BENCHMARK(bench_array_operator);
 
// 使用at()读取元素，依次存入1-6的平方
static void bench_array_at(benchmark::State& state)
{
    std::array<int, len> arr;
    constexpr int i = 1;
    for (auto _: state) {
        arr.at(0) = my_pow(i);
        arr.at(1) = my_pow(i+1);
        arr.at(2) = my_pow(i+2);
        arr.at(3) = my_pow(i+3);
        arr.at(4) = my_pow(i+4);
        arr.at(5) = my_pow(i+5);
    }
}
BENCHMARK(bench_array_at);
 
// std::get<>(array)是一个constexpr function，它会返回容器内元素的引用，并在编译期检查数组的索引是否正确
static void bench_array_get(benchmark::State& state)
{
    std::array<int, len> arr;
    constexpr int i = 1;
    for (auto _: state) {
        std::get<0>(arr) = my_pow(i);
        std::get<1>(arr) = my_pow(i+1);
        std::get<2>(arr) = my_pow(i+2);
        std::get<3>(arr) = my_pow(i+3);
        std::get<4>(arr) = my_pow(i+4);
        std::get<5>(arr) = my_pow(i+5);
    }
}
BENCHMARK(bench_array_get);
 
BENCHMARK_MAIN();
```



注：constexpr是C++11中新增的关键字，其语义是“常量表达式”，也就是在编译期可求值的表达式。最基础的常量表达式就是字面值或全局变量/函数的地址或sizeof等关键字返回的结果，而其它常量表达式都是由基础表达式通过各种确定的运算得到的。constexpr值可用于enum、switch、数组长度等场合。

我们可以看到每一个benchmark测试用例都是一个类型为std::function<void(benchmark::State&)>的函数，其中benchmark::State&负责测试的运行及额外参数的传递。

**随后我们使用for (auto _: state) {}来运行需要测试的内容，state会选择合适的次数来运行循环，时间的计算从循环内的语句开始，所以我们可以选择像例子中一样在for循环之外初始化测试环境，然后在循环体内编写需要测试的代码。**

测试用例编写完成后我们需要使用BENCHMARK(<function_name>);将我们的测试用例注册进benchmark，这样程序运行时才会执行我们的测试。

最后是用BENCHMARK_MAIN();替代直接编写的main函数，它会处理命令行参数并运行所有注册过的测试用例生成测试结果。

示例中大量使用了constexpr，这是为了能在编译期计算出需要的数值避免对测试产生太多噪音。



传递参数

```cpp
#include <benchmark/benchmark.h>
#include <cstring>

static void BM_memcpy(benchmark::State& state) {
    char* src = new char[state.range(0)];
    char* dst = new char[state.range(0)];
    memset(src, 'x', state.range(0));
    for (auto _ : state)
        memcpy(dst, src, state.range(0));
    state.SetBytesProcessed(int64_t(state.iterations()) * int64_t(state.range(0)));
    delete[] src;
    delete[] dst;
}
BENCHMARK(BM_memcpy)->Arg(8)->Arg(64)->Arg(512)->Arg(1<<10)->Arg(8<<10);
BENCHMARK_MAIN(); 
```



指定迭代次数

```cpp
#include <benchmark/benchmark.h>
#include <iostream>
#include <string>
using namespace std;
 
void demo()
{
    string str = "hello world";
    str.size();
}
 
static void BM_demo(benchmark::State& state) {
    for (auto _ : state)
        demo();
}
// Register the function as a benchmark
BENCHMARK(BM_demo)->Iterations(1000); //指定BM_demo函数中，for循环的迭代次数
BENCHMARK_MAIN(); //程序入口
```









































