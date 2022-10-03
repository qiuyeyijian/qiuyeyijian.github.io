## 磁盘管理

####  磁盘分区

```bash
ls /dev | grep sd				//查看当前系统挂载的硬盘

fdisk /dev/sda					//对sda硬盘进行操作

mkfs -t ext4 /dev/sdb1			//格式化主分区


```

### 系统管理

#### 添加组

```bash
groupadd <组名>
```

```bash
-g <gid> 	为新组指定GID，其默认值大于500，且大于系统其他组的GID, 与 -r 互斥
-o       	改组的GID可以不唯一
-r			添加一个系统账号组，指定小于499的第一个未使用数值为该系统组的GID，与 -g 互斥、
-f			若正在创建的组已经存在，将不报错而强制添加该组
```

例：在系统添加一个新组 `student` , 并为其指定GID是600

```bash
groupadd -g 600 student
```

#### 删除组

```bash
groupdel <组名>
```

#### 修改组

```bash
groupmod [-g <新的GID> [-o]] [-n <新组名>] <现有组名>
```

例：把组`student`  的GID值修改为 700， 并将组名改为 `teacher`

```bash
groupmod -g 700 -n teacher student
```

#### 组管理

```bash
gpasswd
```

```bash
-a：添加用户到组；
-d：从组删除用户；
-A：指定管理员；
-M：指定组成员和-A的用途差不多；
-r：删除密码；
-R：限制用户登入组，只有组中的成员才可以用newgrp加入该组。
```

例：给test 组创建一个密码

```bash
[root@localhost tmp]# gpasswd test
Changing the password for group test
New Password:
Re-enter new password:
```

添加user1，让user1来管理test组

```bash
[root@localhost tmp]# useradd user1
[root@localhost tmp]# gpasswd -A user1 test
```

创建user2，user3用户，并且让user1添加这两个账户到test组中

```bash
[root@localhost tmp] useradd user2
[root@localhost tmp] useradd user
[root@localhost tmp] su - user1
[user1@localhost ~] gpasswd -a user2 test
Adding user user2 to group test
[user1@localhost ~] gpasswd -a user3 test
Adding user user3 to group test
```

查看/etc/group文件进行验证

```bash
[root@localhost ~] tail -n 10 /etc/group | grep test
test:x:1001:user2,user3
```



#### 添加用户

```bash
useradd [选项] [用户名]
```

```bash
-c 注释信息，通常为用户 passwd 文件的用户名字段指定用户名或其他相关信息
-d 指定新用户的主目录，默认值是 /home/用户名
-e 用户账号失效日期，在此日期后，该账号将失效,时间格式为 yyyy-mm-dd
-p 指定用户密码
-s 指定用户登录的默认Sehll环境，若不指定参数，则有系统为其指定默认Shell程序
-u 指定用户标志号的数值，系统默认值的下限为99，并且要大于系统中现存的其他用户UID,通常0-99的UID		值保留给系统账号
-G 指定新用户的附加组，该参数对应于 /etc/group 文件中的用户列表字段
-g 指定用户所在的组名或登录时初始组标志号
-n 在创建新用户的账户时，使该用户所在组的组名与该用户的登录名相同
-f 指定用户密码过期后到该用户账号被永久查封之前
```

例：创建一个用户账号 `qiuyeyijian` ，主目录为 `/home/qiuyeyijian`， 登录时使用 bash 作为其Shell程序

```bash
useradd -d /home/qiuyeyijian -s /bin/bash qiuyeyijian
```

创建一个用户 `qiuyeyijian`, 初始组为 `student`附加组为 `teacher`, 

```bash
useradd -g student -G teacher qiuyeyijian
```



#### 修改用户

```bash
usermod <参数> 用户名
```

```bash
-d:修改用户的主目录     #usermod  -d  /ljj/user1  user1
-l:修改用户的账号名称  #usermod  -l  user11  user1
-g:更改用户的基本组
-G：更改用户的附加组   #usermod  -G  group1  user1 
-c:修改备注信息
-e:修改账号的有效期限
-s:修改登录时使用的Shell  
-L:锁定用户密码
-U：解除用户密码
```



#### 删除用户

```bash
userdel 用户名
```

```bash
-r 将用户主目录及该目录下的文件删除，也会将该用户在系统中的其他文件删除
```





### 查看端口占用并删除

```bash
[root@onepiece ~]# lsof -i
# 将会显示 命令 + 进程ID + 进程所属用户, 以及监听的协议、状态等信息
COMMAND     PID USER   FD   TYPE  DEVICE SIZE/OFF NODE NAME
dhclient    728 root    6u  IPv4   11262      0t0  UDP *:bootpc
ntpd        839  ntp   16u  IPv4   13671      0t0  UDP *:ntp
ntpd        839  ntp   18u  IPv4   13677      0t0  UDP localhost:ntp
```

使用`lsof`查看指定端口占用情况

```bash
lsof -i:8081
```

使用`netstat`查看指定端口占用情况

```bash
netstat -anp | grep 8081
```

杀死某个端口的占用进程

```shell
kill -s 9 9646(进程号)
```



### Springboot 部署项目

```bash
nohup java -jar test.jar >temp.txt &
```

