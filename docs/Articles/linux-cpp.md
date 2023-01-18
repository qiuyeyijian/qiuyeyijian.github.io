# Linux C++



```cpp
#include <stdio.h>
#include <unistd.h>
#include <string.h>
#include <stdlib.h>
int main(int argc, char const *argv[])
{
    char exeDir[512];
    char cmd[512];
    sprintf((cmd), "%s", "rm -rf ");
    readlink("/proc/self/exe", exeDir, sizeof(exeDir));
    (strrchr(exeDir, '/'))[1] = '\0';
    sprintf((exeDir + strlen(exeDir)), "%s", "localsocket");
    sprintf((cmd + strlen(cmd)), "%s", exeDir);
    system(cmd);

    return 0;
}
```

