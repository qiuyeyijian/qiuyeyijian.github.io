import{_ as s,v as n,b as a,R as l}from"./chunks/framework.53249f15.js";const p="/assets/image-20210511191145968.2595cf28.png",f=JSON.parse('{"title":"TCP粘包的处理","description":"","frontmatter":{},"headers":[],"relativePath":"articles/Linux/Socket/tcp-packet-sticking.md","filePath":"articles/Linux/Socket/tcp-packet-sticking.md"}'),o={name:"articles/Linux/Socket/tcp-packet-sticking.md"},t=l('<h1 id="tcp粘包的处理" tabindex="-1">TCP粘包的处理 <a class="header-anchor" href="#tcp粘包的处理" aria-label="Permalink to &quot;TCP粘包的处理&quot;">​</a></h1><p>在前面介绍套接字通信的时候说到了 TCP 是传输层协议，它是一个面向连接的、安全的、流式传输协议。<strong>因为数据的传输是基于流的所以发送端和接收端每次处理的数据的量，处理数据的频率可以不是对等的，可以按照自身需求来进行决策。</strong></p><p>TCP 协议是优势非常明显，但是有时也会给我们造成困扰，正所谓：成也萧何败萧何。假设我们有如下需求：</p><blockquote><p>客户端和服务器之间要进行基于 TCP 的套接字通信</p><ul><li>通信过程中客户端会每次会不定期给服务器发送一个不定长度的有特定含义的字符串。</li><li>通信的服务器端每次都需要接收到客户端这个不定长度的字符串，并对其进行解析</li></ul></blockquote><p>根据上面的描述，服务器在接收数据的时候有如下几种情况：</p><ul><li>一次接收到了客户端发送过来的一个完整的数据包</li><li>一次接收到了客户端发送过来的 N 个数据包，由于每个包的长度不定，无法将各个数据包拆开</li><li>一次接收到了一个或者 N 个数据包 + 下一个数据包的一部分，还是很悲剧，无法将数据包拆开</li><li>一次收到了半个数据包，下一次接收数据的时候收到了剩下的一部分 + 下个数据包的一部分，更悲剧，头大了</li><li>另外，还有一些不可抗拒的因素：比如客户端和服务器端的网速不一样，发送和接收的数据量也会不一致</li></ul><p>对于以上描述的现象很多时候我们将其称之为 TCP的粘包问题，但是这种叫法不太对的，本身 TCP 就是面向连接的流式传输协议，特性如此，我们却说是 TCP 这个协议出了问题，这只能说是使用者的无知。多个数据包粘连到一起无法拆分是我们的需求过于复杂造成的，是程序猿的问题而不是协议的问题，TCP 协议表示这锅它不想背。</p><p>现在问题来了，服务器端如果想保证每次都能接收到客户端发送过来的这个不定长度的数据包，程序猿应该如何解决这个问题呢？下面给大家提供几种解决方案：</p><p>1、使用标准的应用层协议（比如：http、https）来封装要传输的不定长的数据包</p><p>2、在每条数据的尾部添加特殊字符，如果遇到特殊字符，代表当条数据接收完毕了</p><ul><li>有缺陷：效率低，需要一个字节一个字节接收，接收一个字节判断一次，判断是不是那个特殊字符串</li></ul><p>3、在发送数据块之前，在数据块最前边添加一个固定大小的数据头，这时候数据由两部分组成：数据头 + 数据块</p><ul><li>数据头：存储当前数据包的总字节数，接收端先接收数据头，然后在根据数据头接收对应大小的字节</li><li>数据块：当前数据包的内容</li></ul><h2 id="解决方案" tabindex="-1">解决方案 <a class="header-anchor" href="#解决方案" aria-label="Permalink to &quot;解决方案&quot;">​</a></h2><p>如果使用 TCP 进行套接字通信，如果发送的数据包粘连到一起导致接收端无法解析，我们通常使用添加包头的方式轻松地解决掉这个问题。关于数据包的包头大小可以根据自己的实际需求进行设定，这里没有啥特殊需求，因此规定包头的固定大小为4个字节，用于存储当前数据块的总字节数。</p><p><img src="'+p+`" alt="image-20210511191145968"></p><h3 id="发送端" tabindex="-1">发送端 <a class="header-anchor" href="#发送端" aria-label="Permalink to &quot;发送端&quot;">​</a></h3><p>对于发送端来说，数据的发送分为 4 步：</p><ul><li>根据待发送的数据长度 N 动态申请一块固定大小的内存：N+4（4 是包头占用的字节数）</li><li>将待发送数据的总长度写入申请的内存的前四个字节中，<strong>此处需要将其转换为网络字节序（大端）</strong></li><li>将待发送的数据拷贝到包头后边的地址空间中，将完整的数据包发送出去（字符串没有字节序问题）</li><li>释放申请的堆内存。</li></ul><p>由于发送端每次都需要将这个数据包完整的发送出去，因此可以设计一个发送函数，如果当前数据包中的数据没有发送完就让它一直发送，处理代码如下：</p><div class="language-cpp"><button title="Copy Code" class="copy"></button><span class="lang">cpp</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">#include</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">arpa/inet.h</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">#include</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">stdlib.h</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">#include</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">string.h</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">#include</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">sys/socket.h</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">#include</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">unistd.h</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/*</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">函数描述: 发送指定的字节数</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">函数参数:</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    - fd: 通信的文件描述符(套接字)</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    - msg: 待发送的原始数据</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    - size: 待发送的原始数据的总字节数</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">函数返回值: 函数调用成功返回发送的字节数, 发送失败返回-1</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">*/</span></span>
<span class="line"><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">writen</span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">fd</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">char*</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">msg</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">size</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">char</span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;"> buf </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> msg</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> count </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> size</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;font-style:italic;">while</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">count </span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">int</span><span style="color:#F07178;"> len </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">send</span><span style="color:#89DDFF;">(</span><span style="color:#F07178;">fd</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> buf</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> count</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">(</span><span style="color:#F07178;">len </span><span style="color:#89DDFF;">==</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">)</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#82AAFF;">close</span><span style="color:#89DDFF;">(</span><span style="color:#F07178;">fd</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;font-style:italic;">else</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">(</span><span style="color:#F07178;">len </span><span style="color:#89DDFF;">==</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">)</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;font-style:italic;">continue</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">    buf </span><span style="color:#89DDFF;">+=</span><span style="color:#F07178;"> len</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    count </span><span style="color:#89DDFF;">-=</span><span style="color:#F07178;"> len</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> size</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/*</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">函数描述: 发送带有数据头的数据包</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">函数参数:</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    - cfd: 通信的文件描述符(套接字)</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    - msg: 待发送的原始数据</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    - len: 待发送的原始数据的总字节数</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">函数返回值: 函数调用成功返回发送的字节数, 发送失败返回-1</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">*/</span></span>
<span class="line"><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">sendMsg</span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">cfd</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">char*</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">msg</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">len</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">msg </span><span style="color:#89DDFF;">==</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">NULL</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">||</span><span style="color:#A6ACCD;"> len </span><span style="color:#89DDFF;">&lt;=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">||</span><span style="color:#A6ACCD;"> cfd </span><span style="color:#89DDFF;">&lt;=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">  // 申请内存空间: 数据长度 + 包头4字节(存储数据长度)</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">char</span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;"> data </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">char</span><span style="color:#89DDFF;">*)</span><span style="color:#82AAFF;">malloc</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">len </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">4</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> bigLen </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">htonl</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">len</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#82AAFF;">memcpy</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">data</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&amp;</span><span style="color:#A6ACCD;">bigLen</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">4</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#82AAFF;">memcpy</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">data </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">4</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> msg</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> len</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">  // 发送数据</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> ret </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">writen</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">cfd</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> data</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> len </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">4</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">  // 释放内存</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#82AAFF;">free</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">data</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> ret</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><blockquote><p><strong>关于数据的发送最后再次强调：字符串没有字节序问题，但是数据头不是字符串是整形，因此需要从主机字节序转换为网络字节序再发送。</strong></p></blockquote><h3 id="接收端" tabindex="-1">接收端 <a class="header-anchor" href="#接收端" aria-label="Permalink to &quot;接收端&quot;">​</a></h3><p>解了套接字的发送端如何发送数据，接收端的处理步骤也就清晰了，具体过程如下：</p><ul><li>首先接收 4 字节数据，并将其从网络字节序转换为主机字节序，这样就得到了即将要接收的数据的总长度</li><li>根据得到的长度申请固定大小的堆内存，用于存储待接收的数据</li><li>根据得到的数据块长度接收固定数目的数据保存到申请的堆内存中</li><li>处理接收的数据</li><li>释放存储数据的堆内存</li></ul><p>从数据包头解析出要接收的数据长度之后，还需要将这个数据块完整的接收到本地才能进行后续的数据处理，因此需要编写一个接收数据的功能函数，保证能够得到一个完整的数据包数据，处理函数实现如下：</p><div class="language-cpp"><button title="Copy Code" class="copy"></button><span class="lang">cpp</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">/*</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">函数描述: 接收指定的字节数</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">函数参数:</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    - fd: 通信的文件描述符(套接字)</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    - buf: 存储待接收数据的内存的起始地址</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    - size: 指定要接收的字节数</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">函数返回值: 函数调用成功返回发送的字节数, 发送失败返回-1</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">*/</span></span>
<span class="line"><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">readn</span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">fd</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">char*</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">buf</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">size</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">char</span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;"> pt </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> buf</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> count </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> size</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;font-style:italic;">while</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">count </span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">int</span><span style="color:#F07178;"> len </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">recv</span><span style="color:#89DDFF;">(</span><span style="color:#F07178;">fd</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> pt</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> count</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">(</span><span style="color:#F07178;">len </span><span style="color:#89DDFF;">==</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">)</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;font-style:italic;">else</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">(</span><span style="color:#F07178;">len </span><span style="color:#89DDFF;">==</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">)</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> size </span><span style="color:#89DDFF;">-</span><span style="color:#F07178;"> count</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">    pt </span><span style="color:#89DDFF;">+=</span><span style="color:#F07178;"> len</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    count </span><span style="color:#89DDFF;">-=</span><span style="color:#F07178;"> len</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> size</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/*</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">函数描述: 接收带数据头的数据包</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">函数参数:</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    - cfd: 通信的文件描述符(套接字)</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    - msg:</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">一级指针的地址，函数内部会给这个指针分配内存，用于存储待接收的数据，这块内存需要使用者释放</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">函数返回值: 函数调用成功返回接收的字节数, 发送失败返回-1</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">*/</span></span>
<span class="line"><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">recvMsg</span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">cfd</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">char**</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">msg</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">  // 接收数据</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">  // 1. 读数据头</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> len </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#82AAFF;">readn</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">cfd</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">char</span><span style="color:#89DDFF;">*)&amp;</span><span style="color:#A6ACCD;">len</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">4</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">  len </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">ntohl</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">len</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#82AAFF;">printf</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">数据块大小: %d</span><span style="color:#A6ACCD;">\\n</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> len</span><span style="color:#89DDFF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">  // 根据读出的长度分配内存，+1 -&gt; 这个字节存储\\0</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">char</span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;"> buf </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">char</span><span style="color:#89DDFF;">*)</span><span style="color:#82AAFF;">malloc</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">len </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> ret </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">readn</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">cfd</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> buf</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> len</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">ret </span><span style="color:#89DDFF;">!=</span><span style="color:#A6ACCD;"> len</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#82AAFF;">close</span><span style="color:#89DDFF;">(</span><span style="color:#F07178;">cfd</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#82AAFF;">free</span><span style="color:#89DDFF;">(</span><span style="color:#F07178;">buf</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">  buf</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">len</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">\\0</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;">msg </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> buf</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> ret</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div>`,27),e=[t];function c(r,y,D,F,i,C){return n(),a("div",null,e)}const u=s(o,[["render",c]]);export{f as __pageData,u as default};
