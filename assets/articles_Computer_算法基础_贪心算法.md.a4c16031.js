import{_ as s,o as n,c as a,O as l}from"./chunks/framework.4afe7240.js";const p="/assets/image-20210315230301473-16422418816091.69820624.png",d=JSON.parse('{"title":"贪心算法","description":"","frontmatter":{},"headers":[],"relativePath":"articles/Computer/算法基础/贪心算法.md","filePath":"articles/Computer/算法基础/贪心算法.md"}'),o={name:"articles/Computer/算法基础/贪心算法.md"},e=l(`<h1 id="贪心算法" tabindex="-1">贪心算法 <a class="header-anchor" href="#贪心算法" aria-label="Permalink to &quot;贪心算法&quot;">​</a></h1><h2 id="区间问题" tabindex="-1"><a href="https://leetcode-cn.com/problems/non-overlapping-intervals/" target="_blank" rel="noreferrer">区间问题</a> <a class="header-anchor" href="#区间问题" aria-label="Permalink to &quot;[区间问题](https://leetcode-cn.com/problems/non-overlapping-intervals/)&quot;">​</a></h2><p>给定多个区间，计算让这些区间互不重叠所需要移除区间的最少个数。起止相连不算重叠。</p><div class="language-cpp"><button title="Copy Code" class="copy"></button><span class="lang">cpp</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">Input: intervals </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[[</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">[</span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">3</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">[</span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">4</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">[</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">]]</span></span>
<span class="line"><span style="color:#A6ACCD;">Output: </span><span style="color:#F78C6C;">1</span></span>
<span class="line"><span style="color:#A6ACCD;">Explanation: </span><span style="color:#89DDFF;">[</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> can be removed </span><span style="color:#89DDFF;">and</span><span style="color:#A6ACCD;"> the rest of the intervals are non</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">overlapping.</span></span></code></pre></div><p><img src="`+p+`" alt="image-20210315230301473"></p><div class="language-cpp"><button title="Copy Code" class="copy"></button><span class="lang">cpp</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">class</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">Solution</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;"> </span><span style="color:#C792EA;">public</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">int</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">eraseOverlapIntervals</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">vector</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">vector</span><span style="color:#89DDFF;">&lt;</span><span style="color:#C792EA;">int</span><span style="color:#89DDFF;">&gt;&gt;</span><span style="color:#C792EA;">&amp;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;font-style:italic;">intervals</span><span style="color:#89DDFF;">)</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">int</span><span style="color:#F07178;"> n </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">intervals</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">size</span><span style="color:#89DDFF;">();</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    // 按照结尾从小到大排序</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    // 比较函数使用了lambda表达式</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#82AAFF;">sort</span><span style="color:#89DDFF;">(</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">intervals</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">begin</span><span style="color:#89DDFF;">(),</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">intervals</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">end</span><span style="color:#89DDFF;">(),</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">[](</span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">vector</span><span style="color:#89DDFF;">&lt;</span><span style="color:#C792EA;">int</span><span style="color:#89DDFF;">&gt;</span><span style="color:#C792EA;">&amp;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;font-style:italic;">a</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">vector</span><span style="color:#89DDFF;">&lt;</span><span style="color:#C792EA;">int</span><span style="color:#89DDFF;">&gt;</span><span style="color:#C792EA;">&amp;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;font-style:italic;">b</span><span style="color:#89DDFF;">)</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">a</span><span style="color:#89DDFF;">[</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">]</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">b</span><span style="color:#89DDFF;">[</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">];</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    // 第一个肯定被选中</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">int</span><span style="color:#F07178;"> ans </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> prev </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">intervals</span><span style="color:#89DDFF;">[</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">][</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">];</span></span>
<span class="line"><span style="color:#F07178;">    </span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">for</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">int</span><span style="color:#F07178;"> i </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> i </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;"> n</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">++</span><span style="color:#F07178;">i</span><span style="color:#89DDFF;">)</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">intervals</span><span style="color:#89DDFF;">[</span><span style="color:#F07178;">i</span><span style="color:#89DDFF;">][</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">]</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&gt;=</span><span style="color:#F07178;"> prev</span><span style="color:#89DDFF;">)</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">++</span><span style="color:#F07178;">ans</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">        prev </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">intervals</span><span style="color:#89DDFF;">[</span><span style="color:#F07178;">i</span><span style="color:#89DDFF;">][</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">];</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> n </span><span style="color:#89DDFF;">-</span><span style="color:#F07178;"> ans</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span></code></pre></div>`,6),t=[e];function c(r,F,y,D,i,C){return n(),a("div",null,t)}const _=s(o,[["render",c]]);export{d as __pageData,_ as default};
