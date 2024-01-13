import{_ as t,c as e,o,U as a}from"./chunks/framework.isgf4Vyz.js";const r="/assets/image-20211031161422568.4RfT1wqg.png",s="/assets/image-20210919183810978.Vl9ogeh7.png",n="/assets/image-20211031150821341.U0nXqh4O.png",I=JSON.parse('{"title":"网络层","description":"","frontmatter":{},"headers":[],"relativePath":"articles/Computer/计算机网络/网络层.md","filePath":"articles/Computer/计算机网络/网络层.md"}'),d={name:"articles/Computer/计算机网络/网络层.md"},i=a('<h1 id="网络层" tabindex="-1">网络层 <a class="header-anchor" href="#网络层" aria-label="Permalink to &quot;网络层&quot;">​</a></h1><p>MTU，最大传送单元。指的是IP数据报的最大总长度，也是数据链路层一个帧的数据部分的最大长度。一个帧数据部分大小范围为46-1500B。加上首部尾部，一个帧的大小范围为64-1518B。</p><h2 id="分组交换" tabindex="-1">分组交换 <a class="header-anchor" href="#分组交换" aria-label="Permalink to &quot;分组交换&quot;">​</a></h2><p>分组交换又可以进一步分为面向连接的虚电路和无连接的数据报方式。</p><p><img src="'+r+'" alt="image-20211031161422568"></p><h2 id="ip多播" tabindex="-1">IP多播 <a class="header-anchor" href="#ip多播" aria-label="Permalink to &quot;IP多播&quot;">​</a></h2><p>IANA拥有以太网地址块的高24位为<code>00-00-5E</code>，因此TCP/IP协议使用的以太网多播地址块范围为00-00-5E-00-00-00到00-00-5E-FF-FF-FF。</p><p>以太网硬件地址字段中的第一个字节的最低位为1即为多播地址，且这种多播地址占IANA（互联网号码指派管理局）<strong>分配到的地址数的一半</strong>（第24位为0的地址均分配给多播）。则以太网硬件多播地址范围为01-00-5E-00-00-00到01-00-5E-7F-FF-FF。</p><p><strong>由IP地址映射到硬件地址时，前0-23位为<code>01-00-5E</code>，第24位为<code>0</code>，剩下23位来自IP地址的低23位</strong></p><p>由于<strong>IP多播地址与以太网硬件地址的映射关系不是唯一的</strong>，因此收到多播数据报的主机还要在IP层利用软件过滤。</p><p><img src="'+s+'" alt="image-20210919183810978"></p><h2 id="变长子网与定长子网划分" tabindex="-1">变长子网与定长子网划分 <a class="header-anchor" href="#变长子网与定长子网划分" aria-label="Permalink to &quot;变长子网与定长子网划分&quot;">​</a></h2><p>CIDR是路由路由技术使用斜杠表示法进行路由聚合。</p><p>变长子网划分使用斜杠表示法将网络划分成大小不等的子网。一般<strong>子网号</strong>为：0，10，110, 1110，最后是全1。**注意子网全0和全可以使用，但主机号全0和全1一定不能使用。**题目中若使用斜杠表示法，或问最小子网，一般是使用变长子网划分。</p><p>定长子网使用子网掩码将网络划分成大小相等的子网。</p><h2 id="ipv6" tabindex="-1">IPv6 <a class="header-anchor" href="#ipv6" aria-label="Permalink to &quot;IPv6&quot;">​</a></h2><p>IPv6使用<strong>冒号十六进制记法</strong>（colon hexadecimal notation，简写为colon hex），它把每个16位的值用十六进制表示，各值之间用冒号分隔。下面是它两个比较重要的特性：</p><blockquote><p>冒号十六进制允许零压缩，即一连串连续的零可以使用双冒号取代。但是为了不引起歧义，<strong>一个地址只允许使用一次零压缩</strong>。如：<code>FF05::B3</code></p><p>**冒号十六进制可以结合点分十进制。**如：<code>::128.10.2.1</code></p></blockquote><table><thead><tr><th>地址类别</th><th>二进制前缀</th></tr></thead><tbody><tr><td>未指明地址</td><td><code>::/128</code></td></tr><tr><td>环回地址</td><td><code>::1/128</code></td></tr><tr><td>多播地址</td><td><code>FF00::/8</code></td></tr><tr><td>本地链路地址</td><td><code>FE80::/10</code></td></tr><tr><td>全球单播地址</td><td>（除了上述四种外，所有其他二进制前缀）</td></tr></tbody></table><h3 id="ipv4-到-ipv6过渡" tabindex="-1">IPv4 到 IPv6过渡 <a class="header-anchor" href="#ipv4-到-ipv6过渡" aria-label="Permalink to &quot;IPv4 到 IPv6过渡&quot;">​</a></h3><p>从IPv4向IPv6过渡过程中主要使用了<strong>双协议栈和隧道技术</strong></p><p><strong>使用双协议栈技术会造成IPv6首部某些字段无法恢复，比如流标号</strong></p><p><img src="'+n+'" alt="image-20211031150821341"></p><h2 id="sdn" tabindex="-1">SDN <a class="header-anchor" href="#sdn" aria-label="Permalink to &quot;SDN&quot;">​</a></h2><p>SDN（Software Defined Network）即软件定义网络，是一种网络设计理念，或者一种推倒重来的设计思想。只要网络硬件可以集中式软件管理，可编程化，控制转发层面分开，则可以认为这个网络是一个SDN网络。所以说，SDN并不是一个具体的技术，不是一个具体的协议，而是一个思想、一个框架。狭义的SDN是指的“软件定义网络”，广义的SDN的概念还延伸出了：软件定义安全、软件定义存储等等。</p><p><strong>SDN是一种新型网络体系结构</strong>，是一种设计、构建和管理网络的新方法和新概念，但不是一种新型物理网络。SDN的核心思想就是<strong>把网络的控制层面和数据层面分离</strong>，而让控制层面利用软件来控制数据层面中的许多设备。</p><p><strong>OpenFlow协议可被看成是在SDN体系结构中控制层面与数据层面之间的通信接口。</strong></p><p>在SDN的<strong>广义转发</strong>中，<strong>完成“匹配+动作”的设备不局限于网络层工作</strong>，因此不再称为路由器，而称为**“OpenFlow交换机”<strong>或“分组交换机”，或更简单地称为“交换机”。相应地，在SDN中取代传统路由器中转发表的是</strong>“流表（Flow Table）”**。</p><p>SDN特点：控制转发分离、集中式控制、可编程、开放接口、虚拟化。</p><h2 id="内部网关协议" tabindex="-1">内部网关协议 <a class="header-anchor" href="#内部网关协议" aria-label="Permalink to &quot;内部网关协议&quot;">​</a></h2><p>互联网的路由选择协议主要有两种，分别是RIP和OSPF。下面具体介绍这两种协议。</p><p><strong>先介绍RIP协议</strong>：</p><ul><li>路由信息协议（RIP） 是内部网关协议IGP中最先得到广泛使用的协议。RIP是一种分布式的基于距离矢量的路由选择协议，是因特网的标准协议，其最大优点就是实现简单，开销较小。</li><li>基本算法：矢量距离算法（简称V－D算法）的思想是：网关周期性地向外广播路径刷新报文，主要内容是由若干（V，D）序偶组成的序偶表；（V，D）序偶中的V代表“向量”，标识网关可到达的信宿（网关或主机），D代表距离，指出该网关去往信宿V的距离；距离D按驿站的个数计。其他网关收到某网关的（V，D）报文后，据此按照最短路径原则对各自的路由表进行刷新。</li><li>它只适用于小型的网络（15跳就达到极限），如果网络过于庞大，当网络出现故障时，要经过比较长的时间才能将此信息传送到所有的路由器。</li></ul><p><strong>接下来说说什么是OSPF：</strong></p><ul><li>基本定义：OSPF(Open Shortest Path First开放式最短路径优先）是一个内部网关协议(Interior Gateway Protocol，简称IGP），用于在单一自治系统（autonomous system,AS）内决策路由。</li><li>基本算法：迪克斯加算法。 主要是通过向邻居发送HELLO包来建立邻居关系，选取DR等。</li></ul><p>参考文章：<a href="https://blog.csdn.net/u013816144/article/details/50084793" target="_blank" rel="noreferrer">计算机网络原理之RIP以及OSPF对比</a></p>',36),p=[i];function l(c,h,g,P,_,m){return o(),e("div",null,p)}const b=t(d,[["render",l]]);export{I as __pageData,b as default};
