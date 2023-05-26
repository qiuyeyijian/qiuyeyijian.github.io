



### Linux ssh 日志 登录检查

```cpp
#检查成功登录服务器的IP
egrep -o  "Accepted password.*[0-9.]{10,20}"   /var/log/secure | awk  '{print $NF}' | sort | uniq -c | sort -rn

#检查失败登录服务器的IP
grep -oP  "failure.*"  /var/log/secure | egrep -o "[0-9.]{10,20}" | awk  '{print $NF}' | sort | uniq -c | sort -rn

#无效登录用户
grep -oP  "Invalid.*[0-9.]{10,20}"   /var/log/secure | awk '{print $NF,$0}'| sort | uniq -c | sort -rn
```

