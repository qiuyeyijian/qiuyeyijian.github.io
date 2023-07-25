import{_ as s,o as a,c as n,U as l}from"./chunks/framework.adbdbaa5.js";const m=JSON.parse('{"title":"Mysql联合主键","description":"","frontmatter":{},"headers":[],"relativePath":"articles/Database/MySQL/Mysql联合主键.md","filePath":"articles/Database/MySQL/Mysql联合主键.md"}'),e={name:"articles/Database/MySQL/Mysql联合主键.md"},p=l(`<h1 id="mysql联合主键" tabindex="-1">Mysql联合主键 <a class="header-anchor" href="#mysql联合主键" aria-label="Permalink to &quot;Mysql联合主键&quot;">​</a></h1><blockquote><p>联合主键，指的是把两个列看成是一个整体，这个整体是不为空，唯一，不重复</p></blockquote><h3 id="创建表的同时创建联合主键" tabindex="-1">创建表的同时创建联合主键 <a class="header-anchor" href="#创建表的同时创建联合主键" aria-label="Permalink to &quot;创建表的同时创建联合主键&quot;">​</a></h3><div class="language-mysql"><button title="Copy Code" class="copy"></button><span class="lang">mysql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">create table 表名(</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">列名1 数据类型,</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">列名2 数据类型,</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">constraint  主键约束的名字  primary key(列名1,列名2)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">);</span></span></code></pre></div><div class="language-mysql"><button title="Copy Code" class="copy"></button><span class="lang">mysql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">create table 表名(</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">列名1 数据类型,</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">列名2 数据类型,</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">primary key(列名1,列名2)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">);</span></span></code></pre></div><h3 id="针对已经存在表-添加联合主键" tabindex="-1">针对已经存在表，添加联合主键 <a class="header-anchor" href="#针对已经存在表-添加联合主键" aria-label="Permalink to &quot;针对已经存在表，添加联合主键&quot;">​</a></h3><div class="language-mysql"><button title="Copy Code" class="copy"></button><span class="lang">mysql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">alter table 表名 add primary key(列名1,列名2);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">alter table 表名 add constraint 主键约束的名字 primary key(列名1,列名2);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 删除主键约束格式</span></span>
<span class="line"><span style="color:#A6ACCD;">alter table 表名 drop primary key;</span></span></code></pre></div>`,7),t=[p];function o(c,r,i,y,C,A){return a(),n("div",null,t)}const _=s(e,[["render",o]]);export{m as __pageData,_ as default};
