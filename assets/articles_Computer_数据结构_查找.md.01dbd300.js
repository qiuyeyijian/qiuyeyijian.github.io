import{_ as t,o as a,c as s,O as l}from"./chunks/framework.4afe7240.js";const $=JSON.parse('{"title":"查找","description":"","frontmatter":{},"headers":[],"relativePath":"articles/Computer/数据结构/查找.md","filePath":"articles/Computer/数据结构/查找.md"}'),n={name:"articles/Computer/数据结构/查找.md"},e=l(`<h1 id="查找" tabindex="-1">查找 <a class="header-anchor" href="#查找" aria-label="Permalink to &quot;查找&quot;">​</a></h1><h2 id="平均查找长度-asl" tabindex="-1">平均查找长度（ASL） <a class="header-anchor" href="#平均查找长度-asl" aria-label="Permalink to &quot;平均查找长度（ASL）&quot;">​</a></h2><p>$$ ASL = \\frac {比较次数} {关键字个数} = 查找长度 \\times 查找概率 $$</p><h2 id="二分查找" tabindex="-1">二分查找 <a class="header-anchor" href="#二分查找" aria-label="Permalink to &quot;二分查找&quot;">​</a></h2><p>二分查找也称折半查找（Binary Search），它是一种效率较高的查找方法。但是，折半查找要求线性表必须采用顺序存储结构，而且表中元素按关键字有序排列。</p><p>根据顺序表二分法查找比较次数的计算公式： $$ a&lt;log_2n&lt;b (a,b,n \\in Z^+) $$ 当顺序表有n个关键字时：</p><p>查找失败时，至少比较a次关键字；查找成功时，最多比较关键字次数是b。</p><p>如果顺序表记录数 n=97 ，log₂64&lt;log₂97&lt;log₂128，即6&lt;log₂97&lt;7，最大比较次数为7次。</p><div class="language-cpp"><button title="Copy Code" class="copy"></button><span class="lang">cpp</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// arr:  要查找的数组</span></span>
<span class="line"><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">binarySearch</span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">arr</span><span style="color:#89DDFF;">[],</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">left</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">right</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">data</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">while</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">left </span><span style="color:#89DDFF;">&lt;=</span><span style="color:#A6ACCD;"> right</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">        // 获取中间下标</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">        // 这样做比 （left + right）/ 2 更安全，可以避免int溢出</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#C792EA;">int</span><span style="color:#F07178;"> mid </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> left </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">(</span><span style="color:#F07178;">right </span><span style="color:#89DDFF;">-</span><span style="color:#F07178;"> left</span><span style="color:#89DDFF;">)</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">/</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">arr</span><span style="color:#89DDFF;">[</span><span style="color:#F07178;">mid</span><span style="color:#89DDFF;">]</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">==</span><span style="color:#F07178;"> data</span><span style="color:#89DDFF;">)</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">            // 查找成功，返回下标</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> mid</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;font-style:italic;">else</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">arr</span><span style="color:#89DDFF;">[</span><span style="color:#F07178;">mid</span><span style="color:#89DDFF;">]</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&gt;</span><span style="color:#F07178;"> data</span><span style="color:#89DDFF;">)</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">            right </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> mid </span><span style="color:#89DDFF;">-</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;font-style:italic;">else</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">            left </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> mid </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    // 查找失败</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><h2 id="分块查找" tabindex="-1">分块查找 <a class="header-anchor" href="#分块查找" aria-label="Permalink to &quot;分块查找&quot;">​</a></h2><p>分块查找的平均查找长度不仅取决于数据集的总记录个数 n，还和每一块的记录个数 t 相关。</p><h2 id="二叉排序树" tabindex="-1">二叉排序树 <a class="header-anchor" href="#二叉排序树" aria-label="Permalink to &quot;二叉排序树&quot;">​</a></h2><blockquote><p>二叉排序树（Binary Sort Tree），又称二叉查找树，二叉搜索树。它或者是一颗空树，或者是具有以下性质的二叉树。</p><ul><li>若它的左子树不空，则左子树上所有的节点的值均小于它的根结点的值；</li><li>若它的右子树不空，则右子树上所有的节点的值均大于它的根结点的值；</li><li>⑶ 左、右子树本身又各是一棵二叉排序树。 按中序遍历二叉排序树，所得到的中序遍历序列是一个递增有序序列</li></ul></blockquote><h2 id="平衡二叉树-avl树" tabindex="-1">平衡二叉树（AVL树） <a class="header-anchor" href="#平衡二叉树-avl树" aria-label="Permalink to &quot;平衡二叉树（AVL树）&quot;">​</a></h2><blockquote><p>平衡二叉树（Height-Balanced Binary Search Tree），是一种二叉排序树，其中的每一个结点的左子树和右子树的高度差的绝对值小于等于1。</p><p><strong>二叉树上结点的左子树深度减去右子树深度的值称为平衡因子BF(Balance Factor)</strong></p></blockquote><p>假设以$T_h$表示深度为h的平衡二叉树含有的最少结点数。显然有$T_0 = 0, T_1 = 1, T_2 = 2$，并且有： $$ T_h = T_{h-1} + T_{h-2} + 1 $$ 含有n个结点的平衡二叉树最大深度为$O(log_2n)$，因此平衡二叉树的平均查找长度为$O(log_2n)$</p><h2 id="散列表" tabindex="-1">散列表 <a class="header-anchor" href="#散列表" aria-label="Permalink to &quot;散列表&quot;">​</a></h2><p>散列表的查找效率取决于三个因素：散列函数、处理冲突的方法和装填因子。</p><p>对于散列表长为m的散列函数，构造方法有：</p><h3 id="散列函数" tabindex="-1">散列函数 <a class="header-anchor" href="#散列函数" aria-label="Permalink to &quot;散列函数&quot;">​</a></h3><h4 id="除留余数法" tabindex="-1">除留余数法 <a class="header-anchor" href="#除留余数法" aria-label="Permalink to &quot;除留余数法&quot;">​</a></h4><blockquote><p>Hash(key) = key mod p (p&lt;=m)</p></blockquote><p>p一般取小于m的最大质数（素数）</p><h4 id="直接定址法" tabindex="-1">直接定址法 <a class="header-anchor" href="#直接定址法" aria-label="Permalink to &quot;直接定址法&quot;">​</a></h4><p>$$ Hash(key) = a\\times key + b \\quad \\left( a, b 为常数 \\right) $$</p><p>其他还有数字分析法 平方取中法、折叠法、随机数法</p><h3 id="装填因子" tabindex="-1">装填因子 <a class="header-anchor" href="#装填因子" aria-label="Permalink to &quot;装填因子&quot;">​</a></h3><p>装填因子反映了一个表的装满程度。 $$ 装填因子 = \\frac {填入表中的记录个数n} {散列表长度m} $$ <strong>散列表的平均查找长度依赖于散列表的装填因子$\\alpha$​，而不直接依赖于关键字个数n和表的长度m</strong></p><p>查找成功=比较次数次数/数据个数。</p><h3 id="查找成功asl" tabindex="-1">查找成功ASL <a class="header-anchor" href="#查找成功asl" aria-label="Permalink to &quot;查找成功ASL&quot;">​</a></h3><p>等概率情况下，每个元素查找概率相等。则 $$ ASL_{成功} = \\frac {查找每个元素的比较次数之和} {元素个数} $$</p><p>假设<code>b c d</code>均映射到Addr[2]，采用线性探测再散列法处理冲突。</p><table><thead><tr><th>地址Addr</th><th>0</th><th>1</th><th>2</th><th>3</th><th>4</th><th>5</th><th>6</th></tr></thead><tbody><tr><td>关键字</td><td>a</td><td></td><td>b</td><td>c</td><td>d</td><td></td><td></td></tr><tr><td>查找成功比较次数</td><td>1</td><td></td><td>1</td><td>2</td><td>3</td><td></td><td></td></tr></tbody></table><p>$$ ASL_{成功} = \\frac {1 + 1 + 2 + 3} {4} = \\frac 7 4 $$</p><h4 id="查找失败asl" tabindex="-1">查找失败ASL <a class="header-anchor" href="#查找失败asl" aria-label="Permalink to &quot;查找失败ASL&quot;">​</a></h4><p>如果散列函数为<code>Hash(key) = key mod p</code>，处理冲突采用线性探测再散列法。则查找失败时，经过散列函数计算后，只可能映射到散列表中 <strong>Addr[0...p-1]</strong> 的位置。每个位置都有可能不匹配，如果该位置不匹配，则会继续比较下一个位置，直到遇到关键字为空，停止比较。</p><p>如果散列函数为<code>Hash(key) = key mod 4</code>，则只需要讨论0-3范围内，假设某个元素<code>x</code>不在散列表内，则它可能映射到0-3内任意一个地址。</p><p>如果映射到0，则需要和Addr[0]和Addr[1]比较；</p><p>如果映射到1，则只需要和Addr[1]比较；</p><p>如果映射到2，则需要和Addr[2]，Addr[3]，Addr[4]，Addr[5]比较；</p><p>如果映射到3，则需要和Addr[3]，Addr[4]，Addr[5]比较；</p><table><thead><tr><th>地址Addr</th><th>0</th><th>1</th><th>2</th><th>3</th><th>4</th><th>5</th><th>6</th></tr></thead><tbody><tr><td>关键字</td><td>a</td><td></td><td>b</td><td>c</td><td>d</td><td></td><td></td></tr><tr><td>查找失败比较次数</td><td>2</td><td>1</td><td>4</td><td>3</td><td></td><td></td><td></td></tr></tbody></table><p>$$ ASL_{失败} = \\frac {比较次数} {散列地址数p} = \\frac {2 + 1 + 4 + 3} {4} = 2.5 $$</p><blockquote><p>需要注意的是，有一种观点认为与真正的关键字比较才算比较次数，与空结点比较不算。上面的例子算上了空结点的比较次数，是另一种观点。</p></blockquote><h2 id="b树与b-树" tabindex="-1">B树与B+树 <a class="header-anchor" href="#b树与b-树" aria-label="Permalink to &quot;B树与B+树&quot;">​</a></h2><p>多路查找树（muitl-way search tree）：每一个结点的孩子数可以大于两个，且结点处可以存储多个元素。</p><p>平衡二叉树（AVL）：一种二叉排序树，其中每一个结点的左子树和右子树的高度差的绝对值至不超过1。</p><p>**B树（B-Tree）是一种平衡多路查找树。**是一种自平衡树，叶子结点都在同一层次。所以任意一个结点的平衡因子都是0。</p><blockquote><p>平衡多路查找树：平衡指的是叶子结点均在同一层，任意一个结点的平衡因子均是0。多路查找指的是结点内可以存储多个元素，有多个孩子。</p></blockquote><h3 id="查找方式" tabindex="-1">查找方式 <a class="header-anchor" href="#查找方式" aria-label="Permalink to &quot;查找方式&quot;">​</a></h3><p>B+树有两个头指针：一个指向B+树的根节点，一个指向关键码最小的叶节点。因此，B+树可以进行两种查找运算：</p><ul><li>顺序查找：循着叶节点自己建立的链表进行的查找</li><li>随机查找：从根节点开始，进行自顶向下，直至叶节点进行的查找</li></ul><p><strong>B树只支持随机查找</strong>，从根节点开始，找到匹配元素就停止查找；没有匹配元素就会查找到叶节点，说明查找失败。</p><p>对于一棵m阶B树和B+树而言</p><table><thead><tr><th></th><th>B树</th><th>B+树</th></tr></thead><tbody><tr><td>起源</td><td>由二叉排序树进化而来</td><td>由分块查找进化而来</td></tr><tr><td>关键字</td><td>任何节点的关键字都不会重复</td><td>叶节点包含了全部关键字，非叶节点的关键字一定会出现在叶节点中</td></tr><tr><td>关键字取值范围</td><td>非根节点：<br>$\\lceil m / 2 \\rceil - 1 \\leq k \\leq m-1$ <br>根节点：<br>$1 \\leq k \\leq m-1$</td><td>非根节点：<br>$\\lceil m / 2 \\rceil \\leq k \\leq m$<br>根节点：<br>$2 \\leq k \\leq m$</td></tr><tr><td>包含信息</td><td>全部节点的关键字都包含信息</td><td>仅叶节点包含信息，非叶节点只起索引作用</td></tr><tr><td>查找方式</td><td><strong>只支持随机查找</strong></td><td><strong>支持顺序查找和随机查找</strong></td></tr><tr><td>查找失败</td><td>如果找到匹配关键字就停止，只有失败会到最后一层</td><td>查找成功或失败都只会发生在最后一层，在非叶节点中遇到匹配关键字仍会继续查找，直到在叶节点中再次匹配。</td></tr><tr><td>关键字与子树对应关系</td><td>n个关键字含有n+1棵子树</td><td>n个关键字含有n棵子树</td></tr><tr><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td></tr></tbody></table><h3 id="三个核心问题" tabindex="-1">三个核心问题 <a class="header-anchor" href="#三个核心问题" aria-label="Permalink to &quot;三个核心问题&quot;">​</a></h3><p>对于一棵含有n个关键字的m阶B树，设高度为h（不包含叶节点）</p><h4 id="有多少个叶节点" tabindex="-1">有多少个叶节点 <a class="header-anchor" href="#有多少个叶节点" aria-label="Permalink to &quot;有多少个叶节点&quot;">​</a></h4><p>对于任何一棵B树，n个关键字相当于将一个线段划分成了n+1和区间；查找的时候只有n个关键字能匹配。不匹配的就是区间内的关键字，也就是叶子节点。<strong>所以一共有n+1个叶子节点。</strong></p><h4 id="最小高度是多少" tabindex="-1">最小高度是多少 <a class="header-anchor" href="#最小高度是多少" aria-label="Permalink to &quot;最小高度是多少&quot;">​</a></h4><p>最胖的树最矮，让每个节点的关键字达到最大m-1个。</p><p>m阶B树，每个节点最多有$k = m$个子树，$k-1$个关键字。则节点数、关键字数、与树的层数（高度）关系是</p><table><thead><tr><th>层数</th><th>结点数</th><th>关键字</th></tr></thead><tbody><tr><td>第一层</td><td>$k^0 = 1$</td><td>$k^0(k-1)$</td></tr><tr><td>第二层</td><td>$k^1$</td><td>$k^1(k-1)$</td></tr><tr><td>第三层</td><td>$k^2$</td><td>$k^2(k-1)$</td></tr><tr><td>···</td><td>···</td><td>···</td></tr><tr><td>第h层</td><td>$k^{h-1}$</td><td>$k^{h-1}(k-1)$</td></tr></tbody></table><p>等比数列求和公式为，得到总的关键字个数为 $$ S = \\frac {a_1(q^n - 1)} {q-1} $$</p><p>$$ \\begin{aligned} &amp;(k^0 + k^1 + ···+ k^{h-1})(k-1) \\ &amp;= \\frac {k^0(k^h - 1)} {k-1} \\times(k-1) \\ &amp;= k^h - 1 \\end{aligned} $$</p><p>高度为h的m阶B树，关键字个数最多为$k^h - 1$个，从而 $$ \\begin{aligned} n &amp;\\leq k^h -1 = m^h - 1\\ h &amp;\\geq \\lceil \\log_m(n+1) \\rceil \\end{aligned} $$</p><blockquote><p>理解：</p><p>经过分析，可以发现如果树的高度是h，则关键字最多为$k^h - 1$，不能再多了，否则就超过h了。现在有n个关键字，且高度为h。则稍加推理就能得到n可定是不大于$k^h - 1$</p></blockquote><h4 id="最大高度是多少" tabindex="-1">最大高度是多少 <a class="header-anchor" href="#最大高度是多少" aria-label="Permalink to &quot;最大高度是多少&quot;">​</a></h4><p>最瘦的树最高，让每个节点的关键字达到最小$\\lceil m/2 \\rceil-1$个。</p><p>m阶B树，每个非根节点节点至少有$k = \\lceil m / 2 \\rceil $个子树，$k-1$个关键字。根节点特殊，至少有2棵子树，1个关键字。则节点数、关键字数、与树的层数（高度）关系是</p><table><thead><tr><th>层数</th><th>结点数</th><th>关键字</th></tr></thead><tbody><tr><td>第一层</td><td>$1$</td><td>$1$</td></tr><tr><td>第二层</td><td>$2k^0$</td><td>$2k^0(k-1)$</td></tr><tr><td>第三层</td><td>$2k^1$</td><td>$2k^1(k-1)$</td></tr><tr><td>第四层</td><td>$2k^2$</td><td>$2k^2(k-1)$</td></tr><tr><td>···</td><td>···</td><td>···</td></tr><tr><td>第h层</td><td>$2k^{h-2}$</td><td>$2k^{h-2}(k-1)$</td></tr></tbody></table><p>得关键字总的个数为 $$ 1+2(k-1)(k^0 + k^1 + k^2 +··· + k^{h-2}) = 2k^{h-1} - 1 $$ 高度为h的m阶B树，关键字个数最少为：$2k^{h-1} - 1$个，从而 $$ \\begin{aligned} n &amp;\\geq 2k^{h-1} - 1 \\ h &amp;\\leq \\log_k (\\frac {n+1} 2) + 1 &amp;， k = \\lceil m/2 \\rceil \\end{aligned} $$</p><blockquote><p>理解：</p><p>经过分析，可以发现要想树的高度是h则至少需要$2k^{h-1} - 1$关键字，不能再少了，否则高度就达不到h。现在有n个关键字，且树的高度为h。则 稍加推理就能得到n肯定是不小于$2k^{h-1} - 1$</p></blockquote><blockquote><p>拓展：</p><p>第$h+1$层是叶节点，最少为$2k^{h-1}$个。又由问题1可得，叶节点有$n+1$个。则二者联立可得： $$ \\begin{aligned} n+1 &amp;\\geq 2k^{h-1} \\ h &amp;\\leq \\log_k (\\frac {n+1} 2) + 1 &amp;， k = \\lceil m/2 \\rceil \\end{aligned} $$</p></blockquote>`,74),o=[e];function p(r,d,c,h,i,y){return a(),s("div",null,o)}const D=t(n,[["render",p]]);export{$ as __pageData,D as default};
