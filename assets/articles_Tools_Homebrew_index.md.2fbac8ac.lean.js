import{_ as s,v as a,b as e,R as o}from"./chunks/framework.53249f15.js";const u=JSON.parse('{"title":"Homebrew","description":"","frontmatter":{},"headers":[],"relativePath":"articles/Tools/Homebrew/index.md","filePath":"articles/Tools/Homebrew/index.md"}'),t={name:"articles/Tools/Homebrew/index.md"},n=o(`<h1 id="homebrew" tabindex="-1">Homebrew <a class="header-anchor" href="#homebrew" aria-label="Permalink to &quot;Homebrew&quot;">​</a></h1><h2 id="安装homebrew" tabindex="-1">安装Homebrew <a class="header-anchor" href="#安装homebrew" aria-label="Permalink to &quot;安装Homebrew&quot;">​</a></h2><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">https://gitee.com/cunkai/HomebrewCN</span></span></code></pre></div><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">brew</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-v</span></span></code></pre></div><h2 id="常见错误" tabindex="-1">常见错误 <a class="header-anchor" href="#常见错误" aria-label="Permalink to &quot;常见错误&quot;">​</a></h2><p>Downloading <a href="https://links.jianshu.com/go?to=https%3A%2F%2Fformulae.brew.sh%2Fapi%2Fformula.jws.json" target="_blank" rel="noreferrer">https://formulae.brew.sh/api/formula.jws.json</a>**</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">==&gt; </span><span style="color:#C3E88D;">Downloading</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">https://formulae.brew.sh/api/formula.jws.json</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  1.4%curl: (28) Operation too slow. Less than 100 bytes/sec transferred the last 5 seconds</span></span></code></pre></div><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">export</span><span style="color:#A6ACCD;"> HOMEBREW_NO_INSTALL_FROM_API</span><span style="color:#89DDFF;">=</span><span style="color:#F78C6C;">1</span></span></code></pre></div>`,8),l=[n];function r(p,i,c,h,d,b){return a(),e("div",null,l)}const C=s(t,[["render",r]]);export{u as __pageData,C as default};
