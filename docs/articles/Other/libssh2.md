# Libssh2

通过ssh2协议登录服务器，首先需知道服务器IP和端口，并用socket接口进行连接，这是反问libssh2接口的基础，只有连接上，才可以访问以下接口。

> libssh2_session_init：初始化一个ssh连接
> libssh2_session_set_blocking：设置session是否阻塞
> libssh2_session_handshake：将socket和session握手通信
> libssh2_session_disconnect：断开session的连接
> libssh2_session_free：释放session
> libssh2_userauth_password：检查登录用户名和密码、验证登陆
> libssh2_channel_open_session：打开通道
> libssh2_channel_exec：发送shell命令
> libssh2_channel_read：读取命令处理结果