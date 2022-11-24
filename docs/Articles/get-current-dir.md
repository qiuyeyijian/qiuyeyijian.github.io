# C/C++获取当前文件夹路径和文件名

## 文件夹路径获取

### 头文件

`unistd.h`是`unix std`的意思，是`POSIX`标准定义的`unix`类系统定义符号常量的头文件， 包含了许多UNIX系统服务的函数原型。

```cpp
#include <unistd.h>
```

### getcwd()

该函数的功能是返回当前 工作目录的绝对路径到一个字符数组中（即参数buf）。该路径中不能包含符号链接组件。

```cpp
char* getcwd(char* buf, size_t size);
```

buf：保存当前目录的缓冲区

size：在现代linux 中，buf 的长度至少可以为255 字节

返回值：成功返回指向当前目录的指针，和buf 的值一样，错误返回NULL。

```cpp
#include <cstdio>
#include <unistd.h>

#define PATH_SIZE 255

int main()
{
    char path[PATH_SIZE];
    
    if (!getcwd(path, PATH_SIZE))
    {
        perror("Fail to get current path!");
        return 0;
    }

    printf("path: %s\n", path);

    return 0;
}
```

这样会将工作目录的绝对路径复制到buf所指向的空间中,但如果路径长度大于size,则会返回NULL,错误代码为ERANGE.所以我们在定义path的时候得定义的足够大,但这样又会使得内存浪费,Linux的文件名长度限制为255个英文字符,理论上绝对路径的大小应该可以足够大,故而这样使用总有返回NULL的时候,所以getcwd()个我们提供了下面的一种用法:

```cpp
#include <cstdio>
#include <cstdlib>
#include <unistd.h>

int main(void)
{
    char *path = NULL;
    path = getcwd(NULL, 0);
    puts(path);

    free(path);

    return 0;
}
```

可以采取令 buf 为 NULL并使 size 为零来使 getcwd 调用 malloc 动态给 buf 分配，但是这种情况要特别注意使用后释放缓冲以防止内存泄漏。



### get_current_dir_name()

getcwd()函数需要考虑缓冲区占用字节大小，比较麻烦。get_current_dir_name()函数可以更便捷，其用法如下：

```cpp
char *get_current_dir_name(void);
```

参数：无

返回值：成功返回指向可执行文件所在目录的指针，错误返回NULL。

```cpp
#include <cstdio>
#include <cstdlib>
#include <unistd.h>

int main(int argc, char **argv)
{
    char *path;
    path = get_current_dir_name();
    puts(path);
    free(path);

    return 0;
}
```

**get_current_dir_name()函数返回的路径也是通过malloc函数动态的分配的内存，因此使用完其返回值后也要记得对返回值进行free()操作。**



### readlink()

linux系统中有个符号链接：`/proc/self/exe` 它代表当前程序，所以可以用readlink读取它的源路径就可以获取当前程序的绝对路径。

```cpp
ssize_t readlink(const char *path, char *buf, size_t bufsiz);
```

函数说明：readlink()会将参数path的 符号链接内容存储到参数buf所指的内存空间，返回的内容不是以`\0`作字符串结尾，但会将字符串的字符数返回，这使得添加`\0`变得简单。

若参数bufsiz小于符号连接的内容长度，过长的内容会被截断。如果 readlink 第一个参数指向一个文件而不是符号链接时，readlink 设置errno 为 EINVAL 并返回 -1。 readlink()函数组合了open()、read()和close()的所有操作。

返回值 ：执行成功则返回字符串的字符数，失败返回-1， 错误代码存于errno

```cpp
#include <unistd.h>
#include <stdio.h>
 
int main(int argc , char* argv[])
{
    char buf[1024] = { 0 };
    int n = readlink("/proc/self/exe" , buf , sizeof(buf));
    if( n > 0 && n < sizeof(buf))
    {
        printf("%s\n" , buf);
    }
    
    return 0;
}
```



### 封装函数

