# Libssh2

在C++中，可以使用操作系统提供的API函数来获取进程退出状态码，以下是在Windows和Linux系统下获取进程退出状态码的方法：

1. Windows系统：

在Windows系统中，可以使用CreateProcess函数来创建子进程，WaitForSingleObject函数来等待子进程退出，GetExitCodeProcess函数来获取子进程的退出状态码。具体示例代码如下：

```c++
#include <windows.h>
#include <iostream>

using namespace std;

int main(int argc, char* argv[]) {
    STARTUPINFO si = { sizeof(si) };
    PROCESS_INFORMATION pi;

    // 创建子进程
    if (CreateProcess(NULL, "test.exe", NULL, NULL, FALSE, 0, NULL, NULL, &si, &pi)) {
        // 等待子进程退出
        WaitForSingleObject(pi.hProcess, INFINITE);

        // 获取子进程的退出状态码
        DWORD exitCode = 0;
        GetExitCodeProcess(pi.hProcess, &exitCode);
        cout << "Child process exit code: " << exitCode << endl;

        // 关闭进程句柄
        CloseHandle(pi.hProcess);
        CloseHandle(pi.hThread);
    }

    return 0;
}
```

2. Linux系统：

在Linux系统中，可以使用fork函数来创建子进程，waitpid函数来等待子进程退出，WEXITSTATUS宏来获取子进程的退出状态码。具体示例代码如下：

```c++
#include <iostream>
#include <unistd.h>
#include <sys/wait.h>

using namespace std;

int main(int argc, char* argv[])
{
    pid_t pid = fork();

    if (pid == 0) {
        // 子进程退出并返回状态码
        _exit(42);
    }

    // 父进程等待子进程退出
    int status = 0;
    waitpid(pid, &status, 0);

    if (WIFEXITED(status)) {
        // 子进程正常退出，获取退出状态码
        int exitCode = WEXITSTATUS(status);
        cout << "Child process exit code: " << exitCode << endl;
    }

    return 0;
}
```

以上是在Windows和Linux系统中获取进程退出状态码的方法，具体使用可以根据实际情况选择适合的方法。