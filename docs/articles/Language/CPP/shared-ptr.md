# 智能指针

在 C++ 中没有垃圾回收机制，必须自己释放分配的内存，否则就会造成内存泄露。解决这个问题最有效的方法是使用智能指针（smart pointer）。智能指针是存储指向动态分配（堆）对象指针的类，用于生存期的控制，能够确保在离开指针所在作用域时，自动地销毁动态分配的对象，防止内存泄露。

**智能指针的核心实现技术是引用计数，每使用它一次，内部引用计数加1，每析构一次内部的引用计数减1，减为0时，删除所指向的堆内存。**

C++11 中提供了三种智能指针，使用这些智能指针时需要引用头文件 `<memory>`：

`std::shared_ptr`：共享的智能指针

`std::unique_ptr`：独占的智能指针

`std::weak_ptr`：弱引用的智能指针，它不共享指针，不能操作资源，是用来监视` shared_ptr` 的。

## 共享智能指针

共享智能指针是指多个智能指针可以同时管理同一块有效的内存，共享智能指针 shared_ptr 是一个模板类，如果要进行**初始化有三种方式：通过构造函数、std::make_shared 辅助函数以及 reset 方法。**

共享智能指针对象初始化完毕之后就指向了要管理的那块堆内存，如果想要查看当前有多少个智能指针同时管理着这块内存可以使用共享智能指针提供的一个成员函数 `use_count`，函数原型如下：

```cpp
// 管理当前对象的 shared_ptr 实例数量，或若无被管理对象则为 0。
long use_count() const noexcept;
```

```cpp
int a = 10;
std::shared_ptr<int> s1_ptr(a);
auto s2_ptr = std::make_shared<int>(a);
cout << s1_ptr.use_count() << endl;
```

### 通过构造函数初始化

```cpp
// shared_ptr<T> 类模板中，提供了多种实用的构造函数, 语法格式如下:
std::shared_ptr<T> 智能指针名字(创建堆内存);
```

```cpp
int main(int argc, char const *argv[]) {
  // 使用智能指针管理一块int型的堆内存
  std::shared_ptr<int> s1_ptr(new int(98));
  cout << "s1_ptr: " << s1_ptr.use_count() << endl;

  // 使用智能指针管理一块字符数组对应的堆内存
  std::shared_ptr<char> s2_ptr(new char[12]);
  cout << "s2_ptr: " << s2_ptr.use_count() << endl;
  // 创建智能指针，初始化为空
  std::shared_ptr<int> s3_ptr(nullptr);
  cout << "s3_ptr: " << s3_ptr.use_count() << endl;

  return 0;
}
```

如果智能指针被初始化了一块有效内存，那么这块内存的引用计数 + 1，如果智能指针没有被初始化或者被初始化为 nullptr 空指针，引用计数不会 + 1。**另外，不要使用一个原始指针初始化多个 shared_ptr。**

```cpp
int *p = new int;
shared_ptr<int> p1(p);
shared_ptr<int> p2(p);		// error, 编译不会报错, 运行会出错
```



### 通过拷贝和移动构造函数初始化

当一个智能指针被初始化之后，就可以通过这个智能指针初始化其他新对象。在创建新对象的时候，对应的拷贝构造函数或者移动构造函数就被自动调用了。

```cpp
int main(int argc, char const *argv[]) {
  // 使用智能指针管理一块int型的堆内存，内部引用计数为1
  std::shared_ptr<int> s1_ptr(new int(100));
  cout << "s1_ptr: " << s1_ptr.use_count() << endl;

  // 调用拷贝构造函数
  std::shared_ptr<int> s2_ptr(s1_ptr);
  cout << "s2_ptr: " << s2_ptr.use_count() << endl;

  std::shared_ptr<int> s3_ptr = s1_ptr;
  cout << "s3_ptr: " << s3_ptr.use_count() << endl;

  // 调用移动构造函数
  std::shared_ptr<int> s4_ptr(std::move(s1_ptr));
  cout << "s4_ptr: " << s4_ptr.use_count() << endl;

  std::shared_ptr<int> s5_ptr = std::move(s2_ptr);
  cout << "s5_ptr: " << s5_ptr.use_count() << endl;

  return 0;
}
```

如果使用拷贝的方式初始化共享智能指针对象，这两个对象会同时管理同一块堆内存，堆内存对应的引用计数也会增加；

**如果使用移动的方式初始智能指针对象，只是转让了内存的所有权，管理内存的对象并不会增加，因此内存的引用计数不会变化。**



### 通过std::make_shared 初始化

