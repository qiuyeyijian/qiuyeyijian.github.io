import os
import re
from urllib.parse import unquote


# 遍历根目录下的所有文件，返回指定文件类型的文件列表
def getFileList(path, filetype):
    fileList = list()

    # 如果path是个路径
    if os.path.isdir(path):
        # 遍历该文件夹下的所有文件，
        # dirPath是path下的所有可能路径
        # folders是dirPath下的所有文件夹
        # files是dirPath下的所有文件
        for dirPath, folders, files in os.walk(path):
            # 遍历dirPath下的所有文件， 如果以filetype结尾就加入到文件列表中
            for file in files:
                if file.endswith(filetype):
                    fileList.append(os.path.abspath(os.path.join(dirPath, file)))
    # 返回文件列表
    return fileList


# 读取文件，默认以文本读取，编码类型为utf-8
def readFromFile(file, mode='r', encoding='utf-8'):
    with open(file, mode, encoding=encoding) as f:
        text = f.read()
    return text


# 递归删除空目录
def removeEmptyDir(path):
    for dirPath, folders, files in os.walk(path):
        for folder in folders:
            removeEmptyDir(f"{dirPath}\\{folder}")

        if len(folders) == 0 and len(files) == 0:
            print("删除: " + dirPath)
            os.rmdir(dirPath)


def deploy(path="./"):
    print("获取所有Markdown文件列表和图片列表")
    md_list = getFileList(path, filetype="md")
    img_list = getFileList(path, filetype=("png", "jpg", "jpeg", "bmp", "gif", "svg", "webp"))

    print("获取有效图片列表")
    img_list_alive = list()
    for md in md_list:
        mdDir = os.path.dirname(md)

        file_data = ""
        result = list()
        with open(md, "r", encoding="utf-8") as f:
            text = f.read()
            # 使用正则匹配文中的图片引用
            pattern = re.compile(r"!\[.*?]\((.*?)\)")
            result = pattern.findall(text)

        with open(md, "r", encoding="utf-8") as f:
            for line in f:
                for img in result:
                    if img in line:
                        line = line.replace(img, unquote(img))
                        print(line)
                file_data += line

        with open(md, "w", encoding="utf-8") as f:
            f.write(file_data)


def main(path="./"):
    print("获取所有Markdown文件列表和图片列表")
    md_list = getFileList(path, filetype="md")
    img_list = getFileList(path, filetype=("png", "jpg", "jpeg", "bmp", "gif", "svg", "webp"))

    print("获取有效图片列表")
    img_list_alive = list()
    for md in md_list:
        mdDir = os.path.dirname(md)
        text = readFromFile(md)

        # 使用正则匹配文中的图片引用
        pattern = re.compile(r"!\[.*?]\((.*?)\)")
        result = pattern.findall(text)

        for img in result:
            # typora里的图片路径里的中文会被编码成url，这里需要使用unquote进行解码
            img = unquote(os.path.abspath(mdDir + "\\" + img))
            if img not in img_list_alive:
                img_list_alive.append(img)

    print("删除所有没有被引用的图片")
    for img in img_list:
        if not (img in img_list_alive):
            print("删除文件: ", img)
            os.remove(img)

    print("删除所有空白目录")
    removeEmptyDir(path)


if __name__ == '__main__':
    print("设置当前工作目录")
    os.chdir("../docs")

    # main("./")
    deploy("./")
