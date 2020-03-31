function objToString(data) {
    //加上时间参数，使得每次访问地址不一样
    data.time = new Date().getTime();
    let res = [];

    for (let key in data) {
        if (data.hasOwnProperty(key)) {
            res.push(encodeURIComponent(key) + "=" + encodeURIComponent(data[key]));
        }
    }
    return res.join("&");
}

function ajax(option) {
    //0. 拿到参数
    let str = objToString(option.data);
    //1. 创建一个异步对象
    let xmlHttp, timer;
    if (window.XMLHttpRequest) {
        //code for IE7+, Firefox, Chrome, Opera, Safari
        xmlHttp = new XMLHttpRequest();
    } else {
        //Code for IE6, IE5
        xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    //2. 设置请求方式和请求地址
    if (option.type.toLowerCase() === "get") {
        xmlHttp.open(option.type, option.url + "?" + str, true);
        //3. 发送请求
        xmlHttp.send();
    }else {
        //2. 设置请求方式和请求地址
        xmlHttp.open(option.type, option.url, true);
        //setRequestHeader只能写在这两个中间
        xmlHttp.setRequestHeader("content-type","application/x-www-form-urlencoded");
        //3. 发送请求
        xmlHttp.send(str);
    }

    //4. 监听对象状态变化
    xmlHttp.onreadystatechange = function (ev2) {
        if (xmlHttp.readyState === 4) {
            //请求成功，清除定时器
            clearInterval(timer);
            if (xmlHttp.status >= 200 && xmlHttp.status <= 300 || xmlHttp.status === 304) {
                console.log("接收到服务器返回的数据");
                option.success(xmlHttp);
            }
            else {
                option.error(xmlHttp);
            }

        }
    };
    //设置一个定时器，处理响应时间，超过就断开
    if (option.timeout) {
        timer = setInterval(function () {
            alert("中断请求");
            xmlHttp.abort();
            clearInterval(timer);
        }, option.timeout)
    }
}