通过 C++ 提供的 `std::make_shared() `就可以完成内存对象的创建并将其初始化给智能指针，函数原型如下：

```cpp
template< class T, class... Args >
shared_ptr<T> make_shared( Args&&... args );
```

- T：模板参数的数据类型
- Args&&... args ：要初始化的数据，如果是通过 make_shared 创建对象，需按照构造函数的参数列表指定

```cpp
class Test {
 public:
  Test() { cout << "construct Test..." << endl; }
  Test(int x) { cout << "construct Test, x = " << x << endl; }
  Test(string str) { cout << "construct Test, str = " << str << endl; }
  ~Test() { cout << "destruct Test ..." << endl; }
};

int main() {
  // 使用智能指针管理一块 int 型的堆内存, 内部引用计数为 1
  std::shared_ptr<int> s1_ptr = std::make_shared<int>(520);
  cout << "s1_ptr: " << s1_ptr.use_count() << endl;

  std::shared_ptr<Test> s2_ptr = std::make_shared<Test>();
  cout << "s2_ptr: " << s2_ptr.use_count() << endl;

  std::shared_ptr<Test> s3_ptr = std::make_shared<Test>(520);
  cout << "s3_ptr3: " << s3_ptr.use_count() << endl;

  std::shared_ptr<Test> s4_ptr = std::make_shared<Test>("I want to be...");
  cout << "s4_ptr: " << s4_ptr.use_count() << endl;

  return 0;
}
```

> 使用 `std::make_shared() `模板函数可以完成内存地址的创建，并将最终得到的内存地址传递给共享智能指针对象管理。
>
> 如果申请的内存是普通类型，通过函数的（）可完成地址的初始化。
>
> 如果要创建一个类对象，函数的（）内部需要指定构造对象需要的参数，也就是类构造函数的参数。



### 通过reset方法初始化

共享智能指针类提供的 `std::shared_ptr::reset `方法函数原型如下：

```cpp
void reset() noexcept;

template< class Y >
void reset( Y* ptr );

template< class Y, class Deleter >
void reset( Y* ptr, Deleter d );

template< class Y, class Deleter, class Alloc >
void reset( Y* ptr, Deleter d, Alloc alloc );
```

ptr：指向要取得所有权的对象的指针

d：指向要取得所有权的对象的指针

aloc：内部存储所用的分配器

```cpp
int main() {
  // 使用智能指针管理一块int型的堆内存，内部引用计数为1
  std::shared_ptr<int> s1_ptr = std::make_shared<int>(100);
  std::shared_ptr<int> s2_ptr = s1_ptr;
  std::shared_ptr<int> s3_ptr = s1_ptr;
  std::shared_ptr<int> s4_ptr = s1_ptr;

  cout << "s1_ptr: " << s1_ptr.use_count() << endl;
  cout << "s2_ptr: " << s2_ptr.use_count() << endl;
  cout << "s3_ptr: " << s3_ptr.use_count() << endl;
  cout << "s4_ptr: " << s4_ptr.use_count() << endl;

  s4_ptr.reset();
  cout << "s1_ptr: " << s1_ptr.use_count() << endl;
  cout << "s2_ptr: " << s2_ptr.use_count() << endl;
  cout << "s3_ptr: " << s3_ptr.use_count() << endl;
  cout << "s4_ptr: " << s4_ptr.use_count() << endl;

  std::shared_ptr<int> s5_ptr;
  s5_ptr.reset(new int(100));
  cout << "s5_ptr: " << s5_ptr.use_count() << endl;

  return 0;
}
```

对于一个未初始化的共享智能指针，可以通过 reset 方法来初始化，当智能指针中有值的时候，调用 reset 会使引用计数减 1。

类似于当多个指针指向同一块内存，如果其中一个指针调用reset函数，则该指针变成`nullptr`，其他指针引用计数减1。



### 获取原始指针

对应基础数据类型来说，通过操作智能指针和操作原始指针管理的内存效果是一样的，可以直接完成数据的读写。但是如果共享智能指针管理的是一个对象，那么就需要取出原始内存的地址再操作，可以调用共享智能指针类提供的 `get () `方法得到原始地址，其函数原型如下：

```cpp
T* get() const noexcept;
```

```cpp
int main() {
  std::shared_ptr<char> s1_ptr(new char[128]);
  // 得到指针的原始地址
  char* msg = s1_ptr.get();

  std::shared_ptr<int> s2_ptr(new int(100));
  cout << *s2_ptr.get() << " " << *s2_ptr << endl;

  return 0;
}
```



### 指定删除器

