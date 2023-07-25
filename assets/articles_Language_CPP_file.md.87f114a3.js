import{_ as s,o as n,c as a,U as l}from"./chunks/framework.adbdbaa5.js";const A=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"articles/Language/CPP/file.md","filePath":"articles/Language/CPP/file.md"}'),p={name:"articles/Language/CPP/file.md"},o=l(`<h3 id="文件读写" tabindex="-1">文件读写 <a class="header-anchor" href="#文件读写" aria-label="Permalink to &quot;文件读写&quot;">​</a></h3><div class="language-c++"><button title="Copy Code" class="copy"></button><span class="lang">c++</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">#include  &lt;iostream&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">#include &lt;fstream&gt;    // 读写文件的头文件</span></span>
<span class="line"><span style="color:#A6ACCD;">#include &lt;string&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">using namespace std;</span></span>
<span class="line"><span style="color:#A6ACCD;">/*</span></span>
<span class="line"><span style="color:#A6ACCD;"> 1 文本文件 写文件</span></span>
<span class="line"><span style="color:#A6ACCD;">     1 包含头文件</span></span>
<span class="line"><span style="color:#A6ACCD;">            #include &lt;fstream&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">     2 创建流对象</span></span>
<span class="line"><span style="color:#A6ACCD;">            ofstream ofs;</span></span>
<span class="line"><span style="color:#A6ACCD;">     3 指定路径和打开方式</span></span>
<span class="line"><span style="color:#A6ACCD;">            ofs.open(路径, 打开方式);</span></span>
<span class="line"><span style="color:#A6ACCD;">        打开方式：</span></span>
<span class="line"><span style="color:#A6ACCD;">            ios::in        读文件打开</span></span>
<span class="line"><span style="color:#A6ACCD;">            ios::out    写文件打开</span></span>
<span class="line"><span style="color:#A6ACCD;">            ios::ate    从文件尾打开</span></span>
<span class="line"><span style="color:#A6ACCD;">            ios::app    追加方式打开</span></span>
<span class="line"><span style="color:#A6ACCD;">            ios::trunc    如果已经有文件 先删除在撞见</span></span>
<span class="line"><span style="color:#A6ACCD;">            ios::binary    二进制方式</span></span>
<span class="line"><span style="color:#A6ACCD;">     4 写内容</span></span>
<span class="line"><span style="color:#A6ACCD;">             ofs &lt;&lt; &quot;写点数据&quot; &lt;&lt; endl;</span></span>
<span class="line"><span style="color:#A6ACCD;">     5 关闭文件</span></span>
<span class="line"><span style="color:#A6ACCD;">            ofs.close();</span></span>
<span class="line"><span style="color:#A6ACCD;">*/</span></span>
<span class="line"><span style="color:#A6ACCD;">void write() {</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 1 包含头文件 #include &lt;fstream&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 2 创建流对象</span></span>
<span class="line"><span style="color:#A6ACCD;">    ofstream ofs;</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 3 指定路径和打开方式</span></span>
<span class="line"><span style="color:#A6ACCD;">    ofs.open(&quot;text.txt&quot;, ios::out);</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 4 写内容</span></span>
<span class="line"><span style="color:#A6ACCD;">    ofs &lt;&lt; &quot;写点数据&quot; &lt;&lt; endl;</span></span>
<span class="line"><span style="color:#A6ACCD;">    ofs &lt;&lt; &quot;写点数据2&quot; &lt;&lt; endl;</span></span>
<span class="line"><span style="color:#A6ACCD;">    ofs &lt;&lt; &quot;写点数据3&quot; &lt;&lt; endl;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    // 5 关闭文件</span></span>
<span class="line"><span style="color:#A6ACCD;">    ofs.close();</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">/*</span></span>
<span class="line"><span style="color:#A6ACCD;">2 文本文件 读文件</span></span>
<span class="line"><span style="color:#A6ACCD;">     1 包含头文件</span></span>
<span class="line"><span style="color:#A6ACCD;">            #include &lt;fstream&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">     2 创建流对象</span></span>
<span class="line"><span style="color:#A6ACCD;">            ifstream ifs;</span></span>
<span class="line"><span style="color:#A6ACCD;">     3 指定路径和打开方式</span></span>
<span class="line"><span style="color:#A6ACCD;">            ifs.open(路径, 打开方式);</span></span>
<span class="line"><span style="color:#A6ACCD;">        打开方式：</span></span>
<span class="line"><span style="color:#A6ACCD;">            ios::in        读文件打开</span></span>
<span class="line"><span style="color:#A6ACCD;">            ios::out    写文件打开</span></span>
<span class="line"><span style="color:#A6ACCD;">            ios::ate    从文件尾打开</span></span>
<span class="line"><span style="color:#A6ACCD;">            ios::app    追加方式打开</span></span>
<span class="line"><span style="color:#A6ACCD;">            ios::trunc    如果已经有文件 先删除在撞见</span></span>
<span class="line"><span style="color:#A6ACCD;">            ios::binary    二进制方式</span></span>
<span class="line"><span style="color:#A6ACCD;">     4 读取 四种方式</span></span>
<span class="line"><span style="color:#A6ACCD;">            ifs &lt;&lt; &quot;写点数据&quot; &lt;&lt; endl;</span></span>
<span class="line"><span style="color:#A6ACCD;">     5 关闭文件</span></span>
<span class="line"><span style="color:#A6ACCD;">            ifs.close();</span></span>
<span class="line"><span style="color:#A6ACCD;">*/</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">void read() {</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 1 头文件</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 2 创建流对象</span></span>
<span class="line"><span style="color:#A6ACCD;">    ifstream ifs;</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 3 打开文件 判断是否打开成功</span></span>
<span class="line"><span style="color:#A6ACCD;">    ifs.open(&quot;text.txt&quot;, ios::in);</span></span>
<span class="line"><span style="color:#A6ACCD;">    if (!ifs.is_open()) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        cout &lt;&lt; &quot;文件打开失败！&quot; &lt;&lt; endl;</span></span>
<span class="line"><span style="color:#A6ACCD;">        return;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 4 读数据 四种方式</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 第一种方式</span></span>
<span class="line"><span style="color:#A6ACCD;">    //char buf[1024] = { 0 };</span></span>
<span class="line"><span style="color:#A6ACCD;">    //while (ifs &gt;&gt; buf) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    //    cout &lt;&lt; buf &lt;&lt; endl;</span></span>
<span class="line"><span style="color:#A6ACCD;">    //}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    // 第二种</span></span>
<span class="line"><span style="color:#A6ACCD;">    //char buf[1024];</span></span>
<span class="line"><span style="color:#A6ACCD;">    //while (ifs.getline(buf, sizeof(buf))) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    //    cout &lt;&lt; buf &lt;&lt; endl;</span></span>
<span class="line"><span style="color:#A6ACCD;">    //}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    // 第三种 逐行读取</span></span>
<span class="line"><span style="color:#A6ACCD;">    //string buf;</span></span>
<span class="line"><span style="color:#A6ACCD;">    //while (getline(ifs, buf)) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    //    cout &lt;&lt; buf &lt;&lt; endl;</span></span>
<span class="line"><span style="color:#A6ACCD;">    //}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    // 第四种 不推荐用</span></span>
<span class="line"><span style="color:#A6ACCD;">    char c;</span></span>
<span class="line"><span style="color:#A6ACCD;">    while ((c=ifs.get()) != EOF) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        cout &lt;&lt; c;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    // 5 关闭流</span></span>
<span class="line"><span style="color:#A6ACCD;">    ifs.close();</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">int main() {</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    read();</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    system(&quot;pause&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">    return 0;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div><div class="language-cpp"><button title="Copy Code" class="copy"></button><span class="lang">cpp</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">#include</span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">iostream</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">#include</span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">sstream</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">#include</span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">fstream</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">#include</span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">string</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">#include</span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">set</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">#include</span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">Windows.h</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F78C6C;">using</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">namespace</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">std</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//从文件中读取进程相关数据，初始化进程</span></span>
<span class="line"><span style="color:#C792EA;">void</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">init</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	ifstream ifs</span><span style="color:#89DDFF;">;</span><span style="color:#676E95;font-style:italic;">		//创建流对象</span></span>
<span class="line"><span style="color:#A6ACCD;">	ifs</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">open</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">PCB.txt</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">ios</span><span style="color:#89DDFF;">::</span><span style="color:#A6ACCD;">in</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(!</span><span style="color:#A6ACCD;">ifs</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">is_open</span><span style="color:#89DDFF;">())</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">		cout </span><span style="color:#89DDFF;">&lt;&lt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">文件打开失败</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&lt;&lt;</span><span style="color:#F07178;"> endl</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">		</span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">	</span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">	string buff</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> row </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span><span style="color:#676E95;font-style:italic;">		//行数，跳过第0行的中文字段说明</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;font-style:italic;">while</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">getline</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">ifs</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> buff</span><span style="color:#89DDFF;">))</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">		</span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">(</span><span style="color:#F07178;">row</span><span style="color:#89DDFF;">)</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">			istringstream </span><span style="color:#82AAFF;">str</span><span style="color:#89DDFF;">(</span><span style="color:#F07178;">buff</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#F07178;">			string out</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">			</span><span style="color:#C792EA;">int</span><span style="color:#F07178;"> column </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span><span style="color:#676E95;font-style:italic;">		//列数</span></span>
<span class="line"><span style="color:#F07178;">			</span><span style="color:#89DDFF;font-style:italic;">while</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">(</span><span style="color:#F07178;">str </span><span style="color:#89DDFF;">&gt;&gt;</span><span style="color:#F07178;"> out</span><span style="color:#89DDFF;">)</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">				</span><span style="color:#89DDFF;font-style:italic;">switch</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">(</span><span style="color:#F07178;">column</span><span style="color:#89DDFF;">)</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">				</span><span style="color:#89DDFF;font-style:italic;">case</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#F07178;">					</span><span style="color:#A6ACCD;">pcb</span><span style="color:#89DDFF;">[</span><span style="color:#F07178;">row </span><span style="color:#89DDFF;">-</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">].</span><span style="color:#A6ACCD;">name</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> out</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">					</span><span style="color:#89DDFF;font-style:italic;">break</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">				</span><span style="color:#89DDFF;font-style:italic;">case</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#F07178;">					</span><span style="color:#A6ACCD;">pcb</span><span style="color:#89DDFF;">[</span><span style="color:#F07178;">row </span><span style="color:#89DDFF;">-</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">].</span><span style="color:#A6ACCD;">runTime</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">atoi</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">out</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">c_str</span><span style="color:#89DDFF;">());</span><span style="color:#676E95;font-style:italic;">		//c语言转换形式，string 转 int</span></span>
<span class="line"><span style="color:#F07178;">					</span><span style="color:#89DDFF;font-style:italic;">break</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">				</span><span style="color:#89DDFF;font-style:italic;">case</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#F07178;">					</span><span style="color:#A6ACCD;">pcb</span><span style="color:#89DDFF;">[</span><span style="color:#F07178;">row </span><span style="color:#89DDFF;">-</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">].</span><span style="color:#A6ACCD;">priority</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">atoi</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">out</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">c_str</span><span style="color:#89DDFF;">());</span></span>
<span class="line"><span style="color:#F07178;">					</span><span style="color:#89DDFF;font-style:italic;">break</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">				</span><span style="color:#89DDFF;font-style:italic;">case</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#F07178;">					</span><span style="color:#A6ACCD;">pcb</span><span style="color:#89DDFF;">[</span><span style="color:#F07178;">row </span><span style="color:#89DDFF;">-</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">].</span><span style="color:#A6ACCD;">status</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> out</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">					</span><span style="color:#89DDFF;font-style:italic;">break</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">				</span><span style="color:#89DDFF;font-style:italic;">default</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#F07178;">					</span><span style="color:#89DDFF;font-style:italic;">break</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">				</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">				column</span><span style="color:#89DDFF;">++;</span></span>
<span class="line"><span style="color:#F07178;">			</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">		</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">		row</span><span style="color:#89DDFF;">++;</span></span>
<span class="line"><span style="color:#F07178;">	</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><h3 id="生成随机数" tabindex="-1">生成随机数 <a class="header-anchor" href="#生成随机数" aria-label="Permalink to &quot;生成随机数&quot;">​</a></h3><div class="language-cpp"><button title="Copy Code" class="copy"></button><span class="lang">cpp</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">main</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">std</span><span style="color:#89DDFF;">::</span><span style="color:#A6ACCD;">mt19937 </span><span style="color:#82AAFF;">rd</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">std</span><span style="color:#89DDFF;">::</span><span style="color:#A6ACCD;">random_device{}</span><span style="color:#89DDFF;">());</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">std</span><span style="color:#89DDFF;">::</span><span style="color:#A6ACCD;">uniform_real_distribution</span><span style="color:#89DDFF;">&lt;</span><span style="color:#C792EA;">double</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">dis</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  ofstream out</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  out</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">open</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">train.txt</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">ios</span><span style="color:#89DDFF;">::</span><span style="color:#A6ACCD;">out</span><span style="color:#89DDFF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;font-style:italic;">for</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> i </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> i </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1000</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">++</span><span style="color:#A6ACCD;">i</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">double</span><span style="color:#F07178;"> a </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">dis</span><span style="color:#89DDFF;">(</span><span style="color:#F07178;">rd</span><span style="color:#89DDFF;">),</span><span style="color:#F07178;"> b </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">dis</span><span style="color:#89DDFF;">(</span><span style="color:#F07178;">rd</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">double</span><span style="color:#F07178;"> c </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">abs</span><span style="color:#89DDFF;">(</span><span style="color:#F07178;">a </span><span style="color:#89DDFF;">-</span><span style="color:#F07178;"> b</span><span style="color:#89DDFF;">)</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&gt;</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0.5</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">?</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1.0</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0.f</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">    out </span><span style="color:#89DDFF;">&lt;&lt;</span><span style="color:#F07178;"> a </span><span style="color:#89DDFF;">&lt;&lt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&lt;&lt;</span><span style="color:#F07178;"> b </span><span style="color:#89DDFF;">&lt;&lt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&lt;&lt;</span><span style="color:#F07178;"> c </span><span style="color:#89DDFF;">&lt;&lt;</span><span style="color:#F07178;"> endl</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div>`,5),t=[o];function e(c,r,y,D,F,C){return n(),a("div",null,t)}const u=s(p,[["render",e]]);export{A as __pageData,u as default};
