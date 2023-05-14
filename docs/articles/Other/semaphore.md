# 信号量

## Windows

### API

#### CreateSemaphore

```cpp
HANDLE WINAPI CreateSemaphore（
  _In_opt_ LPSECURITY_ATTRIBUTES lpSemaphoreAttributes，	// 安全属性，通常为NULL
  _In_ LONG lInitialCount，								// 可用资源数目					
  _In_ LONG lMaximumCount，								// 信号量对象可处理的最大资源数
  _In_opt_ LPCTSTR lpName								// 信号量的名称，进程之间可共享
）;
```

**`[in, optional] lpSemaphoreAttributes`**

指向 [SECURITY_ATTRIBUTES](https://learn.microsoft.com/zh-cn/previous-versions/windows/desktop/legacy/aa379560(v=vs.85)) 结构的指针。 如果此参数为 **NULL**，则子进程无法继承句柄。

结构的 **lpSecurityDescriptor** 成员为新的信号灯指定安全描述符。 如果此参数为 **NULL**，信号灯将获取默认的安全描述符。 信号灯的默认安全描述符中的 ACL 来自创建者的主要或模拟令牌。

**`[in] lInitialCount`**

信号灯对象的初始计数。 此值必须大于或等于零，小于或等于 *lMaximumCount*。 信号灯的计数大于零时，信号灯的状态为零，当信号灯为零时不对齐。 每当等待函数释放等待信号灯的线程时，计数将减少一个。 通过调用 [ReleaseSemaphore](https://learn.microsoft.com/zh-cn/windows/desktop/api/synchapi/nf-synchapi-releasesemaphore) 函数，计数由指定数量增加。

**`[in] lMaximumCount`**

信号灯对象的最大计数。 此值必须大于零。

**`[in, optional] lpName`**

信号灯对象的名称。 名称限制为 **MAX_PATH** 个字符。 名称比较区分大小写。

如果 *lpName* 与现有命名信号灯对象的名称匹配，此函数将请求 **SEMAPHORE_ALL_ACCESS** 访问权限。 在这种情况下， *lInitialCount* 和 *lMaximumCount* 参数将被忽略，因为它们已由创建过程设置。 如果 *lpSemaphoreAttributes* 参数不为 **NULL**，则确定是否可以继承句柄，但忽略其安全描述符成员。

如果 *lpName* 为 **NULL**，则创建信号灯对象时没有名称。

如果 *lpName* 与现有事件、互斥体、可等待计时器、作业或文件映射对象的名称匹配，则函数将失败， [GetLastError](https://learn.microsoft.com/zh-cn/windows/desktop/api/errhandlingapi/nf-errhandlingapi-getlasterror) 函数返回 **ERROR_INVALID_HANDLE**。 发生这种情况是因为这些对象共享相同的命名空间。

该名称可以具有“全局”或“本地”前缀，以在全局或会话命名空间中显式创建对象。 名称的其余部分可以包含除反斜杠字符 (\) 以外的任何字符。 有关详细信息，请参阅 [内核对象命名空间](https://learn.microsoft.com/zh-cn/windows/desktop/TermServ/kernel-object-namespaces)。 快速用户切换是使用终端服务会话实现的。 内核对象名称必须遵循终端服务概述的准则，以便应用程序能够支持多个用户。

可以在专用命名空间中创建该对象。 有关详细信息，请参阅 [对象命名空间](https://learn.microsoft.com/zh-cn/windows/desktop/Sync/object-namespaces)。

**返回值**

- 如果函数成功，则返回值是信号灯对象的句柄。 **如果在函数调用之前存在命名信号灯对象，该函数将返回现有对象的句柄，** [GetLastError](https://learn.microsoft.com/zh-cn/windows/desktop/api/errhandlingapi/nf-errhandlingapi-getlasterror) 返回 **ERROR_ALREADY_EXISTS**。

- 如果函数失败，则返回值为 **NULL**。 要获得更多的错误信息，请调用 GetLastError。



**注解**

CreateSemaphore 返回的句柄具有 **SEMAPHORE_ALL_ACCESS** 访问权限;它可用于任何需要信号灯对象的句柄的函数，前提是调用方已授予访问权限。 如果信号灯是从服务或模拟其他用户的线程创建的，则可以在创建信号灯时向信号灯应用安全描述符，或者通过更改其默认 DACL 来更改创建过程的默认安全描述符。 有关详细信息，请参阅 [Synchronization Object Security and Access Rights](https://learn.microsoft.com/zh-cn/windows/desktop/Sync/synchronization-object-security-and-access-rights)。

信号灯对象的状态在计数大于零时发出信号，当信号量计数等于零时不对齐。 *lInitialCount* 参数指定初始计数。 计数永远不能小于零或大于 *lMaximumCount* 参数中指定的值。

调用进程的任何线程都可以在调用某个 [等待函数](https://learn.microsoft.com/zh-cn/windows/desktop/Sync/wait-functions)时指定信号灯对象句柄。 当发出指定对象的状态时，单对象等待函数将返回。 当发出任何一个或所有指定对象的信号时，可以指示多对象等待函数返回。 返回等待函数时，将释放等待线程以继续执行。 每次线程完成等待信号灯对象时，信号灯对象的计数都会递减一个。 线程完成后，它会调用 [ReleaseSemaphore](https://learn.microsoft.com/zh-cn/windows/desktop/api/synchapi/nf-synchapi-releasesemaphore) 函数，该函数递增信号灯对象的计数。

多个进程可以具有同一信号灯对象的句柄，从而允许使用该对象进行进程间同步。 提供以下对象共享机制：

- 如果 *CreateSemaphoreAttributes 参数启用了 CreateSemaphore* 继承，[则 CreateProcess](https://learn.microsoft.com/zh-cn/windows/win32/api/processthreadsapi/nf-processthreadsapi-createprocessa) 函数创建的子进程可以继承信号灯对象的句柄。
- 进程可以在调用 [DuplicateHandle](https://learn.microsoft.com/zh-cn/windows/desktop/api/handleapi/nf-handleapi-duplicatehandle) 函数时指定信号灯对象句柄，以创建可由另一个进程使用的重复句柄。
- 进程可以在调用 [OpenSemaphore] (/windows/win32/api/synchapi/nf-synchapi-opensemaphorew) 或 CreateSemaphore 函数中指定信号灯对象的名称。

使用 [CloseHandle](https://learn.microsoft.com/zh-cn/windows/desktop/api/handleapi/nf-handleapi-closehandle) 函数关闭句柄。 当进程终止时，系统会自动关闭句柄。 信号灯对象在最后一个句柄关闭时被销毁。

#### 打开信号量

```cpp
HANDLE WINAPI OpenSemaphore(  
  _In_  DWORD dwDesiredAccess,   // 访问的权限
  _In_  BOOL bInheritHandle,     // 子进程继承信号量对象与否
  _In_  LPCTSTR lpName           // 信号量对象名称
); 
```

**`[in] dwDesiredAccess`**

对信号灯对象的访问。 如果指定对象的安全描述符不允许调用进程的请求访问，函数将失败。 有关访问权限的列表，请参阅 [Synchronization Object Security and Access Rights](https://learn.microsoft.com/zh-cn/windows/desktop/Sync/synchronization-object-security-and-access-rights)。

**`[in] bInheritHandle`**

如果此值为 **TRUE**，则此过程创建的进程将继承句柄。 否则，进程不会继承此句柄。

**`[in] lpName`**

要打开的信号灯的名称。 名称比较区分大小写。

此函数可以在专用命名空间中打开对象。 有关详细信息，请参阅 [对象命名空间](https://learn.microsoft.com/zh-cn/windows/desktop/Sync/object-namespaces)。

**终端服务：** 该名称可以具有“全局”或“本地”前缀，以显式打开全局或会话命名空间中的对象。 名称的其余部分可以包含除反斜杠字符 (\) 以外的任何字符。 有关详细信息，请参阅 [内核对象命名空间](https://learn.microsoft.com/zh-cn/windows/desktop/TermServ/kernel-object-namespaces)。

**注意** 使用终端服务会话实现快速用户切换。 第一个登录用户使用会话 0、下一个登录的用户使用会话 1 等。 内核对象名称必须遵循终端服务概述的准则，以便应用程序可以支持多个用户。



**返回值**

如果函数成功，则返回值是信号灯对象的句柄。

如果函数失败，则返回值为 **NULL**。 要获得更多的错误信息，请调用 GetLastError。



**注解**

**OpenSemaphore** 函数允许多个进程打开同一信号灯对象的句柄。 仅当某些进程已使用 [CreateSemaphore](https://learn.microsoft.com/zh-cn/windows/desktop/api/winbase/nf-winbase-createsemaphorea) 函数创建信号灯时，该函数才会成功。 调用过程可以在任何需要信号灯对象的句柄（如 [等待函数](https://learn.microsoft.com/zh-cn/windows/desktop/Sync/wait-functions)）中使用返回的句柄，但受 *dwDesiredAccess* 参数中指定的访问的限制。

可以使用 [DuplicateHandle](https://learn.microsoft.com/zh-cn/windows/desktop/api/handleapi/nf-handleapi-duplicatehandle) 函数复制句柄。 使用 [CloseHandle](https://learn.microsoft.com/zh-cn/windows/desktop/api/handleapi/nf-handleapi-closehandle) 函数关闭句柄。 系统在进程终止时自动关闭句柄。 信号灯对象在关闭其最后一个句柄时被销毁。





#### 获取信号量对象

```cpp
DWORD WINAPI WaitForSingleObject(  
  _In_  HANDLE hHandle,                   // 内核对象句柄
  _In_  DWORD dwMilliseconds              // 对象被触发前的等待时间，INFINITE表示阻塞等待
);  
```

WaitForSingleObject被称呼为等待函数，是等待内核对象被触发通用的等待函数，被用在所有的内核对象触发等待中。等待函数会检查信号量的当前资源使用计数：

- 如果大于0，表示信号量处于触发状态，那么等待函数会把资源使用计数器减1，并让调用线程继续执行。信号量的最大优势就是在于以原子的方式来执行这些测试和设置操作。
- 如果等于0，表示信号量处于未触发状态，那么系统会让调用线程进入等待状态，直到被唤醒（当前资源计数大于0）



如果函数成功，则返回值指示导致函数返回的事件。 可以是下列值之一。

| 返回代码/值                       | 描述                                                         |
| :-------------------------------- | :----------------------------------------------------------- |
| **WAIT_ABANDONED**0x00000080L     | 指定的对象是一个互斥对象，该对象不是由拥有互斥对象的线程在拥有线程终止之前释放的。 互斥对象所有权授予调用线程，互斥状态设置为非对齐状态。如果互斥体保护持久状态信息，则应检查该信息是否一致性。 |
| **WAIT_OBJECT_0**0x00000000L      | 指定对象的状态已发出信号。                                   |
| **WAIT_TIMEOUT**0x00000102L       | 超时间隔已过，对象的状态未对齐。                             |
| **WAIT_FAILED**(DWORD) 0xFFFFFFFF | 函数失败。 要获得更多的错误信息，请调用 GetLastError。       |



**`注解`**

**WaitForSingleObject** 函数检查指定对象的当前状态。 如果对象的状态未对齐，则调用线程将进入等待状态，直到发出该对象信号或超时间隔。

该函数修改某些类型的同步对象的状态。 修改仅适用于指示状态导致函数返回的对象。 例如，信号灯对象的计数减少一个。

**WaitForSingleObject** 函数可以等待以下对象：

- 更改通知
- 控制台输入
- 事件
- 内存资源通知
- Mutex
- 进程
- Semaphore
- 线程
- 可等待计时器

调用直接或间接创建窗口的等待函数和代码时，请谨慎使用。 如果线程创建任何窗口，则必须处理消息。 消息广播将发送到系统中的所有窗口。 使用无超时间隔的等待函数的线程可能会导致系统陷入死锁。 间接创建窗口的代码的两个示例是 DDE 和 [CoInitialize](https://learn.microsoft.com/zh-cn/windows/desktop/api/objbase/nf-objbase-coinitialize) 函数。 因此，如果你有创建窗口的线程，请使用 [MsgWaitForMultipleObjects](https://learn.microsoft.com/zh-cn/windows/desktop/api/winuser/nf-winuser-msgwaitformultipleobjects) 或 [MsgWaitForMultipleObjectsEx](https://learn.microsoft.com/zh-cn/windows/desktop/api/winuser/nf-winuser-msgwaitformultipleobjectsex)，而不是 **WaitForSingleObject**。



#### 释放信号量

```cpp
BOOL WINAPI ReleaseSemaphore(  
  _In_       HANDLE hSemaphore,    // 信号量对象句柄
  _In_       LONG lReleaseCount,   // 释放使用的资源树
  _Out_opt_  LPLONG lpPreviousCount   // 一般设为null
);  
```

**`[in] hSemaphore`**

信号灯对象的句柄。 [CreateSemaphore](https://learn.microsoft.com/zh-cn/windows/desktop/api/winbase/nf-winbase-createsemaphorea) 或 [OpenSemaphore](https://learn.microsoft.com/zh-cn/windows/win32/api/synchapi/nf-synchapi-opensemaphorew) 函数返回此句柄。

此句柄必须具有 **SEMAPHORE_MODIFY_STATE** 访问权限。 有关详细信息，请参阅 [Synchronization Object Security and Access Rights](https://learn.microsoft.com/zh-cn/windows/desktop/Sync/synchronization-object-security-and-access-rights)。

**`[in] lReleaseCount`**

信号灯对象的当前计数将增加的量。 该值必须大于零。 如果指定的量将导致信号灯的计数超过创建信号灯时指定的最大计数，则计数不会更改，并且函数返回 **FALSE**。

**`[out, optional] lpPreviousCount`**

指向一个变量的指针，用于接收信号灯的上一个计数。 如果不需要上一个计数，此参数可以为 **NULL** 。



**返回值**

- 如果该函数成功，则返回值为非零值。

- 如果函数失败，则返回值为零。 要获得更多的错误信息，请调用 GetLastError。



**注解**

当信号灯对象的计数大于零且当信号量等于零时，信号灯对象的状态。 调用 [CreateSemaphore](https://learn.microsoft.com/zh-cn/windows/desktop/api/winbase/nf-winbase-createsemaphorea) 函数的过程指定信号灯的初始计数。 每次由于信号灯的信号状态而释放等待线程时，信号灯的计数将减少一个。

通常，应用程序使用信号灯来限制使用资源的线程数。 在线程使用资源之前，它会在调用某个 [等待函数](https://learn.microsoft.com/zh-cn/windows/desktop/Sync/wait-functions)时指定信号灯句柄。 等待函数返回时，它会将信号灯的计数减少一个。 当线程使用完资源后，它会调用 **ReleaseSemaphore** ，以增加信号灯的计数。

**ReleaseSemaphore** 的另一个用途是在应用程序的初始化过程中。 应用程序可以创建初始计数为零的信号灯。 这会将信号灯的状态设置为非对齐状态，并阻止所有线程访问受保护的资源。 当应用程序完成其初始化时，它使用 **ReleaseSemaphore** 将计数增加到其最大值，以允许对受保护资源的正常访问。

无法使用 **ReleaseSemaphore** 减少信号灯对象计数，因为 *lReleaseCount* 不能为负数。 若要暂时限制或减少访问，请创建一个循环，在该循环中调用 [WaitForSingleObject](https://learn.microsoft.com/zh-cn/windows/desktop/api/synchapi/nf-synchapi-waitforsingleobject) 函数的超时间隔为零，直到信号灯计数已足够减少。 (请注意，在执行此循环时，其他线程可以减少计数。) 若要还原访问，请在循环中调用 **WaitForSingleObject** 的发布计数等于释放计数的 **ReleaseSemaphore**。



#### 关闭句柄

```cpp
BOOL WINAPI CloseHandle(  
  _In_  HANDLE hObject    // 句柄
);  
```

创建的内核对象，我们必须通过调用CloseHandle向系统表明结束使用内核对象。

- 如果传入的句柄有效，系统将获得内核对象数据结构的地址，并将结构中的使用计数减1，
- 如果使用计数0，就会将内核对象销毁，从内存空间中擦除



> 进程退出的时候，没有达到ReleaseSemaphore使信号量减一的效果。
> 我认为这是windows做的不好的一个地方。



## Linux

[linux中的信号量[1\]-偏执小猛-ChinaUnix博客](http://blog.chinaunix.net/uid-22938240-id-2601967.html)

[Linux编程之信号量_rangzh的博客-CSDN博客_linux信号量编程](https://blog.csdn.net/rangzh/article/details/112094146)



当两个进程（线程）通信时，一个进程（线程）需要读操作，一个进程（线程）需要写操作，

在这种情况下，当出现同一时刻有多个进程（线程）对共享内存进行读写时，会出现数据损坏或丢失，此种情况下使用信号量就可以起到保护作用。

实现方式：是一种类似锁的机制，几个进程（线程）间都可以通过获取到同一个信号量的值，判断临界资源是否被信号量“锁住”，此时能否读取。



### POSIX标准定义的信号量


信号灯用来实现同步——用于[多线程](https://so.csdn.net/so/search?q=多线程&spm=1001.2101.3001.7020)，多进程之间同步共享资源(临界资源)。信号灯分两种，一种是有名信号灯，一种是基于内存的信号灯。

有名信号灯，是根据外部名字标识，通常指代文件系统中的某个文件。

基于内存的信号灯，它主要是把信号灯放入内存的，基于内存的信号灯，同步多线程时，可以放到该多线程所属进程空间里；如果是同步多进程，那就需要把信号灯放入到共享内存中(方便多个进程访问)。

有名信号灯和基于内存的信号灯，具体区别体现在创建和销毁两个函数。有名信号灯使用sem_open和sem_close函数。基于内存的信号灯使用sem_init和sem_destroy函数。sem_init的参数可以控制是同步多线程，还是多进程；且该函数只能调用1次，因为调用后信号灯就存在了( 内存指针存在)。一般，使用基于内存的信号灯同步同进程多线程，使用有名信号灯同步多进程。

当不需要使用有名信号量关联的名字时，可改用基于内存的信号量。基于内存的信号量至少具有随进程的持续性，然而他们真正的持续性却取决于存放信号量的内存区的类型。只要含有某个基于内存信号量的内存区保持有效，该信号量就一直存在。
1.如果某个基于内存的信号量是由单个进程内的各个线程共享的（sem_init函数的入参shared为0），那么该信号量具有随进程的持续性，当该进程终止时它也就消失了。
2.如果某个基于内存的信号量是在不同进程间共享的（sem_init函数的入参shared为1）,那么该信号量必须存放在共享内存中，因而只要共享内存区仍然存在，该信号量就一直存在。POSIX共享内存区和system V共享内存区都具有随内核的持续性。这意味着服务器可以创建一个共享内存区，在该共享内存区中初始化一个Posix基于内存的信号量，然后终止。一段时间后，一个或多个客户可打开该共享内存区，访问该信号量。



### API

#### sem_init()

```cpp
int sem_init (sem_t *sem, int pshared, unsigned int value);
```

功能：初始化信号量

返回值：创建成功返回0，失败返回-1

参数sem：指向信号量结构的一个指针

参数pshared：不为０时此信号量在进程间共享，为0时当前进程的所有线程共享

参数value：信号量的初始值



#### sem_destroy()

```cpp
int sem_destroy(sem_t * sem);
```

功能：释放信号量自己占用的一切资源 （被注销的信号量sem要求：没有线程在等待该信号量了）

返回值：满足条件 成功返回0，否则返回-1且置errno为EBUSY

参数sem：指向信号量结构的一个指针



#### sem_post()

```cpp
int sem_post(sem_t * sem);
```

功能：它的作用来增加信号量的值。给信号量加1。

返回值：操作成功返回0，失败则返回-1且置errno

参数sem：指向信号量结构的一个指针



#### sem_wait()

```cpp
int sem_wait(sem_t * sem);
```

功能：它的作用是从信号量的值减去一个“1”，但它永远会先等待该信号量为一个非零值（大于0）才开始做减法。（如果对一个值为0的信号量调用sem_wait()，这个函数就会等待，直到有其它线程增加了信号量这个值使它不再是0为止，再进行减1操作。）

返回值：操作成功返回0，失败则返回-1且置errno

参数sem：指向信号量结构的一个指针



#### sem_trywait()

```cpp
int sem_trywait(sem_t * sem)
```

功能：sem_trywait()为sem_wait()的非阻塞版，不进行等待

返回值：如果信号量计数大于0，则信号量立即减1并返回0，否则立即返回-1，errno置为EAGAIN

参数sem：指向信号量结构的一个指针



#### sem_getvalue()

```cpp
int sem_getvalue(sem_t * sem, int * sval);
```

功能： 读取sem中信号量计数

返回值： 操作成功返回0，失败则返回-1且置errno

参数sem：指向信号量结构的一个指针

参数sval：信号量计数值



#### sem_timedwait()

```cpp
int sem_timedwait(sem_t *sem, const struct timespec *abs_timeout);
```

成功，则返回0. 出错返回-1，并设置errno指明具体的错误(`errno` 设置为 `ETIMEDOUT`)

其中第2个参数 struct timespec *abs_timeout要求为绝对时间，如果手动将系统时间往后修改会导致sem_timedwait长时间阻塞

[C/C++ 修改系统时间，导致sem_timedwait 一直阻塞的问题解决和分析_小林coding的博客-CSDN博客_sem_timedwait](https://blog.csdn.net/qq_34827674/article/details/99696373)

[sem_timedwait等待毫秒_行云_的博客-CSDN博客_sem_timedwait](https://blog.csdn.net/wy5761/article/details/9320331)





### sem_open和sem_init区别

两个函数原型如下：

有名信号初始化：

```cpp
sem_t *sem sem_open(const char *name, int oflag, .../*mode_t mode,unsinged int value) ;
```

内存信号量初始化：
```cpp
int sem_init(sem_t *sem,int shared, unsigned int value);
```

1. 创建有名信号量必须指定一个与信号量相关链的文件名称，这个name通常是文件系统中的某个文件。
     基于内存的信号量不需要指定名称
2. 有名信号量sem 是由sem_open分配内存并初始化成value值
     基于内存的信号量是由应用程序分配内存，有sem_init初始化成为value值。如果shared为1，则分配的信号量应该在共享内存中。
3. sem_open不需要类似shared的参数，因为有名信号量总是可以在不同进程间共享的
     而基于内存的信号量通过shared参数来决定是进程内还是进程间共享，并且必须指定相应的内存
4. 基于内存的信号量不使用任何类似于O_CREAT标志的东西，也就是说，sem_init总是初始化信号量的值，因此，对于一个给定的信号量，我们必须小心保证只调用sem_init一次，对于一个已经初始化过的信号量调用sem_init,结果是未定义的。
5. 内存信号量通过sem_destroy删除信号量，有名信号量通过sem_unlink删除









# linux设置信号量系统参数

## 前言

信号量是IPC（进程间通信）机制的一种，用于协调多个进程或线程对共享数据的读写操作，本质上是一个计数器。类似于锁，主要用于保护共享资源，控制同时访问资源的进程数。

信号量只允许调用者对它进行等待信号和发送信号操作。

信号量集指的是信号量的集合，即多个信号量组成的集合，可以同时控制多种资源的分配问题。

更具体的内容涉及linux系统编程，如有兴趣可查阅相关资料。

设置场景：db2数据库服务器有的库表能连，有的库表访问异常，基本确定数据没损坏，怀疑是系统信号量不够用

- 系统版本：centos 7

## 步骤

1. 查看系统的信号量设置

```shell
cat /proc/sys/kernel/sem
# 250        32000   32      128
```

- 第一列：250，SEMMSL，表示每个信号量集的最大信号量数目
- 第二列：32000，SEMMNI，表示系统范围内的最大信号量数目
- 第三列：32，SEMOPM，表示一个`semop`操作能调用的最大信号量数目
- 第四列：128，SEMMNS表示系统范围内的最大信号量集数目

1. 查看系统已使用信号量集数目

```shell
ipcs -s | wc -l
```

1. 如果已经超过128，或者在128附近，就要稍微调高点了。此处为临时设置，重启后失效。可以修改`/etc/sysctl.conf`文件进行固化。

```shell
# 设置信号量集数目为500
# 一次调用的最大信号量数目和信号量集内最大信号量数设置相等
# 系统最大信号量数目设置为 250 * 500 = 125000
sysctl -w kernel.sem="250 125000 250 500"
```





























