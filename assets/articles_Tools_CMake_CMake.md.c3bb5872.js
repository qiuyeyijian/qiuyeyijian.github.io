import{_ as s,o as a,c as n,U as l}from"./chunks/framework.adbdbaa5.js";const h=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"articles/Tools/CMake/CMake.md","filePath":"articles/Tools/CMake/CMake.md"}'),e={name:"articles/Tools/CMake/CMake.md"},t=l(`<p>先看一下基础知识</p><p>Cmake 入门实战：<a href="https://www.hahack.com/codes/cmake/" target="_blank" rel="noreferrer">https://www.hahack.com/codes/cmake/</a></p><p>CMake官方教程— CMake 3.9.1rc1文档 <a href="https://cmake.org/cmake/help/v3.19/guide/tutorial/index.html" target="_blank" rel="noreferrer">https://cmake.org/cmake/help/v3.19/guide/tutorial/index.html</a></p><p>cmake使用示例与整理总结 <a href="https://blog.csdn.net/QTVLC/article/details/82380413" target="_blank" rel="noreferrer">https://blog.csdn.net/QTVLC/article/details/82380413</a></p><p>CMake命令/函数汇总（翻译自官方手册） <a href="https://www.cnblogs.com/52php/p/5684588.html" target="_blank" rel="noreferrer">https://www.cnblogs.com/52php/p/5684588.html</a></p><p><a href="https://github.com/BrightXiaoHan/CMakeTutorial" target="_blank" rel="noreferrer">https://github.com/BrightXiaoHan/CMakeTutorial</a></p><p>编写CMakeLists.txt时候，关键字不区分大小写，但要统一</p><div class="language-cmake"><button title="Copy Code" class="copy"></button><span class="lang">cmake</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 声明要求的 cmake 最低版本</span></span>
<span class="line"><span style="color:#89DDFF;">CMAKE_MINIMUM_REQUIRED</span><span style="color:#A6ACCD;">(VERSION 2.8)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 声明一个cmake 工程</span></span>
<span class="line"><span style="color:#89DDFF;">PROJECT</span><span style="color:#A6ACCD;">(Demo01)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 设置编译模式</span></span>
<span class="line"><span style="color:#89DDFF;">SET</span><span style="color:#A6ACCD;">(CMAKE_BUILD_TYPE </span><span style="color:#C3E88D;">&quot;Debug&quot;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 添加一个可执行程序</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 语法： add_executable(程序名 源代码文件)</span></span>
<span class="line"><span style="color:#89DDFF;">ADD_EXECUTABLE</span><span style="color:#A6ACCD;">(main hello.cpp)</span></span></code></pre></div><h3 id="step01" tabindex="-1">Step01 <a class="header-anchor" href="#step01" aria-label="Permalink to &quot;Step01&quot;">​</a></h3><div class="language-cmake"><button title="Copy Code" class="copy"></button><span class="lang">cmake</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 默认第一句均是这句话，规定cmake所需最低版本</span></span>
<span class="line"><span style="color:#89DDFF;">cmake_minimum_required</span><span style="color:#A6ACCD;">(VERSION 2.8)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 设置项目名称和版本</span></span>
<span class="line"><span style="color:#89DDFF;">project</span><span style="color:#A6ACCD;">(Tutorial VERSION 1.0)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># specify the C++ standard</span></span>
<span class="line"><span style="color:#89DDFF;">set</span><span style="color:#A6ACCD;">(CMAKE_CXX_STANDARD 11)</span></span>
<span class="line"><span style="color:#89DDFF;">set</span><span style="color:#A6ACCD;">(CMAKE_CXX_STANDARD_REQUIRED </span><span style="color:#89DDFF;">True</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># configure a header file to pass some of the CMake settings</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># to the source code</span></span>
<span class="line"><span style="color:#89DDFF;">configure_file</span><span style="color:#A6ACCD;">(TutorialConfig.h.in TutorialConfig.h)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 添加可执行文件</span></span>
<span class="line"><span style="color:#89DDFF;">add_executable</span><span style="color:#A6ACCD;">(Tutorial tutorial.cxx)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># add the binary tree to the search path for include files</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># so that we will find TutorialConfig.h</span></span>
<span class="line"><span style="color:#89DDFF;">target_include_directories</span><span style="color:#A6ACCD;">(Tutorial PUBLIC </span><span style="color:#C3E88D;">&quot;\${PROJECT_BINARY_DIR}&quot;</span><span style="color:#A6ACCD;">)</span></span></code></pre></div><h3 id="step02" tabindex="-1">Step02 <a class="header-anchor" href="#step02" aria-label="Permalink to &quot;Step02&quot;">​</a></h3><div class="language-cmake"><button title="Copy Code" class="copy"></button><span class="lang">cmake</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">cmake_minimum_required</span><span style="color:#A6ACCD;">(VERSION 3.10)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># set the project name and version</span></span>
<span class="line"><span style="color:#89DDFF;">project</span><span style="color:#A6ACCD;">(Tutorial VERSION 1.0)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># specify the C++ standard</span></span>
<span class="line"><span style="color:#89DDFF;">set</span><span style="color:#A6ACCD;">(CMAKE_CXX_STANDARD 11)</span></span>
<span class="line"><span style="color:#89DDFF;">set</span><span style="color:#A6ACCD;">(CMAKE_CXX_STANDARD_REQUIRED </span><span style="color:#89DDFF;">True</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># should we use our own math functions</span></span>
<span class="line"><span style="color:#89DDFF;">option</span><span style="color:#A6ACCD;">(USE_MYMATH </span><span style="color:#C3E88D;">&quot;Use tutorial provided math implementation&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">ON</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># configure a header file to pass some of the CMake settings</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># to the source code</span></span>
<span class="line"><span style="color:#89DDFF;">configure_file</span><span style="color:#A6ACCD;">(TutorialConfig.h.in TutorialConfig.h)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># add the MathFunctions library</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#if(USE_MYMATH)</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  add_subdirectory(MathFunctions)</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  list(APPEND EXTRA_LIBS MathFunctions)</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  list(APPEND EXTRA_INCLUDES &quot;\${PROJECT_SOURCE_DIR}/MathFunctions&quot;)</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#endif()</span></span>
<span class="line"><span style="color:#89DDFF;">if</span><span style="color:#A6ACCD;"> (USE_MYMATH)</span></span>
<span class="line"><span style="color:#89DDFF;">  add_subdirectory</span><span style="color:#A6ACCD;">(MathFunctions)</span></span>
<span class="line"><span style="color:#89DDFF;">  list</span><span style="color:#A6ACCD;">(APPEND EXTRA_LIBS MathFunctions)</span></span>
<span class="line"><span style="color:#89DDFF;">  list</span><span style="color:#A6ACCD;">(APPEND EXTRA_INCLUDES </span><span style="color:#C3E88D;">&quot;\${PROJECT_SOURCE_DIR}/MathFunctions&quot;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#89DDFF;">endif</span><span style="color:#A6ACCD;"> ()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># add the executable</span></span>
<span class="line"><span style="color:#89DDFF;">add_executable</span><span style="color:#A6ACCD;">(Tutorial tutorial.cxx)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">target_link_libraries</span><span style="color:#A6ACCD;">(Tutorial PUBLIC \${EXTRA_LIBS})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># add the binary tree to the search path for include files</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># so that we will find TutorialConfig.h</span></span>
<span class="line"><span style="color:#89DDFF;">target_include_directories</span><span style="color:#A6ACCD;">(Tutorial PUBLIC</span></span>
<span class="line"><span style="color:#A6ACCD;">                           </span><span style="color:#C3E88D;">&quot;\${PROJECT_BINARY_DIR}&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">                           \${EXTRA_INCLUDES}</span></span>
<span class="line"><span style="color:#A6ACCD;">                           )</span></span></code></pre></div><h3 id="step03" tabindex="-1">Step03 <a class="header-anchor" href="#step03" aria-label="Permalink to &quot;Step03&quot;">​</a></h3>`,13),p=[t];function o(c,i,r,y,C,D){return a(),n("div",null,p)}const d=s(e,[["render",o]]);export{h as __pageData,d as default};
