import{_ as s,o as a,c as n,O as l}from"./chunks/framework.4afe7240.js";const A=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"articles/Computer/操作系统/README.md","filePath":"articles/Computer/操作系统/README.md"}'),p={name:"articles/Computer/操作系统/README.md"},o=l(`<h3 id="数据堆与数据栈" tabindex="-1">数据堆与数据栈 <a class="header-anchor" href="#数据堆与数据栈" aria-label="Permalink to &quot;数据堆与数据栈&quot;">​</a></h3><blockquote><p>栈（操作系统）：由操作系统自动分配释放 ，存放函数的参数值，局部变量的值等。其操作方式类似于数据结构中的栈。栈使用的是一级缓存， 他们通常都是被调用时处于存储空间中，调用完毕立即释放。</p><p>堆（操作系统）： 一般由程序员分配释放， 若程序员不释放，程序结束时可能由OS回收，分配方式倒是类似于链表。堆则是存放在二级缓存中，生命周期由虚拟机的垃圾回收算法来决定（并不是一旦成为孤儿对象就能被回收）。所以调用这些对象的速度要相对来得低一些。</p></blockquote><div class="language-cpp"><button title="Copy Code" class="copy"></button><span class="lang">cpp</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> a </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span><span style="color:#676E95;font-style:italic;"> //全局初始化区 栈</span></span>
<span class="line"><span style="color:#C792EA;">char</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;">p1</span><span style="color:#89DDFF;">;</span><span style="color:#676E95;font-style:italic;"> //全局未初始化区 栈</span></span>
<span class="line"><span style="color:#82AAFF;">main</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">int</span><span style="color:#F07178;"> b</span><span style="color:#89DDFF;">;</span><span style="color:#676E95;font-style:italic;"> //栈 </span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">char</span><span style="color:#F07178;"> s[] </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">abc</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span><span style="color:#676E95;font-style:italic;"> //栈 </span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">char</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">*</span><span style="color:#F07178;">p2</span><span style="color:#89DDFF;">;</span><span style="color:#676E95;font-style:italic;"> //栈 </span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">char</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">*</span><span style="color:#F07178;">p3 </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">123456</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span><span style="color:#676E95;font-style:italic;"> //123456\\0在常量区，p3在栈上。 </span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">static</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">int</span><span style="color:#F07178;"> c </span><span style="color:#89DDFF;">=</span><span style="color:#F78C6C;">0</span><span style="color:#F07178;">；</span><span style="color:#676E95;font-style:italic;"> //全局（静态）初始化区 </span></span>
<span class="line"><span style="color:#F07178;">    p1 </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">char</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">*)</span><span style="color:#82AAFF;">malloc</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">10</span><span style="color:#89DDFF;">);</span><span style="color:#676E95;font-style:italic;"> //堆 </span></span>
<span class="line"><span style="color:#F07178;">    p2 </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">char</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">*)</span><span style="color:#82AAFF;">malloc</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">20</span><span style="color:#89DDFF;">);</span><span style="color:#676E95;font-style:italic;">  //堆 </span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div>`,3),t=[o];function e(c,r,y,F,D,i){return a(),n("div",null,t)}const E=s(p,[["render",e]]);export{A as __pageData,E as default};
