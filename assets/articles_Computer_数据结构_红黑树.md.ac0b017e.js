import{_ as a,o as e,c as t,O as r}from"./chunks/framework.4afe7240.js";const o="/assets/image-20210924232835659.c5282542.png",s="/assets/image-20211130121710208-16386334292151.c92fc80b.png",b=JSON.parse('{"title":"红黑树","description":"","frontmatter":{},"headers":[],"relativePath":"articles/Computer/数据结构/红黑树.md","filePath":"articles/Computer/数据结构/红黑树.md"}'),i={name:"articles/Computer/数据结构/红黑树.md"},l=r('<h1 id="红黑树" tabindex="-1">红黑树 <a class="header-anchor" href="#红黑树" aria-label="Permalink to &quot;红黑树&quot;">​</a></h1><h2 id="基本概念" tabindex="-1">基本概念 <a class="header-anchor" href="#基本概念" aria-label="Permalink to &quot;基本概念&quot;">​</a></h2><p><strong>红黑树是一棵二叉搜索树</strong>。<strong>新插入的结点是红色的（为了不破坏黑高相同特性）</strong>，如果插入后不符合定义可再进行旋转变色。</p><p>黑高：从某结点出发（不包含该结点）到达任意一个叶结点（包含该叶结点）的路径上黑结点的数量。</p><blockquote><ul><li>每个结点要么是红色，要么是黑色</li><li>根结点和叶结点（NIL）是黑色的</li><li>每个红色结点必须有两个黑色子结点</li><li>任意结点到叶结点的简单路径中包含相同数量的黑结点</li></ul></blockquote><p>口诀：<strong>根黑叶黑，不能连续红，必须相同黑。</strong></p><p><img src="'+o+'" alt="image-20210924232835659"></p><h3 id="性质" tabindex="-1">性质 <a class="header-anchor" href="#性质" aria-label="Permalink to &quot;性质&quot;">​</a></h3><p><strong>1、从根结点到叶结点的最长路径不大于最短路径2倍。</strong></p><p><strong>2、有n个内部结点的红黑树高度$h\\leq2log_2 (n+1)$</strong></p><h2 id="查找" tabindex="-1">查找 <a class="header-anchor" href="#查找" aria-label="Permalink to &quot;查找&quot;">​</a></h2><p>红黑树本身是一棵BST，所以查找和BST相同。</p><h2 id="插入" tabindex="-1">插入 <a class="header-anchor" href="#插入" aria-label="Permalink to &quot;插入&quot;">​</a></h2><p><img src="'+s+'" alt="image-20211130121710208"></p><h2 id="旋转" tabindex="-1">旋转 <a class="header-anchor" href="#旋转" aria-label="Permalink to &quot;旋转&quot;">​</a></h2><p>旋转操作不会改变树中序遍历的顺序</p><p>旋转操作通过降低高度高的子树的高度，增加高度低的子树的高度来维护二叉树的平衡</p><p>旋转操作和平衡二叉树相同。</p>',18),n=[l];function c(p,h,_,d,m,u){return e(),t("div",null,n)}const f=a(i,[["render",c]]);export{b as __pageData,f as default};