当智能指针管理的内存对应的引用计数变为 0 的时候，这块内存就会被智能指针析构掉了。另外，我们在初始化智能指针的时候也可以自己指定删除动作，这个删除操作对应的函数被称之为删除器，这个删除器函数本质是一个回调函数，我们只需要进行实现，其调用是由智能指针完成的。

```cpp
void deleteIntPtr(int* ptr) {
  delete ptr;
  cout << "delete int ptr" << endl;
}

int main() {
  std::shared_ptr<int> s1_ptr(new int(100), deleteIntPtr);

  // 利用lambda表达式
  std::shared_ptr<int> s2_ptr(new int(200), [](int* ptr) { delete ptr; });

  return 0;
}
```



**在 C++11 中使用 `shared_ptr` 管理动态数组时，需要指定删除器**，因为` std::shared_ptr`的默认删除器不支持数组对象。

```cpp
int main() {
  std::shared_ptr<int> s1_ptr(new int[10], [](int* p) { delete[] p; });

  // 使用C++提供的删除器，这个函数内部也是通过调用delete来实现的
  std::shared_ptr<int> s2_ptr(new int[10], std::default_delete<int[]>());
  return 0;
}
```

封装一个 make_shared_array 方法来让 shared_ptr 支持数组

```cpp
template <typename T>
shared_ptr<T> make_share_array(size_t size) {
  // 返回匿名对象
  return shared_ptr<T>(new T[size], default_delete<T[]>());
}

int main() {
  shared_ptr<int> ptr1 = make_share_array<int>(10);
  cout << ptr1.use_count() << endl;
  
  shared_ptr<char> ptr2 = make_share_array<char>(128);
  cout << ptr2.use_count() << endl;
  return 0;
}
```



### 注意事项

1、不能使用一个原始地址初始化多个共享智能指针

```cpp
class Apple {
 public:
  ~Apple() { cout << "Apple disstruct!" << endl; }
};

int main(int argc, char const* argv[]) {
  Apple* apple = new Apple;

  // error, 用一个原始地址初始化多个共享智能指针,析构函数会被调用两次
  std::shared_ptr<Apple> s1_ptr(apple);
  std::shared_ptr<Apple> s2_ptr(apple);

  // 两个智能指针互相感知不到对方，所以引用计数都为1
  cout << "s1_ptr: " << s1_ptr.use_count() << endl;
  cout << "s2_ptr: " << s2_ptr.use_count() << endl;

  return 0;
}
```

2、函数不能返回管理了this的共享智能指针对象

```cpp
class Test {
 public:
  std::shared_ptr<Test> getSharedPtr() { return std::shared_ptr<Test>(this); }

  ~Test() { cout << "Disstruct..." << endl; }
};

int main(int argc, char const *argv[]) {
  std::shared_ptr<Test> s1_ptr(new Test);
  cout << "use count: " << s1_ptr.use_count() << endl;

  // 当调用getSharedPtr()时，相当于用原始地址又初始化了一个共享智能指针
  // 相当于两个共享智能指针指向同一块内存，但是感知不到对方的存在，引用计数都为1
  // 当主函数结束时，会重复调用析构函数两次，从而出现错误
  std::shared_ptr<Test> s2_ptr = s1_ptr->getSharedPtr();
  cout << "use count: " << s1_ptr.use_count() << endl;

  return 0;
}
```



3、共享智能指针不能循环引用



## 独占智能指针

std::unique_ptr 是一个独占型的智能指针，它不允许其他的智能指针共享其内部的指针，可以通过它的构造函数初始化一个独占智能指针对象，但是不允许通过赋值将一个 unique_ptr 赋值给另一个 unique_ptr。

```cpp
// 通过构造函数初始化对象
std::unique_ptr<int> s1_ptr(new int(10));
// error, 不允许将一个unique_ptr赋值给另一个unique_ptr
std::unique_ptr<int> s2_ptr = s1_ptr;
```

`std::unique_ptr `不允许复制，但是可以通过函数返回给其他的 std::unique_ptr，还可以通过 std::move 来转译给其他的 std::unique_ptr，**这样原始指针的所有权就被转移了，这个原始指针还是被独占的。**

```cpp
std::unique_ptr<int> func(uint16_t len) {
  return std::unique_ptr<int>(new int(len));
}

int main() {
  // 通过构造函数初始化
  std::unique_ptr<int> s1_ptr(new int(10));

  // 通过转移所有权的方式初始化
  std::unique_ptr<int> s2_ptr = std::move(s1_ptr);
  std::unique_ptr<int> s2_ptr = func(10);

  return 0;
}
```

