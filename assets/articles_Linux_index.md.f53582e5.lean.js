import{_ as s,v as a,b as n,R as l}from"./chunks/framework.53249f15.js";const A=JSON.parse('{"title":"Linux","description":"","frontmatter":{},"headers":[],"relativePath":"articles/Linux/index.md","filePath":"articles/Linux/index.md"}'),e={name:"articles/Linux/index.md"},p=l(`<h1 id="linux" tabindex="-1">Linux <a class="header-anchor" href="#linux" aria-label="Permalink to &quot;Linux&quot;">​</a></h1><h2 id="入门知识" tabindex="-1">入门知识 <a class="header-anchor" href="#入门知识" aria-label="Permalink to &quot;入门知识&quot;">​</a></h2><h3 id="systemd-初始化进程" tabindex="-1">systemd 初始化进程 <a class="header-anchor" href="#systemd-初始化进程" aria-label="Permalink to &quot;systemd 初始化进程&quot;">​</a></h3><p><a href="http://www.ruanyifeng.com/blog/2016/03/systemd-tutorial-commands.html" target="_blank" rel="noreferrer">http://www.ruanyifeng.com/blog/2016/03/systemd-tutorial-commands.html</a></p><p>根据 Linux 惯例，字母<code>d</code>是守护进程（daemon）的缩写。</p><p>Linux 系统的开机过程是这样的，即先从 BIOS 开始，然后进入 Boot Loader，再加载系统内核，然后内核进行初始化，最后启动初始化进程。初始化进程作为 Linux 系统启动后的第一个正式服务，它需要完成 Linux 系统中相关的初始化工作，为用户提供合适的工作环境。同学们可以将初始化进程粗犷地理解成从我们按下开机键到看见系统桌面的这个过程。初始化进程完成了一大半工作。</p><p>红帽 RHEL 7/8 系统替换掉了熟悉的初始化进程服务 System V init，正式采用全新的 systemd 初始化进程服务。</p><p>Linux 系统在启动时要进行大量的初始化工作，比如挂载文件系统和交换分区、启动各类进程服务等，这些都可以看作是一个一个的单元（unit），systemd 用目标（target）代替了 System V init 中运行级别的概念。</p><p>服务的启动、重启、停止、重载、查看状态等常用命令</p><table><thead><tr><th>老系统命令</th><th>新系统命令</th><th>作用</th></tr></thead><tbody><tr><td>service foo start</td><td>systemctl start httpd</td><td>启动服务</td></tr><tr><td>service foo restart</td><td>systemctl restart httpd</td><td>重启服务</td></tr><tr><td>service foo stop</td><td>systemctl stop httpd</td><td>停止服务</td></tr><tr><td>service foo reload</td><td>systemctl reload httpd</td><td>重新加载配置文件（不终止服务）</td></tr><tr><td>service foo status</td><td>systemctl status httpd</td><td>查看服务状态</td></tr></tbody></table><p>服务开机启动、不启动、查看各级别下服务启动状态等常用命令</p><table><thead><tr><th>老系统命令</th><th>新系统命令</th><th>作用</th></tr></thead><tbody><tr><td>chkconfig foo on</td><td>systemctl enable httpd</td><td>开机自动启动</td></tr><tr><td>chkconfig foo off</td><td>systemctl disable httpd</td><td>开机不自动启动</td></tr><tr><td>chkconfig foo</td><td>systemctl is-enabled httpd</td><td>查看特定服务是否为开机自启动</td></tr><tr><td>chkconfig --list</td><td>systemctl list-unit-files --type=httpd</td><td>查看各个级别下服务的启动与禁用情况</td></tr></tbody></table><h3 id="其他" tabindex="-1">其他 <a class="header-anchor" href="#其他" aria-label="Permalink to &quot;其他&quot;">​</a></h3><p>在执行命令时在末尾添加一个&amp;符号，这样命令将进入系统后台来执行。</p><blockquote><p>在 Linux 系统中的命令参数有长短格式之分，长格式和长格式之间不能合并，长格式和短格式之间也不能合并，但短格式和短格式之间是可以合并的，合并后仅保留一个减号（-）即可。</p><p>另外 ps 命令可允许参数不加减号（-），因此可直接写成 ps aux 的样子。</p></blockquote><h4 id="后缀" tabindex="-1">后缀 <a class="header-anchor" href="#后缀" aria-label="Permalink to &quot;后缀&quot;">​</a></h4><blockquote><p>在 Windows 系统中打开文件时，一般是通过用户双击鼠标完成的，系统会自行判断用户双击的文件是什么类型，因此需要有后缀进行区别。而 Linux 系统则是根据用户执行的命令来调用文件，例如执行 cat 命令查看文本，执行 bash 命令执行脚本等，所以也就不需要强制让用户给文件设置后缀了。</p></blockquote><h4 id="终端显示与关闭回显" tabindex="-1">终端显示与关闭回显 <a class="header-anchor" href="#终端显示与关闭回显" aria-label="Permalink to &quot;终端显示与关闭回显&quot;">​</a></h4><p>没什么用</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">stty</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-echo</span><span style="color:#A6ACCD;">   </span><span style="color:#676E95;font-style:italic;">#禁止回显</span></span>
<span class="line"><span style="color:#FFCB6B;">stty</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">echo</span><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;">#打开回显</span></span></code></pre></div><h2 id="软件管理" tabindex="-1">软件管理 <a class="header-anchor" href="#软件管理" aria-label="Permalink to &quot;软件管理&quot;">​</a></h2><h3 id="rpm" tabindex="-1">RPM <a class="header-anchor" href="#rpm" aria-label="Permalink to &quot;RPM&quot;">​</a></h3><p>RPM（红帽软件包管理器），有点像 Windows 系统中的控制面板，会建立统一的数据库，详细记录软件信息并能够自动分析依赖关系。</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">yum</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-y</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">包名（支持</span><span style="color:#A6ACCD;">*</span><span style="color:#C3E88D;">）</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">：自动选择y，全自动</span></span>
<span class="line"><span style="color:#FFCB6B;">yum</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">包名（支持</span><span style="color:#A6ACCD;">*</span><span style="color:#C3E88D;">）</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">：手动选择y</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">or</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">n</span></span>
<span class="line"><span style="color:#FFCB6B;">yum</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">remove</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">包名（不支持</span><span style="color:#A6ACCD;">*</span><span style="color:#C3E88D;">）</span></span>
<span class="line"><span style="color:#FFCB6B;">rpm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-e</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">包名（不支持</span><span style="color:#A6ACCD;">*</span><span style="color:#C3E88D;">）：卸载rpm包</span></span>
<span class="line"><span style="color:#FFCB6B;">rpm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-ivh</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">example.rpm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">安装</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">example.rpm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">包并在安装过程中显示正在安装的文件信息及安装进度</span></span></code></pre></div><h3 id="yum" tabindex="-1">YUM <a class="header-anchor" href="#yum" aria-label="Permalink to &quot;YUM&quot;">​</a></h3><p>尽管 RPM 能够帮助用户查询软件之间的依赖关系，但问题还是要运维人员自己来解决，而有些大型软件可能与数十个程序都有依赖关系，在这种情况下安装软件依然很繁琐。</p><p>Yum 软件仓库便是为了进一步降低软件安装难度和复杂度而设计的技术。Yum 软件仓库可以根据用户的要求分析出所需软件包及其相关的依赖关系，然后自动从服务器下载软件包并安装到系统。</p><p><strong>RPM 是为了简化安装复杂度，而 YUM 软件仓库是为了解决软件包之间的依赖关系。</strong></p><h3 id="dnf" tabindex="-1">DNF <a class="header-anchor" href="#dnf" aria-label="Permalink to &quot;DNF&quot;">​</a></h3><p>DNF 实际上就是解决了上述问题的 Yum 软件仓库的提升版，行业内称之为 Yum v4 版本。</p><p>作为 Yum 软件仓库 v3 版本的接替者，DNF 特别友好地继承了原有的命令格式，且使用习惯上也保持了一致。大家不用担心不会操作。</p><p>以前，安装软件用的命令是“yum install 软件包名称”，那么现在则是“dnf install 软件包名称”（也就是说，将 yum 替换成 dnf 即可）。</p><h2 id="开启-ssh-服务" tabindex="-1">开启 SSH 服务 <a class="header-anchor" href="#开启-ssh-服务" aria-label="Permalink to &quot;开启 SSH 服务&quot;">​</a></h2><h4 id="_1-安装-openssh-server" tabindex="-1">1. 安装 openssh-server <a class="header-anchor" href="#_1-安装-openssh-server" aria-label="Permalink to &quot;1. 安装 openssh-server&quot;">​</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">yum install -y openssl openssh-server</span></span></code></pre></div><h4 id="_2-修改配置文件" tabindex="-1">2. 修改配置文件 <a class="header-anchor" href="#_2-修改配置文件" aria-label="Permalink to &quot;2. 修改配置文件&quot;">​</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">vim /etc/ssh/sshd_config</span></span></code></pre></div><p>修改以下几个配置，这几个配置不再一起，需要找一下</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">#Port 22						//默认ssh端口22，可以修改，但要将前面的“#”去掉</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">PermitRootLogin yes				//允许root 用户登录</span></span>
<span class="line"><span style="color:#A6ACCD;">RSAAuthentication yes      #开启私钥验证</span></span>
<span class="line"><span style="color:#A6ACCD;">PubkeyAuthentication yes   #开启公钥验证</span></span></code></pre></div><h4 id="_3-注册-ssh-服务-开机启动" tabindex="-1">3. 注册 ssh 服务，开机启动 <a class="header-anchor" href="#_3-注册-ssh-服务-开机启动" aria-label="Permalink to &quot;3. 注册 ssh 服务，开机启动&quot;">​</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">systemctl start sshd</span></span>
<span class="line"><span style="color:#A6ACCD;">systemctl enable sshd</span></span></code></pre></div><h4 id="_4-创建秘钥对" tabindex="-1">4. 创建秘钥对 <a class="header-anchor" href="#_4-创建秘钥对" aria-label="Permalink to &quot;4. 创建秘钥对&quot;">​</a></h4><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">cd</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/root</span></span>
<span class="line"><span style="color:#FFCB6B;">ssh-keygen</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-t</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">rsa</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-P</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;&#39;</span></span></code></pre></div><p>ps:如果给其他用户开启 ssh, 则需要注意.ssh 权限问题</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">chmod 700 .ssh</span></span>
<span class="line"><span style="color:#A6ACCD;">chmod 600 .ssh/*</span></span></code></pre></div><h4 id="_5-保存秘钥" tabindex="-1">5.保存秘钥 <a class="header-anchor" href="#_5-保存秘钥" aria-label="Permalink to &quot;5.保存秘钥&quot;">​</a></h4><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">cd</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">.ssh</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&amp;&amp;</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">ls</span><span style="color:#A6ACCD;">   </span><span style="color:#676E95;font-style:italic;"># 会发现下面几个文件</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># id_rsa			//私钥</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># id_rsa.pub		//公钥</span></span></code></pre></div><p>将公钥保存到 authorized_keys 中</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">cat</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">id_rsa.pub</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&gt;&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">authorized_keys</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># authorized_keys：存放公钥的文件，以后如果还有其他人需要连接，则将他们生成的公钥保存到里面</span></span></code></pre></div><p>私钥请保存到自己的电脑中，比如 Windows 可以保存到用户目录的 <code>.ssh</code> 目录下，然后删除</p><p>如果不方便下载，cat 命令可以查看内容，然后复制保存</p><h2 id="centos-防火墙-开启指定端口" tabindex="-1">CentOS 防火墙，开启指定端口 <a class="header-anchor" href="#centos-防火墙-开启指定端口" aria-label="Permalink to &quot;CentOS 防火墙，开启指定端口&quot;">​</a></h2><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">firewall-cmd</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--state</span><span style="color:#A6ACCD;">		</span><span style="color:#676E95;font-style:italic;"># 首先查看防火墙状态</span></span>
<span class="line"><span style="color:#FFCB6B;">systemctl</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">start</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">firewalld</span><span style="color:#A6ACCD;">		</span><span style="color:#676E95;font-style:italic;"># 开启防火墙</span></span>
<span class="line"><span style="color:#FFCB6B;">systemctl</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">enable</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">firewalld</span><span style="color:#A6ACCD;">		</span><span style="color:#676E95;font-style:italic;"># 设置开机自启：</span></span>
<span class="line"><span style="color:#FFCB6B;">systemctl</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">restart</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">firewalld</span><span style="color:#A6ACCD;">		</span><span style="color:#676E95;font-style:italic;"># 重新启动防火墙</span></span>
<span class="line"><span style="color:#FFCB6B;">systemctl</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">stop</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">firewald</span><span style="color:#A6ACCD;">			</span><span style="color:#676E95;font-style:italic;"># 关闭防火墙</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">firewall-cmd</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--zone=public</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--add-port=80/tcp</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--permanent</span></span>
<span class="line"><span style="color:#FFCB6B;">firewall-cmd</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--zone=public</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--remove-port=80/tcp</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--permanent</span></span>
<span class="line"><span style="color:#FFCB6B;">firewall-cmd</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--list-ports</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">--zone</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">#作用域</span></span>
<span class="line"><span style="color:#A6ACCD;">--add-port</span><span style="color:#89DDFF;">=</span><span style="color:#F78C6C;">80</span><span style="color:#C3E88D;">/tcp</span><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;">#添加端口，格式为：端口/通讯协议</span></span>
<span class="line"><span style="color:#FFCB6B;">--permanent</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;"> </span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">#永久生效，没有此参数重启后失效12345678910</span></span></code></pre></div><h2 id="gcc-安装升级" tabindex="-1">GCC 安装升级 <a class="header-anchor" href="#gcc-安装升级" aria-label="Permalink to &quot;GCC 安装升级&quot;">​</a></h2><p><a href="http://c.biancheng.net/view/7933.html" target="_blank" rel="noreferrer">http://c.biancheng.net/view/7933.html</a></p><h3 id="通过-yum-安装默认版本" tabindex="-1">通过 yum 安装默认版本 <a class="header-anchor" href="#通过-yum-安装默认版本" aria-label="Permalink to &quot;通过 yum 安装默认版本&quot;">​</a></h3><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">yum</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-y</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">gcc</span></span>
<span class="line"><span style="color:#FFCB6B;">yum</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-y</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">gcc-c++</span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">gcc -v		# 验证是否安装成功</span></span></code></pre></div><h3 id="升级-gcc" tabindex="-1">升级 GCC <a class="header-anchor" href="#升级-gcc" aria-label="Permalink to &quot;升级 GCC&quot;">​</a></h3><p>1、下载源码并解压</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">wget</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">https://mirrors.tuna.tsinghua.edu.cn/gnu/gcc/gcc-11.2.0/gcc-11.2.0.tar.gz</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">tar</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-zxvf</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">gcc-11.2.0.tar.gz</span></span></code></pre></div><p>2、下载依赖及配置文件</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">yum</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-y</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">bzip2</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">#已安装可以跳过这一步</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">cd</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">gcc-11.2.0</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">./contrib/download_prerequisites</span></span></code></pre></div><p>3、配置</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">./configure</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-enable-checking=release</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-enable-languages=c,c++</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-disable-multilib</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#–enable-languages表示你要让你的gcc支持那些语言，</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#–disable-multilib不生成编译为其他平台可执行代码的交叉编译器。</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#–disable-checking生成的编译器在编译过程中不做额外检查，</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#也可以使用*–enable-checking=xxx*来增加一些检查</span></span></code></pre></div><p>4、编译安装</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">make</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&amp;&amp;</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">make</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#这一步需要时间非常久 可以使用 make -j 4 让make最多运行四个编译命令同时运行，加快编译速度（建议不要超过CPU核心数量的2倍）</span></span></code></pre></div><h3 id="采坑" tabindex="-1">采坑 <a class="header-anchor" href="#采坑" aria-label="Permalink to &quot;采坑&quot;">​</a></h3><p>不要忘记安装<code>gcc-c++</code>否则会报不支持 c++11</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># https://stackoverflow.com/questions/37806888/configure-error-a-compiler-with-support-for-c11-language-features-is-required</span></span>
<span class="line"><span style="color:#FFCB6B;">yum</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">gcc-c++</span></span></code></pre></div><h2 id="守护进程" tabindex="-1">守护进程 <a class="header-anchor" href="#守护进程" aria-label="Permalink to &quot;守护进程&quot;">​</a></h2><p>在 Linux 终端中，想要执行某个命令开启一个进程并在终端退出后不退出，你可以使用以下两种方法：</p><ol><li>nohup 命令</li></ol><p>使用 <code>nohup</code> 命令可以在终端退出后将进程转为后台执行，不受终端关闭的影响。例如，要在后台运行一个名为 <code>myapp</code> 的应用程序，可以使用以下命令：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">nohup myapp &amp;</span></span></code></pre></div><p>通过在命令结尾添加 <code>&amp;</code>，可以将进程放入后台执行。此时，终端会立即返回命令提示符，你可以关闭终端，进程仍会继续执行。</p><p>如果你想将输出重定向到文件中，可以使用以下命令：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">nohup myapp &gt; myapp.log 2&gt;&amp;1 &amp;</span></span></code></pre></div><p>其中 <code>&gt;</code> 符号表示将标准输出重定向到 <code>myapp.log</code> 文件中，<code>2&gt;&amp;1</code> 表示将标准错误输出（2）也重定向到标准输出（1）中，这样错误信息也会写入到 <code>myapp.log</code> 文件中。</p><ol start="2"><li>screen 命令</li></ol><p>使用 <code>screen</code> 命令可以创建一个虚拟终端窗口，将进程放入该窗口中执行，即使关闭原始终端窗口，进程仍然会继续运行。例如，要在一个新的 <code>screen</code> 窗口中运行一个名为 <code>myapp</code> 的应用程序，可以使用以下命令：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">screen -S myapp</span></span></code></pre></div><p>这将创建一个名为 <code>myapp</code> 的新 <code>screen</code> 窗口。你可以在其中执行 <code>myapp</code> 命令，然后按下 <code>Ctrl+a d</code> 快捷键将窗口挂起并返回到原始终端窗口。</p><p>要重新连接到 <code>myapp</code> 窗口，可以使用以下命令：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">screen -r myapp</span></span></code></pre></div><p>这将重新连接到名为 <code>myapp</code> 的 <code>screen</code> 窗口，你可以查看 <code>myapp</code> 进程的输出和状态。如果你想从 <code>myapp</code> 窗口中退出，可以使用 <code>exit</code> 命令或按下 <code>Ctrl+d</code> 快捷键。</p><h2 id="reference-recommend" tabindex="-1">Reference &amp; Recommend <a class="header-anchor" href="#reference-recommend" aria-label="Permalink to &quot;Reference &amp; Recommend&quot;">​</a></h2><p>《Linux 该这么学（第二版）》</p><p>Operating Systems: Three Easy Pieces</p><p>Linux 高性能服务器编程</p><p>Linux 多线程服务端编程：使用 muduo C++网络库</p><p>Unix 环境高级编程</p>`,92),t=[p];function o(c,r,i,d,y,C){return a(),n("div",null,t)}const u=s(e,[["render",o]]);export{A as __pageData,u as default};
