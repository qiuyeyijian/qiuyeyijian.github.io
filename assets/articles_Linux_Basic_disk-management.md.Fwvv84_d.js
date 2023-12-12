import{_ as s,o as i,c as a,R as h}from"./chunks/framework.UjU5Kp2a.js";const c=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"articles/Linux/Basic/disk-management.md","filePath":"articles/Linux/Basic/disk-management.md"}'),t={name:"articles/Linux/Basic/disk-management.md"},n=h(`<h2 id="磁盘管理" tabindex="-1">磁盘管理 <a class="header-anchor" href="#磁盘管理" aria-label="Permalink to &quot;磁盘管理&quot;">​</a></h2><h4 id="磁盘分区" tabindex="-1">磁盘分区 <a class="header-anchor" href="#磁盘分区" aria-label="Permalink to &quot;磁盘分区&quot;">​</a></h4><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ls</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /dev</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> grep</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> sd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">				//查看当前系统挂载的硬盘</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">fdisk</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /dev/sda</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">					//对sda硬盘进行操作</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">mkfs</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -t</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ext4</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /dev/sdb1</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">			//格式化主分区</span></span></code></pre></div><h3 id="系统管理" tabindex="-1">系统管理 <a class="header-anchor" href="#系统管理" aria-label="Permalink to &quot;系统管理&quot;">​</a></h3><h4 id="添加组" tabindex="-1">添加组 <a class="header-anchor" href="#添加组" aria-label="Permalink to &quot;添加组&quot;">​</a></h4><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">groupadd</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">组</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">名</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span></code></pre></div><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">-g</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">gi</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">d</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 	为新组指定GID，其默认值大于500，且大于系统其他组的GID,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 与</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -r</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 互斥</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">-o</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">       	改组的GID可以不唯一</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">-r</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">			添加一个系统账号组，指定小于499的第一个未使用数值为该系统组的GID，与</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -g</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 互斥、</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">-f</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">			若正在创建的组已经存在，将不报错而强制添加该组</span></span></code></pre></div><p>例：在系统添加一个新组 <code>student</code> , 并为其指定GID是600</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">groupadd</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -g</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 600</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> student</span></span></code></pre></div><h4 id="删除组" tabindex="-1">删除组 <a class="header-anchor" href="#删除组" aria-label="Permalink to &quot;删除组&quot;">​</a></h4><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">groupdel</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">组</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">名</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span></code></pre></div><h4 id="修改组" tabindex="-1">修改组 <a class="header-anchor" href="#修改组" aria-label="Permalink to &quot;修改组&quot;">​</a></h4><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">groupmod</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [-g </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">新的GI</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">D</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [-o]] [-n </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">新组名</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">现有组名</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span></code></pre></div><p>例：把组<code>student</code> 的GID值修改为 700， 并将组名改为 <code>teacher</code></p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">groupmod</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -g</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 700</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> teacher</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> student</span></span></code></pre></div><h4 id="组管理" tabindex="-1">组管理 <a class="header-anchor" href="#组管理" aria-label="Permalink to &quot;组管理&quot;">​</a></h4><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">gpasswd</span></span></code></pre></div><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">-a：添加用户到组；</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">-d：从组删除用户；</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">-A：指定管理员；</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">-M：指定组成员和-A的用途差不多；</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">-r：删除密码；</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">-R：限制用户登入组，只有组中的成员才可以用newgrp加入该组。</span></span></code></pre></div><p>例：给test 组创建一个密码</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[root@localhost tmp]# gpasswd test</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Changing</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> the</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> password</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> for</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> group</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> test</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">New</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Password:</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Re-enter</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> new</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> password:</span></span></code></pre></div><p>添加user1，让user1来管理test组</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[root@localhost tmp]# useradd user1</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[root@localhost tmp]# gpasswd -A user1 test</span></span></code></pre></div><p>创建user2，user3用户，并且让user1添加这两个账户到test组中</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[root@localhost tmp] useradd user2</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[root@localhost tmp] useradd user</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[root@localhost tmp] su - user1</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[user1@localhost </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">~</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">] gpasswd -a user2 test</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Adding</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> user</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> user2</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> to</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> group</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> test</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[user1@localhost </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">~</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">] gpasswd -a user3 test</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Adding</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> user</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> user3</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> to</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> group</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> test</span></span></code></pre></div><p>查看/etc/group文件进行验证</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[root@localhost </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">~</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">] tail -n 10 /etc/group </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">|</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> grep</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> test</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">test</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:x:1001:user2,user3</span></span></code></pre></div><h4 id="添加用户" tabindex="-1">添加用户 <a class="header-anchor" href="#添加用户" aria-label="Permalink to &quot;添加用户&quot;">​</a></h4><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">useradd</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [选项] [用户名]</span></span></code></pre></div><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">-c</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 注释信息，通常为用户</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> passwd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 文件的用户名字段指定用户名或其他相关信息</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">-d</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 指定新用户的主目录，默认值是</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /home/用户名</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">-e</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 用户账号失效日期，在此日期后，该账号将失效,时间格式为</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> yyyy-mm-dd</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">-p</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 指定用户密码</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">-s</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 指定用户登录的默认Sehll环境，若不指定参数，则有系统为其指定默认Shell程序</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">-u</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 指定用户标志号的数值，系统默认值的下限为99，并且要大于系统中现存的其他用户UID,通常0-99的UID</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">		值保留给系统账号</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">-G</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 指定新用户的附加组，该参数对应于</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /etc/group</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 文件中的用户列表字段</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">-g</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 指定用户所在的组名或登录时初始组标志号</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">-n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 在创建新用户的账户时，使该用户所在组的组名与该用户的登录名相同</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">-f</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 指定用户密码过期后到该用户账号被永久查封之前</span></span></code></pre></div><p>例：创建一个用户账号 <code>qiuyeyijian</code> ，主目录为 <code>/home/qiuyeyijian</code>， 登录时使用 bash 作为其Shell程序</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">useradd</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -d</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /home/qiuyeyijian</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -s</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /bin/bash</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> qiuyeyijian</span></span></code></pre></div><p>创建一个用户 <code>qiuyeyijian</code>, 初始组为 <code>student</code>附加组为 <code>teacher</code>,</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">useradd</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -g</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> student</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -G</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> teacher</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> qiuyeyijian</span></span></code></pre></div><h4 id="修改用户" tabindex="-1">修改用户 <a class="header-anchor" href="#修改用户" aria-label="Permalink to &quot;修改用户&quot;">​</a></h4><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">usermod</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">参</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">数</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 用户名</span></span></code></pre></div><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">-d:修改用户的主目录</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">     #usermod  -d  /ljj/user1  user1</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">-l:修改用户的账号名称</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  #usermod  -l  user11  user1</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">-g:更改用户的基本组</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">-G：更改用户的附加组</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   #usermod  -G  group1  user1 </span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">-c:修改备注信息</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">-e:修改账号的有效期限</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">-s:修改登录时使用的Shell</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  </span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">-L:锁定用户密码</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">-U：解除用户密码</span></span></code></pre></div><h4 id="删除用户" tabindex="-1">删除用户 <a class="header-anchor" href="#删除用户" aria-label="Permalink to &quot;删除用户&quot;">​</a></h4><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">userdel</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 用户名</span></span></code></pre></div><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">-r</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 将用户主目录及该目录下的文件删除，也会将该用户在系统中的其他文件删除</span></span></code></pre></div><h3 id="查看端口占用并删除" tabindex="-1">查看端口占用并删除 <a class="header-anchor" href="#查看端口占用并删除" aria-label="Permalink to &quot;查看端口占用并删除&quot;">​</a></h3><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[root@onepiece </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">~</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]# lsof -i</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 将会显示 命令 + 进程ID + 进程所属用户, 以及监听的协议、状态等信息</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">COMMAND</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">     PID</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> USER</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   FD</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   TYPE</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  DEVICE</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> SIZE/OFF</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> NODE</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> NAME</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">dhclient</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    728</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> root</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    6</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">u</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  IPv4</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">   11262</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">      0</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">t0</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  UDP</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> *</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">:bootpc</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ntpd</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        839</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  ntp</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">   16</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">u</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  IPv4</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">   13671</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">      0</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">t0</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  UDP</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> *</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">:ntp</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ntpd</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        839</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  ntp</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">   18</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">u</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  IPv4</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">   13677</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">      0</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">t0</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  UDP</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> localhost:ntp</span></span></code></pre></div><p>使用<code>lsof</code>查看指定端口占用情况</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">lsof</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -i:8081</span></span></code></pre></div><p>使用<code>netstat</code>查看指定端口占用情况</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">netstat</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -anp</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> grep</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 8081</span></span></code></pre></div><p>杀死某个端口的占用进程</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">kill</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -s</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 9</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 9646</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">进程号</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><h3 id="springboot-部署项目" tabindex="-1">Springboot 部署项目 <a class="header-anchor" href="#springboot-部署项目" aria-label="Permalink to &quot;Springboot 部署项目&quot;">​</a></h3><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">nohup</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> java</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -jar</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> test.jar</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">temp.txt</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> &amp;</span></span></code></pre></div><h2 id="创建指定大小的文件" tabindex="-1">创建指定大小的文件 <a class="header-anchor" href="#创建指定大小的文件" aria-label="Permalink to &quot;创建指定大小的文件&quot;">​</a></h2><p>【truncate】</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">truncate</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -s</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 25</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">M</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> test.txt</span></span></code></pre></div><p>【fallocate】</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">fallocate</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -l</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 25000000</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> test.txt</span></span></code></pre></div><p>【dd】</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">dd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> if=/dev/urandom</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> of=test.txt</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> bs=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">25</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">MB</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> count=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">dd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> if=/dev/zero</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> of=test.txt</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> bs=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">25</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">MB</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> count=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span></span></code></pre></div><p>【head】</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">head</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -c</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 25</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">MB</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /dev/urandom</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> test.txt</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">head</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -c</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 25</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">MB</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /dev/zero</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> test.txt</span></span></code></pre></div>`,58),l=[n];function p(e,k,d,F,r,g){return i(),a("div",null,l)}const y=s(t,[["render",p]]);export{c as __pageData,y as default};
