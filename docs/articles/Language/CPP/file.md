### 文件读写

```c++
#include  <iostream>
#include <fstream>    // 读写文件的头文件
#include <string>
using namespace std;
/*
 1 文本文件 写文件
     1 包含头文件
            #include <fstream>
     2 创建流对象
            ofstream ofs;
     3 指定路径和打开方式
            ofs.open(路径, 打开方式);
        打开方式：
            ios::in        读文件打开
            ios::out    写文件打开
            ios::ate    从文件尾打开
            ios::app    追加方式打开
            ios::trunc    如果已经有文件 先删除在撞见
            ios::binary    二进制方式
     4 写内容
             ofs << "写点数据" << endl;
     5 关闭文件
            ofs.close();
*/
void write() {
    // 1 包含头文件 #include <fstream>
    // 2 创建流对象
    ofstream ofs;
    // 3 指定路径和打开方式
    ofs.open("text.txt", ios::out);
    // 4 写内容
    ofs << "写点数据" << endl;
    ofs << "写点数据2" << endl;
    ofs << "写点数据3" << endl;

    // 5 关闭文件
    ofs.close();
}

/*
2 文本文件 读文件
     1 包含头文件
            #include <fstream>
     2 创建流对象
            ifstream ifs;
     3 指定路径和打开方式
            ifs.open(路径, 打开方式);
        打开方式：
            ios::in        读文件打开
            ios::out    写文件打开
            ios::ate    从文件尾打开
            ios::app    追加方式打开
            ios::trunc    如果已经有文件 先删除在撞见
            ios::binary    二进制方式
     4 读取 四种方式
            ifs << "写点数据" << endl;
     5 关闭文件
            ifs.close();
*/

void read() {
    // 1 头文件
    // 2 创建流对象
    ifstream ifs;
    // 3 打开文件 判断是否打开成功
    ifs.open("text.txt", ios::in);
    if (!ifs.is_open()) {
        cout << "文件打开失败！" << endl;
        return;
    }
    // 4 读数据 四种方式
    // 第一种方式
    //char buf[1024] = { 0 };
    //while (ifs >> buf) {
    //    cout << buf << endl;
    //}

    // 第二种
    //char buf[1024];
    //while (ifs.getline(buf, sizeof(buf))) {
    //    cout << buf << endl;
    //}

    // 第三种 逐行读取
    //string buf;
    //while (getline(ifs, buf)) {
    //    cout << buf << endl;
    //}

    // 第四种 不推荐用
    char c;
    while ((c=ifs.get()) != EOF) {
        cout << c;
    }


    // 5 关闭流
    ifs.close();
}

int main() {

    read();

    system("pause");
    return 0;
}
```



```cpp
#include<iostream>
#include<sstream>
#include<fstream>
#include<string>
#include<set>
#include<Windows.h>

using namespace std;

//从文件中读取进程相关数据，初始化进程
void init() {
	ifstream ifs;		//创建流对象
	ifs.open("PCB.txt", ios::in);
	if (!ifs.is_open()) {
		cout << "文件打开失败" << endl;
		return;
	}

	string buff;
	int row = 0;		//行数，跳过第0行的中文字段说明
	while (getline(ifs, buff)) {
		if (row) {
			istringstream str(buff);
			string out;
			int column = 0;		//列数
			while (str >> out) {
				switch (column) {
				case 0:
					pcb[row - 1].name = out;
					break;
				case 1:
					pcb[row - 1].runTime = atoi(out.c_str());		//c语言转换形式，string 转 int
					break;
				case 2:
					pcb[row - 1].priority = atoi(out.c_str());
					break;
				case 3:
					pcb[row - 1].status = out;
					break;
				default:
					break;
				}
				column++;
			}
		}
		row++;
	}
}
```



### 生成随机数

```cpp
int main() {
  std::mt19937 rd(std::random_device{}());
  std::uniform_real_distribution<double> dis(0, 1);

  ofstream out;
  out.open("train.txt", ios::out);

  for (int i = 0; i < 1000; ++i) {
    double a = dis(rd), b = dis(rd);
    double c = abs(a - b) > 0.5 ? 1.0 : 0.f;

    out << a << " " << b << " " << c << endl;
  }

  return 0;
}
```



