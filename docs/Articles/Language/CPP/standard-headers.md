# 标准头文件

## stdio.h/cstdio

“stdio.h”是包含C语言中标准输入输出 （standard input & output）函数接口的头文件，而C++语言中以示与传统C语言的区别，头文件名称改为了“cstdio”，实际上两个头文件中内容和功能是一样的。所以涉及到标准输入输出的操作时候，只需要包含以上两种头文件的其中一个。

> 需要注意的是，VS2010（其它版本未测试）平台中scanf、printf等标准输入输出操作并不需要手动添加#include<stdio.h>头文件，直接使用函数也并不会报错。但是这是不标准的操作，并且一般网上笔试平台使用的都是gcc编译器，如果不添加头文件，很容易造成VS上调试运行成功的程序，在网上笔试平台调试会报错。

“stdio.h”头文件中主要包含标准输入输出的函数接口，分为以下几个方面：
1. 文件访问
　fopen　freopen　fflush　fclose
2. 二进制输入/输出
　fread fwrite
3. 非格式化输入/输出
　fgetc/getc　fputc/putc　ungetc　fgets　fputs
4. 格式化输入/输出
　scanf/fscanf/sscanf　printf/fprintf/sprintf　perror
5. 文件定位
　ftell　fseek　fgetpos　fsetpos　rewind
6. 错误处理
　feof　ferror
7. 文件操作
　remove　rename　tmpfile

跟文件操作相关的函数接口，笔试一般不需要重点掌握（即函数接口以f开头的），以了解为主。而下面函数接口需要牢记于心

### scanf/printf

```cpp
int nNum;
scanf("%d",&nNum);
printf("%d\n",nNum);
```

%c——字符；　
　　%d——十进制整数；　
　　%u——无符号十进制整数；
　　%f ——浮点数；　
　　％o——八进制整数；　
　　%s——字符串；
　　%p——指针；
　　%%——百分号%



### sscanf/sprintf

一般用在字符串格式化中，有点类似正则表达式。
　　**sscanf是从一个字符串中读进与指定格式相符的数据。而sprintf是格式化的数据写入某个字符串中。**

```cpp
char nzBuf[10];
sscanf("123456", "%4s", buf);  //取最大长度为4字节的字符串。
printf("%s\n", buf);　         //结果：1234
```

```cpp
char nzBuf[10];
int i=2,j=3;
sprintf(nzBuf,"%d+%d=5",i,j);  
printf("%s\n",nzBuf);         //结果：2+3=5
```



### putc/getc

putc是输出一个字符到指定流中；getc是从流中获取字符。

这块除了和fgetc/fputc一样，从文件中读取/写入字符功能以外，一般和stdin/stdout联合使用。

stdin表示标准输入，一般就是指从键盘输入到缓冲区的东西。而stdout表示标准输出，一般表示显示在调试平台上的东西。

```cpp
char Buf;
Buf = getc(stdin);        //从键盘输入的字符流中读取第一位字符
char msg[]="hello\n";
int i =0;
while(msg[i])
    putc(msg[i++],stdout);//依次将msg中字符输出到显示平台上
```



### ungetc

ungetc表示将读入的字符退回到输入流中。这个接口有很大的作用，尤其在一些面试题当中。一般也和stdin联合使用，ungetc(ch,stdin)表示将你读到的字符回退到输入流中。
　　详细使用，可以见下面博文介绍的例题：

> http://blog.csdn.net/fx677588/article/details/52712417　读入一行不知道个数的数据



### getchar/putchar

从stdio流中读字符，相当于getc(stdin），它从标准输入里读取下一个字符。返回类型为int型，返回值为用户输入的ASCⅡ码，出错返回-1。

```cpp
int getchar(void);
```

putchar作用是向终端输出一个字符。其格式为`putchar(c)`。

其中c可以是被单引号（英文状态下）引起来的一个字符，可以是介于0~127之间的一个十进制整型数（包含0和127），也可以是事先用char定义好的一个字符型变量。

当输出正确的时候，返回输出字符转换为的unsigned int 值；而当输出错误的时候，返回 EOF（End of file）文件结束符

```cpp
char c;
while(c=getchar()!='\n')
{
    putchar(c);
    putchar('\n');
}
```



### gets/puts

**从终端读入获取字符串以及将字符串输出到终端上。尤其gets( )是很好的获取一行字符串的好应用，不会遇到空格停止录入数据，它的停止条件是遇到换行。C++11之后将其改成了gets_s形式，使该函数更加鲁棒安全。**两个函数的使用如下：

```cpp
char input[100];
gets(input);//从键盘输入最多99个字符，不够提前加入字符串结束符
puts("Hello world!"); //标准输出
```





## C语言stdio.h与stdlib.h的区别

一、定位不同

1、stdlib.h是standard library标准库头文件，定位在通用工具函数。

2、stdio.h是standard input&output标准输入输出头文件，定位在标准的输入输出工具函数。

二、封装函数不同

1、stdlib.h主要封装了malloc()、calloc()、realloc()、free()、system()、atoi()、atol()、rand()、srand()、exit()等函数。

2、stdio.h主要封装了getchar()、putchar()、scanf()、printf()、gets()、puts()、sprintf()等函数。

三、定义类型不同

1、stdlib.h定义了size_t、wchar_t、div_t、ldiv_t和lldiv_t五种类型。

2、stdio没有定义类型。



## Reference

- [C/C++笔试必须熟悉掌握的头文件系列（一）——stdio.h/cstdio_无鞋童鞋的博客-CSDN博客_c++中stdio.h](https://blog.csdn.net/FX677588/article/details/52957601)
- 



































