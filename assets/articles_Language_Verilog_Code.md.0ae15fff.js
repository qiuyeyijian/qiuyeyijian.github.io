import{_ as s,o as n,c as a,O as l}from"./chunks/framework.4afe7240.js";const d=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"articles/Language/Verilog/Code.md","filePath":"articles/Language/Verilog/Code.md"}'),p={name:"articles/Language/Verilog/Code.md"},o=l(`<h2 id="verilog-hdl-代码和仿真文件" tabindex="-1">Verilog HDL 代码和仿真文件 <a class="header-anchor" href="#verilog-hdl-代码和仿真文件" aria-label="Permalink to &quot;Verilog HDL 代码和仿真文件&quot;">​</a></h2><h3 id="偶分频器" tabindex="-1">偶分频器 <a class="header-anchor" href="#偶分频器" aria-label="Permalink to &quot;偶分频器&quot;">​</a></h3><h4 id="设计文件" tabindex="-1">设计文件 <a class="header-anchor" href="#设计文件" aria-label="Permalink to &quot;设计文件&quot;">​</a></h4><div class="language-verilog"><button title="Copy Code" class="copy"></button><span class="lang">verilog</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">module</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">divider</span><span style="color:#F07178;">(</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#F78C6C;">input</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">wire</span><span style="color:#F07178;"> clk,</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#F78C6C;">input</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">wire</span><span style="color:#F07178;"> rst_n,</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#F78C6C;">output</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">reg</span><span style="color:#F07178;"> clk_div</span></span>
<span class="line"><span style="color:#F07178;">    );</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#F78C6C;">parameter</span><span style="color:#F07178;"> NUM_DIV </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">4</span><span style="color:#F07178;">;		</span><span style="color:#676E95;font-style:italic;">//4分频</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#F78C6C;">integer</span><span style="color:#F07178;"> cnt;                </span><span style="color:#676E95;font-style:italic;">// 计数</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#F78C6C;">always</span><span style="color:#F07178;"> @(</span><span style="color:#F78C6C;">posedge</span><span style="color:#F07178;"> clk </span><span style="color:#F78C6C;">or</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">posedge</span><span style="color:#F07178;"> rst_n) </span><span style="color:#F78C6C;">begin</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#F78C6C;">if</span><span style="color:#F07178;">(rst_n) </span><span style="color:#F78C6C;">begin</span><span style="color:#F07178;">				</span><span style="color:#676E95;font-style:italic;">//复位信号，高电平有效</span></span>
<span class="line"><span style="color:#F07178;">            cnt </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#F07178;">;</span></span>
<span class="line"><span style="color:#F07178;">            clk_div </span><span style="color:#89DDFF;">&lt;=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1&#39;b0</span><span style="color:#F07178;">;</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#F78C6C;">end</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#F78C6C;">else</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">if</span><span style="color:#F07178;">(cnt </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;"> NUM_DIV </span><span style="color:#89DDFF;">/</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">2</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">1</span><span style="color:#F07178;">) </span><span style="color:#F78C6C;">begin</span></span>
<span class="line"><span style="color:#F07178;">            cnt </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> cnt </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1</span><span style="color:#F07178;">;</span></span>
<span class="line"><span style="color:#F07178;">            clk_div </span><span style="color:#89DDFF;">&lt;=</span><span style="color:#F07178;"> clk_div;</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#F78C6C;">end</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#F78C6C;">else</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">begin</span></span>
<span class="line"><span style="color:#F07178;">            cnt </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#F07178;">;</span></span>
<span class="line"><span style="color:#F07178;">            clk_div </span><span style="color:#89DDFF;">&lt;=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">~</span><span style="color:#F07178;">clk_div;</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#F78C6C;">end</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#F78C6C;">end</span></span>
<span class="line"><span style="color:#C792EA;">endmodule</span></span></code></pre></div><h4 id="仿真文件" tabindex="-1">仿真文件 <a class="header-anchor" href="#仿真文件" aria-label="Permalink to &quot;仿真文件&quot;">​</a></h4><div class="language-verilog"><button title="Copy Code" class="copy"></button><span class="lang">verilog</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">module</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">divider_sim</span><span style="color:#F07178;">(</span></span>
<span class="line"><span style="color:#F07178;">);</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#F78C6C;">reg</span><span style="color:#F07178;"> clk;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#F78C6C;">reg</span><span style="color:#F07178;"> rst_n;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#F78C6C;">wire</span><span style="color:#F07178;"> clk_div;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">    divider divider(</span></span>
<span class="line"><span style="color:#F07178;">        .clk(clk),</span></span>
<span class="line"><span style="color:#F07178;">        .rst_n(rst_n),</span></span>
<span class="line"><span style="color:#F07178;">        .clk_div(clk_div)</span></span>
<span class="line"><span style="color:#F07178;">     )</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">     </span><span style="color:#F78C6C;">initial</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">begin</span></span>
<span class="line"><span style="color:#F07178;">         clk </span><span style="color:#89DDFF;">&lt;=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1</span><span style="color:#F07178;">;</span></span>
<span class="line"><span style="color:#F07178;">         rst_n </span><span style="color:#89DDFF;">&lt;=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#F07178;">;</span></span>
<span class="line"><span style="color:#F07178;">         </span><span style="color:#F78C6C;">#1</span><span style="color:#F07178;"> rst_n </span><span style="color:#89DDFF;">&lt;=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1</span><span style="color:#F07178;">;     </span><span style="color:#676E95;font-style:italic;">//快速进行复位操作，防止分频器clk_div 一直表现为高阻态</span></span>
<span class="line"><span style="color:#F07178;">         </span><span style="color:#F78C6C;">#1</span><span style="color:#F07178;"> rst_n </span><span style="color:#89DDFF;">&lt;=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#F07178;">;</span></span>
<span class="line"><span style="color:#F07178;">     </span><span style="color:#F78C6C;">end</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">     </span><span style="color:#F78C6C;">always</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">#10</span><span style="color:#F07178;"> clk </span><span style="color:#89DDFF;">&lt;=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">~</span><span style="color:#F07178;">clk;		</span><span style="color:#676E95;font-style:italic;">//设置时钟周期为20ns,即主频为50MHz</span></span>
<span class="line"><span style="color:#C792EA;">endmodule</span></span></code></pre></div><h3 id="_3-8译码器" tabindex="-1">3-8译码器 <a class="header-anchor" href="#_3-8译码器" aria-label="Permalink to &quot;3-8译码器&quot;">​</a></h3><h4 id="设计文件-1" tabindex="-1">设计文件 <a class="header-anchor" href="#设计文件-1" aria-label="Permalink to &quot;设计文件&quot;">​</a></h4><div class="language-verilog"><button title="Copy Code" class="copy"></button><span class="lang">verilog</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">module</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">decode38a</span><span style="color:#F07178;">(</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#F78C6C;">input</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">wire</span><span style="color:#F07178;">[</span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;">0</span><span style="color:#F07178;">] a,</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#F78C6C;">output</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">reg</span><span style="color:#F07178;">[</span><span style="color:#F78C6C;">7</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;">0</span><span style="color:#F07178;">] y</span></span>
<span class="line"><span style="color:#F07178;">    );</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#676E95;font-style:italic;">/*</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    第一种方法，按照公式，进行数据流描述，代码较多，但是可综合</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    assign y[0] = ~a[2] &amp; ~a[1] &amp; ~a[0];</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    assign y[1] = ~a[2] &amp; ~a[1] &amp;  a[0];    </span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    assign y[2] = ~a[2] &amp;  a[1] &amp; ~a[0];</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    assign y[3] = ~a[2] &amp;  a[1] &amp;  a[0];</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    assign y[4] =  a[2] &amp; ~a[1] &amp; ~a[0];</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    assign y[5] =  a[2] &amp; ~a[1] &amp;  a[0];    </span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    assign y[6] =  a[2] &amp;  a[1] &amp; ~a[0];</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    assign y[7] =  a[2] &amp;  a[1] &amp;  a[0];         </span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#676E95;font-style:italic;">/*第二种，用 for循环, 方法简单，所用代码较少，但是不可综合 */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#F78C6C;">integer</span><span style="color:#F07178;"> i;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#F78C6C;">always</span><span style="color:#F07178;">@(</span><span style="color:#89DDFF;">*</span><span style="color:#F07178;">) </span><span style="color:#F78C6C;">begin</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#F78C6C;">for</span><span style="color:#F07178;">(i </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#F07178;">; i </span><span style="color:#89DDFF;">&lt;=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">7</span><span style="color:#F07178;">; i </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> i </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1</span><span style="color:#F07178;">) </span><span style="color:#F78C6C;">begin</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#F78C6C;">if</span><span style="color:#F07178;"> (a </span><span style="color:#89DDFF;">==</span><span style="color:#F07178;"> i)</span></span>
<span class="line"><span style="color:#F07178;">                y[i] </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1</span><span style="color:#F07178;">;</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#F78C6C;">else</span></span>
<span class="line"><span style="color:#F07178;">                y[i] </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#F07178;">;</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#F78C6C;">end</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#F78C6C;">end</span></span>
<span class="line"><span style="color:#C792EA;">endmodule</span></span></code></pre></div><h4 id="仿真文件-1" tabindex="-1">仿真文件 <a class="header-anchor" href="#仿真文件-1" aria-label="Permalink to &quot;仿真文件&quot;">​</a></h4><div class="language-verilog"><button title="Copy Code" class="copy"></button><span class="lang">verilog</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">module</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">decode38_simulation</span><span style="color:#F07178;">(</span></span>
<span class="line"><span style="color:#F07178;">    );</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#F78C6C;">reg</span><span style="color:#F07178;">[</span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;">0</span><span style="color:#F07178;">] a;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#F78C6C;">wire</span><span style="color:#F07178;">[</span><span style="color:#F78C6C;">7</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;">0</span><span style="color:#F07178;">] y;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">    decode38a decode38a(</span></span>
<span class="line"><span style="color:#F07178;">        .a(a),</span></span>
<span class="line"><span style="color:#F07178;">        .y(y)</span></span>
<span class="line"><span style="color:#F07178;">    )</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#F78C6C;">initial</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#F78C6C;">begin</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#F78C6C;">#0</span><span style="color:#F07178;">      a </span><span style="color:#89DDFF;">&lt;=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">3&#39;b000</span><span style="color:#F07178;">;</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#F78C6C;">#100</span><span style="color:#F07178;">    a </span><span style="color:#89DDFF;">&lt;=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">3&#39;b001</span><span style="color:#F07178;">;</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#F78C6C;">#100</span><span style="color:#F07178;">    a </span><span style="color:#89DDFF;">&lt;=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">3&#39;b010</span><span style="color:#F07178;">;</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#F78C6C;">#100</span><span style="color:#F07178;">    a </span><span style="color:#89DDFF;">&lt;=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">3&#39;b011</span><span style="color:#F07178;">;</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#F78C6C;">#100</span><span style="color:#F07178;">    a </span><span style="color:#89DDFF;">&lt;=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">3&#39;b100</span><span style="color:#F07178;">;</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#F78C6C;">#100</span><span style="color:#F07178;">    a </span><span style="color:#89DDFF;">&lt;=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">3&#39;b101</span><span style="color:#F07178;">;</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#F78C6C;">#100</span><span style="color:#F07178;">    a </span><span style="color:#89DDFF;">&lt;=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">3&#39;b110</span><span style="color:#F07178;">;</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#F78C6C;">#100</span><span style="color:#F07178;">    a </span><span style="color:#89DDFF;">&lt;=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">3&#39;b111</span><span style="color:#F07178;">;                                                          </span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#F78C6C;">end</span></span>
<span class="line"><span style="color:#C792EA;">endmodule</span></span></code></pre></div><h3 id="流水灯" tabindex="-1">流水灯 <a class="header-anchor" href="#流水灯" aria-label="Permalink to &quot;流水灯&quot;">​</a></h3><p>一共有四个LED灯：</p><ul><li>首先1、3 灯亮，然后2、4 灯亮，接着1、2、3、4灯依次点亮，然后全灭，最后再点亮</li><li>重复上一步</li></ul><p>因为时钟周期20ns，基本上肉眼看不到效果，所以设置了一个4分频器，用户可以修改变量<code>NUM_DIV</code>的值，实现自己想要的分频效果</p><h4 id="设计文件-2" tabindex="-1">设计文件 <a class="header-anchor" href="#设计文件-2" aria-label="Permalink to &quot;设计文件&quot;">​</a></h4><p><strong>顶层模块 flow_led_top.v</strong></p><div class="language-verilog"><button title="Copy Code" class="copy"></button><span class="lang">verilog</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">module</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">flow_led_top</span><span style="color:#F07178;">(</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#F78C6C;">input</span><span style="color:#F07178;"> clk,</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#F78C6C;">input</span><span style="color:#F07178;"> rst_n,</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#F78C6C;">output</span><span style="color:#F07178;"> [</span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;">0</span><span style="color:#F07178;">] led</span></span>
<span class="line"><span style="color:#F07178;">    );</span></span>
<span class="line"><span style="color:#F07178;">    </span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#F78C6C;">wire</span><span style="color:#F07178;"> clk_div;</span></span>
<span class="line"><span style="color:#F07178;">    </span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">//调用分频器模块</span></span>
<span class="line"><span style="color:#F07178;">    divider divider(</span></span>
<span class="line"><span style="color:#F07178;">        .clk(clk),</span></span>
<span class="line"><span style="color:#F07178;">        .rst_n(rst_n),</span></span>
<span class="line"><span style="color:#F07178;">        .clk_div(clk_div)</span></span>
<span class="line"><span style="color:#F07178;">    )</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">//调用流水灯的控制模块</span></span>
<span class="line"><span style="color:#F07178;">    flow_led flow_led(</span></span>
<span class="line"><span style="color:#F07178;">        .clk(clk),</span></span>
<span class="line"><span style="color:#F07178;">        .clk_div(clk_div),</span></span>
<span class="line"><span style="color:#F07178;">        .led(led)</span></span>
<span class="line"><span style="color:#F07178;">    )</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">endmodule</span></span></code></pre></div><p><strong>分频器模块 divider.v</strong></p><div class="language-verilog"><button title="Copy Code" class="copy"></button><span class="lang">verilog</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">module</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">divider</span><span style="color:#F07178;">(</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#F78C6C;">input</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">wire</span><span style="color:#F07178;"> clk,</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#F78C6C;">input</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">wire</span><span style="color:#F07178;"> rst_n,</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#F78C6C;">output</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">reg</span><span style="color:#F07178;"> clk_div</span></span>
<span class="line"><span style="color:#F07178;">    );</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#F78C6C;">parameter</span><span style="color:#F07178;"> NUM_DIV </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">4</span><span style="color:#F07178;">;		</span><span style="color:#676E95;font-style:italic;">//4分频</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#F78C6C;">integer</span><span style="color:#F07178;"> cnt;                </span><span style="color:#676E95;font-style:italic;">// 计数</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#F78C6C;">always</span><span style="color:#F07178;"> @(</span><span style="color:#F78C6C;">posedge</span><span style="color:#F07178;"> clk </span><span style="color:#F78C6C;">or</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">posedge</span><span style="color:#F07178;"> rst_n) </span><span style="color:#F78C6C;">begin</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#F78C6C;">if</span><span style="color:#F07178;">(rst_n) </span><span style="color:#F78C6C;">begin</span><span style="color:#F07178;">				</span><span style="color:#676E95;font-style:italic;">//复位信号，高电平有效</span></span>
<span class="line"><span style="color:#F07178;">            cnt </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#F07178;">;</span></span>
<span class="line"><span style="color:#F07178;">            clk_div </span><span style="color:#89DDFF;">&lt;=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1&#39;b0</span><span style="color:#F07178;">;</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#F78C6C;">end</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#F78C6C;">else</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">if</span><span style="color:#F07178;">(cnt </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;"> NUM_DIV </span><span style="color:#89DDFF;">/</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">2</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">1</span><span style="color:#F07178;">) </span><span style="color:#F78C6C;">begin</span></span>
<span class="line"><span style="color:#F07178;">            cnt </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> cnt </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1</span><span style="color:#F07178;">;</span></span>
<span class="line"><span style="color:#F07178;">            clk_div </span><span style="color:#89DDFF;">&lt;=</span><span style="color:#F07178;"> clk_div;</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#F78C6C;">end</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#F78C6C;">else</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">begin</span></span>
<span class="line"><span style="color:#F07178;">            cnt </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#F07178;">;</span></span>
<span class="line"><span style="color:#F07178;">            clk_div </span><span style="color:#89DDFF;">&lt;=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">~</span><span style="color:#F07178;">clk_div;</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#F78C6C;">end</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#F78C6C;">end</span></span>
<span class="line"><span style="color:#C792EA;">endmodule</span></span></code></pre></div><p><strong>流水灯控制模块 flow_led.v</strong></p><div class="language-verilog"><button title="Copy Code" class="copy"></button><span class="lang">verilog</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">module</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">flow_led</span><span style="color:#F07178;">(</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#F78C6C;">input</span><span style="color:#F07178;"> clk,</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#F78C6C;">input</span><span style="color:#F07178;"> rst_n,</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#F78C6C;">output</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">reg</span><span style="color:#F07178;">[</span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;">0</span><span style="color:#F07178;">] led</span></span>
<span class="line"><span style="color:#F07178;">    );</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">//定义当前状态，下一个状态</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#F78C6C;">reg</span><span style="color:#F07178;">[</span><span style="color:#F78C6C;">10</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;">0</span><span style="color:#F07178;">] current_state, next_state;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">//12种状态编码</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#F78C6C;">parameter</span><span style="color:#F07178;"> s0 </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">11&#39;b00000000000</span><span style="color:#F07178;">,</span></span>
<span class="line"><span style="color:#F07178;">            s1 </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">11&#39;b00000000001</span><span style="color:#F07178;">,</span></span>
<span class="line"><span style="color:#F07178;">            s2 </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">11&#39;b00000000010</span><span style="color:#F07178;">,</span></span>
<span class="line"><span style="color:#F07178;">            s3 </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">11&#39;b00000000100</span><span style="color:#F07178;">,</span></span>
<span class="line"><span style="color:#F07178;">            s4 </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">11&#39;b00000001000</span><span style="color:#F07178;">,</span></span>
<span class="line"><span style="color:#F07178;">            s5 </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">11&#39;b00000010000</span><span style="color:#F07178;">,</span></span>
<span class="line"><span style="color:#F07178;">            s6 </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">11&#39;b00000100000</span><span style="color:#F07178;">,</span></span>
<span class="line"><span style="color:#F07178;">            s7 </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">11&#39;b00001000000</span><span style="color:#F07178;">,</span></span>
<span class="line"><span style="color:#F07178;">            s8 </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">11&#39;b00010000000</span><span style="color:#F07178;">,</span></span>
<span class="line"><span style="color:#F07178;">            s9 </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">11&#39;b00100000000</span><span style="color:#F07178;">,</span></span>
<span class="line"><span style="color:#F07178;">            s10 </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">11&#39;b01000000000</span><span style="color:#F07178;">,</span></span>
<span class="line"><span style="color:#F07178;">            s11 </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">11&#39;b10000000000</span><span style="color:#F07178;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#F78C6C;">always</span><span style="color:#F07178;"> @(</span><span style="color:#F78C6C;">posedge</span><span style="color:#F07178;"> clk </span><span style="color:#F78C6C;">or</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">posedge</span><span style="color:#F07178;"> rst_n) </span><span style="color:#F78C6C;">begin</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#F78C6C;">if</span><span style="color:#F07178;">(rst_n) </span><span style="color:#F78C6C;">begin</span><span style="color:#F07178;">				</span><span style="color:#676E95;font-style:italic;">//复位信号，高电平有效</span></span>
<span class="line"><span style="color:#F07178;">            current_state </span><span style="color:#89DDFF;">&lt;=</span><span style="color:#F07178;"> s0;</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#F78C6C;">end</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">else</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">begin</span></span>
<span class="line"><span style="color:#F07178;">            current_state </span><span style="color:#89DDFF;">&lt;=</span><span style="color:#F07178;"> next_state;</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#F78C6C;">end</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#F78C6C;">end</span></span>
<span class="line"><span style="color:#F07178;">    </span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#F78C6C;">always</span><span style="color:#F07178;"> @(current_state) </span><span style="color:#F78C6C;">begin</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#F78C6C;">case</span><span style="color:#F07178;">(current_state)</span></span>
<span class="line"><span style="color:#F07178;">            s0: next_state </span><span style="color:#89DDFF;">&lt;=</span><span style="color:#F07178;"> s1;</span></span>
<span class="line"><span style="color:#F07178;">            s1: next_state </span><span style="color:#89DDFF;">&lt;=</span><span style="color:#F07178;"> s2;</span></span>
<span class="line"><span style="color:#F07178;">            s2: next_state </span><span style="color:#89DDFF;">&lt;=</span><span style="color:#F07178;"> s3;</span></span>
<span class="line"><span style="color:#F07178;">            s3: next_state </span><span style="color:#89DDFF;">&lt;=</span><span style="color:#F07178;"> s4;</span></span>
<span class="line"><span style="color:#F07178;">            s4: next_state </span><span style="color:#89DDFF;">&lt;=</span><span style="color:#F07178;"> s5;</span></span>
<span class="line"><span style="color:#F07178;">            s5: next_state </span><span style="color:#89DDFF;">&lt;=</span><span style="color:#F07178;"> s6;</span></span>
<span class="line"><span style="color:#F07178;">            s6: next_state </span><span style="color:#89DDFF;">&lt;=</span><span style="color:#F07178;"> s7;</span></span>
<span class="line"><span style="color:#F07178;">            s7: next_state </span><span style="color:#89DDFF;">&lt;=</span><span style="color:#F07178;"> s8;</span></span>
<span class="line"><span style="color:#F07178;">            s8: next_state </span><span style="color:#89DDFF;">&lt;=</span><span style="color:#F07178;"> s9;</span></span>
<span class="line"><span style="color:#F07178;">            s9: next_state </span><span style="color:#89DDFF;">&lt;=</span><span style="color:#F07178;"> s10;</span></span>
<span class="line"><span style="color:#F07178;">            s10: next_state </span><span style="color:#89DDFF;">&lt;=</span><span style="color:#F07178;"> s11;</span></span>
<span class="line"><span style="color:#F07178;">            s11: next_state </span><span style="color:#89DDFF;">&lt;=</span><span style="color:#F07178;"> s0;</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#F78C6C;">default</span><span style="color:#F07178;">: next_state </span><span style="color:#89DDFF;">&lt;=</span><span style="color:#F07178;">s0;</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#F78C6C;">endcase</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#F78C6C;">end</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#F78C6C;">always</span><span style="color:#F07178;"> @(</span><span style="color:#F78C6C;">posedge</span><span style="color:#F07178;"> clk) </span><span style="color:#F78C6C;">begin</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#F78C6C;">case</span><span style="color:#F07178;">(current_state)</span></span>
<span class="line"><span style="color:#F07178;">            s0: led </span><span style="color:#89DDFF;">&lt;=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">4&#39;b0101</span><span style="color:#F07178;">;</span></span>
<span class="line"><span style="color:#F07178;">            s1: led </span><span style="color:#89DDFF;">&lt;=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">4&#39;b1010</span><span style="color:#F07178;">;</span></span>
<span class="line"><span style="color:#F07178;">            s2: led </span><span style="color:#89DDFF;">&lt;=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">4&#39;b0001</span><span style="color:#F07178;">;</span></span>
<span class="line"><span style="color:#F07178;">            s3: led </span><span style="color:#89DDFF;">&lt;=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">4&#39;b0011</span><span style="color:#F07178;">;</span></span>
<span class="line"><span style="color:#F07178;">            s4: led </span><span style="color:#89DDFF;">&lt;=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">4&#39;b0111</span><span style="color:#F07178;">;</span></span>
<span class="line"><span style="color:#F07178;">            s5: led </span><span style="color:#89DDFF;">&lt;=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">4&#39;b1111</span><span style="color:#F07178;">;</span></span>
<span class="line"><span style="color:#F07178;">            s6: led </span><span style="color:#89DDFF;">&lt;=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">4&#39;b1110</span><span style="color:#F07178;">;</span></span>
<span class="line"><span style="color:#F07178;">            s7: led </span><span style="color:#89DDFF;">&lt;=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">4&#39;b1100</span><span style="color:#F07178;">;</span></span>
<span class="line"><span style="color:#F07178;">            s8: led </span><span style="color:#89DDFF;">&lt;=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">4&#39;b1000</span><span style="color:#F07178;">;</span></span>
<span class="line"><span style="color:#F07178;">            s9: led </span><span style="color:#89DDFF;">&lt;=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">4&#39;b0000</span><span style="color:#F07178;">;</span></span>
<span class="line"><span style="color:#F07178;">            s10: led </span><span style="color:#89DDFF;">&lt;=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">4&#39;b1111</span><span style="color:#F07178;">;</span></span>
<span class="line"><span style="color:#F07178;">            s11: led </span><span style="color:#89DDFF;">&lt;=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">4&#39;b0000</span><span style="color:#F07178;">;</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#F78C6C;">default</span><span style="color:#F07178;">: led </span><span style="color:#89DDFF;">&lt;=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">4&#39;b0000</span><span style="color:#F07178;">;</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#F78C6C;">endcase</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#F78C6C;">end</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">endmodule</span></span></code></pre></div><h4 id="仿真文件-2" tabindex="-1">仿真文件 <a class="header-anchor" href="#仿真文件-2" aria-label="Permalink to &quot;仿真文件&quot;">​</a></h4><p><strong>flow_led_sim.v</strong></p><div class="language-verilog"><button title="Copy Code" class="copy"></button><span class="lang">verilog</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">module</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">flow_led_sim</span><span style="color:#F07178;">(</span></span>
<span class="line"><span style="color:#F07178;">    );</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#F78C6C;">reg</span><span style="color:#F07178;"> clk;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#F78C6C;">wire</span><span style="color:#F07178;">[</span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;">0</span><span style="color:#F07178;">] led;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#F78C6C;">reg</span><span style="color:#F07178;"> rst_n;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#F78C6C;">wire</span><span style="color:#F07178;"> clk_div;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">    divider divider(</span></span>
<span class="line"><span style="color:#F07178;">        .clk(clk),</span></span>
<span class="line"><span style="color:#F07178;">        .rst_n(rst_n),</span></span>
<span class="line"><span style="color:#F07178;">        .clk_div(clk_div)</span></span>
<span class="line"><span style="color:#F07178;">    )</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">    flow_led_top flow_led_top(</span></span>
<span class="line"><span style="color:#F07178;">        .clk(clk),</span></span>
<span class="line"><span style="color:#F07178;">        .rst_n(rst_n),</span></span>
<span class="line"><span style="color:#F07178;">        .led(led)</span></span>
<span class="line"><span style="color:#F07178;">    )</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#F78C6C;">initial</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">begin</span></span>
<span class="line"><span style="color:#F07178;">        clk </span><span style="color:#89DDFF;">&lt;=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1</span><span style="color:#F07178;">;</span></span>
<span class="line"><span style="color:#F07178;">        rst_n </span><span style="color:#89DDFF;">&lt;=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#F07178;">;</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">//开始的时候电路有的信号为高阻态, 如果不复位的话可能会导致仿真不成功</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">//下面的代码相当于快速按下复位按钮</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#F78C6C;">#1</span><span style="color:#F07178;"> rst_n </span><span style="color:#89DDFF;">&lt;=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1</span><span style="color:#F07178;">;</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#F78C6C;">#1</span><span style="color:#F07178;"> rst_n </span><span style="color:#89DDFF;">&lt;=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#F07178;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#F78C6C;">end</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">//设置时钟周期 100ns</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#F78C6C;">always</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">#50</span><span style="color:#F07178;"> clk </span><span style="color:#89DDFF;">&lt;=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">~</span><span style="color:#F07178;">clk;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">endmodule</span></span></code></pre></div><h3 id="alu-算术逻辑单元" tabindex="-1">ALU 算术逻辑单元 <a class="header-anchor" href="#alu-算术逻辑单元" aria-label="Permalink to &quot;ALU 算术逻辑单元&quot;">​</a></h3><h4 id="设计文件-3" tabindex="-1">设计文件 <a class="header-anchor" href="#设计文件-3" aria-label="Permalink to &quot;设计文件&quot;">​</a></h4><p><strong>顶层模块 alu_32bits_top.v</strong></p><div class="language-verilog"><button title="Copy Code" class="copy"></button><span class="lang">verilog</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">module</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">alu_32bits_top</span><span style="color:#F07178;">(</span></span>
<span class="line"><span style="color:#F07178;">    ldr0, ldr1, ldr2, ldr3,</span></span>
<span class="line"><span style="color:#F07178;">    lddr1, lddr2,</span></span>
<span class="line"><span style="color:#F07178;">    cf, of, zf, nf,</span></span>
<span class="line"><span style="color:#F07178;">    nr0_bus, nr1_bus, nr2_bus, nr3_bus, nalu_bus, nsw_bus,</span></span>
<span class="line"><span style="color:#F07178;">    i_data, alu_sel, DBUS</span></span>
<span class="line"><span style="color:#F07178;">    );</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#F78C6C;">input</span><span style="color:#F07178;"> ldr0, ldr1, ldr2, ldr3;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#F78C6C;">input</span><span style="color:#F07178;"> nr0_bus, nr1_bus, nr2_bus, nr3_bus, nalu_bus, nsw_bus;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#F78C6C;">input</span><span style="color:#F07178;"> lddr1, lddr2;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#F78C6C;">input</span><span style="color:#F07178;"> [</span><span style="color:#F78C6C;">31</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;">0</span><span style="color:#F07178;">] i_data;                </span><span style="color:#676E95;font-style:italic;">//输入数据</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#F78C6C;">input</span><span style="color:#F07178;"> [</span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;">0</span><span style="color:#F07178;">] alu_sel;                </span><span style="color:#676E95;font-style:italic;">//alu选择控制信号</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#F78C6C;">output</span><span style="color:#F07178;"> cf, of, zf, nf;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#F78C6C;">output</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">wire</span><span style="color:#F07178;">[</span><span style="color:#F78C6C;">31</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;">0</span><span style="color:#F07178;">] DBUS;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#F78C6C;">wire</span><span style="color:#F07178;"> [</span><span style="color:#F78C6C;">31</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;">0</span><span style="color:#F07178;">] o_y;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#F78C6C;">wire</span><span style="color:#F07178;"> [</span><span style="color:#F78C6C;">31</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;">0</span><span style="color:#F07178;">] data;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#F78C6C;">wire</span><span style="color:#F07178;"> [</span><span style="color:#F78C6C;">31</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;">0</span><span style="color:#F07178;">] i_a;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#F78C6C;">wire</span><span style="color:#F07178;"> [</span><span style="color:#F78C6C;">31</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;">0</span><span style="color:#F07178;">] i_b;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">    alu_32bits alu_32bits(</span></span>
<span class="line"><span style="color:#F07178;">        .i_a(i_a), .i_b(i_b), .alu_sel(alu_sel), .o_y(o_y),</span></span>
<span class="line"><span style="color:#F07178;">        .cf(cf), .of(of), .zf(zf), .nf(nf)</span></span>
<span class="line"><span style="color:#F07178;">    )</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">    register r0(</span></span>
<span class="line"><span style="color:#F07178;">        .ldr(ldr0),</span></span>
<span class="line"><span style="color:#F07178;">        .ctrl(nr0_bus),</span></span>
<span class="line"><span style="color:#F07178;">        .i_data(DBUS),</span></span>
<span class="line"><span style="color:#F07178;">        .o_data(data)</span></span>
<span class="line"><span style="color:#F07178;">    )</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">    register r1(</span></span>
<span class="line"><span style="color:#F07178;">        .ldr(ldr1),</span></span>
<span class="line"><span style="color:#F07178;">        .ctrl(nr1_bus),</span></span>
<span class="line"><span style="color:#F07178;">        .i_data(DBUS),</span></span>
<span class="line"><span style="color:#F07178;">        .o_data(data)</span></span>
<span class="line"><span style="color:#F07178;">    )</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">    register r2(</span></span>
<span class="line"><span style="color:#F07178;">        .ldr(ldr2),</span></span>
<span class="line"><span style="color:#F07178;">        .ctrl(nr2_bus),</span></span>
<span class="line"><span style="color:#F07178;">        .i_data(DBUS),</span></span>
<span class="line"><span style="color:#F07178;">        .o_data(data)</span></span>
<span class="line"><span style="color:#F07178;">    )</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">    register r3(</span></span>
<span class="line"><span style="color:#F07178;">        .ldr(ldr3),</span></span>
<span class="line"><span style="color:#F07178;">        .ctrl(nr3_bus),</span></span>
<span class="line"><span style="color:#F07178;">        .i_data(DBUS),</span></span>
<span class="line"><span style="color:#F07178;">        .o_data(data)</span></span>
<span class="line"><span style="color:#F07178;">    )</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">    dr dr1(</span></span>
<span class="line"><span style="color:#F07178;">        .lddr(lddr1),</span></span>
<span class="line"><span style="color:#F07178;">        .rst_n(</span><span style="color:#F78C6C;">0</span><span style="color:#F07178;">),</span></span>
<span class="line"><span style="color:#F07178;">        .i_data(data),</span></span>
<span class="line"><span style="color:#F07178;">        .o_data(i_a)</span></span>
<span class="line"><span style="color:#F07178;">    )</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">    dr dr2(</span></span>
<span class="line"><span style="color:#F07178;">        .lddr(lddr2),</span></span>
<span class="line"><span style="color:#F07178;">        .rst_n(</span><span style="color:#F78C6C;">0</span><span style="color:#F07178;">),</span></span>
<span class="line"><span style="color:#F07178;">        .i_data(data),</span></span>
<span class="line"><span style="color:#F07178;">        .o_data(i_b)</span></span>
<span class="line"><span style="color:#F07178;">    )</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">    buff input_buff(                    </span><span style="color:#676E95;font-style:italic;">//输入缓冲器</span></span>
<span class="line"><span style="color:#F07178;">        .ctrl(nsw_bus),</span></span>
<span class="line"><span style="color:#F07178;">        .i_data(i_data),</span></span>
<span class="line"><span style="color:#F07178;">        .o_data(DBUS)</span></span>
<span class="line"><span style="color:#F07178;">    )</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span></span>
<span class="line"><span style="color:#F07178;">    buff output_buff(                   </span><span style="color:#676E95;font-style:italic;">//输出缓冲器</span></span>
<span class="line"><span style="color:#F07178;">        .ctrl(nalu_bus),</span></span>
<span class="line"><span style="color:#F07178;">        .i_data(o_y),</span></span>
<span class="line"><span style="color:#F07178;">        .o_data(DBUS)</span></span>
<span class="line"><span style="color:#F07178;">    )</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span></span>
<span class="line"><span style="color:#C792EA;">endmodule</span></span></code></pre></div><p><strong>ALU控制模块 alu_32bits.v</strong></p><div class="language-verilog"><button title="Copy Code" class="copy"></button><span class="lang">verilog</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">module</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">alu_32bits</span><span style="color:#F07178;">(</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#F78C6C;">input</span><span style="color:#F07178;"> [</span><span style="color:#F78C6C;">31</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;">0</span><span style="color:#F07178;">] i_a,                   </span><span style="color:#676E95;font-style:italic;">//两个输入数据 i_a, i_b</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#F78C6C;">input</span><span style="color:#F07178;"> [</span><span style="color:#F78C6C;">31</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;">0</span><span style="color:#F07178;">] i_b,</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#F78C6C;">input</span><span style="color:#F07178;"> [</span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;">0</span><span style="color:#F07178;">] alu_sel,                </span><span style="color:#676E95;font-style:italic;">//alu 功能选择信号</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#F78C6C;">output</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">reg</span><span style="color:#F07178;">[</span><span style="color:#F78C6C;">31</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;">0</span><span style="color:#F07178;">] o_y,               </span><span style="color:#676E95;font-style:italic;">//输出结果 o_y</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#F78C6C;">output</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">reg</span><span style="color:#F07178;"> cf,                      </span><span style="color:#676E95;font-style:italic;">//进位/借位标志, cf=1,有进位或者借位</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#F78C6C;">output</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">reg</span><span style="color:#F07178;"> of,                      </span><span style="color:#676E95;font-style:italic;">//溢出标志, of=1, 有溢出</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#F78C6C;">output</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">reg</span><span style="color:#F07178;"> zf,                      </span><span style="color:#676E95;font-style:italic;">//零标志, zf=1, 运算结果为0</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#F78C6C;">output</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">reg</span><span style="color:#F07178;"> nf                       </span><span style="color:#676E95;font-style:italic;">//负数标志, nf=1, 运算结果为负数</span></span>
<span class="line"><span style="color:#F07178;">    );</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#F78C6C;">reg</span><span style="color:#F07178;">[</span><span style="color:#F78C6C;">32</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;">0</span><span style="color:#F07178;">] cf_temp;                  </span><span style="color:#676E95;font-style:italic;">//临时变量, 用于判断进位标志cf</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#F78C6C;">reg</span><span style="color:#F07178;">[</span><span style="color:#F78C6C;">32</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;">0</span><span style="color:#F07178;">] of_temp;                  </span><span style="color:#676E95;font-style:italic;">//临时变量, 用于判断溢出标志of</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#F78C6C;">always</span><span style="color:#F07178;"> @(i_a, i_b, alu_sel) </span><span style="color:#F78C6C;">begin</span></span>
<span class="line"><span style="color:#F07178;">        cf </span><span style="color:#89DDFF;">&lt;=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#F07178;">;</span></span>
<span class="line"><span style="color:#F07178;">        of </span><span style="color:#89DDFF;">&lt;=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#F07178;">;</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#F78C6C;">case</span><span style="color:#F07178;"> (alu_sel)</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#F78C6C;">4&#39;b0001</span><span style="color:#F07178;">:                    </span><span style="color:#676E95;font-style:italic;">//加法</span></span>
<span class="line"><span style="color:#F07178;">                </span><span style="color:#F78C6C;">begin</span></span>
<span class="line"><span style="color:#F07178;">                    cf_temp </span><span style="color:#89DDFF;">&lt;=</span><span style="color:#F07178;"> {</span><span style="color:#F78C6C;">1&#39;b0</span><span style="color:#F07178;">, i_a} </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> {</span><span style="color:#F78C6C;">1&#39;b0</span><span style="color:#F07178;">, i_b};           </span><span style="color:#676E95;font-style:italic;">//将i_a, i_b扩充一位后再相减，便于接下来判断进位/借位</span></span>
<span class="line"><span style="color:#F07178;">                    of_temp </span><span style="color:#89DDFF;">&lt;=</span><span style="color:#F07178;"> {i_a[</span><span style="color:#F78C6C;">31</span><span style="color:#F07178;">], i_a} </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> {i_b[</span><span style="color:#F78C6C;">31</span><span style="color:#F07178;">], i_b};     </span><span style="color:#676E95;font-style:italic;">//将i_a, i_b变成双符号位之后相加, 便于接下来判断溢出</span></span>
<span class="line"><span style="color:#F07178;">                    o_y </span><span style="color:#89DDFF;">&lt;=</span><span style="color:#F07178;"> cf_temp[</span><span style="color:#F78C6C;">31</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;">0</span><span style="color:#F07178;">];                           </span><span style="color:#676E95;font-style:italic;">//相加结果</span></span>
<span class="line"><span style="color:#F07178;">                    cf </span><span style="color:#89DDFF;">&lt;=</span><span style="color:#F07178;"> cf_temp[</span><span style="color:#F78C6C;">32</span><span style="color:#F07178;">];                              </span><span style="color:#676E95;font-style:italic;">//进位/借位标志</span></span>
<span class="line"><span style="color:#F07178;">                    of </span><span style="color:#89DDFF;">&lt;=</span><span style="color:#F07178;"> of_temp[</span><span style="color:#F78C6C;">32</span><span style="color:#F07178;">] ^ of_temp[</span><span style="color:#F78C6C;">31</span><span style="color:#F07178;">];                </span><span style="color:#676E95;font-style:italic;">//溢出标志, 双符号位，相加后如果两个符号位不相等则溢出</span></span>
<span class="line"><span style="color:#F07178;">                </span><span style="color:#F78C6C;">end</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#F78C6C;">4&#39;b0010</span><span style="color:#F07178;">:                   </span><span style="color:#676E95;font-style:italic;">//减法</span></span>
<span class="line"><span style="color:#F07178;">                </span><span style="color:#F78C6C;">begin</span></span>
<span class="line"><span style="color:#F07178;">                    cf_temp </span><span style="color:#89DDFF;">&lt;=</span><span style="color:#F07178;"> {</span><span style="color:#F78C6C;">1&#39;b0</span><span style="color:#F07178;">, i_a} </span><span style="color:#89DDFF;">-</span><span style="color:#F07178;"> {</span><span style="color:#F78C6C;">1&#39;b0</span><span style="color:#F07178;">, i_b};           </span><span style="color:#676E95;font-style:italic;">//将i_a, i_b扩充一位后再相减，便于接下来判断进位/借位</span></span>
<span class="line"><span style="color:#F07178;">                    of_temp </span><span style="color:#89DDFF;">&lt;=</span><span style="color:#F07178;"> {i_a[</span><span style="color:#F78C6C;">31</span><span style="color:#F07178;">], i_a} </span><span style="color:#89DDFF;">-</span><span style="color:#F07178;"> {i_b[</span><span style="color:#F78C6C;">31</span><span style="color:#F07178;">], i_b};     </span><span style="color:#676E95;font-style:italic;">//将i_a, i_b变成双符号位之后相减, 便于接下来判断溢出</span></span>
<span class="line"><span style="color:#F07178;">                    o_y </span><span style="color:#89DDFF;">&lt;=</span><span style="color:#F07178;"> cf_temp[</span><span style="color:#F78C6C;">31</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;">0</span><span style="color:#F07178;">];                           </span><span style="color:#676E95;font-style:italic;">//相减结果</span></span>
<span class="line"><span style="color:#F07178;">                    cf </span><span style="color:#89DDFF;">&lt;=</span><span style="color:#F07178;"> cf_temp[</span><span style="color:#F78C6C;">32</span><span style="color:#F07178;">];                              </span><span style="color:#676E95;font-style:italic;">//进位/借位标志</span></span>
<span class="line"><span style="color:#F07178;">                    of </span><span style="color:#89DDFF;">&lt;=</span><span style="color:#F07178;"> of_temp[</span><span style="color:#F78C6C;">32</span><span style="color:#F07178;">] ^ of_temp[</span><span style="color:#F78C6C;">31</span><span style="color:#F07178;">];                </span><span style="color:#676E95;font-style:italic;">//溢出标志, 双符号位，相减后如果两个符号位不相等则溢出</span></span>
<span class="line"><span style="color:#F07178;">                </span><span style="color:#F78C6C;">end</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#F78C6C;">4&#39;b0011</span><span style="color:#F07178;">:                    </span><span style="color:#676E95;font-style:italic;">//加1</span></span>
<span class="line"><span style="color:#F07178;">                </span><span style="color:#F78C6C;">begin</span></span>
<span class="line"><span style="color:#F07178;">                    cf_temp </span><span style="color:#89DDFF;">&lt;=</span><span style="color:#F07178;"> {</span><span style="color:#F78C6C;">1&#39;b0</span><span style="color:#F07178;">, i_a} </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1</span><span style="color:#F07178;">;                     </span><span style="color:#676E95;font-style:italic;">//将i_a扩充一位后再加1，便于接下来判断进位/借位</span></span>
<span class="line"><span style="color:#F07178;">                    of_temp </span><span style="color:#89DDFF;">&lt;=</span><span style="color:#F07178;"> {i_a[</span><span style="color:#F78C6C;">31</span><span style="color:#F07178;">], i_a} </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1</span><span style="color:#F07178;">;                  </span><span style="color:#676E95;font-style:italic;">//将i_a变成双符号位之后再加1, 便于接下来判断溢出</span></span>
<span class="line"><span style="color:#F07178;">                    o_y </span><span style="color:#89DDFF;">&lt;=</span><span style="color:#F07178;"> cf_temp[</span><span style="color:#F78C6C;">31</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;">0</span><span style="color:#F07178;">];                           </span><span style="color:#676E95;font-style:italic;">//加1结果</span></span>
<span class="line"><span style="color:#F07178;">                    cf </span><span style="color:#89DDFF;">&lt;=</span><span style="color:#F07178;"> cf_temp[</span><span style="color:#F78C6C;">32</span><span style="color:#F07178;">];                              </span><span style="color:#676E95;font-style:italic;">//进位/借位标志</span></span>
<span class="line"><span style="color:#F07178;">                    of </span><span style="color:#89DDFF;">&lt;=</span><span style="color:#F07178;"> of_temp[</span><span style="color:#F78C6C;">32</span><span style="color:#F07178;">] ^ of_temp[</span><span style="color:#F78C6C;">31</span><span style="color:#F07178;">];                </span><span style="color:#676E95;font-style:italic;">//溢出标志, 双符号位，相减后如果两个符号位不相等则溢出</span></span>
<span class="line"><span style="color:#F07178;">                </span><span style="color:#F78C6C;">end</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#F78C6C;">4&#39;b0100</span><span style="color:#F07178;">:                    </span><span style="color:#676E95;font-style:italic;">//减1</span></span>
<span class="line"><span style="color:#F07178;">                </span><span style="color:#F78C6C;">begin</span></span>
<span class="line"><span style="color:#F07178;">                    cf_temp </span><span style="color:#89DDFF;">&lt;=</span><span style="color:#F07178;"> {</span><span style="color:#F78C6C;">1&#39;b0</span><span style="color:#F07178;">, i_a} </span><span style="color:#89DDFF;">-</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1</span><span style="color:#F07178;">;                     </span><span style="color:#676E95;font-style:italic;">//将i_a扩充一位后再减1，便于接下来判断进位/借位</span></span>
<span class="line"><span style="color:#F07178;">                    of_temp </span><span style="color:#89DDFF;">&lt;=</span><span style="color:#F07178;"> {i_a[</span><span style="color:#F78C6C;">31</span><span style="color:#F07178;">], i_a} </span><span style="color:#89DDFF;">-</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1</span><span style="color:#F07178;">;                  </span><span style="color:#676E95;font-style:italic;">//将i_a变成双符号位之后再减1, 便于接下来判断溢出</span></span>
<span class="line"><span style="color:#F07178;">                    o_y </span><span style="color:#89DDFF;">&lt;=</span><span style="color:#F07178;"> cf_temp[</span><span style="color:#F78C6C;">31</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;">0</span><span style="color:#F07178;">];                           </span><span style="color:#676E95;font-style:italic;">//减1结果</span></span>
<span class="line"><span style="color:#F07178;">                    cf </span><span style="color:#89DDFF;">&lt;=</span><span style="color:#F07178;"> cf_temp[</span><span style="color:#F78C6C;">32</span><span style="color:#F07178;">];                              </span><span style="color:#676E95;font-style:italic;">//进位/借位标志</span></span>
<span class="line"><span style="color:#F07178;">                    of </span><span style="color:#89DDFF;">&lt;=</span><span style="color:#F07178;"> of_temp[</span><span style="color:#F78C6C;">32</span><span style="color:#F07178;">] ^ of_temp[</span><span style="color:#F78C6C;">31</span><span style="color:#F07178;">];                </span><span style="color:#676E95;font-style:italic;">//溢出标志, 双符号位，相减后如果两个符号位不相等则溢出</span></span>
<span class="line"><span style="color:#F07178;">                </span><span style="color:#F78C6C;">end</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#F78C6C;">4&#39;b0101</span><span style="color:#F07178;">:</span></span>
<span class="line"><span style="color:#F07178;">                </span><span style="color:#F78C6C;">begin</span></span>
<span class="line"><span style="color:#F07178;">                    o_y </span><span style="color:#89DDFF;">&lt;=</span><span style="color:#F07178;"> i_a </span><span style="color:#89DDFF;">&amp;</span><span style="color:#F07178;"> i_b;   </span><span style="color:#676E95;font-style:italic;">//与</span></span>
<span class="line"><span style="color:#F07178;">                </span><span style="color:#F78C6C;">end</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#F78C6C;">4&#39;b0110</span><span style="color:#F07178;">:</span></span>
<span class="line"><span style="color:#F07178;">                </span><span style="color:#F78C6C;">begin</span></span>
<span class="line"><span style="color:#F07178;">                    o_y </span><span style="color:#89DDFF;">&lt;=</span><span style="color:#F07178;"> i_a </span><span style="color:#89DDFF;">|</span><span style="color:#F07178;"> i_b;   </span><span style="color:#676E95;font-style:italic;">//或</span></span>
<span class="line"><span style="color:#F07178;">                </span><span style="color:#F78C6C;">end</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#F78C6C;">4&#39;b0111</span><span style="color:#F07178;">:</span></span>
<span class="line"><span style="color:#F07178;">                </span><span style="color:#F78C6C;">begin</span></span>
<span class="line"><span style="color:#F07178;">                    o_y </span><span style="color:#89DDFF;">&lt;=</span><span style="color:#F07178;"> i_a ^ i_b;   </span><span style="color:#676E95;font-style:italic;">//异或</span></span>
<span class="line"><span style="color:#F07178;">                </span><span style="color:#F78C6C;">end</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#F78C6C;">4&#39;b1000</span><span style="color:#F07178;">:</span></span>
<span class="line"><span style="color:#F07178;">                </span><span style="color:#F78C6C;">begin</span></span>
<span class="line"><span style="color:#F07178;">                    o_y </span><span style="color:#89DDFF;">&lt;=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">~</span><span style="color:#F07178;">i_a;        </span><span style="color:#676E95;font-style:italic;">//取反</span></span>
<span class="line"><span style="color:#F07178;">                </span><span style="color:#F78C6C;">end</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#F78C6C;">4&#39;b1001</span><span style="color:#F07178;">:</span></span>
<span class="line"><span style="color:#F07178;">                </span><span style="color:#F78C6C;">begin</span></span>
<span class="line"><span style="color:#F07178;">                    o_y </span><span style="color:#89DDFF;">&lt;=</span><span style="color:#F07178;"> i_a </span><span style="color:#89DDFF;">&lt;&lt;</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1</span><span style="color:#F07178;">;    </span><span style="color:#676E95;font-style:italic;">//算术左移一位</span></span>
<span class="line"><span style="color:#F07178;">                </span><span style="color:#F78C6C;">end</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#F78C6C;">4&#39;b1010</span><span style="color:#F07178;">:</span></span>
<span class="line"><span style="color:#F07178;">                </span><span style="color:#F78C6C;">begin</span></span>
<span class="line"><span style="color:#F07178;">                    o_y </span><span style="color:#89DDFF;">&lt;=</span><span style="color:#F07178;"> i_a </span><span style="color:#89DDFF;">&gt;&gt;</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1</span><span style="color:#F07178;">;    </span><span style="color:#676E95;font-style:italic;">//算术右移一位</span></span>
<span class="line"><span style="color:#F07178;">                </span><span style="color:#F78C6C;">end</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#F78C6C;">4&#39;b1011</span><span style="color:#F07178;">:</span></span>
<span class="line"><span style="color:#F07178;">                </span><span style="color:#F78C6C;">begin</span></span>
<span class="line"><span style="color:#F07178;">                    o_y </span><span style="color:#89DDFF;">&lt;=</span><span style="color:#F07178;"> i_a;         </span><span style="color:#676E95;font-style:italic;">//直通</span></span>
<span class="line"><span style="color:#F07178;">                </span><span style="color:#F78C6C;">end</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#F78C6C;">default</span><span style="color:#F07178;">:</span></span>
<span class="line"><span style="color:#F07178;">                </span><span style="color:#F78C6C;">begin</span></span>
<span class="line"><span style="color:#F07178;">                    o_y </span><span style="color:#89DDFF;">&lt;=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">32&#39;bxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</span><span style="color:#F07178;">;</span></span>
<span class="line"><span style="color:#F07178;">                </span><span style="color:#F78C6C;">end</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#F78C6C;">endcase</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#F78C6C;">if</span><span style="color:#F07178;">(o_y </span><span style="color:#89DDFF;">==</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#F07178;">) </span><span style="color:#F78C6C;">begin</span><span style="color:#F07178;">                </span><span style="color:#676E95;font-style:italic;">//零标志</span></span>
<span class="line"><span style="color:#F07178;">            zf </span><span style="color:#89DDFF;">&lt;=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1</span><span style="color:#F07178;">;</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#F78C6C;">end</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#F78C6C;">else</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">begin</span></span>
<span class="line"><span style="color:#F07178;">            zf </span><span style="color:#89DDFF;">&lt;=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#F07178;">;</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#F78C6C;">end</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">        nf </span><span style="color:#89DDFF;">&lt;=</span><span style="color:#F07178;"> o_y[</span><span style="color:#F78C6C;">31</span><span style="color:#F07178;">];                  </span><span style="color:#676E95;font-style:italic;">//负数标志</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#F78C6C;">end</span></span>
<span class="line"><span style="color:#C792EA;">endmodule</span></span></code></pre></div><p><strong>通用寄存器模块 register.v</strong></p><div class="language-verilog"><button title="Copy Code" class="copy"></button><span class="lang">verilog</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">module</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">register</span><span style="color:#F07178;">(</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#F78C6C;">input</span><span style="color:#F07178;"> [</span><span style="color:#F78C6C;">31</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;">0</span><span style="color:#F07178;">] i_data,                </span><span style="color:#676E95;font-style:italic;">//输入数据</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#F78C6C;">input</span><span style="color:#F07178;"> ldr,                          </span><span style="color:#676E95;font-style:italic;">//输入锁存信号, 上升沿时刻, 输入存入</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#F78C6C;">input</span><span style="color:#F07178;"> ctrl,                         </span><span style="color:#676E95;font-style:italic;">//输入控制, ctrl=0时，寄存器锁存输出, 否则输出端为高阻态</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#F78C6C;">output</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">reg</span><span style="color:#F07178;">[</span><span style="color:#F78C6C;">31</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;">0</span><span style="color:#F07178;">] o_data             </span><span style="color:#676E95;font-style:italic;">//输出数据</span></span>
<span class="line"><span style="color:#F07178;">    );</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#F78C6C;">reg</span><span style="color:#F07178;">[</span><span style="color:#F78C6C;">31</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;">0</span><span style="color:#F07178;">] data;                     </span><span style="color:#676E95;font-style:italic;">//寄存器当中的锁存值</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#F78C6C;">always</span><span style="color:#F07178;"> @(</span><span style="color:#F78C6C;">posedge</span><span style="color:#F07178;"> ldr) </span><span style="color:#F78C6C;">begin</span><span style="color:#F07178;">         </span><span style="color:#676E95;font-style:italic;">//当ldr上升沿时,就将输入的数据存入寄存器</span></span>
<span class="line"><span style="color:#F07178;">        data </span><span style="color:#89DDFF;">&lt;=</span><span style="color:#F07178;"> i_data;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#F78C6C;">end</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#F78C6C;">always</span><span style="color:#F07178;"> @(</span><span style="color:#89DDFF;">*</span><span style="color:#F07178;">) </span><span style="color:#F78C6C;">begin</span><span style="color:#F07178;">                   </span><span style="color:#676E95;font-style:italic;">//所有可能的敏感信号发生变化时, 如果控制信号ctrl为0, 就将寄存器锁存值输出; 否则为高阻态</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#F78C6C;">if</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">~</span><span style="color:#F07178;">ctrl) </span><span style="color:#F78C6C;">begin</span></span>
<span class="line"><span style="color:#F07178;">            o_data </span><span style="color:#89DDFF;">&lt;=</span><span style="color:#F07178;"> data;</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#F78C6C;">end</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#F78C6C;">else</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">begin</span></span>
<span class="line"><span style="color:#F07178;">            o_data </span><span style="color:#89DDFF;">&lt;=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">32&#39;bzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz</span><span style="color:#F07178;">;</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#F78C6C;">end</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#F78C6C;">end</span></span>
<span class="line"><span style="color:#C792EA;">endmodule</span></span></code></pre></div><p><strong>数据寄存器模块 dr.v</strong></p><div class="language-verilog"><button title="Copy Code" class="copy"></button><span class="lang">verilog</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">module</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">dr</span><span style="color:#F07178;">(</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#F78C6C;">input</span><span style="color:#F07178;"> lddr,                     </span><span style="color:#676E95;font-style:italic;">//输入数据锁存信号, 上升沿时刻, 输入存入</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#F78C6C;">input</span><span style="color:#F07178;"> rst_n,                    </span><span style="color:#676E95;font-style:italic;">//复位信号, rst_n=1时, 复位信号有效</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#F78C6C;">input</span><span style="color:#F07178;"> [</span><span style="color:#F78C6C;">31</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;">0</span><span style="color:#F07178;">] i_data,            </span><span style="color:#676E95;font-style:italic;">//输入数据</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#F78C6C;">output</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">reg</span><span style="color:#F07178;">[</span><span style="color:#F78C6C;">31</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;">0</span><span style="color:#F07178;">] o_data         </span><span style="color:#676E95;font-style:italic;">//输出数据</span></span>
<span class="line"><span style="color:#F07178;">    );</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#F78C6C;">always</span><span style="color:#F07178;"> @(</span><span style="color:#F78C6C;">posedge</span><span style="color:#F07178;"> lddr </span><span style="color:#F78C6C;">or</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">posedge</span><span style="color:#F07178;"> rst_n) </span><span style="color:#F78C6C;">begin</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">// rst_n == 1? o_data[31:0] &lt;= 32&#39;b0 : o_data &lt;= i_data;</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#F78C6C;">if</span><span style="color:#F07178;">(rst_n) </span><span style="color:#F78C6C;">begin</span></span>
<span class="line"><span style="color:#F07178;">            o_data[</span><span style="color:#F78C6C;">31</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;">0</span><span style="color:#F07178;">] </span><span style="color:#89DDFF;">&lt;=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">32&#39;b0</span><span style="color:#F07178;">;</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#F78C6C;">end</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#F78C6C;">else</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">begin</span></span>
<span class="line"><span style="color:#F07178;">            o_data </span><span style="color:#89DDFF;">&lt;=</span><span style="color:#F07178;"> i_data;</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#F78C6C;">end</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#F78C6C;">end</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">endmodule</span></span></code></pre></div><p><strong>输入输出缓冲器模块 buff.v</strong></p><div class="language-verilog"><button title="Copy Code" class="copy"></button><span class="lang">verilog</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">//输入/输出缓冲器</span></span>
<span class="line"><span style="color:#C792EA;">module</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">buff</span><span style="color:#F07178;">(</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#F78C6C;">input</span><span style="color:#F07178;"> ctrl,                     </span><span style="color:#676E95;font-style:italic;">//控制信号, ctrl=0时, 缓冲器打开, 否则输出为高阻态</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#F78C6C;">input</span><span style="color:#F07178;"> [</span><span style="color:#F78C6C;">31</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;">0</span><span style="color:#F07178;">] i_data,            </span><span style="color:#676E95;font-style:italic;">//输入数据</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#F78C6C;">output</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">reg</span><span style="color:#F07178;">[</span><span style="color:#F78C6C;">31</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;">0</span><span style="color:#F07178;">] o_data         </span><span style="color:#676E95;font-style:italic;">//输出数据, 三态</span></span>
<span class="line"><span style="color:#F07178;">    );</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#F78C6C;">always</span><span style="color:#F07178;"> @(</span><span style="color:#89DDFF;">*</span><span style="color:#F07178;">) </span><span style="color:#F78C6C;">begin</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#F78C6C;">if</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">~</span><span style="color:#F07178;">ctrl) </span><span style="color:#F78C6C;">begin</span></span>
<span class="line"><span style="color:#F07178;">            o_data </span><span style="color:#89DDFF;">&lt;=</span><span style="color:#F07178;"> i_data;</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#F78C6C;">end</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#F78C6C;">else</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">begin</span></span>
<span class="line"><span style="color:#F07178;">            o_data </span><span style="color:#89DDFF;">&lt;=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">32&#39;bzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz</span><span style="color:#F07178;">;</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#F78C6C;">end</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#F78C6C;">end</span></span>
<span class="line"><span style="color:#C792EA;">endmodule</span></span></code></pre></div><h4 id="仿真文件-3" tabindex="-1">仿真文件 <a class="header-anchor" href="#仿真文件-3" aria-label="Permalink to &quot;仿真文件&quot;">​</a></h4><p><strong>alu_32bits_top_sim.v</strong></p><div class="language-verilog"><button title="Copy Code" class="copy"></button><span class="lang">verilog</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">module</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">alu_32bits_top_sim</span><span style="color:#F07178;">(</span></span>
<span class="line"><span style="color:#F07178;">    );</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#F78C6C;">reg</span><span style="color:#F07178;"> [</span><span style="color:#F78C6C;">31</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;">0</span><span style="color:#F07178;">] i_data;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#F78C6C;">reg</span><span style="color:#F07178;"> [</span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;">0</span><span style="color:#F07178;">] alu_sel;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#F78C6C;">reg</span><span style="color:#F07178;"> ldr0, ldr1, ldr2, ldr3, lddr1, lddr2;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#F78C6C;">reg</span><span style="color:#F07178;"> nr0_bus, nr1_bus, nr2_bus, nr3_bus, nalu_bus, nsw_bus;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#F78C6C;">wire</span><span style="color:#F07178;"> [</span><span style="color:#F78C6C;">31</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;">0</span><span style="color:#F07178;">]DBUS;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#F78C6C;">wire</span><span style="color:#F07178;"> cf,zf,of,nf;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">    alu_32bits_top alu_32bits_top(</span></span>
<span class="line"><span style="color:#F07178;">        .ldr0(ldr0), .ldr1(ldr1), .ldr2(ldr2), .ldr3(ldr3),</span></span>
<span class="line"><span style="color:#F07178;">        .lddr1(lddr1), .lddr2(lddr2),</span></span>
<span class="line"><span style="color:#F07178;">        .cf(cf), .of(of), .zf(zf), .nf(nf),</span></span>
<span class="line"><span style="color:#F07178;">        .nr0_bus(nr0_bus), .nr1_bus(nr1_bus), .nr2_bus(nr2_bus), .nr3_bus(nr3_bus), .nalu_bus(nalu_bus), .nsw_bus(nsw_bus),</span></span>
<span class="line"><span style="color:#F07178;">        .i_data(i_data), .alu_sel(alu_sel), .DBUS(DBUS)</span></span>
<span class="line"><span style="color:#F07178;">    )</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">        </span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#F78C6C;">initial</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">begin</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#F78C6C;">#0</span><span style="color:#F07178;">  alu_sel</span><span style="color:#89DDFF;">=</span><span style="color:#F78C6C;">1</span><span style="color:#F07178;">;</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#F78C6C;">#80</span><span style="color:#F07178;">;alu_sel</span><span style="color:#89DDFF;">=</span><span style="color:#F78C6C;">2</span><span style="color:#F07178;">;</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#F78C6C;">#80</span><span style="color:#F07178;">;alu_sel</span><span style="color:#89DDFF;">=</span><span style="color:#F78C6C;">5</span><span style="color:#F07178;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#F78C6C;">end</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#F78C6C;">always</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">begin</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#F78C6C;">#0</span><span style="color:#F07178;">  i_data</span><span style="color:#89DDFF;">=</span><span style="color:#F78C6C;">8&#39;h50</span><span style="color:#F07178;">;</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#F78C6C;">#20</span><span style="color:#F07178;">;i_data</span><span style="color:#89DDFF;">=</span><span style="color:#F78C6C;">8&#39;h55</span><span style="color:#F07178;">;</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#F78C6C;">#20</span><span style="color:#F07178;">;i_data</span><span style="color:#89DDFF;">=</span><span style="color:#F78C6C;">8&#39;hAA</span><span style="color:#F07178;">;</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#F78C6C;">#20</span><span style="color:#F07178;">;i_data</span><span style="color:#89DDFF;">=</span><span style="color:#F78C6C;">8&#39;h55</span><span style="color:#F07178;">;</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#F78C6C;">#20</span><span style="color:#F07178;">;i_data</span><span style="color:#89DDFF;">=</span><span style="color:#F78C6C;">8&#39;hAA</span><span style="color:#F07178;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#F78C6C;">end</span></span>
<span class="line"><span style="color:#F07178;">    </span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#F78C6C;">initial</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">begin</span></span>
<span class="line"><span style="color:#F07178;">        lddr1</span><span style="color:#89DDFF;">=</span><span style="color:#F78C6C;">0</span><span style="color:#F07178;">;</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#F78C6C;">#45</span><span style="color:#F07178;">;lddr1</span><span style="color:#89DDFF;">=</span><span style="color:#F78C6C;">1</span><span style="color:#F07178;">;</span><span style="color:#F78C6C;">#5</span><span style="color:#F07178;">;lddr1</span><span style="color:#89DDFF;">=</span><span style="color:#F78C6C;">0</span><span style="color:#F07178;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#F78C6C;">end</span></span>
<span class="line"><span style="color:#F07178;">    </span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#F78C6C;">initial</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">begin</span></span>
<span class="line"><span style="color:#F07178;">        nr0_bus</span><span style="color:#89DDFF;">=</span><span style="color:#F78C6C;">1</span><span style="color:#F07178;">;</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#F78C6C;">#40</span><span style="color:#F07178;">;nr0_bus</span><span style="color:#89DDFF;">=</span><span style="color:#F78C6C;">0</span><span style="color:#F07178;">;</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#F78C6C;">#20</span><span style="color:#F07178;">;nr0_bus</span><span style="color:#89DDFF;">=</span><span style="color:#F78C6C;">1</span><span style="color:#F07178;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#F78C6C;">end</span></span>
<span class="line"><span style="color:#F07178;">    </span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#F78C6C;">initial</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">begin</span></span>
<span class="line"><span style="color:#F07178;">        lddr2</span><span style="color:#89DDFF;">=</span><span style="color:#F78C6C;">0</span><span style="color:#F07178;">;</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#F78C6C;">#65</span><span style="color:#F07178;">;lddr2</span><span style="color:#89DDFF;">=</span><span style="color:#F78C6C;">1</span><span style="color:#F07178;">;</span><span style="color:#F78C6C;">#5</span><span style="color:#F07178;">;lddr2</span><span style="color:#89DDFF;">=</span><span style="color:#F78C6C;">0</span><span style="color:#F07178;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#F78C6C;">end</span></span>
<span class="line"><span style="color:#F07178;">    </span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#F78C6C;">initial</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">begin</span></span>
<span class="line"><span style="color:#F07178;">        nr1_bus</span><span style="color:#89DDFF;">=</span><span style="color:#F78C6C;">1</span><span style="color:#F07178;">;</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#F78C6C;">#60</span><span style="color:#F07178;">;nr1_bus</span><span style="color:#89DDFF;">=</span><span style="color:#F78C6C;">0</span><span style="color:#F07178;">;</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#F78C6C;">#20</span><span style="color:#F07178;">;nr1_bus</span><span style="color:#89DDFF;">=</span><span style="color:#F78C6C;">1</span><span style="color:#F07178;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#F78C6C;">end</span></span>
<span class="line"><span style="color:#F07178;">    </span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#F78C6C;">initial</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">begin</span></span>
<span class="line"><span style="color:#F07178;">        nr2_bus</span><span style="color:#89DDFF;">=</span><span style="color:#F78C6C;">1</span><span style="color:#F07178;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#F78C6C;">end</span></span>
<span class="line"><span style="color:#F07178;">    </span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#F78C6C;">initial</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">begin</span></span>
<span class="line"><span style="color:#F07178;">        nr3_bus</span><span style="color:#89DDFF;">=</span><span style="color:#F78C6C;">1</span><span style="color:#F07178;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#F78C6C;">end</span></span>
<span class="line"><span style="color:#F07178;">    </span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#F78C6C;">initial</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">begin</span></span>
<span class="line"><span style="color:#F07178;">        ldr0</span><span style="color:#89DDFF;">=</span><span style="color:#F78C6C;">0</span><span style="color:#F07178;">;</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#F78C6C;">#10</span><span style="color:#F07178;">;ldr0</span><span style="color:#89DDFF;">=</span><span style="color:#F78C6C;">1</span><span style="color:#F07178;">;</span><span style="color:#F78C6C;">#10</span><span style="color:#F07178;">;ldr0</span><span style="color:#89DDFF;">=</span><span style="color:#F78C6C;">0</span><span style="color:#F07178;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#F78C6C;">end</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#F78C6C;">initial</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">begin</span></span>
<span class="line"><span style="color:#F07178;">        ldr1</span><span style="color:#89DDFF;">=</span><span style="color:#F78C6C;">0</span><span style="color:#F07178;">;</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#F78C6C;">#30</span><span style="color:#F07178;">;ldr1</span><span style="color:#89DDFF;">=</span><span style="color:#F78C6C;">1</span><span style="color:#F07178;">;</span><span style="color:#F78C6C;">#10</span><span style="color:#F07178;">;ldr1</span><span style="color:#89DDFF;">=</span><span style="color:#F78C6C;">0</span><span style="color:#F07178;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#F78C6C;">end</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#F78C6C;">initial</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">begin</span></span>
<span class="line"><span style="color:#F07178;">        ldr2</span><span style="color:#89DDFF;">=</span><span style="color:#F78C6C;">0</span><span style="color:#F07178;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#F78C6C;">end</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#F78C6C;">initial</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">begin</span></span>
<span class="line"><span style="color:#F07178;">        ldr3</span><span style="color:#89DDFF;">=</span><span style="color:#F78C6C;">0</span><span style="color:#F07178;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#F78C6C;">end</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#F78C6C;">initial</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">begin</span></span>
<span class="line"><span style="color:#F07178;">        nsw_bus</span><span style="color:#89DDFF;">=</span><span style="color:#F78C6C;">0</span><span style="color:#F07178;">;</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#F78C6C;">#40</span><span style="color:#F07178;">;nsw_bus</span><span style="color:#89DDFF;">=</span><span style="color:#F78C6C;">1</span><span style="color:#F07178;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#F78C6C;">end</span></span>
<span class="line"><span style="color:#F07178;">    </span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#F78C6C;">initial</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">begin</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#F78C6C;">#0</span><span style="color:#F07178;">  nalu_bus</span><span style="color:#89DDFF;">=</span><span style="color:#F78C6C;">1</span><span style="color:#F07178;">;</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#F78C6C;">#50</span><span style="color:#F07178;">;nalu_bus</span><span style="color:#89DDFF;">=</span><span style="color:#F78C6C;">0</span><span style="color:#F07178;">;</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#F78C6C;">#20</span><span style="color:#F07178;">;nalu_bus</span><span style="color:#89DDFF;">=</span><span style="color:#F78C6C;">0</span><span style="color:#F07178;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#F78C6C;">end</span></span>
<span class="line"><span style="color:#F07178;">    </span></span>
<span class="line"><span style="color:#C792EA;">endmodule</span></span></code></pre></div>`,40),e=[o];function t(c,r,y,F,i,C){return n(),a("div",null,e)}const _=s(p,[["render",t]]);export{d as __pageData,_ as default};
