import{_ as s,o as a,c as l,O as n}from"./chunks/framework.4afe7240.js";const D=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"articles/Language/Verilog/README.md","filePath":"articles/Language/Verilog/README.md"}'),t={name:"articles/Language/Verilog/README.md"},o=n(`<h2 id="verilog-学习" tabindex="-1">Verilog 学习 <a class="header-anchor" href="#verilog-学习" aria-label="Permalink to &quot;Verilog 学习&quot;">​</a></h2><h3 id="前言" tabindex="-1">前言 <a class="header-anchor" href="#前言" aria-label="Permalink to &quot;前言&quot;">​</a></h3><p>从本质上讲，Verilog HDL 所具有的混合抽象层次由两种数据类型提供，这两种数据类型是线网（net）和变量（variable）。</p><p>对于连续性复制，变量和线网表达式能够连续地将值驱动到线网，从而提供了基本的结构化建模方法。</p><p>对于过程赋值，变量和网络值得计算结果可以存储于变量当中，从而提供了基本的行为级建模方法。</p><h3 id="verilog-hdl的主要功能" tabindex="-1">Verilog HDL的主要功能 <a class="header-anchor" href="#verilog-hdl的主要功能" aria-label="Permalink to &quot;Verilog HDL的主要功能&quot;">​</a></h3><p>Verilog HDL中有两类基本数据类型：<strong>线网数据类型和寄存器数据类型</strong>。线网类型表示构件之间的物理连线，寄存器类型表示抽象的数据存储元件。</p><h3 id="verilog-hdl的数" tabindex="-1">Verilog HDL的数 <a class="header-anchor" href="#verilog-hdl的数" aria-label="Permalink to &quot;Verilog HDL的数&quot;">​</a></h3><p>占用的bit数就是该数的位宽；Verilog HDL 常用的基数有二进制<code>b或B</code>, 十进制 <code>d或D</code>，十六进制 <code>h或H</code>，八进制 <code>o或O</code>; 值就是该数对应的基数值</p><table><thead><tr><th>占用的bit数</th><th>分隔符</th><th>基数(进制)</th><th>值</th></tr></thead><tbody><tr><td>4</td><td>&#39;</td><td>b</td><td>110</td></tr></tbody></table><div class="language-verilog"><button title="Copy Code" class="copy"></button><span class="lang">verilog</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">4&#39;b1010</span></span>
<span class="line"><span style="color:#F78C6C;">3&#39;d300</span></span>
<span class="line"><span style="color:#F78C6C;">2&#39;h91</span></span></code></pre></div><h3 id="verilog-hdl-的系统函数" tabindex="-1">Verilog HDL 的系统函数 <a class="header-anchor" href="#verilog-hdl-的系统函数" aria-label="Permalink to &quot;Verilog HDL 的系统函数&quot;">​</a></h3><p>Verilog HDL的系统函数是提供给开发人员实现某些特定功能的、以<code> $</code> 开头的函数，用户在定义变量时应注意避免与系统函数名发生冲突</p><div class="language-verilog"><button title="Copy Code" class="copy"></button><span class="lang">verilog</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">$display</span><span style="color:#A6ACCD;">(</span><span style="color:#C3E88D;">&quot;I love Verilog HDL!&quot;</span><span style="color:#A6ACCD;">);				</span><span style="color:#676E95;font-style:italic;">// 打印 I love Verilog HDL!</span></span>
<span class="line"><span style="color:#82AAFF;">$finish</span><span style="color:#A6ACCD;">;				</span><span style="color:#676E95;font-style:italic;">//结束本次仿真</span></span></code></pre></div><h3 id="verilog-hdl-数据对象" tabindex="-1">Verilog HDL 数据对象 <a class="header-anchor" href="#verilog-hdl-数据对象" aria-label="Permalink to &quot;Verilog HDL 数据对象&quot;">​</a></h3><p>Verilog HDL 代码中使用到的数据对象有以下几种，线网型常用和默认的种类是<strong>wire类型</strong></p><ul><li>线网型（net）</li><li>寄存器型（reg）</li><li>存储器型</li><li>整型（integer）</li><li>时间型（time）</li><li>实型（real）</li><li>参数型（parameter）</li><li>字符串型（string）</li></ul><h3 id="verilog-hdl-操作符" tabindex="-1">Verilog HDL 操作符 <a class="header-anchor" href="#verilog-hdl-操作符" aria-label="Permalink to &quot;Verilog HDL 操作符&quot;">​</a></h3><table><thead><tr><th>赋值操作符</th><th>&lt;=，=</th></tr></thead><tbody><tr><td>算术操作符</td><td>+，-，*，/，%，**</td></tr><tr><td>逻辑操作符</td><td>&amp;&amp;，||，！</td></tr><tr><td>关系操作符</td><td>&gt;，&lt;，&gt;=，&lt;=</td></tr><tr><td>相等操作符</td><td>==，!=，===，!==</td></tr></tbody></table><p><strong>1. 赋值操作符 &lt;=</strong></p><p>该操作符在进程块中使用，是非阻塞赋值。由于是在进程中使用，所以被赋值的数据对象必须是reg型。</p><p><strong>2. 赋值操作符 =</strong></p><p>该操作符在进程块或assign连续赋值语句中使用。被赋值的的数据对象可以是reg型或wire型。其中在进程块中的赋值方式是阻塞赋值。</p><div class="language-verilog"><button title="Copy Code" class="copy"></button><span class="lang">verilog</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">assign</span><span style="color:#A6ACCD;"> data </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">~</span><span style="color:#A6ACCD;">data;		</span><span style="color:#676E95;font-style:italic;">//assign 语句中赋值操作符的使用</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F78C6C;">always</span><span style="color:#A6ACCD;"> @(data_A, data_B) </span><span style="color:#F78C6C;">begin</span></span>
<span class="line"><span style="color:#A6ACCD;">    data </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> data_A </span><span style="color:#89DDFF;">&amp;</span><span style="color:#A6ACCD;"> data_B;				</span><span style="color:#676E95;font-style:italic;">// 阻塞赋值</span></span>
<span class="line"><span style="color:#A6ACCD;">    data </span><span style="color:#89DDFF;">&lt;=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3&#39;b100</span><span style="color:#A6ACCD;">;		</span><span style="color:#676E95;font-style:italic;">//非阻塞赋值</span></span>
<span class="line"><span style="color:#F78C6C;">end</span></span></code></pre></div><p><strong>3. 幂运算</strong></p><p>使用方式 ：A ** B， 返回A的B次方的积</p><p><strong>4. 拼接操作符 {}</strong></p><div class="language-verilog"><button title="Copy Code" class="copy"></button><span class="lang">verilog</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">{s,a,b}				</span><span style="color:#676E95;font-style:italic;">//拼接之后的位宽是s, a, b 三个信号的位宽之和</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">{</span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;">{s}}				</span><span style="color:#676E95;font-style:italic;">//拼接好之后的位宽是2倍的s的位宽</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">{</span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;">{s}, a}			</span><span style="color:#676E95;font-style:italic;">// 拼接好之后的位宽是 2*s + a</span></span></code></pre></div><h3 id="verilog-hdl-的并行语句" tabindex="-1">Verilog HDL 的并行语句 <a class="header-anchor" href="#verilog-hdl-的并行语句" aria-label="Permalink to &quot;Verilog HDL 的并行语句&quot;">​</a></h3><p>并行语句是硬件描述语言的一大特点，他与想C语言那样的高级程序设计语言最大的不同之处是其<strong>并行语句的执行时并列进行的，而不会因为书写顺序的先后而产生执行顺序的先后</strong>。</p><p>Verilog HDL 语言支持的并行语句主要有以下4种</p><blockquote><ul><li>assign 连续赋值语句</li><li>模块实例化语句。</li><li>initial 语句</li><li>always 语句</li></ul></blockquote><h4 id="assign-连续赋值语句" tabindex="-1">assign 连续赋值语句 <a class="header-anchor" href="#assign-连续赋值语句" aria-label="Permalink to &quot;assign 连续赋值语句&quot;">​</a></h4><p><strong>只要想实现的组合电路能够用表达式写出来，使用assign连续赋值语句就能够实现其功能</strong></p><p>assign 连续赋值语句的三个重要应用是：</p><p><strong>1. 不同信号之间的连线</strong></p><p><strong>2. 组合电路的实现</strong></p><p><strong>3. 双向端口的操作</strong></p><h4 id="initial-初始化语句" tabindex="-1">initial 初始化语句 <a class="header-anchor" href="#initial-初始化语句" aria-label="Permalink to &quot;initial 初始化语句&quot;">​</a></h4><p>initial 初始化语句一般用于仿真测试的信号赋值，产生一些特定的信号，而不用于可综合设计。initial 语句在仿真运行中只运行一次，在仿真的0时刻开始执行，执行后立即挂起不再执行。同一文件可以有多个initial 初始化语句。</p><h4 id="always-进程语句" tabindex="-1">always 进程语句 <a class="header-anchor" href="#always-进程语句" aria-label="Permalink to &quot;always 进程语句&quot;">​</a></h4><p>always 语句与 initial 语句有三点不同：</p><ul><li>always 语句是循环执行的；</li><li>alway 语句是可综合的</li><li>always 语句必须有时序控制</li></ul><p>两者相同点是：都在0时刻开始执行；都可以有一条或者多条顺序语句。</p><h3 id="verilog-hdl-的顺序语句" tabindex="-1">Verilog HDL 的顺序语句 <a class="header-anchor" href="#verilog-hdl-的顺序语句" aria-label="Permalink to &quot;Verilog HDL 的顺序语句&quot;">​</a></h3><p>顺序语句只在仿真时间上是相对于并行语句而言的，实际硬件运行不一定顺序执行的。</p><p>Verilog HDL 语言支持的顺序语句主要有以下4种：</p><ul><li>赋值语句</li><li>if 语句</li><li>case 语句</li><li>循环语句</li></ul><h4 id="顺序赋值语句" tabindex="-1">顺序赋值语句 <a class="header-anchor" href="#顺序赋值语句" aria-label="Permalink to &quot;顺序赋值语句&quot;">​</a></h4><p>顺序赋值语句（也称过程赋值）是出现在initial 初始化语句，always 进程及任务与函数中的赋值语句。顺序赋值语句分为阻塞顺序赋值（=）与非阻塞书序赋值语句（&lt;=）</p><h4 id="条件语句" tabindex="-1">条件语句 <a class="header-anchor" href="#条件语句" aria-label="Permalink to &quot;条件语句&quot;">​</a></h4><h5 id="if-条件选择语句" tabindex="-1">if 条件选择语句 <a class="header-anchor" href="#if-条件选择语句" aria-label="Permalink to &quot;if 条件选择语句&quot;">​</a></h5><div class="language-verilog"><button title="Copy Code" class="copy"></button><span class="lang">verilog</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">if</span><span style="color:#A6ACCD;"> (条件判断表达式)</span></span>
<span class="line"><span style="color:#A6ACCD;">    顺序语句 </span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;">;</span></span>
<span class="line"><span style="color:#F78C6C;">else</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">if</span><span style="color:#A6ACCD;"> (条件判断表达式)</span></span>
<span class="line"><span style="color:#A6ACCD;">    顺序语句 </span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;">;</span></span>
<span class="line"><span style="color:#F78C6C;">else</span></span>
<span class="line"><span style="color:#A6ACCD;">    顺序语句 </span><span style="color:#F78C6C;">3</span><span style="color:#A6ACCD;">;</span></span></code></pre></div><h5 id="case-条件选择语句" tabindex="-1">case 条件选择语句 <a class="header-anchor" href="#case-条件选择语句" aria-label="Permalink to &quot;case 条件选择语句&quot;">​</a></h5><div class="language-verilog"><button title="Copy Code" class="copy"></button><span class="lang">verilog</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">always</span><span style="color:#A6ACCD;"> @(case_sel, a, b) </span><span style="color:#F78C6C;">begin</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F78C6C;">case</span><span style="color:#A6ACCD;">(case_sel)</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F78C6C;">2&#39;b00</span><span style="color:#A6ACCD;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">            dout </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> a </span><span style="color:#89DDFF;">&amp;</span><span style="color:#A6ACCD;"> b;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F78C6C;">2&#39;b01</span><span style="color:#A6ACCD;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">            dout </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> a </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> b;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F78C6C;">2&#39;b10</span><span style="color:#A6ACCD;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">            dout </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> a ^ b;				</span><span style="color:#676E95;font-style:italic;">//异或</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F78C6C;">2&#39;b11</span><span style="color:#A6ACCD;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">            dout </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> a </span><span style="color:#89DDFF;">~</span><span style="color:#A6ACCD;">^b;				</span><span style="color:#676E95;font-style:italic;">//同或</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F78C6C;">default</span><span style="color:#A6ACCD;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">            dout </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> a </span><span style="color:#89DDFF;">&amp;</span><span style="color:#A6ACCD;"> b;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F78C6C;">endcase</span></span>
<span class="line"><span style="color:#F78C6C;">end</span></span></code></pre></div><blockquote><p>Verilog HDL 针对电路特性还提供了case语句的另外两种形式：<code>casez</code>和<code>casex</code>。其中<code>casez</code>语句忽略表达式两边的z部分，<code>casex</code>忽略表达式两边的x部分和z部分。即在表达式进行比较时，不将该位的状态考虑在内，这样就可以灵活地设置对信号的某些位进行比较</p></blockquote><div class="language-verilog"><button title="Copy Code" class="copy"></button><span class="lang">verilog</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">casez</span><span style="color:#A6ACCD;">(a)</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F78C6C;">3&#39;b11z</span><span style="color:#A6ACCD;">: out </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;">;	</span><span style="color:#676E95;font-style:italic;">//当a=110,111,11z时，都有out = 1;</span></span></code></pre></div><div class="language-verilog"><button title="Copy Code" class="copy"></button><span class="lang">verilog</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">casex</span><span style="color:#A6ACCD;">(a)</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F78C6C;">2&#39;b1x</span><span style="color:#A6ACCD;">: out</span><span style="color:#89DDFF;">=</span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;">;		</span><span style="color:#676E95;font-style:italic;">//当a=10,11,1x,1z时，都有out = 1;</span></span></code></pre></div><h4 id="循环语句" tabindex="-1">循环语句 <a class="header-anchor" href="#循环语句" aria-label="Permalink to &quot;循环语句&quot;">​</a></h4><h5 id="for-循环语句" tabindex="-1">for 循环语句 <a class="header-anchor" href="#for-循环语句" aria-label="Permalink to &quot;for 循环语句&quot;">​</a></h5><div class="language-verilog"><button title="Copy Code" class="copy"></button><span class="lang">verilog</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">integer</span><span style="color:#A6ACCD;"> i;</span></span>
<span class="line"><span style="color:#F78C6C;">integer</span><span style="color:#A6ACCD;"> num;</span></span>
<span class="line"><span style="color:#F78C6C;">reg</span><span style="color:#A6ACCD;">[</span><span style="color:#F78C6C;">7</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;">] data;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F78C6C;">initial</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">begin</span></span>
<span class="line"><span style="color:#A6ACCD;">    data </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">8&#39;b10010111</span><span style="color:#A6ACCD;">;</span></span>
<span class="line"><span style="color:#F78C6C;">end</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F78C6C;">always</span><span style="color:#A6ACCD;"> @(</span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;">) </span><span style="color:#F78C6C;">begin</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F78C6C;">#10</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">for</span><span style="color:#A6ACCD;"> (i </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;">; i </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">8</span><span style="color:#A6ACCD;">; i</span><span style="color:#89DDFF;">++</span><span style="color:#A6ACCD;">) </span><span style="color:#F78C6C;">begin</span><span style="color:#A6ACCD;">				</span><span style="color:#676E95;font-style:italic;">//#10 代表延时10ns</span></span>
<span class="line"><span style="color:#A6ACCD;">        	</span><span style="color:#F78C6C;">if</span><span style="color:#A6ACCD;">(data[i] </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1&#39;b1</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">            	num </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> num </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F78C6C;">end</span></span>
<span class="line"><span style="color:#F78C6C;">end</span></span></code></pre></div><h5 id="repeat-循环语句" tabindex="-1">repeat 循环语句 <a class="header-anchor" href="#repeat-循环语句" aria-label="Permalink to &quot;repeat 循环语句&quot;">​</a></h5><p>repeat 循环语句直接指定将它下面的语句执行指定的次数，执行完成后退出循环</p><div class="language-verilog"><button title="Copy Code" class="copy"></button><span class="lang">verilog</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">repeat</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">8</span><span style="color:#A6ACCD;">) </span><span style="color:#F78C6C;">begin</span></span>
<span class="line"><span style="color:#A6ACCD;">    num </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> num </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;">;</span></span>
<span class="line"><span style="color:#F78C6C;">end</span></span></code></pre></div><h5 id="while-循环" tabindex="-1">while 循环 <a class="header-anchor" href="#while-循环" aria-label="Permalink to &quot;while 循环&quot;">​</a></h5><div class="language-verilog"><button title="Copy Code" class="copy"></button><span class="lang">verilog</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">integer</span><span style="color:#A6ACCD;"> i;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F78C6C;">initial</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">begin</span></span>
<span class="line"><span style="color:#A6ACCD;">    i </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">10</span><span style="color:#A6ACCD;">;</span></span>
<span class="line"><span style="color:#F78C6C;">end</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F78C6C;">#10</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">while</span><span style="color:#A6ACCD;">(i </span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;">) </span><span style="color:#F78C6C;">begin</span><span style="color:#A6ACCD;">				</span><span style="color:#676E95;font-style:italic;">//#10 代表延时10ns</span></span>
<span class="line"><span style="color:#A6ACCD;">    i </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> i </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;">;</span></span>
<span class="line"><span style="color:#F78C6C;">end</span></span></code></pre></div><h5 id="forever-循环语句" tabindex="-1">forever 循环语句 <a class="header-anchor" href="#forever-循环语句" aria-label="Permalink to &quot;forever 循环语句&quot;">​</a></h5><p>forever 循环语句是永远执行的语句，没有跳出循环的机制。这个特点决定了它的一般用途是产生周期性信号，比如产生时钟信号，或者有规律的信号。</p><div class="language-verilog"><button title="Copy Code" class="copy"></button><span class="lang">verilog</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">forever</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F78C6C;">#10</span><span style="color:#A6ACCD;"> clk </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">~</span><span style="color:#A6ACCD;">clk;				</span><span style="color:#676E95;font-style:italic;">//产生一个周期为20ns 的时钟信号</span></span></code></pre></div><h3 id="verilog-hdl-代码书写规范" tabindex="-1">Verilog HDL 代码书写规范 <a class="header-anchor" href="#verilog-hdl-代码书写规范" aria-label="Permalink to &quot;Verilog HDL 代码书写规范&quot;">​</a></h3><p><strong>模块名</strong></p><div class="language-verilog"><button title="Copy Code" class="copy"></button><span class="lang">verilog</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">module</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">clk_div</span><span style="color:#F07178;">				</span><span style="color:#676E95;font-style:italic;">//clk_div.v				//时钟分频器</span></span>
<span class="line"><span style="color:#F78C6C;">module</span><span style="color:#F07178;"> clk_8div				</span><span style="color:#676E95;font-style:italic;">//clk_8div.v			//时钟8分频器</span></span>
<span class="line"><span style="color:#F78C6C;">module</span><span style="color:#F07178;"> adder				</span><span style="color:#676E95;font-style:italic;">// adder.v				//加法器</span></span>
<span class="line"><span style="color:#F78C6C;">module</span><span style="color:#F07178;"> adder_8bits			</span><span style="color:#676E95;font-style:italic;">//adder_8bits.v			//8位加法器</span></span></code></pre></div><p><strong>端口名</strong></p><blockquote><ul><li>输入信号用 i 作前缀，具体名放在后面，例如 i_data</li><li>输入信号用 o 作前缀，具体名放在后面，例如 o_data</li><li>输入信号用 io 作前缀，具体名放在后面，例如 io_data</li></ul></blockquote><p><strong>变量名</strong></p><p>线网类型以 <code>w_</code> 为前缀， 寄存器型变量以 <code>r_</code> 为前缀</p><table><thead><tr><th>意义</th><th>后缀字符串</th></tr></thead><tbody><tr><td>地址</td><td>addr</td></tr><tr><td>数据</td><td>data</td></tr><tr><td>使能</td><td>en</td></tr><tr><td>计数器</td><td>cnt</td></tr><tr><td>长度</td><td>len</td></tr><tr><td>宽度</td><td>wid</td></tr><tr><td>读</td><td>rd</td></tr><tr><td>写</td><td>wr</td></tr><tr><td>读有效</td><td>ren</td></tr><tr><td>写有效</td><td>wen</td></tr><tr><td>准备好</td><td>rdy</td></tr><tr><td>接收</td><td>rx</td></tr><tr><td>发送</td><td>tx</td></tr><tr><td>复位</td><td>rst</td></tr><tr><td>时钟</td><td>clk</td></tr><tr><td>控制</td><td>ctrl</td></tr><tr><td>应答</td><td>ack</td></tr><tr><td>芯片选择</td><td>ce</td></tr><tr><td>输出控制</td><td>oe</td></tr><tr><td>写控制</td><td>we</td></tr></tbody></table><h3 id="verilog-不可综合的语法语句" tabindex="-1">Verilog 不可综合的语法语句 <a class="header-anchor" href="#verilog-不可综合的语法语句" aria-label="Permalink to &quot;Verilog 不可综合的语法语句&quot;">​</a></h3><blockquote><p>所谓可综合，就是Verilog HDL 综合工具能够把所综合的 Verilog HDL 代码翻译成逻辑网表</p></blockquote><p>Verilog HDL 的综合工具 并不是对所有没有语法错误的代码都能够综合，Verilog HDL综合工具一般只支持部分Verilog HDL语法。在进行 Verilog HDL 可综合设计时，应避免使用以下 Verilog HDL 语法语句：</p><ul><li>initial 语句</li><li>disable 语句</li><li>fork - join 语句</li><li>while，for，forever，repeat，循环语句</li><li>deassign 语句</li><li>casex， casez语句</li><li>force, release 语句</li><li>&#39;define 语句</li><li>代码中的时间演示控制，如“ #10 a = b”</li><li>变量定义是的初始化值</li></ul><p>尽量少用 <code>* / %</code> 操作符，因为他们会占用大量资源</p><h3 id="其他注意" tabindex="-1">其他注意 <a class="header-anchor" href="#其他注意" aria-label="Permalink to &quot;其他注意&quot;">​</a></h3><h4 id="模块实例化" tabindex="-1">模块实例化 <a class="header-anchor" href="#模块实例化" aria-label="Permalink to &quot;模块实例化&quot;">​</a></h4><div class="language-verilog"><button title="Copy Code" class="copy"></button><span class="lang">verilog</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">flash_led_top flash_led_top(</span></span>
<span class="line"><span style="color:#A6ACCD;">    .clk( clk ),</span></span>
<span class="line"><span style="color:#A6ACCD;">    .rst_n( rst ),		</span><span style="color:#676E95;font-style:italic;">//rst_n 是flash_led_top 模块的参数变量，rst是当前模块参数命令</span></span>
<span class="line"><span style="color:#A6ACCD;">    .sw0(sw0),</span></span>
<span class="line"><span style="color:#A6ACCD;">    .led( led )</span></span>
<span class="line"><span style="color:#A6ACCD;">);</span></span></code></pre></div><h4 id="仿真测试" tabindex="-1">仿真测试 <a class="header-anchor" href="#仿真测试" aria-label="Permalink to &quot;仿真测试&quot;">​</a></h4><p>==仿真测试端口不要写到模块括号里面==</p><div class="language-verilog"><button title="Copy Code" class="copy"></button><span class="lang">verilog</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">flow_led_sim();</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#F78C6C;">reg</span><span style="color:#A6ACCD;"> clk;</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#F78C6C;">wire</span><span style="color:#A6ACCD;">[</span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;">] led;</span></span></code></pre></div>`,88),e=[o];function p(r,c,i,C,d,y){return a(),l("div",null,e)}const h=s(t,[["render",p]]);export{D as __pageData,h as default};
