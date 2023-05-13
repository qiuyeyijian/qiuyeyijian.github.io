import{_ as s,o as a,c as t,O as n}from"./chunks/framework.9be35eee.js";const l="/assets/cron计划任务的参数.37f11bd2.png",h=JSON.parse('{"title":"计划任务","description":"","frontmatter":{},"headers":[],"relativePath":"Linux/scheduled-tasks.md","filePath":"Linux/scheduled-tasks.md"}'),o={name:"Linux/scheduled-tasks.md"},p=n(`<h1 id="计划任务" tabindex="-1">计划任务 <a class="header-anchor" href="#计划任务" aria-label="Permalink to &quot;计划任务&quot;">​</a></h1><p>计划任务分为一次性计划任务与长期性计划任务。</p><p>计划任务中的命令中使用 echo，cat 等输出命令的结果不会在终端显示，若有需要可以将结果存储到文件中。</p><h3 id="一次行计划任务-at" tabindex="-1">一次行计划任务 at <a class="header-anchor" href="#一次行计划任务-at" aria-label="Permalink to &quot;一次行计划任务 at&quot;">​</a></h3><p>顾名思义，一次性计划任务只执行一次，一般用于临时的工作需求。可以用 at 命令实现这种功能，只需要写成“at 时间”的形式就行。如果想要查看已设置好但还未执行的一次性计划任务，可以使用 at -l 命令；要想将其删除，可以使用“atrm 任务序号”。</p><p>表 4-6 at 命令的参数及其作用</p><table><thead><tr><th>参数</th><th>作用</th></tr></thead><tbody><tr><td>-f</td><td>指定包含命令的任务文件</td></tr><tr><td>-q</td><td>指定新任务名称</td></tr><tr><td>-l</td><td>显示待执行任务列表</td></tr><tr><td>-d</td><td>删除指定待执行任务</td></tr><tr><td>-m</td><td>任务执行后给用户发邮件</td></tr></tbody></table><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">root@QIUYEYIJIAN </span><span style="color:#89DDFF;">~]</span><span style="color:#A6ACCD;"># at 23:20</span></span>
<span class="line"><span style="color:#FFCB6B;">warning:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">commands</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">will</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">be</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">executed</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">using</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/bin/sh</span></span>
<span class="line"><span style="color:#FFCB6B;">at&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">systemctl</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">restart</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">httpd</span></span>
<span class="line"><span style="color:#FFCB6B;">at&gt;</span><span style="color:#A6ACCD;">	</span><span style="color:#676E95;font-style:italic;"># 此处请同时按下&lt;Ctrl&gt;+&lt;d&gt;键来结束编写计划任务</span></span>
<span class="line"><span style="color:#FFCB6B;">job</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">8</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">at</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Sat</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Feb</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">26</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">23</span><span style="color:#C3E88D;">:20:00</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2022</span></span>
<span class="line"><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">root@QIUYEYIJIAN </span><span style="color:#89DDFF;">~]</span><span style="color:#A6ACCD;">#</span></span></code></pre></div><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">echo</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">systemctl restart httpd</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">at</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">23</span><span style="color:#C3E88D;">:30</span><span style="color:#A6ACCD;">		</span><span style="color:#676E95;font-style:italic;"># 使用管道符更简洁</span></span></code></pre></div><p>用户设置好计划任务后开始倒计时执行</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">at</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">now+2</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">MINUTE</span><span style="color:#A6ACCD;">			</span><span style="color:#676E95;font-style:italic;"># 两分钟后执行</span></span></code></pre></div><h3 id="长期性计划任务-crondtab" tabindex="-1">长期性计划任务 crondtab <a class="header-anchor" href="#长期性计划任务-crondtab" aria-label="Permalink to &quot;长期性计划任务 crondtab&quot;">​</a></h3><p>创建、编辑计划任务的命令为 crontab -e，查看当前计划任务的命令为 crontab -l，删除某条计划任务的命令为 crontab -r。另外，如果您是以管理员的身份登录的系统，还可以在 crontab 命令中加上-u 参数来编辑他人的计划任务。</p><table><thead><tr><th>参数</th><th>作用</th></tr></thead><tbody><tr><td>-e</td><td>编辑计划任务</td></tr><tr><td>-u</td><td>指定用户名称</td></tr><tr><td>-l</td><td>列出任务列表</td></tr><tr><td>-r</td><td>删除计划任务</td></tr></tbody></table><p><strong>“分、时、日、月、星期、 (命)令”<strong>这是使用 crond 服务设置任务的参数格式。需要注意的是，如果有些字段没有被设置，则需要使用星号（</strong>*</strong>）占位<img src="`+l+`" alt="第4章 Vim编辑器与Shell命令脚本第4章 Vim编辑器与Shell命令脚本"></p><table><thead><tr><th>字段</th><th>说明</th></tr></thead><tbody><tr><td>分钟</td><td>取值为 0 ～ 59 的整数</td></tr><tr><td>小时</td><td>取值为 0 ～ 23 的任意整数</td></tr><tr><td>日期</td><td>取值为 1 ～ 31 的任意整数</td></tr><tr><td>月份</td><td>取值为 1 ～ 12 的任意整数</td></tr><tr><td>星期</td><td>取值为 0 ～ 7 的任意整数，其中 0 与 7 均为星期日</td></tr><tr><td>命令</td><td>要执行的命令或程序脚本</td></tr></tbody></table><blockquote><ul><li><strong>*</strong> 取值范围内的所有数字</li><li><strong>/</strong> 每过多少个数字</li><li><strong>-</strong> 从 X 到 Z</li><li>**，**散列数字</li></ul></blockquote><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">crontab</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-e</span><span style="color:#A6ACCD;">		</span><span style="color:#676E95;font-style:italic;"># 编辑计划任务</span></span></code></pre></div><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 每小时的第20分钟将date结果存储到1.txt中</span></span>
<span class="line"><span style="color:#FFCB6B;">20</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">*</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">*</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">*</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">*</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/usr/bin/date</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&gt;&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#C3E88D;">.txt</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 每周1,3,5的13:20 将date结果存储到1.txt中</span></span>
<span class="line"><span style="color:#FFCB6B;">20</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">13</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">*</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">*</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#C3E88D;">,3,5</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/usr/bin/date</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&gt;&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#C3E88D;">.txt</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 每周1到周5的13:20 将date结果存储到1.txt中</span></span>
<span class="line"><span style="color:#FFCB6B;">20</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">13</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">*</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">*</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#C3E88D;">-5</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/usr/bin/date</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&gt;&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#C3E88D;">.txt</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 每1分钟 将date结果存储到1.txt中</span></span>
<span class="line"><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;">/1 </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;"> /usr/bin/date </span><span style="color:#89DDFF;">&gt;&gt;</span><span style="color:#A6ACCD;"> result.txt</span></span></code></pre></div><blockquote><p>如果在 crond 服务中需要同时包含多条计划任务的命令语句，应每行仅写一条。</p><p><strong>在 crond 服务的计划任务参数中，所有命令一定要用绝对路径的方式来写</strong></p><p>在 crond 服务的配置参数中，一般会像 Shell 脚本那样以#号开头写上注释信息，这样在日后回顾这段命令代码时可以快速了解其功能、需求以及编写人员等重要信息。</p><p><strong>计划任务中的“分”字段必须有数值，绝对不能为空或是*号，而“日”和“星期”字段不能同时使用，否则就会发生冲突。</strong></p></blockquote>`,20),e=[p];function r(c,C,y,d,A,D){return a(),t("div",null,e)}const F=s(o,[["render",r]]);export{h as __pageData,F as default};
