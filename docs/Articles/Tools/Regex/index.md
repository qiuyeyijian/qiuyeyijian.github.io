# Regex



### re模块

python中可以使用re.search()方法验证字符串是否符合正则表达式。

re.search()方法扫描整个字符串，并返回第一个成功的匹配。如果匹配失败，则返回None。

语法：

```python
re.search(pattern, string, flags=0)
```

参数：

- pattern : 正则中的模式字符串。
- string : 要被查找替换的原始字符串。
- flags : 标志位，用于控制正则表达式的匹配方式，如：是否区分大小写，多行匹配等等。

```python
pattern = "^[0-9]+\.[0-9]+\.[0-9]+$"
if not re.search(pattern, version):
    print("Incorrect version number!!\n")
```

