import{_ as s,o as n,c as a,O as l}from"./chunks/framework.9be35eee.js";const D=JSON.parse('{"title":"Libssh2","description":"","frontmatter":{},"headers":[],"relativePath":"Articles/process.md","filePath":"Articles/process.md"}'),p={name:"Articles/process.md"},e=l(`<h1 id="libssh2" tabindex="-1">Libssh2 <a class="header-anchor" href="#libssh2" aria-label="Permalink to &quot;Libssh2&quot;">​</a></h1><p>在C++中，可以使用操作系统提供的API函数来获取进程退出状态码，以下是在Windows和Linux系统下获取进程退出状态码的方法：</p><ol><li>Windows系统：</li></ol><p>在Windows系统中，可以使用CreateProcess函数来创建子进程，WaitForSingleObject函数来等待子进程退出，GetExitCodeProcess函数来获取子进程的退出状态码。具体示例代码如下：</p><div class="language-c++"><button title="Copy Code" class="copy"></button><span class="lang">c++</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">#include &lt;windows.h&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">#include &lt;iostream&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">using namespace std;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">int main(int argc, char* argv[]) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    STARTUPINFO si = { sizeof(si) };</span></span>
<span class="line"><span style="color:#A6ACCD;">    PROCESS_INFORMATION pi;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    // 创建子进程</span></span>
<span class="line"><span style="color:#A6ACCD;">    if (CreateProcess(NULL, &quot;test.exe&quot;, NULL, NULL, FALSE, 0, NULL, NULL, &amp;si, &amp;pi)) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        // 等待子进程退出</span></span>
<span class="line"><span style="color:#A6ACCD;">        WaitForSingleObject(pi.hProcess, INFINITE);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        // 获取子进程的退出状态码</span></span>
<span class="line"><span style="color:#A6ACCD;">        DWORD exitCode = 0;</span></span>
<span class="line"><span style="color:#A6ACCD;">        GetExitCodeProcess(pi.hProcess, &amp;exitCode);</span></span>
<span class="line"><span style="color:#A6ACCD;">        cout &lt;&lt; &quot;Child process exit code: &quot; &lt;&lt; exitCode &lt;&lt; endl;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        // 关闭进程句柄</span></span>
<span class="line"><span style="color:#A6ACCD;">        CloseHandle(pi.hProcess);</span></span>
<span class="line"><span style="color:#A6ACCD;">        CloseHandle(pi.hThread);</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    return 0;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div><ol start="2"><li>Linux系统：</li></ol><p>在Linux系统中，可以使用fork函数来创建子进程，waitpid函数来等待子进程退出，WEXITSTATUS宏来获取子进程的退出状态码。具体示例代码如下：</p><div class="language-c++"><button title="Copy Code" class="copy"></button><span class="lang">c++</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">#include &lt;iostream&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">#include &lt;unistd.h&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">#include &lt;sys/wait.h&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">using namespace std;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">int main(int argc, char* argv[])</span></span>
<span class="line"><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    pid_t pid = fork();</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    if (pid == 0) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        // 子进程退出并返回状态码</span></span>
<span class="line"><span style="color:#A6ACCD;">        _exit(42);</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    // 父进程等待子进程退出</span></span>
<span class="line"><span style="color:#A6ACCD;">    int status = 0;</span></span>
<span class="line"><span style="color:#A6ACCD;">    waitpid(pid, &amp;status, 0);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    if (WIFEXITED(status)) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        // 子进程正常退出，获取退出状态码</span></span>
<span class="line"><span style="color:#A6ACCD;">        int exitCode = WEXITSTATUS(status);</span></span>
<span class="line"><span style="color:#A6ACCD;">        cout &lt;&lt; &quot;Child process exit code: &quot; &lt;&lt; exitCode &lt;&lt; endl;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    return 0;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div><p>以上是在Windows和Linux系统中获取进程退出状态码的方法，具体使用可以根据实际情况选择适合的方法。</p>`,9),o=[e];function t(c,i,C,r,A,d){return n(),a("div",null,o)}const u=s(p,[["render",t]]);export{D as __pageData,u as default};
