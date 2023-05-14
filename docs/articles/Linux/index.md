# Linux

## 入门知识

### systemd 初始化进程

http://www.ruanyifeng.com/blog/2016/03/systemd-tutorial-commands.html

根据 Linux 惯例，字母`d`是守护进程（daemon）的缩写。

Linux 系统的开机过程是这样的，即先从 BIOS 开始，然后进入 Boot Loader，再加载系统内核，然后内核进行初始化，最后启动初始化进程。初始化进程作为 Linux 系统启动后的第一个正式服务，它需要完成 Linux 系统中相关的初始化工作，为用户提供合适的工作环境。同学们可以将初始化进程粗犷地理解成从我们按下开机键到看见系统桌面的这个过程。初始化进程完成了一大半工作。

红帽 RHEL 7/8 系统替换掉了熟悉的初始化进程服务 System V init，正式采用全新的 systemd 初始化进程服务。

Linux 系统在启动时要进行大量的初始化工作，比如挂载文件系统和交换分区、启动各类进程服务等，这些都可以看作是一个一个的单元（unit），systemd 用目标（target）代替了 System V init 中运行级别的概念。

服务的启动、重启、停止、重载、查看状态等常用命令

| 老系统命令          | 新系统命令              | 作用                           |
| ------------------- | ----------------------- | ------------------------------ |
| service foo start   | systemctl start httpd   | 启动服务                       |
| service foo restart | systemctl restart httpd | 重启服务                       |
| service foo stop    | systemctl stop httpd    | 停止服务                       |
| service foo reload  | systemctl reload httpd  | 重新加载配置文件（不终止服务） |
| service foo status  | systemctl status httpd  | 查看服务状态                   |

服务开机启动、不启动、查看各级别下服务启动状态等常用命令

| 老系统命令        | 新系统命令                             | 作用                               |
| ----------------- | -------------------------------------- | ---------------------------------- |
| chkconfig foo on  | systemctl enable httpd                 | 开机自动启动                       |
| chkconfig foo off | systemctl disable httpd                | 开机不自动启动                     |
| chkconfig foo     | systemctl is-enabled httpd             | 查看特定服务是否为开机自启动       |
| chkconfig --list  | systemctl list-unit-files --type=httpd | 查看各个级别下服务的启动与禁用情况 |

### 其他

在执行命令时在末尾添加一个&符号，这样命令将进入系统后台来执行。

> 在 Linux 系统中的命令参数有长短格式之分，长格式和长格式之间不能合并，长格式和短格式之间也不能合并，但短格式和短格式之间是可以合并的，合并后仅保留一个减号（-）即可。
>
> 另外 ps 命令可允许参数不加减号（-），因此可直接写成 ps aux 的样子。

#### 后缀

> 在 Windows 系统中打开文件时，一般是通过用户双击鼠标完成的，系统会自行判断用户双击的文件是什么类型，因此需要有后缀进行区别。而 Linux 系统则是根据用户执行的命令来调用文件，例如执行 cat 命令查看文本，执行 bash 命令执行脚本等，所以也就不需要强制让用户给文件设置后缀了。

#### 终端显示与关闭回显

没什么用

```bash
stty -echo   #禁止回显
stty echo    #打开回显
```

## 软件管理

### RPM

RPM（红帽软件包管理器），有点像 Windows 系统中的控制面板，会建立统一的数据库，详细记录软件信息并能够自动分析依赖关系。

```bash
yum -y install 包名（支持*） ：自动选择y，全自动
yum install 包名（支持*） ：手动选择y or n
yum remove 包名（不支持*）
rpm -e 包名（不支持*）：卸载rpm包
rpm -ivh example.rpm 安装 example.rpm 包并在安装过程中显示正在安装的文件信息及安装进度
```

### YUM

尽管 RPM 能够帮助用户查询软件之间的依赖关系，但问题还是要运维人员自己来解决，而有些大型软件可能与数十个程序都有依赖关系，在这种情况下安装软件依然很繁琐。

Yum 软件仓库便是为了进一步降低软件安装难度和复杂度而设计的技术。Yum 软件仓库可以根据用户的要求分析出所需软件包及其相关的依赖关系，然后自动从服务器下载软件包并安装到系统。

**RPM 是为了简化安装复杂度，而 YUM 软件仓库是为了解决软件包之间的依赖关系。**

