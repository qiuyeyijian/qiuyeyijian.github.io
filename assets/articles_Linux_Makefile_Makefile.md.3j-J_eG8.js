import{_ as s,o as a,c as i,R as e}from"./chunks/framework.UjU5Kp2a.js";const m=JSON.parse('{"title":"Makefile","description":"","frontmatter":{},"headers":[],"relativePath":"articles/Linux/Makefile/Makefile.md","filePath":"articles/Linux/Makefile/Makefile.md"}'),n={name:"articles/Linux/Makefile/Makefile.md"},l=e(`<h1 id="makefile" tabindex="-1">Makefile <a class="header-anchor" href="#makefile" aria-label="Permalink to &quot;Makefile&quot;">​</a></h1><h3 id="make-makefile-cmake-qmake" tabindex="-1">make/makefile/cmake/qmake <a class="header-anchor" href="#make-makefile-cmake-qmake" aria-label="Permalink to &quot;make/makefile/cmake/qmake&quot;">​</a></h3><blockquote><ol><li>make 是用来执行Makefile的</li><li>Makefile是类unix环境下(比如Linux)的类似于批处理的&quot;脚本&quot;文件。其基本语法是: <strong>目标+依赖+命令</strong>，只有在<strong>目标</strong>文件不存在，或<strong>目标</strong>比<strong>依赖</strong>的文件更旧，<strong>命令</strong>才会被执行。由此可见，Makefile和make可适用于任意工作，不限于编程。比如，可以用来管理latex。</li><li>Makefile+make可理解为类unix环境下的项目管理工具，但它太基础了，抽象程度不高，而且在windows下不太友好(针对visual studio用户)，于是就有了跨平台项目管理工具cmake</li><li>cmake是跨平台项目管理工具，它用更抽象的语法来组织项目。虽然，仍然是目标，依赖之类的东西，但更为抽象和友好，比如你可用math表示数学库，而不需要再具体指定到底是math.dll还是libmath.so，在windows下它会支持生成visual studio的工程，在linux下它会生成Makefile，甚至它还能生成eclipse工程文件+-</li><li>也就是说，从同一个抽象规则出发，它为各个编译器定制工程文件。</li><li>cmake是抽象层次更高的项目管理工具，cmake命令执行的CMakeLists.txt文件</li><li>qmake是Qt专用的项目管理工具，对应的工程文件是*.pro，在Linux下面它也会生成Makefile，当然，在命令行下才会需要手动执行qmake，完全可以在qtcreator这个专用的IDE下面打开*.pro文件，使用qmake命令的繁琐细节不用你管了。</li></ol></blockquote><p><em><em>总结一下，make用来执行Makefile，cmake用来执行CMakeLists.txt，qmake用来处理</em>.pro工程文件。Makefile的抽象层次最低，cmake和qmake在Linux等环境下最后还是会生成一个Makefile。cmake和qmake支持跨平台，cmake的做法是生成指定编译器的工程文件，而qmake完全自成体系。</em>*</p><p>具体使用时，Linux下，小工程可手动写Makefile，大工程用automake来帮你生成Makefile，要想跨平台，就用cmake。如果GUI用了Qt，也可以用qmake+*.pro来管理工程，这也是跨平台的。当然，cmake中也有针对Qt的一些规则，并代替qmake帮你将qt相关的命令整理好了。</p><p>另外，需要指出的是，make和cmake主要命令只有一条，make用于处理Makefile，cmake用来转译CMakeLists.txt，而qmake是一个体系，用于支撑一个编程环境，它还包含除qmake之外的其它多条命令(比如uic，rcc,moc)。</p><p>上个简图，其中cl表示visual studio的编译器，gcc表示linux下的编译器</p><h3 id="makefile-基本知识" tabindex="-1">Makefile 基本知识 <a class="header-anchor" href="#makefile-基本知识" aria-label="Permalink to &quot;Makefile 基本知识&quot;">​</a></h3><div class="language-makefile vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">makefile</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 可以设置变量，使用的时候需要用 $()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">CC = gcc</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">main</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: main.c foo.o tool.o</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        $(</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">CC</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">)</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> main.c foo.o tool.o -o main</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">foo.o</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: foo.c</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        gcc -c foo.c</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">tool.o</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: tool.c</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        gcc -c tool.c</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">clean</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        rm *.o main</span></span></code></pre></div><h3 id="makefile自动化变量" tabindex="-1">Makefile自动化变量 <a class="header-anchor" href="#makefile自动化变量" aria-label="Permalink to &quot;Makefile自动化变量&quot;">​</a></h3><div class="language-makefile vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">makefile</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">main</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: main.o a.o b.o</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	gcc main.o a.o b.o -o main</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">main.o</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: main.c</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	gcc -c main.c -o main.o</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">a.o</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: a.c</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	gcc -c a.c -o a.o</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">b.o</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: b.c</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	gcc -c b.c -o b.o</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">clean</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	rm *.o main</span></span></code></pre></div><p>上面可以使用自动化变量代替，可以简化Makefile编写</p><div class="language-makefile vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">makefile</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">main</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: main.o a.o b.o</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	gcc *.o -o </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">$@</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	# </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">$@</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 匹配要生成的目标 main</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">%</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.o</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">%</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.c</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	gcc -c </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">$&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> -o </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">$@</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> # </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">$&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 首先取出main.c 然后目标</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">$@</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">就是 main.o 执行cc -c操作</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">					# 接着</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">$&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 取出a.c 然后目标 </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">$@</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 就是 a.o 执行gcc -c操作。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">					# ...</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">clean</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	rm *.o main</span></span></code></pre></div><blockquote><p>$@ : 表示规则中的目标文集。在模式规则中，如果有多个目标，那么，​$@ 就是匹配于目标中模式定义的集合。</p><p>$&lt; :一个个取出依赖，和$@ 相匹配，匹配成功则执行操作。</p></blockquote><h3 id="命令参数变量" tabindex="-1">命令参数变量 <a class="header-anchor" href="#命令参数变量" aria-label="Permalink to &quot;命令参数变量&quot;">​</a></h3><p>一般看到Makefile中都有<code>\${CFLAGS}, \${CXXFLAGS}</code>等参数，这些表示编译器的参数，比如<code>-g, -c, -o</code>等都是参数。如果没有指明其值，则默认值为空</p><blockquote><ul><li>CFLAGS: C语言编译器参数</li><li>CXXFLAGS：C++语言编译器参数</li></ul><p>...</p></blockquote><h3 id="reference" tabindex="-1">Reference <a class="header-anchor" href="#reference" aria-label="Permalink to &quot;Reference&quot;">​</a></h3><p><a href="https://www.zhihu.com/question/27455963/answer/36722992" target="_blank" rel="noreferrer">https://www.zhihu.com/question/27455963/answer/36722992</a></p>`,19),k=[l];function t(h,p,c,o,r,E){return a(),i("div",null,k)}const g=s(n,[["render",t]]);export{m as __pageData,g as default};
