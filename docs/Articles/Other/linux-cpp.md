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



## 执行系统命令

```cpp
#include <stdio.h>
#include <unistd.h>

int main(int argc ,char **argv){
	
	char ret[1024] = {0};
	FILE *fp;

	//FILE *popen(const char *command, const char *type);
	fp = popen("ls -l","r");

	//size_t fwrite(const void *ptr, size_t size, size_t nmemb,FILE *stream);
	int nread = fread(ret,1,1024,fp);
	printf("read ret %d byte, %s\n",nread,ret);
	
	return 0;
}

```

