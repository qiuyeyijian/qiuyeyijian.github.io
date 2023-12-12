# Ubuntu



### 添加add-apt-repository

```
sudo apt-get install software-properties-common
```



## 升级GCC

### 添加编译链

```smali
sudo add-apt-repository ppa:ubuntu-toolchain-r/test
sudo apt update
```

### 安装

```apache
sudo apt-get install gcc-9 g++-9
```

这里要安装8.x版本则将上述命令替换成8即可

### 修改gcc、g++默认配置

#### gcc

```awk
sudo update-alternatives --install /usr/bin/gcc gcc /usr/bin/gcc-9 100
sudo update-alternatives --install /usr/bin/gcc gcc /usr/bin/gcc-5 50
```

这里的100和50是优先级，数值越大，优先级越高
执行完上述命令以后，后续需要切换版本可以通过如下命令更改：

```sql
sudo update-alternatives --config gcc
```

运行上述命令后终端会显示一个表，此时输入想要设定的gcc版本前面的序号（0，1，2……），再回车即可

#### g++

```brainfuck
sudo update-alternatives --install /usr/bin/g++ g++ /usr/bin/g++-9 100
sudo update-alternatives --install /usr/bin/g++ g++ /usr/bin/g++-5 50
```

这里的100和50是优先级，数值越大，优先级越高
执行完上述命令以后，后续需要切换版本可以通过如下命令更改：

```brainfuck
sudo update-alternatives --config g++
```

运行上述命令后终端会显示一个表，此时输入想要设定的g++版本前面的序号（0，1，2……），再回车即可

### 删除条目

如果在配置优先级那里写错了，需要删除条目
比如 输入了以下命令

```awk
sudo update-alternatives --install /usr/bin/gcc gcc /usr/bin/g++-5 50
```

使用如下命令删除：

```apache
sudo update-alternatives gcc /usr/bin/g++-5
```



### 更换镜像源

```bash
pip config set global.index-url https://pypi.tuna.tsinghua.edu.cn/simple
```



