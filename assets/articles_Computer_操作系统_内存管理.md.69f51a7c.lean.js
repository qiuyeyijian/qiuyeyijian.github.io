import{_ as t,v as a,b as r,R as e}from"./chunks/framework.53249f15.js";const u=JSON.parse('{"title":"内存管理","description":"","frontmatter":{},"headers":[],"relativePath":"articles/Computer/操作系统/内存管理.md","filePath":"articles/Computer/操作系统/内存管理.md"}'),o={name:"articles/Computer/操作系统/内存管理.md"},n=e('<h1 id="内存管理" tabindex="-1">内存管理 <a class="header-anchor" href="#内存管理" aria-label="Permalink to &quot;内存管理&quot;">​</a></h1><h2 id="基本概念" tabindex="-1">基本概念 <a class="header-anchor" href="#基本概念" aria-label="Permalink to &quot;基本概念&quot;">​</a></h2><p>地址空间：一个进程可用于寻址内存的一套地址集合。每个进程都有一个自己的地址空间。</p><p>操作系统中的存储器管理是指对内存（又称主存）的管理，是操作系统重要功能之一。</p><h5 id="内存管理的功能" tabindex="-1">内存管理的功能 <a class="header-anchor" href="#内存管理的功能" aria-label="Permalink to &quot;内存管理的功能&quot;">​</a></h5><p>**内存空间的分配与回收。**由操作系统完成主存储器空间的分配和管理，是程序员拜托存储分配的麻烦</p><p>**地址转换。**在多道程序环境下，程序中的逻辑地址与内存的物理地址不可能一致，一次存储器管理必须提供地址变换功能，把逻辑地址转换成相应的物理地址。</p><p><strong>内存空间的扩充。</strong> 利用虚拟存储技术或自动覆盖技术，从逻辑上扩充内存。</p><p><strong>存储保护。</strong> 保证各道作业在各自的存储空间内运行，互不干扰。</p><h3 id="装入和链接" tabindex="-1">装入和链接 <a class="header-anchor" href="#装入和链接" aria-label="Permalink to &quot;装入和链接&quot;">​</a></h3><h3 id="内存保护" tabindex="-1">内存保护 <a class="header-anchor" href="#内存保护" aria-label="Permalink to &quot;内存保护&quot;">​</a></h3><p>重定位寄存器（基址寄存器）含有<strong>最小的物理地址值</strong>，界地址寄存器（限长寄存器）含有<strong>最大的逻辑地址值</strong>。每个逻辑地址值必须小于界地址寄存器。</p><h2 id="连续分区分配管理方式" tabindex="-1">连续分区分配管理方式 <a class="header-anchor" href="#连续分区分配管理方式" aria-label="Permalink to &quot;连续分区分配管理方式&quot;">​</a></h2><h3 id="单一连续分配" tabindex="-1">单一连续分配 <a class="header-anchor" href="#单一连续分配" aria-label="Permalink to &quot;单一连续分配&quot;">​</a></h3><p>单一连续分配会产生内部碎片</p><p><strong>什么是内部碎片和外部碎片</strong></p><p>根据碎片出现的情况，可以将碎片分为<strong>内部碎片和外部碎片</strong>。</p><p><strong>内部碎片</strong>是指已经分配给作业但不能被利用的内存空间。</p><p><strong>外部碎片</strong>是指系统中还没有分配给作业，但是由于碎片太小而无法分配给申请内存空间的新进程的存储块。</p><p>固定分区分配中存在内部碎片，而动态分区分配中存在外部碎片。通俗点理解是，某个作业所占用的内存区域如果没有装满，就是内部碎片，而作业与作业之间，如果有内存区域没有分配给某个作业，但又不能分配给任何作业，就是外部碎片。</p><h3 id="固定分区分配" tabindex="-1">固定分区分配 <a class="header-anchor" href="#固定分区分配" aria-label="Permalink to &quot;固定分区分配&quot;">​</a></h3><p>存在内部碎片。</p><h3 id="动态分区分配" tabindex="-1">动态分区分配 <a class="header-anchor" href="#动态分区分配" aria-label="Permalink to &quot;动态分区分配&quot;">​</a></h3><p>存在外部碎片，可以通过紧凑技术解决。</p><h5 id="首次适应算法-first-fit-ff" tabindex="-1">首次适应算法（First Fit，FF） <a class="header-anchor" href="#首次适应算法-first-fit-ff" aria-label="Permalink to &quot;首次适应算法（First Fit，FF）&quot;">​</a></h5><h5 id="下次适应算法-next-fit-nf" tabindex="-1">下次适应算法（Next Fit，NF） <a class="header-anchor" href="#下次适应算法-next-fit-nf" aria-label="Permalink to &quot;下次适应算法（Next Fit，NF）&quot;">​</a></h5><p>从上次查找结束的位置继续查找。</p><h5 id="最佳适应算法-best-fit-bf" tabindex="-1">最佳适应算法（Best Fit，BF） <a class="header-anchor" href="#最佳适应算法-best-fit-bf" aria-label="Permalink to &quot;最佳适应算法（Best Fit，BF）&quot;">​</a></h5><p>要求将空闲分区按照<strong>容量大小递增</strong>的次序排列</p><h5 id="最差适应算法-worst-fit-wf" tabindex="-1">最差适应算法（Worst Fit，WF） <a class="header-anchor" href="#最差适应算法-worst-fit-wf" aria-label="Permalink to &quot;最差适应算法（Worst Fit，WF）&quot;">​</a></h5><p>要求将空闲分区按照<strong>容量大小递减</strong>的次序排列</p><h2 id="非连续分配管理方式" tabindex="-1">非连续分配管理方式 <a class="header-anchor" href="#非连续分配管理方式" aria-label="Permalink to &quot;非连续分配管理方式&quot;">​</a></h2><p>非连续分配管理方式根据<strong>分区大小</strong>是否固定分为<strong>分页存储管理方式和分段存储管理方式</strong>，其中分页存储管理方式<strong>根据运行作业时是否需要把作业的所有页都装入内存才运行</strong>而分为<strong>基本分页存储管理方式和请求分页存储管理方式</strong></p><h3 id="基本分页存储管理" tabindex="-1">基本分页存储管理 <a class="header-anchor" href="#基本分页存储管理" aria-label="Permalink to &quot;基本分页存储管理&quot;">​</a></h3><p>假设逻辑地址为A，页面大小为L，则页号P = (int)(A/L)。页内偏移量W = A % L。</p><p>知道页号，题目中会给出相应的页表来记录每个页号存放的物理块号。块号乘以块的大小就是页面起始地址。</p><p>物理地址 = 页面起始地址 + 页内偏移量</p><p><strong>分页存储管理的逻辑地址结构</strong></p><p>如果每个页面大小为 2^k^B，用二进制数表示逻辑地址，则末尾k位即为页内偏移量，其余部分就是页号。因此，如果让每个页面的大小为2的整数幂，计算机就可以很方便得出一个逻辑地址对应的页号和页内偏移量。</p><table><thead><tr><th>31 12</th><th>11 0</th></tr></thead><tbody><tr><td>页号P</td><td>页内偏移量W</td></tr></tbody></table><p>地址结构中包含两部分：前一部分为页号P，后一部分为页内偏移量W。</p><p>==<strong>如果有K位表示“页内偏移量”，则说明该系统中一个页面的大小是 2^k^ 个内存单元</strong>==</p><p>==<strong>如果有M位表示“页号”，则说明该系统中，一个进程最多允许有2^M^ 个页面</strong>==</p><p><strong>什么是快表（TLB）</strong></p><p>快表，又称联想寄存器（TLB），是一种访问速度比内存快很多的告诉缓冲器，用来存放当前访问的若干页表项，以加速地址变换的过程。与此对应，内存中的页表常称为慢表。</p><h3 id="基本分段存储管理" tabindex="-1">基本分段存储管理 <a class="header-anchor" href="#基本分段存储管理" aria-label="Permalink to &quot;基本分段存储管理&quot;">​</a></h3><p><strong>分页和分段的区别</strong></p><table><thead><tr><th style="text-align:center;">分页</th><th style="text-align:center;">分段</th></tr></thead><tbody><tr><td style="text-align:center;">页是信息的物理单位</td><td style="text-align:center;">段信息的逻辑单位</td></tr><tr><td style="text-align:center;">分页的目的是系统管理所需，为了提高内存利用率</td><td style="text-align:center;">分段的目的是为了更好地满足用户的需要</td></tr><tr><td style="text-align:center;">页的大小固定且由系统决定</td><td style="text-align:center;">段的长度不固定，不同的段有不同的段长，是由用户编写的程序决定的</td></tr><tr><td style="text-align:center;">作业地址空间是一维的</td><td style="text-align:center;">作业地址空间是二维的</td></tr><tr><td style="text-align:center;">有内部碎片，无外部碎片</td><td style="text-align:center;">无内部碎片，有外部碎片</td></tr></tbody></table><p>因为页的大小固定，程序最后很少能刚好填满一个页，所以会有内部碎片。一般固定分配都会有内部碎片</p><p>段内连续，段间不连续，所以会有外部碎片。</p><p><strong>为什么分页存储管理系统的地址空间是一维，而分段存储管理系统是二维的</strong></p><p><strong>段号是程序员自己定义的，每个段都是有特定含义</strong>。因此不同的段大小不同，代表的意义也不相同。想要找到某个数据或者指令，需要指定段号和位移两个变量。</p><p><strong>而页号是系统自动生成的，本身地址是线性连续的</strong>。当访问特定地址时，只需要提供地址即可。系统会自动将地址划分为页号和页内位移（地址整除页的大小，商为页号，余数为页内位移），而页号对程序员来说是没有实际意义的，因此是一维的。</p><h3 id="基本段页式存储管理" tabindex="-1">基本段页式存储管理 <a class="header-anchor" href="#基本段页式存储管理" aria-label="Permalink to &quot;基本段页式存储管理&quot;">​</a></h3><h2 id="虚拟内存管理" tabindex="-1">虚拟内存管理 <a class="header-anchor" href="#虚拟内存管理" aria-label="Permalink to &quot;虚拟内存管理&quot;">​</a></h2><h5 id="请求分页存储管理方式" tabindex="-1">请求分页存储管理方式 <a class="header-anchor" href="#请求分页存储管理方式" aria-label="Permalink to &quot;请求分页存储管理方式&quot;">​</a></h5><p>请求分页 = 基本分页 + 请求调页功能 +页面置换功能</p><h3 id="页面置换算法" tabindex="-1">页面置换算法 <a class="header-anchor" href="#页面置换算法" aria-label="Permalink to &quot;页面置换算法&quot;">​</a></h3><h4 id="最佳置换算法-opt" tabindex="-1">最佳置换算法（OPT） <a class="header-anchor" href="#最佳置换算法-opt" aria-label="Permalink to &quot;最佳置换算法（OPT）&quot;">​</a></h4><p>在预知一个进程的页面号引用串的情况下，每次都淘汰以后不再使用的或以后最迟不再使用的页面，这种算法就是最佳置换算法。</p><p>显然，最佳置换算法是最优的，具有最低的缺页率。但由于实际操作中往往<strong>无法事先知道以后会引用到的所有页面信息</strong>，因此<strong>最佳置换算法无法实现</strong>，只能作为一个标准来衡量其他置换算法的优劣。</p><h4 id="先进先出算法-fifo" tabindex="-1">先进先出算法（FIFO） <a class="header-anchor" href="#先进先出算法-fifo" aria-label="Permalink to &quot;先进先出算法（FIFO）&quot;">​</a></h4><p>FIFO算法是最简单的页面置换算法，每次总是淘汰最先进入内存的页面，也就是淘汰在内存驻留时间最长的页面。</p><p>该算法实现简单，用数据结构中的队列就可以实现。首先将页面按照次序排成一个队列，并设置指针指向最先进入的页面，每次需要淘汰页面时，将指针所指的页面淘汰即可。</p><p>不过FIFO算法可能会导致Belady异常（缺页次数随着分配的物理块号的增加而增加）。这是因为FIFO算法忽略了一种现象——最早调入的页面往往是使用最频繁的页面。因此FIFO算法与进程的实际运行规律不符，实际效果不好。</p><h4 id="最近最少使用算法-lru" tabindex="-1">最近最少使用算法（LRU） <a class="header-anchor" href="#最近最少使用算法-lru" aria-label="Permalink to &quot;最近最少使用算法（LRU）&quot;">​</a></h4><p>选择最近最长时间没有被使用的页面予以淘汰，其思想是用以前的页面引用情况来预测将来会出现的页面引用情况。也就是假设一个页面刚被访问，那么不久该页面还会被访问。最佳置换算法（OPT）是&quot;向后看&quot;，最近最少使用算法（LRU）则是&quot;向前看&quot;。</p><p>该算法可用寄存器组合栈来实现，性能较好。<strong>常用的页面置换算法中，LRU算法最接近最佳置换算法</strong></p><h4 id="时钟置换算法-clock" tabindex="-1">时钟置换算法（CLOCK） <a class="header-anchor" href="#时钟置换算法-clock" aria-label="Permalink to &quot;时钟置换算法（CLOCK）&quot;">​</a></h4><p>如果所有的引用位都为1，则会退化成FIFO替换。</p><h4 id="改进型时钟算法" tabindex="-1">改进型时钟算法 <a class="header-anchor" href="#改进型时钟算法" aria-label="Permalink to &quot;改进型时钟算法&quot;">​</a></h4><p>通过将引用位和修改位作为有序对，有下面四种类型：</p><table><thead><tr><th>引用位</th><th>修改位</th><th></th></tr></thead><tbody><tr><td>0</td><td>0</td><td>最近没有使用过且没有修改过的页面。最佳的页面置换选择</td></tr><tr><td>0</td><td>1</td><td>最近没有使用过但是修改过的页面。不太好置换，因为需要将页面写出</td></tr><tr><td>1</td><td>0</td><td>最近使用过但没有修改过的页面。很可能会再次使用</td></tr><tr><td>1</td><td>1</td><td>最近使用过且修改过，很可能会再次被使用且置换之前需要将页面写出到磁盘。</td></tr></tbody></table><h4 id="其他页面置换算法" tabindex="-1">其他页面置换算法 <a class="header-anchor" href="#其他页面置换算法" aria-label="Permalink to &quot;其他页面置换算法&quot;">​</a></h4><p><strong>最不常用置换算法（LFU）</strong></p><p><strong>页面缓冲算法（PBA）</strong></p>',76),s=[n];function h(i,d,l,p,c,b){return a(),r("div",null,s)}const f=t(o,[["render",h]]);export{u as __pageData,f as default};