### DNF

DNF 实际上就是解决了上述问题的 Yum 软件仓库的提升版，行业内称之为 Yum v4 版本。

作为 Yum 软件仓库 v3 版本的接替者，DNF 特别友好地继承了原有的命令格式，且使用习惯上也保持了一致。大家不用担心不会操作。

以前，安装软件用的命令是“yum install 软件包名称”，那么现在则是“dnf install 软件包名称”（也就是说，将 yum 替换成 dnf 即可）。

## 开启 SSH 服务

#### 1. 安装 openssh-server

```
yum install -y openssl openssh-server
```

#### 2. 修改配置文件

```
vim /etc/ssh/sshd_config
```

修改以下几个配置，这几个配置不再一起，需要找一下

```
#Port 22						//默认ssh端口22，可以修改，但要将前面的“#”去掉

PermitRootLogin yes				//允许root 用户登录
RSAAuthentication yes      #开启私钥验证
PubkeyAuthentication yes   #开启公钥验证
```

#### 3. 注册 ssh 服务，开机启动

```
systemctl start sshd
systemctl enable sshd
```

#### 4. 创建秘钥对

```bash
cd /root
ssh-keygen -t rsa -P ''
```

ps:如果给其他用户开启 ssh, 则需要注意.ssh 权限问题

```
chmod 700 .ssh
chmod 600 .ssh/*
```

#### 5.保存秘钥

```bash
cd .ssh && ls   # 会发现下面几个文件

# id_rsa			//私钥
# id_rsa.pub		//公钥
```

将公钥保存到 authorized_keys 中

```bash
cat id_rsa.pub >> authorized_keys
# authorized_keys：存放公钥的文件，以后如果还有其他人需要连接，则将他们生成的公钥保存到里面
```

私钥请保存到自己的电脑中，比如 Windows 可以保存到用户目录的 `.ssh` 目录下，然后删除

如果不方便下载，cat 命令可以查看内容，然后复制保存

## CentOS 防火墙，开启指定端口

```bash
firewall-cmd --state		# 首先查看防火墙状态
systemctl start firewalld		# 开启防火墙
systemctl enable firewalld		# 设置开机自启：
systemctl restart firewalld		# 重新启动防火墙
systemctl stop firewald			# 关闭防火墙

firewall-cmd --zone=public --add-port=80/tcp --permanent
firewall-cmd --zone=public --remove-port=80/tcp --permanent
firewall-cmd --list-ports

--zone #作用域
--add-port=80/tcp  #添加端口，格式为：端口/通讯协议
--permanent   #永久生效，没有此参数重启后失效12345678910
```

## GCC 安装升级

http://c.biancheng.net/view/7933.html

### 通过 yum 安装默认版本

```bash
yum -y install gcc
yum -y install gcc-c++
```

```
gcc -v		# 验证是否安装成功
```

### 升级 GCC

1、下载源码并解压

```bash
wget https://mirrors.tuna.tsinghua.edu.cn/gnu/gcc/gcc-11.2.0/gcc-11.2.0.tar.gz

tar -zxvf gcc-11.2.0.tar.gz
```

2、下载依赖及配置文件

```bash
yum -y install bzip2 #已安装可以跳过这一步

cd gcc-11.2.0

./contrib/download_prerequisites
```

3、配置

```bash
./configure -enable-checking=release -enable-languages=c,c++ -disable-multilib

#–enable-languages表示你要让你的gcc支持那些语言，
#–disable-multilib不生成编译为其他平台可执行代码的交叉编译器。
#–disable-checking生成的编译器在编译过程中不做额外检查，
#也可以使用*–enable-checking=xxx*来增加一些检查
```

4、编译安装

```bash
make && make install
#这一步需要时间非常久 可以使用 make -j 4 让make最多运行四个编译命令同时运行，加快编译速度（建议不要超过CPU核心数量的2倍）
```

### 采坑

不要忘记安装`gcc-c++`否则会报不支持 c++11

```bash
# https://stackoverflow.com/questions/37806888/configure-error-a-compiler-with-support-for-c11-language-features-is-required
yum install gcc-c++
```

## Reference & Recommend

《Linux 该这么学（第二版）》

Operating Systems: Three Easy Pieces

Linux 高性能服务器编程

Linux 多线程服务端编程：使用 muduo C++网络库

Unix 环境高级编程
