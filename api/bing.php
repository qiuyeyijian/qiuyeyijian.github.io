<?php
header('Access-Control-Allow-Origin:*');
header("content-type:text/xml;charset=utf-8");
echo file_get_contents('http://cn.bing.com/HPImageArchive.aspx?idx=0&n=1');   // 从bing获取数据
