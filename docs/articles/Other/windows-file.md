# Windows 删除文件

[c/c++跨平台实现新建删除文件夹（文件）及输出文件夹内所有文件名_c++ 删除文件夹_寂寞才学习的博客-CSDN博客](https://blog.csdn.net/venom_snake/article/details/88066475)

```cpp
#include <stdio.h>
#include <string>
#include <string.h>
#include <iostream>
#ifdef _WIN32
#include <direct.h>		//for mkdir rmdir
#include <io.h>			//for access
#elif __linux__
#include <unistd.h>		//for mkdir rmdir
#include <sys/stat.h>	//for access
#include <dirent.h>		//for DIR remove
#endif

#ifdef _WIN32
#define ACCESS _access
#define MKDIR(a) _mkdir((a))
#define RMDIR(a) _rmdir((a))
#elif __linux__
#define ACCESS access
#define MKDIR(a) mkdir((a),0755)
#define RMDIR(a) rmdir((a))
#endif

bool RmDir(const std::string& path)
{
	std::string strPath = path;
#ifdef _WIN32
	struct _finddata_t fb;   //查找相同属性文件的存储结构体
	//制作用于正则化路径
	if (strPath.at(strPath.length() - 1) != '\\' || strPath.at(strPath.length() - 1) != '/')
		strPath.append("\\");
	std::string findPath = strPath + "*";
	intptr_t handle;//用long类型会报错
	handle = _findfirst(findPath.c_str(), &fb);
	//找到第一个匹配的文件
	if (handle != -1L)
	{
		std::string pathTemp;
		do//循环找到的文件 
		{
			//系统有个系统文件，名为“..”和“.”,对它不做处理  
			if (strcmp(fb.name, "..") != 0 && strcmp(fb.name, ".") != 0)//对系统隐藏文件的处理标记
			{
				//制作完整路径
				pathTemp.clear();
				pathTemp = strPath + std::string(fb.name);
				//属性值为16，则说明是文件夹，迭代  
				if (fb.attrib == _A_SUBDIR)//_A_SUBDIR=16
				{
					RmDir(pathTemp.c_str());
				}
				//非文件夹的文件，直接删除。对文件属性值的情况没做详细调查，可能还有其他情况。  
				else
				{
					remove(pathTemp.c_str());
				}
			}
		} while (0 == _findnext(handle, &fb));//判断放前面会失去第一个搜索的结果
		//关闭文件夹，只有关闭了才能删除。找这个函数找了很久，标准c中用的是closedir  
		//经验介绍：一般产生Handle的函数执行后，都要进行关闭的动作。  
		_findclose(handle);
	}
	//移除文件夹  
	return RMDIR(strPath.c_str()) == 0 ? true : false;

#elif __linux__
	if (strPath.at(strPath.length() - 1) != '\\' || strPath.at(strPath.length() - 1) != '/')
		strPath.append("/");
	DIR* d = opendir(strPath.c_str());//打开这个目录
	if (d != NULL)
	{
		struct dirent* dt = NULL;
		while (dt = readdir(d))//逐个读取目录中的文件到dt
		{
			//系统有个系统文件，名为“..”和“.”,对它不做处理
			if (strcmp(dt->d_name, "..") != 0 && strcmp(dt->d_name, ".") != 0)//判断是否为系统隐藏文件
			{
				struct stat st;//文件的信息
				std::string fileName;//文件夹中的文件名
				fileName = strPath + std::string(dt->d_name);
				stat(fileName.c_str(), &st);
				if (S_ISDIR(st.st_mode))
				{
					RmDir(fileName);
				}
				else
				{
					remove(fileName.c_str());
				}
			}
		}
		closedir(d);
	}
	return rmdir(strPath.c_str()) == 0 ? true : false;
#endif

}
```

