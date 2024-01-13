import{_ as s,c as i,o as a,U as n}from"./chunks/framework.isgf4Vyz.js";const g=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"articles/Tools/CMake/CMake.md","filePath":"articles/Tools/CMake/CMake.md"}'),l={name:"articles/Tools/CMake/CMake.md"},t=n(`<p>先看一下基础知识</p><p>Cmake 入门实战：<a href="https://www.hahack.com/codes/cmake/" target="_blank" rel="noreferrer">https://www.hahack.com/codes/cmake/</a></p><p>CMake官方教程— CMake 3.9.1rc1文档 <a href="https://cmake.org/cmake/help/v3.19/guide/tutorial/index.html" target="_blank" rel="noreferrer">https://cmake.org/cmake/help/v3.19/guide/tutorial/index.html</a></p><p>cmake使用示例与整理总结 <a href="https://blog.csdn.net/QTVLC/article/details/82380413" target="_blank" rel="noreferrer">https://blog.csdn.net/QTVLC/article/details/82380413</a></p><p>CMake命令/函数汇总（翻译自官方手册） <a href="https://www.cnblogs.com/52php/p/5684588.html" target="_blank" rel="noreferrer">https://www.cnblogs.com/52php/p/5684588.html</a></p><p><a href="https://github.com/BrightXiaoHan/CMakeTutorial" target="_blank" rel="noreferrer">https://github.com/BrightXiaoHan/CMakeTutorial</a></p><p>编写CMakeLists.txt时候，关键字不区分大小写，但要统一</p><div class="language-cmake vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">cmake</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 声明要求的 cmake 最低版本</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">CMAKE_MINIMUM_REQUIRED</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">VERSION</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 2.8)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 声明一个cmake 工程</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">PROJECT</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(Demo01)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 设置编译模式</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">SET</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">CMAKE_BUILD_TYPE</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;Debug&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 添加一个可执行程序</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 语法： add_executable(程序名 源代码文件)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">ADD_EXECUTABLE</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(main hello.cpp)</span></span></code></pre></div><h3 id="step01" tabindex="-1">Step01 <a class="header-anchor" href="#step01" aria-label="Permalink to &quot;Step01&quot;">​</a></h3><div class="language-cmake vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">cmake</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 默认第一句均是这句话，规定cmake所需最低版本</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">cmake_minimum_required</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">VERSION</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 2.8)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 设置项目名称和版本</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">project</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(Tutorial </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">VERSION</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 1.0)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># specify the C++ standard</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">set</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(CMAKE_CXX_STANDARD 11)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">set</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(CMAKE_CXX_STANDARD_REQUIRED </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">True</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># configure a header file to pass some of the CMake settings</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># to the source code</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">configure_file</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(TutorialConfig.h.in TutorialConfig.h)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 添加可执行文件</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">add_executable</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(Tutorial tutorial.cxx)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># add the binary tree to the search path for include files</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># so that we will find TutorialConfig.h</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">target_include_directories</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(Tutorial </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">PUBLIC</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;\${PROJECT_BINARY_DIR}&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><h3 id="step02" tabindex="-1">Step02 <a class="header-anchor" href="#step02" aria-label="Permalink to &quot;Step02&quot;">​</a></h3><div class="language-cmake vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">cmake</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">cmake_minimum_required</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">VERSION</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 3.10)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># set the project name and version</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">project</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(Tutorial </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">VERSION</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 1.0)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># specify the C++ standard</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">set</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(CMAKE_CXX_STANDARD 11)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">set</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(CMAKE_CXX_STANDARD_REQUIRED </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">True</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># should we use our own math functions</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">option</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(USE_MYMATH </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Use tutorial provided math implementation&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> ON</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># configure a header file to pass some of the CMake settings</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># to the source code</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">configure_file</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(TutorialConfig.h.in TutorialConfig.h)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># add the MathFunctions library</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#if(USE_MYMATH)</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#  add_subdirectory(MathFunctions)</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#  list(APPEND EXTRA_LIBS MathFunctions)</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#  list(APPEND EXTRA_INCLUDES &quot;\${PROJECT_SOURCE_DIR}/MathFunctions&quot;)</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#endif()</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (USE_MYMATH)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  add_subdirectory</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(MathFunctions)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  list</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(APPEND EXTRA_LIBS MathFunctions)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  list</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(APPEND EXTRA_INCLUDES </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;\${PROJECT_SOURCE_DIR}/MathFunctions&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">endif</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ()</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># add the executable</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">add_executable</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(Tutorial tutorial.cxx)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">target_link_libraries</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(Tutorial </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">PUBLIC</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> \${EXTRA_LIBS}</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># add the binary tree to the search path for include files</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># so that we will find TutorialConfig.h</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">target_include_directories</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(Tutorial </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">PUBLIC</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                           &quot;\${PROJECT_BINARY_DIR}&quot;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">                           \${EXTRA_INCLUDES}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                           )</span></span></code></pre></div><h3 id="step03" tabindex="-1">Step03 <a class="header-anchor" href="#step03" aria-label="Permalink to &quot;Step03&quot;">​</a></h3>`,13),e=[t];function p(h,k,r,d,E,c){return a(),i("div",null,e)}const y=s(l,[["render",p]]);export{g as __pageData,y as default};
