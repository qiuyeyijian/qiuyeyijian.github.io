import{_ as s,c as a,o as n,a as l}from"./app.5e73ec67.js";const p="/assets/static-lib.b9dbb7f3.png",o="/assets/dll-0.2360b7db.png",e="/assets/dll-1.afcc6767.png",c="/assets/dll-2.b6f4b9d3.png",g=JSON.parse('{"title":"静态库和动态库","description":"","frontmatter":{},"headers":[{"level":2,"title":"静态库","slug":"静态库","link":"#静态库","children":[{"level":3,"title":"生成静态链接库","slug":"生成静态链接库","link":"#生成静态链接库","children":[]}]},{"level":2,"title":"动态库","slug":"动态库","link":"#动态库","children":[{"level":3,"title":"生成动态链接库","slug":"生成动态链接库","link":"#生成动态链接库","children":[]},{"level":3,"title":"静态库加载","slug":"静态库加载","link":"#静态库加载","children":[]},{"level":3,"title":"动态库加载","slug":"动态库加载","link":"#动态库加载","children":[]},{"level":3,"title":"动态链接器","slug":"动态链接器","link":"#动态链接器","children":[]}]},{"level":2,"title":"解决动态库无法加载问题","slug":"解决动态库无法加载问题","link":"#解决动态库无法加载问题","children":[{"level":3,"title":"Plan A","slug":"plan-a","link":"#plan-a","children":[]},{"level":3,"title":"Plan B","slug":"plan-b","link":"#plan-b","children":[]},{"level":3,"title":"Plan C","slug":"plan-c","link":"#plan-c","children":[]},{"level":3,"title":"验证","slug":"验证","link":"#验证","children":[]}]},{"level":2,"title":"优缺点","slug":"优缺点","link":"#优缺点","children":[]}],"relativePath":"Linux/lib.md"}'),t={name:"Linux/lib.md"},i=l('<h1 id="静态库和动态库" tabindex="-1">静态库和动态库 <a class="header-anchor" href="#静态库和动态库" aria-hidden="true">#</a></h1><p>不管是 Linux 还是 Windows 中的库文件其本质和工作模式都是相同的，只不过在不同的平台上库对应的文件格式和文件后缀不同。程序中调用的库有两种 静态库和动态库，不管是哪种库文件本质是还是源文件，只不过是二进制格式只有计算机能够识别，作为一个普通人就无能为力了。</p><p>在项目中使用库一般有两个目的，一个是为了使程序更加简洁不需要在项目中维护太多的源文件，另一方面是为了源代码保密，毕竟不是所有人都想把自己编写的程序开源出来。</p><p>当我们拿到了库文件（动态库、静态库）之后<strong>要想使用还必须有这些库中提供的 API 函数的声明</strong>，也就是头文件，把这些都添加到项目中，就可以快乐的写代码了。</p><blockquote><p>静态库之间有依赖关系以及链接顺序问题，书写在最后的库最先被链接。</p></blockquote><h2 id="静态库" tabindex="-1">静态库 <a class="header-anchor" href="#静态库" aria-hidden="true">#</a></h2><p>在 Linux 中静态库由程序 <code>ar</code> 生成，**现在静态库已经不像之前那么普遍了，这主要是由于程序都在使用动态库。**关于静态库的命名规则如下:</p><ul><li>在 Linux 中静态库以 lib 作为前缀，以.a 作为后缀，中间是库的名字自己指定即可，即: <code>libxxx.a</code></li><li>在 Windows 中静态库一般以 lib 作为前后缀，中间是库的名字需要自己指定，即: <code>libxxx.lib</code></li></ul><p><img src="'+p+`" alt="img"></p><h3 id="生成静态链接库" tabindex="-1">生成静态链接库 <a class="header-anchor" href="#生成静态链接库" aria-hidden="true">#</a></h3><p>生成静态库，需要先对源文件进行汇编操作 (使用参数 <code>-c</code>) 得到二进制格式的目标文件 (<code>.o </code>格式), 然后在通过 ar 工具将目标文件打包就可以得到静态库文件了 (<code>libxxx.a</code>)。</p><blockquote><p>使用 ar 工具创建静态库的时候需要三个参数:</p><ul><li>参数c：创建一个库，不管库是否存在，都将创建。</li><li>参数s：创建目标文件索引，这在创建较大的库时能加快时间。</li><li>参数r：在库中插入模块 (替换)。默认新的成员添加在库的结尾处，如果模块名已经在库中存在，则替换同名的模块。</li></ul></blockquote><p>封装一个<code>Log()</code>函数，用来打印测试信息。项目目录如下：</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#82AAFF;">.</span></span>
<span class="line"><span style="color:#A6ACCD;">├── include</span></span>
<span class="line"><span style="color:#A6ACCD;">│   └── tools.h</span></span>
<span class="line"><span style="color:#A6ACCD;">├── main.cpp</span></span>
<span class="line"><span style="color:#A6ACCD;">└── tools.cpp</span></span>
<span class="line"></span></code></pre></div><div class="language-cpp"><button title="Copy Code" class="copy"></button><span class="lang">cpp</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;">// tools.h</span></span>
<span class="line"><span style="color:#89DDFF;">#include</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">string</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#C792EA;">void</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Log</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">std</span><span style="color:#89DDFF;">::</span><span style="color:#FFCB6B;">string</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">str</span><span style="color:#89DDFF;">);</span></span>
<span class="line"></span></code></pre></div><div class="language-cpp"><button title="Copy Code" class="copy"></button><span class="lang">cpp</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;">// tools.cpp</span></span>
<span class="line"><span style="color:#89DDFF;">#include</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">tools.h</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">#include</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">iostream</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#C792EA;">void</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Log</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">std</span><span style="color:#89DDFF;">::</span><span style="color:#FFCB6B;">string</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">str</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">std</span><span style="color:#89DDFF;">::</span><span style="color:#A6ACCD;">cout </span><span style="color:#89DDFF;">&lt;&lt;</span><span style="color:#A6ACCD;"> str </span><span style="color:#89DDFF;">&lt;&lt;</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">std</span><span style="color:#89DDFF;">::</span><span style="color:#A6ACCD;">endl</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><div class="language-cpp"><button title="Copy Code" class="copy"></button><span class="lang">cpp</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;">// main.cpp</span></span>
<span class="line"><span style="color:#89DDFF;">#include</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">iostream</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">#include</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">tools.h</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">main</span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">argc</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">char</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">*</span><span style="color:#A6ACCD;">argv</span><span style="color:#89DDFF;">[])</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#82AAFF;">Log</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Debug...</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>第一步：将源文件进行汇编，得到二进制文件<code>tools.o</code></p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">g++ -c tools.cpp  -I ./include/</span></span>
<span class="line"></span></code></pre></div><p>第二步：将生成的目标文件通过 <code>ar </code>工具打包生成静态库<code>libtools.a</code></p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">ar -rcs libtools.a tools.o</span></span>
<span class="line"></span></code></pre></div><p>第三步：发布。将生成的静态库<code>libtools.a</code>和库对应的头文件<code>tools.h</code>一并发布给使用者就可以了。</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;"># 3. 发布静态库</span></span>
<span class="line"><span style="color:#A6ACCD;">1. tools.h    =</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> 函数声明</span></span>
<span class="line"><span style="color:#A6ACCD;">2. libtools.a =</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> 函数定义</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">二进制格式</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span></code></pre></div><p>第四步：静态库的使用。将头文件和静态库与<code>main.cpp</code>放在同一文件夹下：</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#82AAFF;">.</span></span>
<span class="line"><span style="color:#A6ACCD;">├── libtools.a</span></span>
<span class="line"><span style="color:#A6ACCD;">├── main.cpp</span></span>
<span class="line"><span style="color:#A6ACCD;">└── tools.h</span></span>
<span class="line"></span></code></pre></div><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;"># 4. 编译的时候指定库信息</span></span>
<span class="line"><span style="color:#676E95;">#	-L: 指定库所在的目录(相对或者绝对路径)</span></span>
<span class="line"><span style="color:#676E95;">#	-l: 指定库的名字, 掐头(lib)去尾(.a) ==&gt; tools</span></span>
<span class="line"><span style="color:#676E95;"># -L -l, 参数和参数值之间可以有空格, 也可以没有  -L./ -ltools</span></span>
<span class="line"><span style="color:#A6ACCD;">g++ main.cpp -L ./ -l tools</span></span>
<span class="line"></span></code></pre></div><h2 id="动态库" tabindex="-1">动态库 <a class="header-anchor" href="#动态库" aria-hidden="true">#</a></h2><p>动态链接库是程序运行时加载的库，当动态链接库正确部署之后，运行的多个程序可以使用同一个加载到内存中的动态库，因此在 Linux 中动态链接库也可称之为共享库。</p><p>动态链接库是目标文件的集合，目标文件在动态链接库中的组织方式是按照特殊方式形成的。<strong>库中函数和变量的地址使用的是相对地址（静态库中使用的是绝对地址），其真实地址是在应用程序加载动态库时形成的。</strong></p><p>关于动态库的命名规则如下:</p><ul><li>在 Linux 中动态库以 <code>lib</code> 作为前缀，以<code>.so </code>作为后缀，中间是库的名字自己指定即可，即: <code>libxxx.so</code></li><li>在 Windows 中动态库一般以 <code>lib</code> 作为前缀，以 <code>dll</code> 作为后缀，中间是库的名字需要自己指定，即: <code>libxxx.dll</code></li></ul><h3 id="生成动态链接库" tabindex="-1">生成动态链接库 <a class="header-anchor" href="#生成动态链接库" aria-hidden="true">#</a></h3><p>生成动态链接库是直接使用 gcc 命令并且需要添加 <code>-fPIC（-fpic）</code> 以及 <code>-shared </code>参数。</p><ul><li><code>-fPIC </code>或 <code>-fpic </code>参数的作用是使得 gcc 生成的代码是与位置无关的，也就是使用相对位置。</li><li><code>-shared</code>参数的作用是告诉编译器生成一个动态链接库。</li></ul><p><img src="`+o+`" alt="img"></p><p>封装一个<code>Log()</code>函数，用来打印测试信息。项目目录和代码和生成静态库一样。</p><p>第一步：将源文件进行汇编 (参数-c), 生成与位置无关的目标文件，需要使用参数 <code>-fpic</code>或者<code>-fPIC</code></p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">g++ -c tools.cpp -fpic -I ./include/</span></span>
<span class="line"></span></code></pre></div><p>第二步：将得到的目标文件打包生成动态库，需要使用参数 <code>-shared</code></p><div class="language-cpp"><button title="Copy Code" class="copy"></button><span class="lang">cpp</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">g</span><span style="color:#89DDFF;">++</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">shared tools</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">o </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">o libtools</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">so</span></span>
<span class="line"></span></code></pre></div><p>第三步：发布生成的动态库和相关的头文件</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;"># 3. 发布库文件和头文件</span></span>
<span class="line"><span style="color:#A6ACCD;">1. tools.h</span></span>
<span class="line"><span style="color:#A6ACCD;">2. libt.so</span></span>
<span class="line"></span></code></pre></div><p>第四步：静态库的使用。将头文件和动态库与main.cpp放在同一文件夹下：</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">g++ main.cpp -L ./ -l tools</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># ./a.out: error while loading shared libraries: libtools.so: cannot open shared object file: No such file or directory</span></span>
<span class="line"></span></code></pre></div><h3 id="静态库加载" tabindex="-1">静态库加载 <a class="header-anchor" href="#静态库加载" aria-hidden="true">#</a></h3><p>在程序编译的最后一个阶段也就是<strong>链接</strong>阶段，<strong>提供的静态库会被打包到可执行程序中</strong>。当可执行程序被执行，静态库中的代码也会一并被加载到内存中，因此不会出现静态库找不到无法被加载的问题。</p><h3 id="动态库加载" tabindex="-1">动态库加载 <a class="header-anchor" href="#动态库加载" aria-hidden="true">#</a></h3><p><strong>在程序编译的最后一个阶段也就是链接阶段：</strong></p><ul><li>在 gcc 命令中虽然指定了库路径 (使用参数<code>-L</code>), 但是这个路径并没有记录到可执行程序中，只是检查了这个路径下的库文件是否存在。</li><li>同样对应的动态库文件也没有被打包到可执行程序中，只是在可执行程序中记录了库的名字。</li></ul><p><strong>可执行程序被执行起来之后：</strong></p><ul><li>程序执行的时候会先检测需要的动态库是否可以被加载，加载不到就会提示上边的错误信息。</li><li>当动态库中的函数在程序中被调用了, 这个时候动态库才加载到内存，如果不被调用就不加载。</li><li>动态库的检测和内存加载操作都是由<strong>动态连接器</strong>来完成的。</li></ul><h3 id="动态链接器" tabindex="-1">动态链接器 <a class="header-anchor" href="#动态链接器" aria-hidden="true">#</a></h3><p>动态链接器是一个独立于应用程序的进程，属于操作系统。当用户的程序需要加载动态库的时候动态连接器就开始工作了，很显然动态连接器根本就不知道用户通过 gcc 编译程序的时候通过参数 -L 指定的路径。</p><p>那么动态链接器是如何搜索某一个动态库的呢，在它内部有一个默认的搜索顺序，按照优先级从高到低的顺序分别是：</p><ul><li><p>可执行文件内部的 <code>DT_RPATH</code> 段</p></li><li><p>系统的环境变量<code> LD_LIBRARY_PATH</code></p></li><li><p>系统动态库的缓存文件 <code>/etc/ld.so.cache</code></p></li><li><p>存储动态库 / 静态库的系统目录<code> /lib/</code>,<code> /usr/lib</code> 等</p></li></ul><p>按照以上四个顺序，依次搜索，找到之后结束遍历，最终还是没找到，动态连接器就会提示动态库找不到的错误信息。</p><h2 id="解决动态库无法加载问题" tabindex="-1">解决动态库无法加载问题 <a class="header-anchor" href="#解决动态库无法加载问题" aria-hidden="true">#</a></h2><p>可执行程序生成之后，根据动态链接器的搜索路径，我们可以提供三种解决方案，我们只需要将动态库的路径放到对应的环境变量或者系统配置文件中，同样也可以将动态库拷贝到系统库目录。</p><h3 id="plan-a" tabindex="-1">Plan A <a class="header-anchor" href="#plan-a" aria-hidden="true">#</a></h3><p><strong>将库路径添加到环境变量 LD_LIBRARY_PATH 中</strong></p><p>1、使用Vim打开相关的配置文件</p><ul><li>用户级别: <code>~/.bashrc</code> —&gt; 设置对当前用户有效</li><li>系统级别: <code>/etc/profile</code> —&gt; 设置对所有用户有效</li></ul><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;"># 自己把路径写进去就行了</span></span>
<span class="line"><span style="color:#C792EA;">export</span><span style="color:#A6ACCD;"> LD_LIBRARY_PATH=</span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">LD_LIBRARY_PATH:/root/workspace/test/	</span><span style="color:#676E95;"># 替换成动态链接库所在路径</span></span>
<span class="line"></span></code></pre></div><p>2、让修改的配置文件生效</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;"># 修改的是哪一个就执行对应的那个命令</span></span>
<span class="line"><span style="color:#676E95;"># source 可以简写为一个 . , 作用是让文件内容被重新加载</span></span>
<span class="line"><span style="color:#82AAFF;">source</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">~</span><span style="color:#A6ACCD;">/.bashrc		</span><span style="color:#676E95;"># 或者 . ~/.bashrc</span></span>
<span class="line"><span style="color:#82AAFF;">source</span><span style="color:#A6ACCD;"> /etc/profile		</span><span style="color:#676E95;"># 或者 . /etc/profile</span></span>
<span class="line"></span></code></pre></div><h3 id="plan-b" tabindex="-1">Plan B <a class="header-anchor" href="#plan-b" aria-hidden="true">#</a></h3><p><strong>更新 <code>/etc/ld.so.cache</code> 文件</strong></p><p>1、使用Vim打开配置文件</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">vim /etc/ld.so.conf</span></span>
<span class="line"></span></code></pre></div><p>2、添加动态链接库所在路径，单独占一行</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">include ld.so.conf.d/</span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;">.conf</span></span>
<span class="line"><span style="color:#A6ACCD;">/root/workspace/test/</span></span>
<span class="line"></span></code></pre></div><p>3、让配置文件生效</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;"># 必须使用管理员权限执行这个命令</span></span>
<span class="line"><span style="color:#A6ACCD;">sudo ldconfig   </span></span>
<span class="line"></span></code></pre></div><h3 id="plan-c" tabindex="-1">Plan C <a class="header-anchor" href="#plan-c" aria-hidden="true">#</a></h3><p><strong>拷贝动态库文件到系统库目录<code>/lib/</code>或者<code> /usr/lib</code> 中</strong></p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;"># 库拷贝</span></span>
<span class="line"><span style="color:#A6ACCD;">sudo cp /xxx/xxx/libxxx.so /usr/lib</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># 必须使用管理员权限执行这个命令</span></span>
<span class="line"><span style="color:#A6ACCD;">sudo ldconfig   </span></span>
<span class="line"></span></code></pre></div><h3 id="验证" tabindex="-1">验证 <a class="header-anchor" href="#验证" aria-hidden="true">#</a></h3><p>在启动可执行程序之前，或者在设置了动态库路径之后，我们可以通过一个命令检测程序能不能够通过动态链接器加载到对应的动态库，这个命令叫做 <code>ldd</code></p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">ldd 可执行程序名</span></span>
<span class="line"></span></code></pre></div><h2 id="优缺点" tabindex="-1">优缺点 <a class="header-anchor" href="#优缺点" aria-hidden="true">#</a></h2><table><thead><tr><th>静态库</th><th>动态库</th></tr></thead><tbody><tr><td>静态库被打包到应用程序中加载速度快</td><td>可实现不同进程间的资源共享</td></tr><tr><td>发布程序无需提供静态库，移植方便</td><td>动态库升级简单，只需要替换库文件，无需重新编译应用程序</td></tr><tr><td>相同的库文件数据可能在内存中被加载多份，消耗系统资源，浪费内存</td><td>程序猿可以控制何时加载动态库，不调用库函数动态库不会被加载</td></tr><tr><td>库文件更新需要重新编译项目文件，生成新的可执行程序，浪费时间。</td><td>加载速度比静态库慢，以现在计算机的性能可以忽略</td></tr><tr><td></td><td>发布程序需要提供依赖的动态库</td></tr></tbody></table><p><img src="`+e+'" alt="img"></p><p><img src="'+c+'" alt="img"></p>',83),r=[i];function d(y,C,D,h,A,u){return n(),a("div",null,r)}const F=s(t,[["render",d]]);export{g as __pageData,F as default};
