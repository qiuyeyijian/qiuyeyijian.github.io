import{_ as e,o as s,c as a,O as t}from"./chunks/framework.4afe7240.js";const m=JSON.parse('{"title":"VSCode","description":"","frontmatter":{},"headers":[],"relativePath":"articles/Other/vscode.md","filePath":"articles/Other/vscode.md"}'),o={name:"articles/Other/vscode.md"},n=t(`<h1 id="vscode" tabindex="-1">VSCode <a class="header-anchor" href="#vscode" aria-label="Permalink to &quot;VSCode&quot;">​</a></h1><h2 id="no-matching-host-key-type-found-their-offer-ssh-rsa报错信息具体方法" tabindex="-1">no matching host key type found. Their offer: ssh-rsa报错信息具体方法 <a class="header-anchor" href="#no-matching-host-key-type-found-their-offer-ssh-rsa报错信息具体方法" aria-label="Permalink to &quot;no matching host key type found. Their offer: ssh-rsa报错信息具体方法&quot;">​</a></h2><p>修改在<code>~/.ssh</code>目录下的config文件，添加以下内容</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">Host *</span></span>
<span class="line"><span style="color:#A6ACCD;">HostkeyAlgorithms +ssh-rsa</span></span>
<span class="line"><span style="color:#A6ACCD;">PubkeyAcceptedKeyTypes +ssh-rsa</span></span></code></pre></div>`,4),r=[n];function c(i,h,l,d,p,_){return s(),a("div",null,r)}const u=e(o,[["render",c]]);export{m as __pageData,u as default};