# Homebrew

## 安装Homebrew

```bash
https://gitee.com/cunkai/HomebrewCN
```



```bash
brew -v
```





## 常见错误

Downloading [https://formulae.brew.sh/api/formula.jws.json](https://links.jianshu.com/go?to=https%3A%2F%2Fformulae.brew.sh%2Fapi%2Fformula.jws.json)**

```bash
==> Downloading https://formulae.brew.sh/api/formula.jws.json
#  1.4%curl: (28) Operation too slow. Less than 100 bytes/sec transferred the last 5 seconds
```

```bash
export HOMEBREW_NO_INSTALL_FROM_API=1
```

