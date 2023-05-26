import{_ as s,o as a,c as o,O as l}from"./chunks/framework.4afe7240.js";const F=JSON.parse('{"title":"代码覆盖率GCOV/LCOV","description":"","frontmatter":{},"headers":[],"relativePath":"articles/Tools/UnitTest/Coverage/index.md","filePath":"articles/Tools/UnitTest/Coverage/index.md"}'),n={name:"articles/Tools/UnitTest/Coverage/index.md"},e=l(`<h1 id="代码覆盖率gcov-lcov" tabindex="-1">代码覆盖率GCOV/LCOV <a class="header-anchor" href="#代码覆盖率gcov-lcov" aria-label="Permalink to &quot;代码覆盖率GCOV/LCOV&quot;">​</a></h1><h2 id="覆盖率的类型" tabindex="-1">覆盖率的类型 <a class="header-anchor" href="#覆盖率的类型" aria-label="Permalink to &quot;覆盖率的类型&quot;">​</a></h2><p>先来看一下，当我们在说“覆盖率”的时候我们到底是指的什么。</p><p>实际上，代码覆盖率有下面几种类型：</p><ul><li><strong>函数覆盖率</strong>：描述有多少比例的函数经过了测试。</li><li><strong>语句覆盖率</strong>：描述有多少比例的语句经过了测试。</li><li><strong>分支覆盖率</strong>：描述有多少比例的分支（例如：<code>if-else</code>，<code>case</code>语句）经过了测试。</li><li><strong>条件覆盖率</strong>：描述有多少比例的可能性经过了测试。</li></ul><p>这其中，函数覆盖率最为简单，就不做说明了。</p><p>语句覆盖率是我们最常用的。因为它很直观的对应到我们写的每一行代码。</p><p>而分支覆盖率和条件覆盖率可能不太好理解，需要做一下说明。</p><p>以下面这个C语言函数为例：</p><div class="language-cpp"><button title="Copy Code" class="copy"></button><span class="lang">cpp</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">foo</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">x</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">y</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> z </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">((</span><span style="color:#A6ACCD;">x </span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&amp;&amp;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">y </span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">))</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        z </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> x</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> z</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><p>这个函数中包含了一个<code>if</code>语句，因此<code>if</code>语句成立或者不成立构成了两个分支。所以如果只测试了<code>if</code>成立或者不成立的其中之一，其分支覆盖率只有 <code>1/2 = 50%</code>。</p><p>而条件覆盖率需要考虑每种可能性的情况。</p><p>对于<code>if (a &amp;&amp; b)</code>这样的语句，其一共有四种可能的情况：</p><ol><li>a = true, b = true</li><li>a = true, b = false</li><li>a = false, b = true</li><li>a = false, b = false</li></ol><blockquote><p>请读者思考一下：对于三层<code>if</code>嵌套，每个<code>if</code>语句包含三个布尔变量的代码，如果要做到100%的条件覆盖率，一共要测试多少种情况。</p><p>很显示，在编写代码的时候，尽可能的减少代码嵌套，并且简化逻辑运算是一项很好的习惯。</p><p>便于测试的代码也是便于理解和维护的，反之则反。</p></blockquote><p>有了这些概念之后，我们就可以看懂测试报告中的覆盖率了。</p><h2 id="gcov" tabindex="-1">gcov <a class="header-anchor" href="#gcov" aria-label="Permalink to &quot;gcov&quot;">​</a></h2><p><a href="https://gcc.gnu.org/onlinedocs/gcc/gcov.html" target="_blank" rel="noreferrer">gcov</a>是由GCC工具链提供的代码覆盖率生成工具。它可以很方便的和GCC编译器配合使用。</p><p>通常情况下，安装好GCC工具链，也就同时包含了<code>gcov</code>命令行工具。</p><blockquote><p>对于代码覆盖率工具所做的工作，可以简单的理解为：标记一次运行过程中，哪些代码被执行过，哪些没有执行。</p><p>因此，即便没有测试代码，直接运行编译产物也可以得到代码的覆盖率。只不过，通常情况下这样得到的覆盖率较低罢了。</p></blockquote><h3 id="使用" tabindex="-1">使用 <a class="header-anchor" href="#使用" aria-label="Permalink to &quot;使用&quot;">​</a></h3><p>这里我们以另外一个简单的代码示例来说明gcov的使用。</p><div class="language-CPP"><button title="Copy Code" class="copy"></button><span class="lang">CPP</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// test.c</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">#include</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">stdio.h</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">main</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">void</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;font-style:italic;">for</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> i </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> i </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">10</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> i</span><span style="color:#89DDFF;">++)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">(</span><span style="color:#F07178;">i </span><span style="color:#89DDFF;">%</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">3</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">==</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#82AAFF;">printf</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">%d is divisible by 3</span><span style="color:#A6ACCD;">\\n</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> i</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">(</span><span style="color:#F07178;">i </span><span style="color:#89DDFF;">%</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">11</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">==</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#82AAFF;">printf</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">%d is divisible by 11</span><span style="color:#A6ACCD;">\\n</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> i</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><p>要通过gcov生成代码覆盖率。需要在编译时，增加参数<code>--coverage</code>。如果使用CMake构建，则需要<code>set(CMAKE_CXX_FLAGS &quot;\${CMAKE_CXX_FLAGS} --coverage&quot;)</code></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">gcc --coverage test.c</span></span></code></pre></div><p>此处的编译结果除了得到可执行文件<code>a.out</code>，还会得到一个<code>test.gcno</code>文件。该文件包含了代码与行号的信息，在生成覆盖率时会需要这个文件。</p><blockquote><p><code>--coverage</code>等同于编译参数<code>-fprofile-arcs -ftest-coverage</code>以及在链接时增加<code>-lgcov</code>。参数说明参考：<a href="https://gcc.gnu.org/onlinedocs/gcc/Instrumentation-Options.html?spm=a2c6h.12873639.article-detail.9.3fa465bc1ZP21j#Instrumentation-Options" target="_blank" rel="noreferrer">Instrumentation Options (Using the GNU Compiler Collection (GCC))</a></p><p>很显然，带<code>--coverage</code>编译参数得到的编译产物会比不带这个参数要包含更多的信息，因此编译产物会更大。所以这个参数只适合在需要生成代码覆盖率的时候才加上。对于正式发布的编译产物，不应该添加这个编译参数。</p></blockquote><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">./a.out</span></span></code></pre></div><p>当我们执行上面编译出来的可执行文件<code>a.out</code>时，我们还会得到每个源码文件对应的<code>gcda</code>后缀的文件。由<code>test.gcno</code>和<code>test.gcda</code>这两个文件，便可以得到代码的覆盖率结果了。</p><blockquote><p>关于这两个文件的说明请参见这里：<a href="https://gcc.gnu.org/onlinedocs/gcc-4.1.2/gcc/gcov-Data-Files.html" target="_blank" rel="noreferrer">Brief description of gcov data files</a></p></blockquote><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">gcov</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">test</span></span></code></pre></div><p>只需要通过gcov指定源文件的名称（不需要带后缀）：<code>gcov test</code>，便可以得到包含覆盖率的结果文件 <code>test.c.gcov</code>了。</p><p>回顾一下我们刚刚的操作内容：</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 编译源文件</span></span>
<span class="line"><span style="color:#FFCB6B;">gcc</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--coverage</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">test.c</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 查看生成物及大小</span></span>
<span class="line"><span style="color:#FFCB6B;">ll</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 运行程序</span></span>
<span class="line"><span style="color:#FFCB6B;">./a.out</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 查看生成物及大小</span></span>
<span class="line"><span style="color:#FFCB6B;">ll</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 生成代码覆盖率文件.gcov</span></span>
<span class="line"><span style="color:#FFCB6B;">gcov</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">test</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 查看生成物及大小</span></span>
<span class="line"><span style="color:#FFCB6B;">ll</span></span></code></pre></div><p>我们可以<code>cat test.c.gcov</code>一下，查看覆盖率的结果：</p><p>这个结果应该还是很容易理解的，最左边一列描述了代码的覆盖情况：</p><ul><li><code>-</code>： 表示该行代码不需要被计入覆盖率分析中</li><li><code>整数</code>： 表示被执行的次数</li><li><code>#####</code>：表示该行没有被覆盖</li></ul><p>需要注意的是，<code>gcov</code> 对注释和空行的处理是基于源代码的，而不是基于编译后的代码。因此，在进行代码覆盖率分析时，需要确保源代码和编译后的代码一致，并且编译器没有对代码进行优化等操作，以确保分析结果的准确性和可靠性。</p><p>另外，注释和空行通常不会影响代码的实际执行路径和覆盖率，因此在分析覆盖率结果时，可以忽略这些行的影响，重点关注实际的代码执行情况和覆盖率分析结果。</p><h2 id="lcov" tabindex="-1">lcov <a class="header-anchor" href="#lcov" aria-label="Permalink to &quot;lcov&quot;">​</a></h2><p><a href="https://gcc.gnu.org/onlinedocs/gcc/gcov.html" target="_blank" rel="noreferrer">gcov</a>得到的结果是本文形式的。但很多时候，我们可能希望得到更加美观和便于浏览的结果。此时就可以使用<a href="http://ltp.sourceforge.net/coverage/lcov.php" target="_blank" rel="noreferrer">lcov</a>了。</p><p>lcov是gcov工具的图形前端。它收集多个源文件的gcov数据，并生成描述覆盖率的HTML页面。生成的结果中会包含概述页面，以方便浏览。</p><p>lcov支持我们前面提到的所有四种覆盖率。这个链接是lcov生成的报告样例：<a href="http://ltp.sourceforge.net/coverage/lcov/output/index.html?spm=a2c6h.12873639.article-detail.25.3fa465bc1ZP21j" target="_blank" rel="noreferrer">lcov - code coverage report</a>。</p><h3 id="使用-1" tabindex="-1">使用 <a class="header-anchor" href="#使用-1" aria-label="Permalink to &quot;使用&quot;">​</a></h3><p>对于lcov的使用方法可以通过下面这条命令查询：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">lcov --help</span></span></code></pre></div><p>通过输出我们可以看到，这个命令的参数有简短（例如<code>-c</code>）和完整（例如<code>--capture</code>)两种形式，其作用是一样的。</p><p>这里主要关注的下面这几个参数：</p><ul><li><code>-c</code> 或者 <code>--capture</code> 指定从编译产物中收集覆盖率信息。</li><li><code>-d DIR</code> 或者 <code>--directory DIR</code> 指定编译产物的路径。</li><li><code>-e FILE PATTERN</code> 或者 <code>--extract FILE PATTERN</code> 从指定的文件中根据PATTERN过滤结果。</li><li><code>-o FILENAME</code> 或者 <code>--output-file FILENAME</code> 指定覆盖率输出的文件名称。</li></ul><p>另外还有需要说明的是：</p><ul><li>lcov默认不会打开分支覆盖率，因此我们还需要增加这个参数来打开分支覆盖率的计算：<code>--rc lcov_branch_coverage=1</code></li><li>lcov输出的仍然是一个中间产物，我们还需要通过lcov软件包提供的另外一个命令<code>genhtml</code>来生成最终需要的html格式的覆盖率报告文件。同样的，为了打开分支覆盖率的计算，我们也要为这个命令增加<code>--rc genhtml_branch_coverage=1</code>参数</li></ul><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># lcov --rc lcov_branch_coverage=1 -d . -c -o collector.info </span></span>
<span class="line"><span style="color:#FFCB6B;">lcov</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--rc</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">lcov_branch_coverage=</span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--directory</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">.</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--capture</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--output-file</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">coverage.info</span></span></code></pre></div><p>覆盖率数据可能包含不需要覆盖的库和其他文件。使用 <code>lcov</code> 工具可以过滤掉这些文件。例如，过滤掉 <code>gtest</code> 库和任何其他不需要覆盖的文件：</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">lcov</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--rc</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">lcov_branch_coverage=</span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--remove</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">coverage.info</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">/usr/*</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">*gtest*</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--output-file</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">coverage.info</span></span></code></pre></div><p>使用 <code>genhtml</code> 工具生成 HTML 报告。例如，使用以下命令生成报告：</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">genhtml</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--rc</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">genhtml_branch_coverage=</span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--legend</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">coverage.info</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--output-directory</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">coverage_report</span></span></code></pre></div><p>这段代码从我们前面编译的结果中收集覆盖率结果，并将结果输出到<code>coverage.info_tmp</code>文件中。但是这里面会包含非项目源码的覆盖率（例如google test），所以我们又通过另外一条命令来指定&quot;src&quot;文件夹进行过滤。最后，通过<code>genhtml</code>得到html格式的报告。</p>`,57),p=[e];function c(t,r,i,y,C,D){return a(),o("div",null,p)}const A=s(n,[["render",c]]);export{F as __pageData,A as default};
