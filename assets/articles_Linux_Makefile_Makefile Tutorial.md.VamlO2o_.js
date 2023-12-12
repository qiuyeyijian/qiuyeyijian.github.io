import{_ as i,o as a,c as s,R as e}from"./chunks/framework.UjU5Kp2a.js";const g=JSON.parse('{"title":"Makefile Tutorial","description":"","frontmatter":{},"headers":[],"relativePath":"articles/Linux/Makefile/Makefile Tutorial.md","filePath":"articles/Linux/Makefile/Makefile Tutorial.md"}'),l={name:"articles/Linux/Makefile/Makefile Tutorial.md"},n=e(`<h1 id="makefile-tutorial" tabindex="-1">Makefile Tutorial <a class="header-anchor" href="#makefile-tutorial" aria-label="Permalink to &quot;Makefile Tutorial&quot;">​</a></h1><p>需要创建一个名为<code>makefile</code>的文件</p><h2 id="基础知识" tabindex="-1">基础知识 <a class="header-anchor" href="#基础知识" aria-label="Permalink to &quot;基础知识&quot;">​</a></h2><h3 id="_1-makefile-基本格式" tabindex="-1">1. Makefile 基本格式 <a class="header-anchor" href="#_1-makefile-基本格式" aria-label="Permalink to &quot;1. Makefile 基本格式&quot;">​</a></h3><div class="language-makefile vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">makefile</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">target</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: prerequistites</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	command</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	...</span></span></code></pre></div><p><strong>中文描述就是</strong></p><div class="language-makefile vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">makefile</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">目标文件</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: 生成目标文件所需要的依赖文件(可以有多个，以空格隔开)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	生成目标文件所需要的命令（注意前面是一个Tab键，不是四个空格）</span></span></code></pre></div><p><strong>举例</strong></p><p>要生成名字为<code>main</code>的可执行文件，所需要的依赖文件就是<code>main.o</code>。而利用<code>main.o</code>生成<code>main</code>的命令就是<code>gcc main.o -o main</code></p><p>要生成名字为<code>main.o</code>的可执行文件，所需要的依赖文件就是<code>main.c</code>。而利用<code>main.c</code>生成<code>main.o</code>文件的命令就是<code>gcc -c main.c -o main.o</code></p><div class="language-makefile vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">makefile</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">main</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: main.o </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	gcc main.o -o main</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">main.o</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: main.c</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	gcc -c main.c -o main.o</span></span></code></pre></div><p>注意，生成目标文件的依赖文件可以有多个，以空格隔开。只要其中一个依赖文件有所改动，我们就认为目标文件也需要改动，即时你只是加了一行注释而已。再次执行<code>make all</code>命令的时候，生成目标文件的命令就会被执行。</p><p>相反，如果所有的依赖文件都没有被改动，则可以认为目标文件也不需要改动，所以就不会执行生成目标文件的命令。这样在一个工程只改动某一部分时，再次编译的时候可以加快速度。</p><h3 id="_2-makefile-变量" tabindex="-1">2. Makefile 变量 <a class="header-anchor" href="#_2-makefile-变量" aria-label="Permalink to &quot;2. Makefile 变量&quot;">​</a></h3><p>Makefile支持定义变量，但没有传统编程语言的类型概念。一共有四种基本赋值格式：</p><blockquote><ul><li><p><code>= </code> 是最基本的赋值</p></li><li><p><code>:= </code> 是覆盖之前的值</p></li><li><p><code>?= </code> 是如果没有被赋值过就赋予等号后面的值</p></li><li><p><code>+= </code> 是添加等号后面的值</p></li></ul></blockquote><p><code>=</code>赋值最终会从全局角度来看变量的最终值是什么，如果只是简单地赋值，后面不涉及对变量的再次修改，则可以使用，否则建议使用 <code>:= </code>赋值</p><div class="language-makefile vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">makefile</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># a,b的值都是456，因为=赋值会从全局来看，变量最终的值就是变量的值</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">a = 123</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">b = a</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">a = 456</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># a的最终值是456，b的值是123， := 赋值只看本条语句之前变量的值，建议使用这种格式的赋值语句</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">a = 123</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">b = a</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">a = 456</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># a如果之前没有定义，就会被赋值123</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">a ?= 123</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># a 后面会加上456, a的值就是: 123 456</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">a := 123</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">a += 456</span></span></code></pre></div><p>获取变量需要使用<code>$()</code>，Makefile中变量的使用类似于C/C++语言中的宏定义, 比如</p><div class="language-makefile vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">makefile</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">obj := main.o</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">main</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">$(</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">obj</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	gcc </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">$(</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">obj</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">)</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> -o main</span></span></code></pre></div><h4 id="关于常用隐含变量" tabindex="-1">关于常用隐含变量 <a class="header-anchor" href="#关于常用隐含变量" aria-label="Permalink to &quot;关于常用隐含变量&quot;">​</a></h4><p>Makefile中有一些隐含变量，可以分为两类，一类是关于编译器命令的变量，另一类是编译器参数的变量。这些变量都有默认值（不同平台应该不一样，这里就不详细叙述了），个人觉得如果我们要使用这些变量最好再显示定义一次。</p><p>另外，看到别人使用这些变量时，就应该能理解别人为什么这样做</p><div class="language-makefile vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">makefile</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">CC := gcc</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">CFLAGS := -o</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">main</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: main.o</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">	$(</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">CC</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">)</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> main.o </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">$(</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">CFLAGS</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">)</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> main</span></span></code></pre></div><blockquote><p><strong>关于编译命令相关的变量：</strong></p><ul><li>CC : C语言编译程序</li><li>CXX: C++语言编译程序</li></ul></blockquote><blockquote><p><strong>关于编译器参数相关的变量：</strong></p><ul><li>CFLAGS：C语言编译器参数</li><li>CXXFLAGS：C++语言编译器参数</li></ul></blockquote><p>我们可以参照这种规则来书写我们的makefile中的目标：</p><blockquote><ul><li>all：这个伪目标是所有目标的目标，其功能一般是编译所有的目标。</li></ul><ul><li>clean：这个伪目标功能是删除所有被make创建的文件。</li><li>install：这个伪目标功能是安装已编译好的程序，其实就是把目标执行文件拷贝到指定的目标中去。</li><li>print：这个伪目标的功能是例出改变过的源文件。</li><li>tar：这个伪目标功能是把源程序打包备份。也就是一个tar文件。</li><li>dist：这个伪目标功能是创建一个压缩文件，一般是把tar文件压成Z文件。或是gz文件。</li><li>TAGS：这个伪目标功能是更新所有的目标，以备完整地重编译使用。</li><li>check和test:这两个伪目标一般用来测试makefile的流程。</li></ul></blockquote><p>如果你要书写这种功能，最好使用这种名字命名你的目标，这样规范一些，规范的好处就是——不用解释，大家都明白。</p><p>检查规则</p><p><strong>有时候，我们不想让我们的makefile中的规则执行起来，我们只想检查一下我们的命令，或是执行的序列。于是我们可以使用make命令的下述参数：</strong></p><blockquote><ul><li><p>-n, --just-print, --dry-run, --recon 不执行参数，这些参数只是打印命令，不管目标是否更新，把规则和连带规则下的命令打印出来，但不执行，这些参数对于我们调试makefile很有用处。</p></li><li><p>-t, --touch 这个参数的意思就是把目标文件的时间更新，但不更改目标文件。也就是说，make假装编译目标，但不是真正的编译目标，只是把目标变成已编译过的状态。</p></li><li><p>-q, --question 这个参数的行为是找目标的意思，也就是说，如果目标存在，那么其什么也不会输出，当然也不会执行编译，如果目标不存在，其会打印出一条出错信息。</p></li><li><p>-W &lt;file&gt;, --what-if=&lt;file&gt;, --assume-new=&lt;file&gt;, --new-file=&lt;file&gt;</p><p>这个参数需要指定一个文件。一般是是源文件（或依赖文件），Make会根据规则推导来运行依赖于这个文件的命令，一般来说，可以和“-n”参数一同使用，来查看这个依赖文件所发生的规则命令。</p></li></ul></blockquote><p>另外一个很有意思的用法是结合-p 和-v 来输出makefile被执行时的信息。</p><h2 id="reference" tabindex="-1">Reference <a class="header-anchor" href="#reference" aria-label="Permalink to &quot;Reference&quot;">​</a></h2><p>陈皓《跟我一起写Makefile》：<a href="https://github.com/seisman/how-to-write-makefile" target="_blank" rel="noreferrer">https://github.com/seisman/how-to-write-makefile</a></p>`,35),t=[n];function p(h,k,o,c,d,r){return a(),s("div",null,t)}const m=i(l,[["render",p]]);export{g as __pageData,m as default};