使用 reset 方法可以让 unique_ptr 解除对原始内存的管理，也可以用来初始化一个独占的智能指针。

```cpp
int main() {
  std::unique_ptr<int> s1_ptr(new int(10));
  std::unique_ptr<int> s2_ptr = move(s1_ptr);

  s1_ptr.reset();              // 解除对原始内存的管理
  s2_ptr.reset(new int(100));  // 重新初始化
  return 0;
}
```

**如果想要获取独占智能指针管理的原始地址，可以调用 get () 方法。方法和`std::shared_ptr`一样**



### 删除器

`unique_ptr `指定删除器和 shared_ptr 指定删除器是有区别的，**unique_ptr 指定删除器的时候需要确定删除器的类型**，所以不能像 shared_ptr 那样直接指定删除器，

```cpp
int main() {
  using func_ptr = void (*)(int*);

  std::shared_ptr<int> s1_ptr(new int(10), [](int* p) { delete p; });
  // unique_ptr 指定删除器和 shared_ptr 指定删除器是有区别的，unique_ptr
  // 指定删除器的时候需要确定删除器的类型
  std::unique_ptr<int, func_ptr> s3_ptr(new int(10), [](int* p) { delete p; });

  // 在 lambda表达式没有捕获任何外部变量时，可以直接转换为函数指针，
  //一旦捕获了就无法转换了，如果想要让编译器成功通过编译，
  // 那么需要使用可调用对象包装器来处理声明的函数指针：
  std::unique_ptr<int, std::function<void(int*)>> s4_ptr(
      new int(10), [&](int* p) { delete p; });

  return 0;
}
```

## 弱引用智能指针

弱引用智能指针 `std::weak_ptr` **可以看做是 shared_ptr 的助手，它不管理 shared_ptr 内部的指针。**std::weak_ptr 没有重载操作符 * 和 ->，因为它不共享指针，不能操作资源，**所以它的构造不会增加引用计数，析构也不会减少引用计数，它的主要作用就是作为一个旁观者监视 shared_ptr 中管理的资源是否存在。**

```cpp
// 默认构造函数
constexpr weak_ptr() noexcept;
// 拷贝构造
weak_ptr (const weak_ptr& x) noexcept;
template <class U> weak_ptr (const weak_ptr<U>& x) noexcept;
// 通过shared_ptr对象构造
template <class U> weak_ptr (const shared_ptr<U>& x) noexcept;
```

```cpp
int main() {
  std::shared_ptr<int> s1_ptr(new int);

  // 构造了一个空 weak_ptr对象
  std::weak_ptr<int> w1_ptr;

  // 通过一个空weak_ptr对象构造了另一个weak_ptr对象
  std::weak_ptr<int> w2_ptr(w1_ptr);
  std::weak_ptr<int> w5_ptr = w1_ptr;

  // 通过一个 shared_ptr 对象构造了一个可用的 weak_ptr 实例对象
  std::weak_ptr<int> w3_ptr(s1_ptr);

  // 通过一个 shared_ptr 对象构造了一个可用的 weak_ptr
  // 实例对象（这是一个隐式类型转换）
  std::weak_ptr<int> w4_ptr = s1_ptr;

  return 0;
}
```



### use_count()

通过调用 std::weak_ptr 类提供的 use_count() 方法可以获得当前所观测资源的引用计数，函数原型如下：

```cpp
// 函数返回所监测的资源的引用计数
long int use_count() const noexcept;
```



### expired()

通过调用 std::weak_ptr 类提供的 expired() 方法来判断观测的资源是否已经被释放，函数原型如下：

```cpp
// 返回true表示资源已经被释放, 返回false表示资源没有被释放
bool expired() const noexcept;
```

```cpp
int main() {
  std::shared_ptr<int> s1_ptr(new int(10));
  // 创建一个weak_ptr监测s1_ptr
  std::weak_ptr<int> w1_ptr(s1_ptr);

  cout << std::boolalpha;
  cout << "Is s1_ptr expired ? " << w1_ptr.expired() << endl;

  s1_ptr.reset();
  cout << "Is s1_ptr expired ? " << w1_ptr.expired() << endl;

  return 0;
}
```



### lock()

通过调用 std::weak_ptr 类提供的 lock() 方法来获取管理所监测资源的 shared_ptr 对象，函数原型如下：

```cpp
shared_ptr<element_type> lock() const noexcept;
```

