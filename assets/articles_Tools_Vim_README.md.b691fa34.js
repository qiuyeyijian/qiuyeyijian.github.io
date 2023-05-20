import{_ as t,o as s,c as a,O as n}from"./chunks/framework.4afe7240.js";const A=JSON.parse('{"title":"Vim","description":"","frontmatter":{},"headers":[],"relativePath":"articles/Tools/Vim/README.md","filePath":"articles/Tools/Vim/README.md"}'),l={name:"articles/Tools/Vim/README.md"},e=n(`<h1 id="vim" tabindex="-1">Vim <a class="header-anchor" href="#vim" aria-label="Permalink to &quot;Vim&quot;">​</a></h1><h2 id="基础" tabindex="-1">基础 <a class="header-anchor" href="#基础" aria-label="Permalink to &quot;基础&quot;">​</a></h2><h3 id="vim-的3种工作模式" tabindex="-1">Vim 的3种工作模式 <a class="header-anchor" href="#vim-的3种工作模式" aria-label="Permalink to &quot;Vim 的3种工作模式&quot;">​</a></h3><p>一般模式（指令模式）、编辑模式、命令行模式</p><div class="language-cpp"><button title="Copy Code" class="copy"></button><span class="lang">cpp</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">:set nu</span><span style="color:#676E95;font-style:italic;">				//显示行号</span></span>
<span class="line"><span style="color:#A6ACCD;">:set nonu</span><span style="color:#676E95;font-style:italic;">			//不显示行号</span></span></code></pre></div><h3 id="将vim置于后台" tabindex="-1">将vim置于后台 <a class="header-anchor" href="#将vim置于后台" aria-label="Permalink to &quot;将vim置于后台&quot;">​</a></h3><p><code>Ctrl + z</code> 可以将vim 置于后台</p><p><code>fg</code>命令可以调回</p><h2 id="快速开始" tabindex="-1">快速开始 <a class="header-anchor" href="#快速开始" aria-label="Permalink to &quot;快速开始&quot;">​</a></h2><h3 id="文本选择" tabindex="-1">文本选择 <a class="header-anchor" href="#文本选择" aria-label="Permalink to &quot;文本选择&quot;">​</a></h3><p><strong>在正常模式下（按ESC进入）按键v进入可视化模式</strong>，然后按键盘左右键或h,l键即可实现文本的选择。 其它相关命令：</p><ul><li>v：按字符选择。经常使用的模式，所以亲自尝试一下它。</li><li>V：按行选择。这在你想拷贝或者移动很多行的文本的时候特别有用。</li></ul><h3 id="复制粘贴" tabindex="-1">复制粘贴 <a class="header-anchor" href="#复制粘贴" aria-label="Permalink to &quot;复制粘贴&quot;">​</a></h3><table><thead><tr><th style="text-align:left;">一般模式下删除、复制和粘贴</th><th style="text-align:left;"></th></tr></thead><tbody><tr><td style="text-align:left;">x,X</td><td style="text-align:left;">x为向后删除一个字符，X为向前删除一个字符</td></tr><tr><td style="text-align:left;">dd</td><td style="text-align:left;">剪切（删除）光标所在的那一行</td></tr><tr><td style="text-align:left;">ndd (n 是数字)</td><td style="text-align:left;">剪切（删除）光标所在的向下n行</td></tr><tr><td style="text-align:left;">dG</td><td style="text-align:left;">剪切（删除）光标所在行到末行的所有数据</td></tr><tr><td style="text-align:left;">yy</td><td style="text-align:left;">复制光标所在的那一行</td></tr><tr><td style="text-align:left;">nyy (n 是数字)</td><td style="text-align:left;">复制光标所在行开始的向下n行</td></tr><tr><td style="text-align:left;">yG</td><td style="text-align:left;">复制光标所在行到末行的所有数据</td></tr><tr><td style="text-align:left;">p,P</td><td style="text-align:left;">p将复制的数据从光标下一行粘贴，P则从光标上一行粘贴</td></tr><tr><td style="text-align:left;">u</td><td style="text-align:left;">撤销一步操作</td></tr><tr><td style="text-align:left;">Ctrl + r</td><td style="text-align:left;">重复上一个操作</td></tr><tr><td style="text-align:left;">-</td><td style="text-align:left;">重复前一个操作</td></tr><tr><td style="text-align:left;"></td><td style="text-align:left;"></td></tr></tbody></table><p>删除特定行，需要在命令行模式下</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">:20,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">30</span><span style="color:#C3E88D;">d</span><span style="color:#A6ACCD;">			</span><span style="color:#C3E88D;">//</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">删除20-30行</span></span></code></pre></div><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">y</span><span style="color:#A6ACCD;">     </span><span style="color:#C3E88D;">在使用v模式选定了某一块的时候，复制选定块到缓冲区用</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#FFCB6B;">yy</span><span style="color:#A6ACCD;">    </span><span style="color:#C3E88D;">复制整行（nyy或者yny</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">，复制n行，n为数字）；</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#FFCB6B;">y^</span><span style="color:#A6ACCD;">    </span><span style="color:#C3E88D;">复制当前到行头的内容；</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#FFCB6B;">y$</span><span style="color:#A6ACCD;">    </span><span style="color:#C3E88D;">复制当前到行尾的内容；</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#FFCB6B;">yw</span><span style="color:#A6ACCD;">    </span><span style="color:#C3E88D;">复制一个word</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">（nyw或者ynw，复制n个word，n为数字）；</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#FFCB6B;">yG</span><span style="color:#A6ACCD;">    </span><span style="color:#C3E88D;">复制至档尾（nyG或者ynG，复制到第n行，例如1yG或者y1G，复制到档尾）</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">d</span><span style="color:#A6ACCD;">     </span><span style="color:#C3E88D;">剪切选定块到缓冲区；</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#FFCB6B;">dd</span><span style="color:#A6ACCD;">    </span><span style="color:#C3E88D;">剪切整行</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#FFCB6B;">d^</span><span style="color:#A6ACCD;">    </span><span style="color:#C3E88D;">剪切至行首</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#FFCB6B;">d$</span><span style="color:#A6ACCD;">    </span><span style="color:#C3E88D;">剪切至行尾</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#FFCB6B;">dw</span><span style="color:#A6ACCD;">    </span><span style="color:#C3E88D;">剪切一个word</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#FFCB6B;">dG</span><span style="color:#A6ACCD;">    </span><span style="color:#C3E88D;">剪切至档尾</span><span style="color:#A6ACCD;">  </span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">x</span><span style="color:#A6ACCD;">        </span><span style="color:#C3E88D;">删除当前光标下的字符</span></span>
<span class="line"><span style="color:#FFCB6B;">c</span><span style="color:#A6ACCD;">        </span><span style="color:#C3E88D;">功能和d相同，区别在于完成删除操作后进入INSERT</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">MODE</span></span>
<span class="line"><span style="color:#FFCB6B;">cc</span><span style="color:#A6ACCD;">       </span><span style="color:#C3E88D;">也是删除当前行，然后进入INSERT</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">MODE</span></span></code></pre></div><h3 id="移动光标" tabindex="-1">移动光标 <a class="header-anchor" href="#移动光标" aria-label="Permalink to &quot;移动光标&quot;">​</a></h3><table><thead><tr><th>一般模式下移动光标</th><th></th></tr></thead><tbody><tr><td>h 或左方向键</td><td>向左移动一个字符</td></tr><tr><td>j 或下方向键</td><td>向下移动一个字符</td></tr><tr><td>k 或上方向键</td><td>向上移动一个字符</td></tr><tr><td>l 或右方向键</td><td>向右移动一个字符</td></tr><tr><td>PgUp 或 Ctrl + b</td><td>向上翻一页</td></tr><tr><td>PgDn 或 Ctrl + f</td><td>向下翻一页</td></tr><tr><td>G</td><td>光标移动到文本的最末行</td></tr><tr><td>nG (n 是数字)</td><td>光标移动到文本的第n 行</td></tr><tr><td>gg</td><td>光标移动到文本的首行</td></tr></tbody></table><h3 id="查找替换" tabindex="-1">查找替换 <a class="header-anchor" href="#查找替换" aria-label="Permalink to &quot;查找替换&quot;">​</a></h3><table><thead><tr><th>一般模式下的查找与替换</th><th style="text-align:left;"></th></tr></thead><tbody><tr><td>/keyword</td><td style="text-align:left;">向光标之后寻找名为keyword的字符串，当找到第一个keyword后，该单词高亮显示，按下“n” 继续查找下一个，按下“N”反方向查找下一个</td></tr><tr><td>?keyword</td><td style="text-align:left;">向光标之后寻找名为keyword的字符串，当找到第一个keyword后，该单词高亮显示，按下“n” 继续查找下一个，按下“N”反方向查找下一个</td></tr><tr><td>:n1,n2s/word1/word2/g</td><td style="text-align:left;">在n1和n2行之间查找word1字符串并替换为word2</td></tr><tr><td>:1,$s/word1/word2/g</td><td style="text-align:left;">从第一行到最末行，查找word1并替换word2</td></tr><tr><td>:1,$s/word1/word2/gc</td><td style="text-align:left;">从第一行到最末行，查找word1并替换word2,替换之前需要用户确认</td></tr></tbody></table><p>搜索之后，我们打开文件，发现搜索的字符被高亮了，可以取消</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">:set</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">nohlsearch</span></span></code></pre></div><table><thead><tr><th>从一般模式进入编辑模式</th><th></th></tr></thead><tbody><tr><td>i</td><td>在光标前插入字符</td></tr><tr><td>I</td><td>在光标所在行的行首插入字符</td></tr><tr><td>a</td><td>在光标后插入字符</td></tr><tr><td>A</td><td>在光标所在行的行末插入字符</td></tr><tr><td>o</td><td>在光标所在行下插入新的一行</td></tr><tr><td>O</td><td>在光标所在行上插入新的一行</td></tr></tbody></table><p><strong>比较常用就是小<code>i</code>和小<code>o</code></strong></p><h3 id="命令行模式" tabindex="-1">命令行模式 <a class="header-anchor" href="#命令行模式" aria-label="Permalink to &quot;命令行模式&quot;">​</a></h3><table><thead><tr><th>命令行模式</th><th></th></tr></thead><tbody><tr><td>:w</td><td>保存文本</td></tr><tr><td>:w!</td><td>如果文件属性为只读是，强制保存</td></tr><tr><td>:q</td><td>退出vim</td></tr><tr><td>:q!</td><td>前置退出vim, 不管编辑还是未编辑都不保存退出</td></tr><tr><td>:wq</td><td>保存之后退出</td></tr><tr><td>:e!</td><td>将文档还原成最原始的状态</td></tr><tr><td>ZZ</td><td>等价于:wq</td></tr><tr><td>:w [filename]</td><td>将文档另存为 filename</td></tr><tr><td>:set nu</td><td>在每行行首设置行号</td></tr><tr><td>:set nonu</td><td>取消行号</td></tr><tr><td>:n1, n2 w [filename]</td><td>将n1 到 n2 行的内容另存为 filename 文件中</td></tr><tr><td>:! command</td><td>暂时离开vim, 执行某个Linux命令，例如：<code>! ls /home</code>暂时列出/home下的文件，然后会提示按回车返回vim</td></tr></tbody></table><h3 id="linux-下vim配置" tabindex="-1">Linux 下Vim配置 <a class="header-anchor" href="#linux-下vim配置" aria-label="Permalink to &quot;Linux 下Vim配置&quot;">​</a></h3><p>在根目录下新建<code>.vimrc</code>文件，此文件是Vim的配置文件。在里面输入下面内容：</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">set</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">tabstop=</span><span style="color:#F78C6C;">4</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#82AAFF;">set</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">softtabstop=</span><span style="color:#F78C6C;">4</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#82AAFF;">set</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">shiftwidth=</span><span style="color:#F78C6C;">4</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#82AAFF;">set</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">noexpandtab</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#82AAFF;">set</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">nu</span><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#82AAFF;">set</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">autoindent</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#82AAFF;">set</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">cindent</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">&quot;自动补全</span></span>
<span class="line"><span style="color:#FFCB6B;">:inoremap ( ()&lt;ESC&gt;i</span></span>
<span class="line"><span style="color:#FFCB6B;">:inoremap ) &lt;c-r&gt;=ClosePair(&#39;)&#39;)&lt;CR&gt;</span></span>
<span class="line"><span style="color:#FFCB6B;">:inoremap { {&lt;CR&gt;}&lt;ESC&gt;O</span></span>
<span class="line"><span style="color:#FFCB6B;">:inoremap } &lt;c-r&gt;=ClosePair(&#39;}&#39;)&lt;CR&gt;</span></span>
<span class="line"><span style="color:#FFCB6B;">:inoremap [ []&lt;ESC&gt;i</span></span>
<span class="line"><span style="color:#FFCB6B;">:inoremap ] &lt;c-r&gt;=ClosePair(&#39;]&#39;)&lt;CR&gt;</span></span>
<span class="line"><span style="color:#FFCB6B;">:inoremap &quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;&quot;</span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">ES</span><span style="color:#A6ACCD;">C</span><span style="color:#89DDFF;">&gt;</span><span style="color:#C3E88D;">i</span></span>
<span class="line"><span style="color:#FFCB6B;">:inoremap</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;"> </span><span style="color:#89DDFF;">&#39;&#39;</span><span style="color:#C3E88D;">&lt;ESC&gt;i</span></span>
<span class="line"><span style="color:#C3E88D;">function! ClosePair(char)</span></span>
<span class="line"><span style="color:#C3E88D;">    if getline(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">.</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">)[col(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">.</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">) - 1] == a:char</span></span>
<span class="line"><span style="color:#C3E88D;">        return &quot;\\&lt;Right&gt;&quot;</span></span>
<span class="line"><span style="color:#C3E88D;">    else</span></span>
<span class="line"><span style="color:#C3E88D;">        return a:char</span></span>
<span class="line"><span style="color:#C3E88D;">    endif</span></span>
<span class="line"><span style="color:#C3E88D;">endfunction</span></span></code></pre></div><blockquote><ul><li><p>Tabstop: 表示一个 tab 显示出来是多少个空格的长度默认 8。</p></li><li><p>Softtabstop: 表示在编辑模式的时候按退格键的时候退回缩进的长度当使用 expandtab 时特别有用。</p></li><li><p>Shiftwidth: 表示每一级缩进的长度一般设置成跟 softtabstop 一样。 当设置成 expandtab 时缩进用空格来表示，noexpandtab 则是用制表符表示一个缩进。</p></li></ul><ul><li>Nu: 表示显示行号。</li><li>Autoindent: 表示自动缩进。</li><li>Cindent: 是特别针对C语言自动缩进。</li></ul></blockquote><p>编辑完成后，保存退出，输入下面命令使配置文件生效</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">source</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">~/.vimrc</span></span></code></pre></div>`,33),o=[e];function p(r,d,c,i,y,C){return s(),a("div",null,o)}const D=t(l,[["render",p]]);export{A as __pageData,D as default};
