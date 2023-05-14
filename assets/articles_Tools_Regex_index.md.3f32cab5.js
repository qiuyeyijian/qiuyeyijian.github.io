import{_ as s,o as a,c as e,O as n}from"./chunks/framework.9be35eee.js";const d=JSON.parse('{"title":"Regex","description":"","frontmatter":{},"headers":[],"relativePath":"articles/Tools/Regex/index.md","filePath":"articles/Tools/Regex/index.md"}'),o={name:"articles/Tools/Regex/index.md"},l=n(`<h1 id="regex" tabindex="-1">Regex <a class="header-anchor" href="#regex" aria-label="Permalink to &quot;Regex&quot;">​</a></h1><h3 id="re模块" tabindex="-1">re模块 <a class="header-anchor" href="#re模块" aria-label="Permalink to &quot;re模块&quot;">​</a></h3><p>python中可以使用re.search()方法验证字符串是否符合正则表达式。</p><p>re.search()方法扫描整个字符串，并返回第一个成功的匹配。如果匹配失败，则返回None。</p><p>语法：</p><div class="language-python"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">re</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">search</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">pattern</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> string</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> </span><span style="color:#A6ACCD;font-style:italic;">flags</span><span style="color:#89DDFF;">=</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">)</span></span></code></pre></div><p>参数：</p><ul><li>pattern : 正则中的模式字符串。</li><li>string : 要被查找替换的原始字符串。</li><li>flags : 标志位，用于控制正则表达式的匹配方式，如：是否区分大小写，多行匹配等等。</li></ul><div class="language-python"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">pattern </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">^[0-9]+\\.[0-9]+\\.[0-9]+$</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">not</span><span style="color:#A6ACCD;"> re</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">search</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">pattern</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> version</span><span style="color:#89DDFF;">):</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Incorrect version number!!</span><span style="color:#A6ACCD;">\\n</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span></code></pre></div>`,9),p=[l];function t(r,c,i,F,D,y){return a(),e("div",null,p)}const h=s(o,[["render",t]]);export{d as __pageData,h as default};