```cpp
int main() {
    std::shared_ptr<int> s1_ptr(new int(10));
    // 创建一个weak_ptr监测s1_ptr
    std::weak_ptr<int> w1_ptr(s1_ptr);

    auto s2_ptr = w1_ptr.lock();
    // 此时引用计数为2
    cout << "s1_ptr use count: " << w1_ptr.use_count() << endl;
    
    return 0;
}
```



### reset()

通过调用 std::weak_ptr 类提供的 reset() 方法来清空对象，使其不监测任何资源，函数原型如下：

```cpp
void reset() noexcept;
```

```cpp
int main() {
  std::shared_ptr<int> s1_ptr(new int(10));
  // 创建一个weak_ptr监测s1_ptr
  std::weak_ptr<int> w1_ptr(s1_ptr);

  w1_ptr.reset();

  cout << std::boolalpha;
  cout << "Is w1_ptr expired? " << w1_ptr.expired() << endl;

  // 虽然w1_ptr过期了，但是共享指针还存在
  cout << "s1_ptr use count: " << *s1_ptr << endl;

  return 0;
}
```





### 返回管理this的shared_ptr

通过` weak_ptr` 返回管理 this 资源的共享智能指针对象 shared_ptr。C++11 中为我们提供了一个模板类叫做 `std::enable_shared_from_this<T>`，这个类中有一个方法叫做 `shared_from_this()`，通过这个方法可以返回一个共享智能指针，在函数的内部就是使用 weak_ptr 来监测 this 对象，并通过调用 weak_ptr 的 lock() 方法返回一个 `shared_ptr `对象。

```cpp
class Test : public std::enable_shared_from_this<Test> {
 public:
  std::shared_ptr<Test> getSharedPtr() { return shared_from_this(); }
  ~Test() { cout << "Disstruct..." << endl; }
};

int main(int argc, char const *argv[]) {
  std::shared_ptr<Test> s1_ptr(new Test);
  cout << "s1_ptr use count: " << s1_ptr.use_count() << endl;

  std::shared_ptr<Test> s2_ptr = s1_ptr->getSharedPtr();
  cout << "s1_ptr use count: " << s1_ptr.use_count() << endl;

  return 0;
}
```

> 尽量理解：在调用 enable_shared_from_this 类的 shared_from_this () 方法之前，必须要先初始化函数内部 weak_ptr 对象（new Test），否则该函数无法返回一个有效的 shared_ptr 对象



### 解决循环引用问题

智能指针如果循环引用会导致内存泄露

```cpp
class Apple;
class Orange;

class Apple {
 public:
  std::shared_ptr<Orange> s_ptr;

  ~Apple() { cout << "Apple disstruct!" << endl; }
};

class Orange {
 public:
  std::shared_ptr<Apple> s_ptr;

  ~Orange() { cout << "Orange disstruct!" << endl; }
};

int main(int argc, char const *argv[]) {
  std::shared_ptr<Apple> apple_ptr(new Apple);
  std::shared_ptr<Orange> orange_ptr(new Orange);

  cout << "apple use count: " << apple_ptr.use_count() << endl;
  cout << "orange use count: " << orange_ptr.use_count() << endl;

  apple_ptr->s_ptr = orange_ptr;
  orange_ptr->s_ptr = apple_ptr;

  cout << "apple use count: " << apple_ptr.use_count() << endl;
  cout << "orange use count: " << orange_ptr.use_count() << endl;

  return 0;
}
```

在测试程序中，共享智能指针 apple_ptr、orange_ptr 对 Apple、Orange 实例对象的引用计数变为 2，在共享智能指针离开作用域之后引用计数只能减为1，这种情况下不会去删除智能指针管理的内存，导致类 Apple、Orange 的实例对象不能被析构，最终造成内存泄露。

通过使用 weak_ptr 可以解决这个问题，只要将类 Apple 或者 Orange 的任意一个成员改为 weak_ptr，修改之后的代码片段如下：

```cpp
class Orange {
 public:
  std::weak_ptr<Apple> w_ptr;

  ~Orange() { cout << "Orange disstruct!" << endl; }
};
```

对类Orange成员赋值时orange_ptr->w_ptr = apple_ptr; 由于w_ptr是weak_ptr类型，这个赋值操作并不会增加引用计数，所以apple_ptr的引用计数仍然为1，在离开作用域后（主函数函数结束），apple_ptr的引用计数为0，则apple对象被析构。

由于apple对象被析构，则apple对象内的共享指针apple_ptr->s_ptr也被析构，从而orange_ptr引用计数为1，在离开作用域后（主函数函数结束），orange_ptr的引用计数为0，则orange对象被析构。







































