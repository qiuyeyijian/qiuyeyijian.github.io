#! /bin/bash
# ======================================
# author: qiuyeyijian
# ======================================

# 回到根目录
cd ~

# 生成ssh密钥，名字为：id_rsa
echo | ssh-keygen

# 进入 .ssh
cd .ssh

# 复制公钥id_rsa.pub到 authorized_keys
cat id_rsa.pub >> authorized_keys

# 更改SSH端口号, 禁止密码登录
if [ $1 ]
then
        # 更改SSH端口号
        sed -i "s/#Port 22/Port $1/g" /etc/ssh/sshd_config

        # 禁止账号密码登录
        sed -i 's/PasswordAuthentication yes/PasswordAuthentication no/g' /etc/ssh/sshd_config

fi

# 显示私钥便于用户复制
echo "你现在可以凭借SSH私钥登录到此系统了！"
echo "SSH私钥为："
cat id_rsa