```cpp
#include <iostream>
#include <unistd.h> // 函数所在头文件
using namespace std;

int getCurrentPath(char *path)
{
#ifdef _WIN32
    char buf[MAX_PATH];
    // 获取当前执行程序的完整路径
    GetModuleFileName(NULL, buf, MAX_PATH);
    // 去掉可执行程序的名字，从而得到可执行程序的工作目录
    (strrchr(buf, '\\'))[1] = '\0';
    sprintf(path, "%s", buf);
#else
    char *buf = get_current_dir_name();
    sprintf(path, "%s/", buf);
    free(buf); // 一定记得free,因为是由get_current_dir_name()函数动态分配的内存
#endif
    return 0;
}

int main()
{
    char buff[1024];
    getCurrentPath(buff);
    puts(buff);
    
    return 0;
}
```





## 获取某一存在目录中所有文件名字（包括扩展名）

在Linux系统中读取指定目录下所有文件名的实现步骤主要分三步：

- 打开文件目录opendir()
- 读取文件信息readdir()
- 关闭文件目录closedir()

### 头文件

```cpp
#include <sys/types.h>
#include <dirent.h>
```



### 打开文件目录opendir

```cpp
DIR *opendir(const char *name);
DIR *fdopendir(int fd);
```

- opendir() 函数根据目录路径打开一个目录流，并返回一个目录流（DIR）指针。这个指针指向目录的首地址。
- fdopendir()函数和opendir()函数类似，只是它是根据文件操作流fd（即常用的文件读取），打开的目录，然后同样是返回目录流指针。

```cpp
#include <iostream>
#include <sys/types.h>
#include <dirent.h>

using namespace std;
int main(){
	// 1、打开文件目录
	DIR* dirStream;
	const char* path = "/home/XX/code/";
	dirStream = opendir(path);
	// 2、接下来是读取文件信息
    // ...
	return 0;
}
```



### 读取文件信息

```cpp
#include <dirent.h> // 所在头文件
struct dirent *readdir(DIR *dirp);
```

函数描述：该函数根据打开的目录流指针dirp，返回一个dirent结构体指针。如果在目录流的结尾，那么该指针为空。否则就是表示由dirp指针指向的目录流的下一个目录条目

```cpp
struct dirent
  {
    __ino_t d_ino;   /*inode number */ // 节点号索引
    __off_t d_off;   /*offset to this dirent */ // 在目录文件中的偏移
    unsigned short int d_reclen;   /*length of this d_name */ // 这个文件的名字长度
    unsigned char d_type;   /*the type of d_name */ // 文件类型
    char d_name[256];    /*file name(null-terminated)  */ // 这个是文件名
  };
```

```cpp
#include <iostream>
#include <sys/types.h>
#include <dirent.h>
#include <string>
#include <vector>

using namespace std;
int main()
{
    // 1、打开文件目录
    DIR *dirStream;
    const char *path = "/home/qiuyeyijian/workspace/Test";
    dirStream = opendir(path);
    // 2、接下来是读取文件信息
    struct dirent *dirInfo;
    vector<string> name;
    while ((dirInfo = readdir(dirStream)) != 0)
    {
        cout << "Value test: " << dirInfo->d_name << endl;
        name.push_back(dirInfo->d_name);
    } // 注意此时dirStream 已经指向文件尾了
    // 3、最后关闭文件目录
    closedir(dirStream);
    return 0;
}
```



### 其他

```cpp
#include <sys/types.h>
#include <dirent.h>

long telldir(DIR *dirp); //返回与目录流dirp相关联的当前位置（地址）

void seekdir(DIR *dirp, long loc);// 设置目录流dirp指向loc，其中参数loc必须是telldir()函数返回的地址。设置之后下次调用readdir函数将从该位置开始读

void rewinddir(DIR *dirp); // 该函数是将目录流指针dirp重置到开始的位置(地址)
```



## Reference

- [Linux进程伪装：动态修改/proc/self/exe - 先知社区 (aliyun.com)](https://xz.aliyun.com/t/10235)

- [Linux系统 C/C++获取当前文件夹路径和文件名_stitching的博客-CSDN博客](https://blog.csdn.net/qq_40250056/article/details/114832692)





