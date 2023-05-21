import{_ as a,o as t,c as e,O as r}from"./chunks/framework.4afe7240.js";const o="/assets/image-20210402214846535.09851542.png",l="/assets/image-20210327223301727.45c0594b.png",_=JSON.parse('{"title":"栈的应用","description":"","frontmatter":{},"headers":[],"relativePath":"articles/Computer/数据结构/栈的应用.md","filePath":"articles/Computer/数据结构/栈的应用.md"}'),i={name:"articles/Computer/数据结构/栈的应用.md"},n=r('<h1 id="栈的应用" tabindex="-1">栈的应用 <a class="header-anchor" href="#栈的应用" aria-label="Permalink to &quot;栈的应用&quot;">​</a></h1><h2 id="栈和队列" tabindex="-1">栈和队列 <a class="header-anchor" href="#栈和队列" aria-label="Permalink to &quot;栈和队列&quot;">​</a></h2><blockquote><p>栈：限定在表尾进行插入和删除的线性表</p><p>队列：只允许在一端进行插入操作，而在另一端进行删除操作的线性表</p></blockquote><p>链栈与顺序栈相比，一个明显的优点是通常不会出现栈满的情况</p><blockquote><p>循环队列满的条件是：（rear +1) % QueueSize == front</p><p>循环队列长度计算公式：（rear - front + QueueSize) % QueueSize</p></blockquote><p>栈满的时候要考虑上溢的情况，栈空的时候要考虑下溢的情况。</p><h2 id="表达式" tabindex="-1">表达式 <a class="header-anchor" href="#表达式" aria-label="Permalink to &quot;表达式&quot;">​</a></h2><p>主要总结考试常见的表达式求值的形式</p><p><img src="'+o+'" alt="image-20210402214846535"></p><h2 id="一、中缀表达式快速转前缀和后缀" tabindex="-1">一、中缀表达式快速转前缀和后缀 <a class="header-anchor" href="#一、中缀表达式快速转前缀和后缀" aria-label="Permalink to &quot;一、中缀表达式快速转前缀和后缀&quot;">​</a></h2><p>一般是给你一个中缀表达式，要求你快速写出它的后缀或者前缀形式。具体步骤如下：</p><h3 id="_1、加括号" tabindex="-1">1、加括号 <a class="header-anchor" href="#_1、加括号" aria-label="Permalink to &quot;1、加括号&quot;">​</a></h3><p><strong>原则：每个操作符连接的两个表达式两边加上括号，加上括号后看做一个新的表达式参与后面的运算。应保证加上括号后不改变原先的计算顺序</strong></p><h3 id="_2、转前缀" tabindex="-1">2、转前缀 <a class="header-anchor" href="#_2、转前缀" aria-label="Permalink to &quot;2、转前缀&quot;">​</a></h3><p><strong>操作数不变，将操作符移到包含这个操作符连接的两个表达式的最近的括号的前边。</strong></p><h3 id="_3、转后缀" tabindex="-1">3、转后缀 <a class="header-anchor" href="#_3、转后缀" aria-label="Permalink to &quot;3、转后缀&quot;">​</a></h3><p><strong>操作数不变，将操作符移到包含这个操作符连接的两个表达式的最近的括号的后边。</strong></p><table><thead><tr><th>操作</th><th>形式</th></tr></thead><tbody><tr><td><strong>中缀表达式</strong></td><td>a / b + ( c * d - e * f ) / g</td></tr><tr><td><strong>加括号</strong></td><td>( ( a / b ) + ( ( ( c * d ) - ( e * f ) ) / g ) )</td></tr><tr><td><strong>前缀表达式</strong></td><td>+ / a b / - * c d * e f g</td></tr><tr><td><strong>后缀表达式</strong></td><td>a b / c d * e f * - g / +</td></tr></tbody></table><p><img src="'+l+'" alt="image-20210327223301727"></p><h2 id="二、中缀转后缀——使用一个操作符栈" tabindex="-1">二、中缀转后缀——使用一个操作符栈 <a class="header-anchor" href="#二、中缀转后缀——使用一个操作符栈" aria-label="Permalink to &quot;二、中缀转后缀——使用一个操作符栈&quot;">​</a></h2><p>我们假设最后的结果直接打印输出到屏幕中，如果想要保存后缀表达式只需要创建一个数组或者其他数据结构接收结果即可。下面规则只考虑到了左右小括号<code>( 和 )</code></p><p>规则：从左到右遍历中缀表达式的每个数字和符号，</p><ol><li>若是数字就输出，即成为后缀表达式的一部分；</li><li>如果操作符栈为空，或者栈顶是左括号，或者当前扫描到的元素是左括号。直接将当前符号进栈。</li><li>如果是右括号，则依次弹出栈顶元素，弹出的元素成为后缀表达式的一部分，直到遇到左括号。最后将左括号弹出栈。</li><li>如果是中缀表达式的结束符（比如：<code>\\0</code>，也可以自定义结束符），或者优先级小于或等于栈顶元素，则依次弹出栈顶元素，弹出的元素成为后缀表达式的一部分。直到操作符栈为空，或者遇到左括号。最后将当前符号进栈。</li><li>其他情况是当前符号优先级高于栈顶元素，直接将符号进栈。</li></ol><blockquote><p><strong>Notes：</strong></p><p>上面是按照实际编程写的步骤，所以一些细节也都考虑进去了，显得有点多。再简单描述一下思路：</p><p><strong>先考虑数字 =&gt; 考虑左括号 =&gt; 考虑右括号 =&gt; 考虑优先级小于等于栈顶元素 =&gt; 考虑优先级大于栈顶元素 =&gt; 最后中缀表达式结束合并到第四步，因为二者操作相同。</strong></p></blockquote><h3 id="实战演练" tabindex="-1">实战演练 <a class="header-anchor" href="#实战演练" aria-label="Permalink to &quot;实战演练&quot;">​</a></h3><p><strong>中缀表达式：3 - 2 + ( 5 * 5 - 4 * 4 ) / 3</strong></p><h2 id="三、后缀表达式求值——使用一个操作数栈" tabindex="-1">三、后缀表达式求值——使用一个操作数栈 <a class="header-anchor" href="#三、后缀表达式求值——使用一个操作数栈" aria-label="Permalink to &quot;三、后缀表达式求值——使用一个操作数栈&quot;">​</a></h2><p>首先创建一个操作数栈</p><p>规则：从左到右扫描所给的后缀表达式的每个数字和操作符</p><ul><li>遇到数字就进栈；</li><li>遇到操作符就将处于栈顶的两个数字出栈进行运算，先弹出来的数字放在操作符后面，后弹出来的放在前面，运算结果再次进栈。</li><li>一直到扫描完毕，栈中最后的数字就是运算结果。</li></ul><h3 id="实战演练-1" tabindex="-1">实战演练 <a class="header-anchor" href="#实战演练-1" aria-label="Permalink to &quot;实战演练&quot;">​</a></h3><p>**后缀表达式： 3 2 - 5 5 * 4 4 * - 3 / + **</p><h2 id="四、中缀表达式求值——使用两个栈-操作数栈和操作符栈" tabindex="-1">四、中缀表达式求值——使用两个栈：操作数栈和操作符栈 <a class="header-anchor" href="#四、中缀表达式求值——使用两个栈-操作数栈和操作符栈" aria-label="Permalink to &quot;四、中缀表达式求值——使用两个栈：操作数栈和操作符栈&quot;">​</a></h2><p>中缀表达式求值可以转化为先转成后缀表达式，然后再对后缀表达式求值。所以这部分可以说是前面的综合应用。所以规则也是两者的结合</p><p>首先创建操作符栈和操作数栈。</p><p>规则：从左到右扫描所给的后缀表达式的每个数字和操作符</p><ul><li>遇到数字就进操作数栈。</li><li>遇到操作符，进操作符栈的规则和中缀转后缀一样。唯一不同的是，只要从操作符栈弹出操作符，就必须从操作数栈弹出两个元素参与运算，运算结果再次进操作数栈。注意，先弹出来的操作数放在后面。</li><li>最后，操作数栈就是一个元素，就是计算结果。</li></ul><h3 id="实战演练-2" tabindex="-1">实战演练 <a class="header-anchor" href="#实战演练-2" aria-label="Permalink to &quot;实战演练&quot;">​</a></h3><p><strong>中缀表达式：3 - 2 + ( 5 * 5 - 4 * 4 ) / 3</strong></p><h2 id="五、了解前缀和后缀如何转中缀" tabindex="-1">五、了解前缀和后缀如何转中缀 <a class="header-anchor" href="#五、了解前缀和后缀如何转中缀" aria-label="Permalink to &quot;五、了解前缀和后缀如何转中缀&quot;">​</a></h2><p>都是利用一个栈来实现，这里设定栈是string类型的，可以存放表达式</p><h3 id="后缀转中缀" tabindex="-1">后缀转中缀 <a class="header-anchor" href="#后缀转中缀" aria-label="Permalink to &quot;后缀转中缀&quot;">​</a></h3><h3 id="实战演练-3" tabindex="-1">实战演练 <a class="header-anchor" href="#实战演练-3" aria-label="Permalink to &quot;实战演练&quot;">​</a></h3><p><strong>后缀表达式：a b / c d * e f * - g / +</strong></p><h3 id="前缀转中缀" tabindex="-1">前缀转中缀 <a class="header-anchor" href="#前缀转中缀" aria-label="Permalink to &quot;前缀转中缀&quot;">​</a></h3><h3 id="实战演练-4" tabindex="-1">实战演练 <a class="header-anchor" href="#实战演练-4" aria-label="Permalink to &quot;实战演练&quot;">​</a></h3><p><strong>前缀表达式：+ / a b / - * c d * e f g</strong></p><h2 id="六、参考" tabindex="-1">六、参考 <a class="header-anchor" href="#六、参考" aria-label="Permalink to &quot;六、参考&quot;">​</a></h2><ul><li>数据结构精讲与习题详解--殷人昆</li><li>大话数据结构--程杰</li><li>408历年真题</li></ul>',49),h=[n];function s(d,c,p,u,b,g){return t(),e("div",null,h)}const m=a(i,[["render",s]]);export{_ as __pageData,m as default};
