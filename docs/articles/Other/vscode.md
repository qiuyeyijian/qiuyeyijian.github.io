# VSCode



## no matching host key type found. Their offer: ssh-rsa报错信息具体方法

修改在`~/.ssh`目录下的config文件，添加以下内容

```
Host *
HostkeyAlgorithms +ssh-rsa
PubkeyAcceptedKeyTypes +ssh-rsa
```

