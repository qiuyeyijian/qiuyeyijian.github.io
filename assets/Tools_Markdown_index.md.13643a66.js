import{_ as t,c as l,o as i,a as o,b as d,d as e}from"./app.5e73ec67.js";const _=JSON.parse('{"title":"Markdown 公式语法","description":"","frontmatter":{},"headers":[{"level":2,"title":"行内与独行","slug":"行内与独行","link":"#行内与独行","children":[]},{"level":2,"title":"上标、下标与组合","slug":"上标、下标与组合","link":"#上标、下标与组合","children":[]},{"level":2,"title":"汉字、字体与格式","slug":"汉字、字体与格式","link":"#汉字、字体与格式","children":[]},{"level":2,"title":"占位符","slug":"占位符","link":"#占位符","children":[]},{"level":2,"title":"定界符与组合","slug":"定界符与组合","link":"#定界符与组合","children":[]},{"level":2,"title":"四则运算","slug":"四则运算","link":"#四则运算","children":[]},{"level":2,"title":"高级运算","slug":"高级运算","link":"#高级运算","children":[]},{"level":2,"title":"逻辑运算","slug":"逻辑运算","link":"#逻辑运算","children":[]},{"level":2,"title":"集合运算","slug":"集合运算","link":"#集合运算","children":[]},{"level":2,"title":"数学符号","slug":"数学符号","link":"#数学符号","children":[]},{"level":2,"title":"分段函数","slug":"分段函数","link":"#分段函数","children":[]},{"level":2,"title":"希腊字母","slug":"希腊字母","link":"#希腊字母","children":[]}],"relativePath":"Tools/Markdown/index.md"}'),c={name:"Tools/Markdown/index.md"},a=o('<h1 id="markdown-公式语法" tabindex="-1">Markdown 公式语法 <a class="header-anchor" href="#markdown-公式语法" aria-hidden="true">#</a></h1><h2 id="行内与独行" tabindex="-1">行内与独行 <a class="header-anchor" href="#行内与独行" aria-hidden="true">#</a></h2><ol><li>行内公式：将公式插入到本行内，符号：<code>$公式内容$</code>，如：$xyz$</li><li>独行公式：将公式插入到新的一行内，并且居中，符号：<code>$$公式内容$$</code>，如：$$xyz$$</li></ol><h2 id="上标、下标与组合" tabindex="-1">上标、下标与组合 <a class="header-anchor" href="#上标、下标与组合" aria-hidden="true">#</a></h2>',4),r=d("ol",null,[d("li",null,[e("上标符号，符号："),d("code",null,"^"),e("，如：$x^4$")]),d("li",null,[e("下标符号，符号："),d("code",null,"_"),e("，如：$x_1$")]),d("li",null,[e("组合符号，符号："),d("code",null,"{}"),e("，如：${16}"),d("em",{2:""},"{8}O{2+}"),e("$")])],-1),$=o('<p><strong>^ 表示上标， _ 表示下标，如果上标或下标内容多于一个字符，则使用 {} 括起来</strong></p><h2 id="汉字、字体与格式" tabindex="-1">汉字、字体与格式 <a class="header-anchor" href="#汉字、字体与格式" aria-hidden="true">#</a></h2><ol><li><p>汉字形式，符号：<code>\\mbox{}</code>，如：$V_{\\mbox{初始}}$</p></li><li><p>字体控制，符号：<code>\\displaystyle</code>，如：$\\displaystyle \\frac{x+y}{y+z}$</p></li><li><p>下划线符号，符号：<code>\\underline</code>，如：$\\underline{x+y}$</p></li><li><p>标签，符号<code>\\tag{数字}</code>，如：$\\tag{11}$</p></li><li><p>上大括号，符号：<code>\\overbrace{算式}</code>，如：$\\overbrace{a+b+c+d}^{2.0}$</p></li><li><p>下大括号，符号：<code>\\underbrace{算式}</code>，如：$a+\\underbrace{b+c}_{1.0}+d$</p></li><li><p>上位符号，符号：<code>\\stacrel{上位符号}{基位符号}</code>，如：$\\vec{x}\\stackrel{\\mathrm{def}}{=}{x_1,\\dots,x_n}$</p></li><li><p>花括号公式</p></li></ol><p>$$ \\left{ \\begin{aligned} x&amp;=1\\ y&amp;=2+x \\end{aligned} \\right. $$</p><h2 id="占位符" tabindex="-1">占位符 <a class="header-anchor" href="#占位符" aria-hidden="true">#</a></h2><ol><li>两个quad空格，符号：<code>\\qquad</code>，如：$x \\qquad y$</li><li>quad空格，符号：<code>\\quad</code>，如：$x \\quad y$</li><li>大空格，符号<code>\\</code>，如：$x \\ y$</li><li>中空格，符号<code>\\:</code>，如：$x : y$</li><li>小空格，符号<code>\\,</code>，如：$x , y$</li><li>没有空格，符号``，如：$xy$</li><li>紧贴，符号<code>\\!</code>，如：$x ! y$</li><li>换行，符号 <code>\\\\</code>， 如 $x\\y$</li><li></li></ol><h2 id="定界符与组合" tabindex="-1">定界符与组合 <a class="header-anchor" href="#定界符与组合" aria-hidden="true">#</a></h2><ol><li>括号，符号：<code>（）\\big(\\big) \\Big(\\Big) \\bigg(\\bigg) \\Bigg(\\Bigg)</code>，如：$（）\\big(\\big) \\Big(\\Big) \\bigg(\\bigg) \\Bigg(\\Bigg)$</li><li>中括号，符号：<code>[]</code>，如：$[x+y]$</li><li>大括号，符号：<code>\\{ \\}</code>，如：${x+y}$</li><li>自适应括号，符号：<code>\\left \\right</code>，如：$\\left(x\\right)$，$\\left(x{yz}\\right)$</li><li>组合公式，符号：<code>{上位公式 \\choose 下位公式}</code>，如：${n+1 \\choose k}={n \\choose k}+{n \\choose k-1}$</li><li>组合公式，符号：<code>{上位公式 \\atop 下位公式}</code>，如：$\\sum{k_0,k_1,\\ldots&gt;0 \\atop k_0+k_1+\\cdots=n}A_{k_0}A_{k_1}\\cdots$</li></ol><h2 id="四则运算" tabindex="-1">四则运算 <a class="header-anchor" href="#四则运算" aria-hidden="true">#</a></h2><ol><li>加法运算，符号：<code>+</code>，如：$x+y=z$</li><li>减法运算，符号：<code>-</code>，如：$x-y=z$</li><li>加减运算，符号：<code>\\pm</code>，如：$x \\pm y=z$</li><li>减甲运算，符号：<code>\\mp</code>，如：$x \\mp y=z$</li><li>乘法运算，符号：<code>\\times</code>，如：$x \\times y=z$</li><li>点乘运算，符号：<code>\\cdot</code>，如：$x \\cdot y=z$</li><li>星乘运算，符号：<code>\\ast</code>，如：$x \\ast y=z$</li><li>除法运算，符号：<code>\\div</code>，如：$x \\div y=z$</li><li>斜法运算，符号：<code>/</code>，如：$x/y=z$</li><li>分式表示，符号：<code>\\frac{分子}{分母}</code>，如：$\\frac{x+y}{y+z}$</li><li>分式表示，符号：<code>{分子} \\voer {分母}</code>，如：${x+y} \\over {y+z}$</li><li>绝对值表示，符号：<code>||</code>，如：$|x+y|$</li></ol><h2 id="高级运算" tabindex="-1">高级运算 <a class="header-anchor" href="#高级运算" aria-hidden="true">#</a></h2><ol><li>平均数运算，符号：<code>\\overline{算式}</code>，如：$\\overline{xyz}$</li><li>开二次方运算，符号：<code>\\sqrt</code>，如：$\\sqrt x$</li><li>开方运算，符号：<code>\\sqrt[开方数]{被开方数}</code>，如：$\\sqrt[3]{x+y}$</li><li>对数运算，符号：<code>\\log</code>，如：$\\log(x)$</li><li>极限运算，符号：<code>\\lim</code>，如：$\\lim^{x \\to \\infty}_{y \\to 0}{\\frac{x}{y}}$</li><li>极限运算，符号：<code>\\displaystyle \\lim</code>，如：$\\displaystyle \\lim^{x \\to \\infty}_{y \\to 0}{\\frac{x}{y}}$</li><li>求和运算，符号：<code>\\sum</code>，如：$\\sum^{x \\to \\infty}_{y \\to 0}{\\frac{x}{y}}$</li><li>求和运算，符号：<code>\\displaystyle \\sum</code>，如：$\\displaystyle \\sum^{x \\to \\infty}_{y \\to 0}{\\frac{x}{y}}$</li><li>积分运算，符号：<code>\\int</code>，如：$\\int^{\\infty}_{0}{xdx}$</li><li>积分运算，符号：<code>\\displaystyle \\int</code>，如：$\\displaystyle \\int^{\\infty}_{0}{xdx}$</li><li>微分运算，符号：<code>\\partial</code>，如：$\\frac{\\partial x}{\\partial y}$</li><li>矩阵表示，符号：<code>\\begin{matrix} \\end{matrix}</code>，如：</li></ol><p>$$ W=\\left[ \\begin{matrix} w_{11} &amp; w_{12} &amp; \\cdots &amp; w_{1n} \\ w_{21} &amp; w_{22} &amp; \\cdots &amp; w_{2n} \\ \\vdots &amp; \\vdots &amp; \\ddots &amp; \\vdots \\ w_{m1} &amp; w_{m2} &amp; \\cdots &amp; w_{mn} \\ \\end{matrix} \\right] $$</p><ol start="13"><li><p>向下取整，符号：<code>$\\lfloor x \\rfloor$</code>，如：$\\lfloor x \\rfloor$</p></li><li><p>向上取整，符号：<code>$\\lceil x \\rceil$</code>，如：$\\lceil x \\rceil$</p></li></ol><h2 id="逻辑运算" tabindex="-1">逻辑运算 <a class="header-anchor" href="#逻辑运算" aria-hidden="true">#</a></h2><ol><li>等于运算，符号：<code>=</code>，如：$x+y=z$</li><li>大于运算，符号：<code>&gt;</code>，如：$x+y&gt;z$</li><li>小于运算，符号：<code>&lt;</code>，如：$x+y&lt;z$</li><li>大于等于运算，符号：<code>\\geq</code>，如：$x+y \\geq z$</li><li>小于等于运算，符号：<code>\\leq</code>，如：$x+y \\leq z$</li><li>不等于运算，符号：<code>\\neq</code>，如：$x+y \\neq z$</li><li>不大于等于运算，符号：<code>\\ngeq</code>，如：$x+y \\ngeq z$</li><li>不大于等于运算，符号：<code>\\not\\geq</code>，如：$x+y \\not\\geq z$</li><li>不小于等于运算，符号：<code>\\nleq</code>，如：$x+y \\nleq z$</li><li>不小于等于运算，符号：<code>\\not\\leq</code>，如：$x+y \\not\\leq z$</li><li>约等于运算，符号：<code>\\approx</code>，如：$x+y \\approx z$</li><li>恒定等于运算，符号：<code>\\equiv</code>，如：$x+y \\equiv z$</li></ol><h2 id="集合运算" tabindex="-1">集合运算 <a class="header-anchor" href="#集合运算" aria-hidden="true">#</a></h2><ol><li>属于运算，符号：<code>\\in</code>，如：$x \\in y$</li><li>不属于运算，符号：<code>\\notin</code>，如：$x \\notin y$</li><li>不属于运算，符号：<code>\\not\\in</code>，如：$x \\not\\in y$</li><li>子集运算，符号：<code>\\subset</code>，如：$x \\subset y$</li><li>子集运算，符号：<code>\\supset</code>，如：$x \\supset y$</li><li>真子集运算，符号：<code>\\subseteq</code>，如：$x \\subseteq y$</li><li>非真子集运算，符号：<code>\\subsetneq</code>，如：$x \\subsetneq y$</li><li>真子集运算，符号：<code>\\supseteq</code>，如：$x \\supseteq y$</li><li>非真子集运算，符号：<code>\\supsetneq</code>，如：$x \\supsetneq y$</li><li>非子集运算，符号：<code>\\not\\subset</code>，如：$x \\not\\subset y$</li><li>非子集运算，符号：<code>\\not\\supset</code>，如：$x \\not\\supset y$</li><li>并集运算，符号：<code>\\cup</code>，如：$x \\cup y$</li><li>交集运算，符号：<code>\\cap</code>，如：$x \\cap y$</li><li>差集运算，符号：<code>\\setminus</code>，如：$x \\setminus y$</li><li>同或运算，符号：<code>\\bigodot</code>，如：$x \\bigodot y$</li><li>同与运算，符号：<code>\\bigotimes</code>，如：$x \\bigotimes y$</li><li>实数集合，符号：<code>\\mathbb{R}</code>，如：<code>\\mathbb{R}</code></li><li>自然数集合，符号：<code>\\mathbb{Z}</code>，如：<code>\\mathbb{Z}</code></li><li>空集，符号：<code>\\emptyset</code>，如：$\\emptyset$</li><li>异或， 符号：<code>\\bigoplus</code>, 如：$\\bigoplus$</li><li></li></ol><h2 id="数学符号" tabindex="-1">数学符号 <a class="header-anchor" href="#数学符号" aria-hidden="true">#</a></h2><ol><li>无穷，符号：<code>\\infty</code>，如：$\\infty$</li><li>虚数，符号：<code>\\imath</code>，如：$\\imath$</li><li>虚数，符号：<code>\\jmath</code>，如：$\\jmath$</li><li>数学符号，符号<code>\\hat{a}</code>，如：$\\hat{a}$</li><li>数学符号，符号<code>\\check{a}</code>，如：$\\check{a}$</li><li>数学符号，符号<code>\\breve{a}</code>，如：$\\breve{a}$</li><li>数学符号，符号<code>\\tilde{a}</code>，如：$\\tilde{a}$</li><li>数学符号，符号<code>\\bar{a}</code>，如：$\\bar{a}$</li><li>矢量符号，符号<code>\\vec{a}</code>，如：$\\vec{a}$</li><li>数学符号，符号<code>\\acute{a}</code>，如：$\\acute{a}$</li><li>数学符号，符号<code>\\grave{a}</code>，如：$\\grave{a}$</li><li>数学符号，符号<code>\\mathring{a}</code>，如：$\\mathring{a}$</li><li>一阶导数符号，符号<code>\\dot{a}</code>，如：$\\dot{a}$</li><li>二阶导数符号，符号<code>\\ddot{a}</code>，如：$\\ddot{a}$</li><li>上箭头，符号：<code>\\uparrow</code>，如：$\\uparrow$</li><li>上箭头，符号：<code>\\Uparrow</code>，如：$\\Uparrow$</li><li>下箭头，符号：<code>\\downarrow</code>，如：$\\downarrow$</li><li>下箭头，符号：<code>\\Downarrow</code>，如：$\\Downarrow$</li><li>左箭头，符号：<code>\\leftarrow</code>，如：$\\leftarrow$</li><li>左箭头，符号：<code>\\Leftarrow</code>，如：$\\Leftarrow$</li><li>右箭头，符号：<code>\\rightarrow</code>，如：$\\rightarrow$</li><li>右箭头，符号：<code>\\Rightarrow</code>，如：$\\Rightarrow$</li><li>底端对齐的省略号，符号：<code>\\ldots</code>，如：$1,2,\\ldots,n$</li><li>中线对齐的省略号，符号：<code>\\cdots</code>，如：$x_1^2 + x_2^2 + \\cdots + x_n^2$</li><li>竖直对齐的省略号，符号：<code>\\vdots</code>，如：$\\vdots$</li><li>斜对齐的省略号，符号：<code>\\ddots</code>，如：$\\ddots$</li></ol><h2 id="分段函数" tabindex="-1">分段函数 <a class="header-anchor" href="#分段函数" aria-hidden="true">#</a></h2><div class="language-markdown"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">$$ 函数名=\\begin{cases}</span></span>\n<span class="line"><span style="color:#A6ACCD;">公式1 &amp; 条件1 \\\\</span></span>\n<span class="line"><span style="color:#A6ACCD;">公式2 &amp; 条件2 \\\\</span></span>\n<span class="line"><span style="color:#A6ACCD;">公式3 &amp; 条件3 </span></span>\n<span class="line"><span style="color:#A6ACCD;">\\end{cases}$$</span></span>\n<span class="line"></span></code></pre></div><p>其中，<strong>&amp;表示对齐，\\\\用来表示换行</strong>。</p><h2 id="希腊字母" tabindex="-1">希腊字母 <a class="header-anchor" href="#希腊字母" aria-hidden="true">#</a></h2><table><thead><tr><th>字母</th><th>实现</th><th>字母</th><th>实现</th></tr></thead><tbody><tr><td>A</td><td><code>A</code></td><td>α</td><td><code>\\alpha</code></td></tr><tr><td>B</td><td><code>B</code></td><td>β</td><td><code>\\beta</code></td></tr><tr><td>Γ</td><td><code>\\Gamma</code></td><td>γ</td><td><code>\\gamma</code></td></tr><tr><td>Δ</td><td><code>\\Delta</code></td><td>δ</td><td><code>\\delta</code></td></tr><tr><td>E</td><td><code>E</code></td><td>ϵ</td><td><code>\\epsilon</code></td></tr><tr><td>Z</td><td><code>Z</code></td><td>ζ</td><td><code>\\zeta</code></td></tr><tr><td>H</td><td><code>H</code></td><td>η</td><td><code>\\eta</code></td></tr><tr><td>Θ</td><td><code>\\Theta</code></td><td>θ</td><td><code>\\theta</code></td></tr><tr><td>I</td><td><code>I</code></td><td>ι</td><td><code>\\iota</code></td></tr><tr><td>K</td><td><code>K</code></td><td>κ</td><td><code>\\kappa</code></td></tr><tr><td>Λ</td><td><code>\\Lambda</code></td><td>λ</td><td><code>\\lambda</code></td></tr><tr><td>M</td><td><code>M</code></td><td>μ</td><td><code>\\mu</code></td></tr><tr><td>N</td><td><code>N</code></td><td>ν</td><td><code>\\nu</code></td></tr><tr><td>Ξ</td><td><code>\\Xi</code></td><td>ξ</td><td><code>\\xi</code></td></tr><tr><td>O</td><td><code>O</code></td><td>ο</td><td><code>\\omicron</code></td></tr><tr><td>Π</td><td><code>\\Pi</code></td><td>π</td><td><code>\\pi</code></td></tr><tr><td>P</td><td><code>P</code></td><td>ρ</td><td><code>\\rho</code></td></tr><tr><td>Σ</td><td><code>\\Sigma</code></td><td>σ</td><td><code>\\sigma</code></td></tr><tr><td>T</td><td><code>T</code></td><td>τ</td><td><code>\\tau</code></td></tr><tr><td>Υ</td><td><code>\\Upsilon</code></td><td>υ</td><td><code>\\upsilon</code></td></tr><tr><td>Φ</td><td><code>\\Phi</code></td><td>ϕ</td><td><code>\\phi</code></td></tr><tr><td>X</td><td><code>X</code></td><td>χ</td><td><code>\\chi</code></td></tr><tr><td>Ψ</td><td><code>\\Psi</code></td><td>ψ</td><td><code>\\psi</code></td></tr><tr><td>Ω</td><td><code>\\v</code></td><td>ω</td><td><code>\\omega</code></td></tr></tbody></table>',25),s=[a,r,$];function n(h,p,x,y,u,g){return i(),l("div",null,s)}const b=t(c,[["render",n]]);export{_ as __pageData,b as default};
