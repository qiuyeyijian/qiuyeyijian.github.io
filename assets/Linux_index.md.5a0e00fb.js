import{_ as s,c as a,o as n,a as e}from"./app.1d503175.js";const A=JSON.parse('{"title":"Linux","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u5165\u95E8\u77E5\u8BC6","slug":"\u5165\u95E8\u77E5\u8BC6","link":"#\u5165\u95E8\u77E5\u8BC6","children":[{"level":3,"title":"systemd \u521D\u59CB\u5316\u8FDB\u7A0B","slug":"systemd-\u521D\u59CB\u5316\u8FDB\u7A0B","link":"#systemd-\u521D\u59CB\u5316\u8FDB\u7A0B","children":[]},{"level":3,"title":"\u5176\u4ED6","slug":"\u5176\u4ED6","link":"#\u5176\u4ED6","children":[]}]},{"level":2,"title":"\u8F6F\u4EF6\u7BA1\u7406","slug":"\u8F6F\u4EF6\u7BA1\u7406","link":"#\u8F6F\u4EF6\u7BA1\u7406","children":[{"level":3,"title":"RPM","slug":"rpm","link":"#rpm","children":[]},{"level":3,"title":"YUM","slug":"yum","link":"#yum","children":[]},{"level":3,"title":"DNF","slug":"dnf","link":"#dnf","children":[]}]},{"level":2,"title":"\u5F00\u542F SSH \u670D\u52A1","slug":"\u5F00\u542F-ssh-\u670D\u52A1","link":"#\u5F00\u542F-ssh-\u670D\u52A1","children":[]},{"level":2,"title":"CentOS \u9632\u706B\u5899\uFF0C\u5F00\u542F\u6307\u5B9A\u7AEF\u53E3","slug":"centos-\u9632\u706B\u5899\uFF0C\u5F00\u542F\u6307\u5B9A\u7AEF\u53E3","link":"#centos-\u9632\u706B\u5899\uFF0C\u5F00\u542F\u6307\u5B9A\u7AEF\u53E3","children":[]},{"level":2,"title":"GCC \u5B89\u88C5\u5347\u7EA7","slug":"gcc-\u5B89\u88C5\u5347\u7EA7","link":"#gcc-\u5B89\u88C5\u5347\u7EA7","children":[{"level":3,"title":"\u901A\u8FC7 yum \u5B89\u88C5\u9ED8\u8BA4\u7248\u672C","slug":"\u901A\u8FC7-yum-\u5B89\u88C5\u9ED8\u8BA4\u7248\u672C","link":"#\u901A\u8FC7-yum-\u5B89\u88C5\u9ED8\u8BA4\u7248\u672C","children":[]},{"level":3,"title":"\u5347\u7EA7 GCC","slug":"\u5347\u7EA7-gcc","link":"#\u5347\u7EA7-gcc","children":[]},{"level":3,"title":"\u91C7\u5751","slug":"\u91C7\u5751","link":"#\u91C7\u5751","children":[]}]},{"level":2,"title":"Reference & Recommend","slug":"reference-recommend","link":"#reference-recommend","children":[]}],"relativePath":"Linux/index.md"}'),l={name:"Linux/index.md"},t=e(`<h1 id="linux" tabindex="-1">Linux <a class="header-anchor" href="#linux" aria-hidden="true">#</a></h1><h2 id="\u5165\u95E8\u77E5\u8BC6" tabindex="-1">\u5165\u95E8\u77E5\u8BC6 <a class="header-anchor" href="#\u5165\u95E8\u77E5\u8BC6" aria-hidden="true">#</a></h2><h3 id="systemd-\u521D\u59CB\u5316\u8FDB\u7A0B" tabindex="-1">systemd \u521D\u59CB\u5316\u8FDB\u7A0B <a class="header-anchor" href="#systemd-\u521D\u59CB\u5316\u8FDB\u7A0B" aria-hidden="true">#</a></h3><p><a href="http://www.ruanyifeng.com/blog/2016/03/systemd-tutorial-commands.html" target="_blank" rel="noreferrer">http://www.ruanyifeng.com/blog/2016/03/systemd-tutorial-commands.html</a></p><p>\u6839\u636E Linux \u60EF\u4F8B\uFF0C\u5B57\u6BCD<code>d</code>\u662F\u5B88\u62A4\u8FDB\u7A0B\uFF08daemon\uFF09\u7684\u7F29\u5199\u3002</p><p>Linux \u7CFB\u7EDF\u7684\u5F00\u673A\u8FC7\u7A0B\u662F\u8FD9\u6837\u7684\uFF0C\u5373\u5148\u4ECE BIOS \u5F00\u59CB\uFF0C\u7136\u540E\u8FDB\u5165 Boot Loader\uFF0C\u518D\u52A0\u8F7D\u7CFB\u7EDF\u5185\u6838\uFF0C\u7136\u540E\u5185\u6838\u8FDB\u884C\u521D\u59CB\u5316\uFF0C\u6700\u540E\u542F\u52A8\u521D\u59CB\u5316\u8FDB\u7A0B\u3002\u521D\u59CB\u5316\u8FDB\u7A0B\u4F5C\u4E3A Linux \u7CFB\u7EDF\u542F\u52A8\u540E\u7684\u7B2C\u4E00\u4E2A\u6B63\u5F0F\u670D\u52A1\uFF0C\u5B83\u9700\u8981\u5B8C\u6210 Linux \u7CFB\u7EDF\u4E2D\u76F8\u5173\u7684\u521D\u59CB\u5316\u5DE5\u4F5C\uFF0C\u4E3A\u7528\u6237\u63D0\u4F9B\u5408\u9002\u7684\u5DE5\u4F5C\u73AF\u5883\u3002\u540C\u5B66\u4EEC\u53EF\u4EE5\u5C06\u521D\u59CB\u5316\u8FDB\u7A0B\u7C97\u72B7\u5730\u7406\u89E3\u6210\u4ECE\u6211\u4EEC\u6309\u4E0B\u5F00\u673A\u952E\u5230\u770B\u89C1\u7CFB\u7EDF\u684C\u9762\u7684\u8FD9\u4E2A\u8FC7\u7A0B\u3002\u521D\u59CB\u5316\u8FDB\u7A0B\u5B8C\u6210\u4E86\u4E00\u5927\u534A\u5DE5\u4F5C\u3002</p><p>\u7EA2\u5E3D RHEL 7/8 \u7CFB\u7EDF\u66FF\u6362\u6389\u4E86\u719F\u6089\u7684\u521D\u59CB\u5316\u8FDB\u7A0B\u670D\u52A1 System V init\uFF0C\u6B63\u5F0F\u91C7\u7528\u5168\u65B0\u7684 systemd \u521D\u59CB\u5316\u8FDB\u7A0B\u670D\u52A1\u3002</p><p>Linux \u7CFB\u7EDF\u5728\u542F\u52A8\u65F6\u8981\u8FDB\u884C\u5927\u91CF\u7684\u521D\u59CB\u5316\u5DE5\u4F5C\uFF0C\u6BD4\u5982\u6302\u8F7D\u6587\u4EF6\u7CFB\u7EDF\u548C\u4EA4\u6362\u5206\u533A\u3001\u542F\u52A8\u5404\u7C7B\u8FDB\u7A0B\u670D\u52A1\u7B49\uFF0C\u8FD9\u4E9B\u90FD\u53EF\u4EE5\u770B\u4F5C\u662F\u4E00\u4E2A\u4E00\u4E2A\u7684\u5355\u5143\uFF08unit\uFF09\uFF0Csystemd \u7528\u76EE\u6807\uFF08target\uFF09\u4EE3\u66FF\u4E86 System V init \u4E2D\u8FD0\u884C\u7EA7\u522B\u7684\u6982\u5FF5\u3002</p><p>\u670D\u52A1\u7684\u542F\u52A8\u3001\u91CD\u542F\u3001\u505C\u6B62\u3001\u91CD\u8F7D\u3001\u67E5\u770B\u72B6\u6001\u7B49\u5E38\u7528\u547D\u4EE4</p><table><thead><tr><th>\u8001\u7CFB\u7EDF\u547D\u4EE4</th><th>\u65B0\u7CFB\u7EDF\u547D\u4EE4</th><th>\u4F5C\u7528</th></tr></thead><tbody><tr><td>service foo start</td><td>systemctl start httpd</td><td>\u542F\u52A8\u670D\u52A1</td></tr><tr><td>service foo restart</td><td>systemctl restart httpd</td><td>\u91CD\u542F\u670D\u52A1</td></tr><tr><td>service foo stop</td><td>systemctl stop httpd</td><td>\u505C\u6B62\u670D\u52A1</td></tr><tr><td>service foo reload</td><td>systemctl reload httpd</td><td>\u91CD\u65B0\u52A0\u8F7D\u914D\u7F6E\u6587\u4EF6\uFF08\u4E0D\u7EC8\u6B62\u670D\u52A1\uFF09</td></tr><tr><td>service foo status</td><td>systemctl status httpd</td><td>\u67E5\u770B\u670D\u52A1\u72B6\u6001</td></tr></tbody></table><p>\u670D\u52A1\u5F00\u673A\u542F\u52A8\u3001\u4E0D\u542F\u52A8\u3001\u67E5\u770B\u5404\u7EA7\u522B\u4E0B\u670D\u52A1\u542F\u52A8\u72B6\u6001\u7B49\u5E38\u7528\u547D\u4EE4</p><table><thead><tr><th>\u8001\u7CFB\u7EDF\u547D\u4EE4</th><th>\u65B0\u7CFB\u7EDF\u547D\u4EE4</th><th>\u4F5C\u7528</th></tr></thead><tbody><tr><td>chkconfig foo on</td><td>systemctl enable httpd</td><td>\u5F00\u673A\u81EA\u52A8\u542F\u52A8</td></tr><tr><td>chkconfig foo off</td><td>systemctl disable httpd</td><td>\u5F00\u673A\u4E0D\u81EA\u52A8\u542F\u52A8</td></tr><tr><td>chkconfig foo</td><td>systemctl is-enabled httpd</td><td>\u67E5\u770B\u7279\u5B9A\u670D\u52A1\u662F\u5426\u4E3A\u5F00\u673A\u81EA\u542F\u52A8</td></tr><tr><td>chkconfig --list</td><td>systemctl list-unit-files --type=httpd</td><td>\u67E5\u770B\u5404\u4E2A\u7EA7\u522B\u4E0B\u670D\u52A1\u7684\u542F\u52A8\u4E0E\u7981\u7528\u60C5\u51B5</td></tr></tbody></table><h3 id="\u5176\u4ED6" tabindex="-1">\u5176\u4ED6 <a class="header-anchor" href="#\u5176\u4ED6" aria-hidden="true">#</a></h3><p>\u5728\u6267\u884C\u547D\u4EE4\u65F6\u5728\u672B\u5C3E\u6DFB\u52A0\u4E00\u4E2A&amp;\u7B26\u53F7\uFF0C\u8FD9\u6837\u547D\u4EE4\u5C06\u8FDB\u5165\u7CFB\u7EDF\u540E\u53F0\u6765\u6267\u884C\u3002</p><blockquote><p>\u5728 Linux \u7CFB\u7EDF\u4E2D\u7684\u547D\u4EE4\u53C2\u6570\u6709\u957F\u77ED\u683C\u5F0F\u4E4B\u5206\uFF0C\u957F\u683C\u5F0F\u548C\u957F\u683C\u5F0F\u4E4B\u95F4\u4E0D\u80FD\u5408\u5E76\uFF0C\u957F\u683C\u5F0F\u548C\u77ED\u683C\u5F0F\u4E4B\u95F4\u4E5F\u4E0D\u80FD\u5408\u5E76\uFF0C\u4F46\u77ED\u683C\u5F0F\u548C\u77ED\u683C\u5F0F\u4E4B\u95F4\u662F\u53EF\u4EE5\u5408\u5E76\u7684\uFF0C\u5408\u5E76\u540E\u4EC5\u4FDD\u7559\u4E00\u4E2A\u51CF\u53F7\uFF08-\uFF09\u5373\u53EF\u3002</p><p>\u53E6\u5916 ps \u547D\u4EE4\u53EF\u5141\u8BB8\u53C2\u6570\u4E0D\u52A0\u51CF\u53F7\uFF08-\uFF09\uFF0C\u56E0\u6B64\u53EF\u76F4\u63A5\u5199\u6210 ps aux \u7684\u6837\u5B50\u3002</p></blockquote><h4 id="\u540E\u7F00" tabindex="-1">\u540E\u7F00 <a class="header-anchor" href="#\u540E\u7F00" aria-hidden="true">#</a></h4><blockquote><p>\u5728 Windows \u7CFB\u7EDF\u4E2D\u6253\u5F00\u6587\u4EF6\u65F6\uFF0C\u4E00\u822C\u662F\u901A\u8FC7\u7528\u6237\u53CC\u51FB\u9F20\u6807\u5B8C\u6210\u7684\uFF0C\u7CFB\u7EDF\u4F1A\u81EA\u884C\u5224\u65AD\u7528\u6237\u53CC\u51FB\u7684\u6587\u4EF6\u662F\u4EC0\u4E48\u7C7B\u578B\uFF0C\u56E0\u6B64\u9700\u8981\u6709\u540E\u7F00\u8FDB\u884C\u533A\u522B\u3002\u800C Linux \u7CFB\u7EDF\u5219\u662F\u6839\u636E\u7528\u6237\u6267\u884C\u7684\u547D\u4EE4\u6765\u8C03\u7528\u6587\u4EF6\uFF0C\u4F8B\u5982\u6267\u884C cat \u547D\u4EE4\u67E5\u770B\u6587\u672C\uFF0C\u6267\u884C bash \u547D\u4EE4\u6267\u884C\u811A\u672C\u7B49\uFF0C\u6240\u4EE5\u4E5F\u5C31\u4E0D\u9700\u8981\u5F3A\u5236\u8BA9\u7528\u6237\u7ED9\u6587\u4EF6\u8BBE\u7F6E\u540E\u7F00\u4E86\u3002</p></blockquote><h4 id="\u7EC8\u7AEF\u663E\u793A\u4E0E\u5173\u95ED\u56DE\u663E" tabindex="-1">\u7EC8\u7AEF\u663E\u793A\u4E0E\u5173\u95ED\u56DE\u663E <a class="header-anchor" href="#\u7EC8\u7AEF\u663E\u793A\u4E0E\u5173\u95ED\u56DE\u663E" aria-hidden="true">#</a></h4><p>\u6CA1\u4EC0\u4E48\u7528</p><div class="language-bash"><button class="copy"></button><span class="lang">bash</span><pre><code><span class="line"><span style="color:#A6ACCD;">stty -echo   </span><span style="color:#676E95;">#\u7981\u6B62\u56DE\u663E</span></span>
<span class="line"><span style="color:#A6ACCD;">stty </span><span style="color:#82AAFF;">echo</span><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">#\u6253\u5F00\u56DE\u663E</span></span>
<span class="line"></span></code></pre></div><h2 id="\u8F6F\u4EF6\u7BA1\u7406" tabindex="-1">\u8F6F\u4EF6\u7BA1\u7406 <a class="header-anchor" href="#\u8F6F\u4EF6\u7BA1\u7406" aria-hidden="true">#</a></h2><h3 id="rpm" tabindex="-1">RPM <a class="header-anchor" href="#rpm" aria-hidden="true">#</a></h3><p>RPM\uFF08\u7EA2\u5E3D\u8F6F\u4EF6\u5305\u7BA1\u7406\u5668\uFF09\uFF0C\u6709\u70B9\u50CF Windows \u7CFB\u7EDF\u4E2D\u7684\u63A7\u5236\u9762\u677F\uFF0C\u4F1A\u5EFA\u7ACB\u7EDF\u4E00\u7684\u6570\u636E\u5E93\uFF0C\u8BE6\u7EC6\u8BB0\u5F55\u8F6F\u4EF6\u4FE1\u606F\u5E76\u80FD\u591F\u81EA\u52A8\u5206\u6790\u4F9D\u8D56\u5173\u7CFB\u3002</p><div class="language-bash"><button class="copy"></button><span class="lang">bash</span><pre><code><span class="line"><span style="color:#A6ACCD;">yum -y install \u5305\u540D\uFF08\u652F\u6301</span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;">\uFF09 \uFF1A\u81EA\u52A8\u9009\u62E9y\uFF0C\u5168\u81EA\u52A8</span></span>
<span class="line"><span style="color:#A6ACCD;">yum install \u5305\u540D\uFF08\u652F\u6301</span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;">\uFF09 \uFF1A\u624B\u52A8\u9009\u62E9y or n</span></span>
<span class="line"><span style="color:#A6ACCD;">yum remove \u5305\u540D\uFF08\u4E0D\u652F\u6301</span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;">\uFF09</span></span>
<span class="line"><span style="color:#A6ACCD;">rpm -e \u5305\u540D\uFF08\u4E0D\u652F\u6301</span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;">\uFF09\uFF1A\u5378\u8F7Drpm\u5305</span></span>
<span class="line"><span style="color:#A6ACCD;">rpm -ivh example.rpm \u5B89\u88C5 example.rpm \u5305\u5E76\u5728\u5B89\u88C5\u8FC7\u7A0B\u4E2D\u663E\u793A\u6B63\u5728\u5B89\u88C5\u7684\u6587\u4EF6\u4FE1\u606F\u53CA\u5B89\u88C5\u8FDB\u5EA6</span></span>
<span class="line"></span></code></pre></div><h3 id="yum" tabindex="-1">YUM <a class="header-anchor" href="#yum" aria-hidden="true">#</a></h3><p>\u5C3D\u7BA1 RPM \u80FD\u591F\u5E2E\u52A9\u7528\u6237\u67E5\u8BE2\u8F6F\u4EF6\u4E4B\u95F4\u7684\u4F9D\u8D56\u5173\u7CFB\uFF0C\u4F46\u95EE\u9898\u8FD8\u662F\u8981\u8FD0\u7EF4\u4EBA\u5458\u81EA\u5DF1\u6765\u89E3\u51B3\uFF0C\u800C\u6709\u4E9B\u5927\u578B\u8F6F\u4EF6\u53EF\u80FD\u4E0E\u6570\u5341\u4E2A\u7A0B\u5E8F\u90FD\u6709\u4F9D\u8D56\u5173\u7CFB\uFF0C\u5728\u8FD9\u79CD\u60C5\u51B5\u4E0B\u5B89\u88C5\u8F6F\u4EF6\u4F9D\u7136\u5F88\u7E41\u7410\u3002</p><p>Yum \u8F6F\u4EF6\u4ED3\u5E93\u4FBF\u662F\u4E3A\u4E86\u8FDB\u4E00\u6B65\u964D\u4F4E\u8F6F\u4EF6\u5B89\u88C5\u96BE\u5EA6\u548C\u590D\u6742\u5EA6\u800C\u8BBE\u8BA1\u7684\u6280\u672F\u3002Yum \u8F6F\u4EF6\u4ED3\u5E93\u53EF\u4EE5\u6839\u636E\u7528\u6237\u7684\u8981\u6C42\u5206\u6790\u51FA\u6240\u9700\u8F6F\u4EF6\u5305\u53CA\u5176\u76F8\u5173\u7684\u4F9D\u8D56\u5173\u7CFB\uFF0C\u7136\u540E\u81EA\u52A8\u4ECE\u670D\u52A1\u5668\u4E0B\u8F7D\u8F6F\u4EF6\u5305\u5E76\u5B89\u88C5\u5230\u7CFB\u7EDF\u3002</p><p><strong>RPM \u662F\u4E3A\u4E86\u7B80\u5316\u5B89\u88C5\u590D\u6742\u5EA6\uFF0C\u800C YUM \u8F6F\u4EF6\u4ED3\u5E93\u662F\u4E3A\u4E86\u89E3\u51B3\u8F6F\u4EF6\u5305\u4E4B\u95F4\u7684\u4F9D\u8D56\u5173\u7CFB\u3002</strong></p><h3 id="dnf" tabindex="-1">DNF <a class="header-anchor" href="#dnf" aria-hidden="true">#</a></h3><p>DNF \u5B9E\u9645\u4E0A\u5C31\u662F\u89E3\u51B3\u4E86\u4E0A\u8FF0\u95EE\u9898\u7684 Yum \u8F6F\u4EF6\u4ED3\u5E93\u7684\u63D0\u5347\u7248\uFF0C\u884C\u4E1A\u5185\u79F0\u4E4B\u4E3A Yum v4 \u7248\u672C\u3002</p><p>\u4F5C\u4E3A Yum \u8F6F\u4EF6\u4ED3\u5E93 v3 \u7248\u672C\u7684\u63A5\u66FF\u8005\uFF0CDNF \u7279\u522B\u53CB\u597D\u5730\u7EE7\u627F\u4E86\u539F\u6709\u7684\u547D\u4EE4\u683C\u5F0F\uFF0C\u4E14\u4F7F\u7528\u4E60\u60EF\u4E0A\u4E5F\u4FDD\u6301\u4E86\u4E00\u81F4\u3002\u5927\u5BB6\u4E0D\u7528\u62C5\u5FC3\u4E0D\u4F1A\u64CD\u4F5C\u3002</p><p>\u4EE5\u524D\uFF0C\u5B89\u88C5\u8F6F\u4EF6\u7528\u7684\u547D\u4EE4\u662F\u201Cyum install \u8F6F\u4EF6\u5305\u540D\u79F0\u201D\uFF0C\u90A3\u4E48\u73B0\u5728\u5219\u662F\u201Cdnf install \u8F6F\u4EF6\u5305\u540D\u79F0\u201D\uFF08\u4E5F\u5C31\u662F\u8BF4\uFF0C\u5C06 yum \u66FF\u6362\u6210 dnf \u5373\u53EF\uFF09\u3002</p><h2 id="\u5F00\u542F-ssh-\u670D\u52A1" tabindex="-1">\u5F00\u542F SSH \u670D\u52A1 <a class="header-anchor" href="#\u5F00\u542F-ssh-\u670D\u52A1" aria-hidden="true">#</a></h2><h4 id="_1-\u5B89\u88C5-openssh-server" tabindex="-1">1. \u5B89\u88C5 openssh-server <a class="header-anchor" href="#_1-\u5B89\u88C5-openssh-server" aria-hidden="true">#</a></h4><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">yum install -y openssl openssh-server</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h4 id="_2-\u4FEE\u6539\u914D\u7F6E\u6587\u4EF6" tabindex="-1">2. \u4FEE\u6539\u914D\u7F6E\u6587\u4EF6 <a class="header-anchor" href="#_2-\u4FEE\u6539\u914D\u7F6E\u6587\u4EF6" aria-hidden="true">#</a></h4><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">vim /etc/ssh/sshd_config</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u4FEE\u6539\u4EE5\u4E0B\u51E0\u4E2A\u914D\u7F6E\uFF0C\u8FD9\u51E0\u4E2A\u914D\u7F6E\u4E0D\u518D\u4E00\u8D77\uFF0C\u9700\u8981\u627E\u4E00\u4E0B</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">#Port 22						//\u9ED8\u8BA4ssh\u7AEF\u53E322\uFF0C\u53EF\u4EE5\u4FEE\u6539\uFF0C\u4F46\u8981\u5C06\u524D\u9762\u7684\u201C#\u201D\u53BB\u6389</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">PermitRootLogin yes				//\u5141\u8BB8root \u7528\u6237\u767B\u5F55</span></span>
<span class="line"><span style="color:#A6ACCD;">RSAAuthentication yes      #\u5F00\u542F\u79C1\u94A5\u9A8C\u8BC1</span></span>
<span class="line"><span style="color:#A6ACCD;">PubkeyAuthentication yes   #\u5F00\u542F\u516C\u94A5\u9A8C\u8BC1</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h4 id="_3-\u6CE8\u518C-ssh-\u670D\u52A1\uFF0C\u5F00\u673A\u542F\u52A8" tabindex="-1">3. \u6CE8\u518C ssh \u670D\u52A1\uFF0C\u5F00\u673A\u542F\u52A8 <a class="header-anchor" href="#_3-\u6CE8\u518C-ssh-\u670D\u52A1\uFF0C\u5F00\u673A\u542F\u52A8" aria-hidden="true">#</a></h4><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">systemctl start sshd</span></span>
<span class="line"><span style="color:#A6ACCD;">systemctl enable sshd</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h4 id="_4-\u521B\u5EFA\u79D8\u94A5\u5BF9" tabindex="-1">4. \u521B\u5EFA\u79D8\u94A5\u5BF9 <a class="header-anchor" href="#_4-\u521B\u5EFA\u79D8\u94A5\u5BF9" aria-hidden="true">#</a></h4><div class="language-bash"><button class="copy"></button><span class="lang">bash</span><pre><code><span class="line"><span style="color:#82AAFF;">cd</span><span style="color:#A6ACCD;"> /root</span></span>
<span class="line"><span style="color:#A6ACCD;">ssh-keygen -t rsa -P </span><span style="color:#89DDFF;">&#39;&#39;</span></span>
<span class="line"></span></code></pre></div><p>ps:\u5982\u679C\u7ED9\u5176\u4ED6\u7528\u6237\u5F00\u542F ssh, \u5219\u9700\u8981\u6CE8\u610F.ssh \u6743\u9650\u95EE\u9898</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">chmod 700 .ssh</span></span>
<span class="line"><span style="color:#A6ACCD;">chmod 600 .ssh/*</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h4 id="_5-\u4FDD\u5B58\u79D8\u94A5" tabindex="-1">5.\u4FDD\u5B58\u79D8\u94A5 <a class="header-anchor" href="#_5-\u4FDD\u5B58\u79D8\u94A5" aria-hidden="true">#</a></h4><div class="language-bash"><button class="copy"></button><span class="lang">bash</span><pre><code><span class="line"><span style="color:#82AAFF;">cd</span><span style="color:#A6ACCD;"> .ssh </span><span style="color:#89DDFF;">&amp;&amp;</span><span style="color:#A6ACCD;"> ls   </span><span style="color:#676E95;"># \u4F1A\u53D1\u73B0\u4E0B\u9762\u51E0\u4E2A\u6587\u4EF6</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># id_rsa			//\u79C1\u94A5</span></span>
<span class="line"><span style="color:#676E95;"># id_rsa.pub		//\u516C\u94A5</span></span>
<span class="line"></span></code></pre></div><p>\u5C06\u516C\u94A5\u4FDD\u5B58\u5230 authorized_keys \u4E2D</p><div class="language-bash"><button class="copy"></button><span class="lang">bash</span><pre><code><span class="line"><span style="color:#A6ACCD;">cat id_rsa.pub </span><span style="color:#89DDFF;">&gt;&gt;</span><span style="color:#A6ACCD;"> authorized_keys</span></span>
<span class="line"><span style="color:#676E95;"># authorized_keys\uFF1A\u5B58\u653E\u516C\u94A5\u7684\u6587\u4EF6\uFF0C\u4EE5\u540E\u5982\u679C\u8FD8\u6709\u5176\u4ED6\u4EBA\u9700\u8981\u8FDE\u63A5\uFF0C\u5219\u5C06\u4ED6\u4EEC\u751F\u6210\u7684\u516C\u94A5\u4FDD\u5B58\u5230\u91CC\u9762</span></span>
<span class="line"></span></code></pre></div><p>\u79C1\u94A5\u8BF7\u4FDD\u5B58\u5230\u81EA\u5DF1\u7684\u7535\u8111\u4E2D\uFF0C\u6BD4\u5982 Windows \u53EF\u4EE5\u4FDD\u5B58\u5230\u7528\u6237\u76EE\u5F55\u7684 <code>.ssh</code> \u76EE\u5F55\u4E0B\uFF0C\u7136\u540E\u5220\u9664</p><p>\u5982\u679C\u4E0D\u65B9\u4FBF\u4E0B\u8F7D\uFF0Ccat \u547D\u4EE4\u53EF\u4EE5\u67E5\u770B\u5185\u5BB9\uFF0C\u7136\u540E\u590D\u5236\u4FDD\u5B58</p><h2 id="centos-\u9632\u706B\u5899\uFF0C\u5F00\u542F\u6307\u5B9A\u7AEF\u53E3" tabindex="-1">CentOS \u9632\u706B\u5899\uFF0C\u5F00\u542F\u6307\u5B9A\u7AEF\u53E3 <a class="header-anchor" href="#centos-\u9632\u706B\u5899\uFF0C\u5F00\u542F\u6307\u5B9A\u7AEF\u53E3" aria-hidden="true">#</a></h2><div class="language-bash"><button class="copy"></button><span class="lang">bash</span><pre><code><span class="line"><span style="color:#A6ACCD;">firewall-cmd --state		</span><span style="color:#676E95;"># \u9996\u5148\u67E5\u770B\u9632\u706B\u5899\u72B6\u6001</span></span>
<span class="line"><span style="color:#A6ACCD;">systemctl start firewalld		</span><span style="color:#676E95;"># \u5F00\u542F\u9632\u706B\u5899</span></span>
<span class="line"><span style="color:#A6ACCD;">systemctl </span><span style="color:#82AAFF;">enable</span><span style="color:#A6ACCD;"> firewalld		</span><span style="color:#676E95;"># \u8BBE\u7F6E\u5F00\u673A\u81EA\u542F\uFF1A</span></span>
<span class="line"><span style="color:#A6ACCD;">systemctl restart firewalld		</span><span style="color:#676E95;"># \u91CD\u65B0\u542F\u52A8\u9632\u706B\u5899</span></span>
<span class="line"><span style="color:#A6ACCD;">systemctl stop firewald			</span><span style="color:#676E95;"># \u5173\u95ED\u9632\u706B\u5899</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">firewall-cmd --zone=public --add-port=80/tcp --permanent</span></span>
<span class="line"><span style="color:#A6ACCD;">firewall-cmd --zone=public --remove-port=80/tcp --permanent</span></span>
<span class="line"><span style="color:#A6ACCD;">firewall-cmd --list-ports</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">--zone </span><span style="color:#676E95;">#\u4F5C\u7528\u57DF</span></span>
<span class="line"><span style="color:#A6ACCD;">--add-port=80/tcp  </span><span style="color:#676E95;">#\u6DFB\u52A0\u7AEF\u53E3\uFF0C\u683C\u5F0F\u4E3A\uFF1A\u7AEF\u53E3/\u901A\u8BAF\u534F\u8BAE</span></span>
<span class="line"><span style="color:#A6ACCD;">--permanent \xA0 </span><span style="color:#676E95;">#\u6C38\u4E45\u751F\u6548\uFF0C\u6CA1\u6709\u6B64\u53C2\u6570\u91CD\u542F\u540E\u5931\u654812345678910</span></span>
<span class="line"></span></code></pre></div><h2 id="gcc-\u5B89\u88C5\u5347\u7EA7" tabindex="-1">GCC \u5B89\u88C5\u5347\u7EA7 <a class="header-anchor" href="#gcc-\u5B89\u88C5\u5347\u7EA7" aria-hidden="true">#</a></h2><p><a href="http://c.biancheng.net/view/7933.html" target="_blank" rel="noreferrer">http://c.biancheng.net/view/7933.html</a></p><h3 id="\u901A\u8FC7-yum-\u5B89\u88C5\u9ED8\u8BA4\u7248\u672C" tabindex="-1">\u901A\u8FC7 yum \u5B89\u88C5\u9ED8\u8BA4\u7248\u672C <a class="header-anchor" href="#\u901A\u8FC7-yum-\u5B89\u88C5\u9ED8\u8BA4\u7248\u672C" aria-hidden="true">#</a></h3><div class="language-bash"><button class="copy"></button><span class="lang">bash</span><pre><code><span class="line"><span style="color:#A6ACCD;">yum -y install gcc</span></span>
<span class="line"><span style="color:#A6ACCD;">yum -y install gcc-c++</span></span>
<span class="line"></span></code></pre></div><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">gcc -v		# \u9A8C\u8BC1\u662F\u5426\u5B89\u88C5\u6210\u529F</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="\u5347\u7EA7-gcc" tabindex="-1">\u5347\u7EA7 GCC <a class="header-anchor" href="#\u5347\u7EA7-gcc" aria-hidden="true">#</a></h3><p>1\u3001\u4E0B\u8F7D\u6E90\u7801\u5E76\u89E3\u538B</p><div class="language-bash"><button class="copy"></button><span class="lang">bash</span><pre><code><span class="line"><span style="color:#A6ACCD;">wget https://mirrors.tuna.tsinghua.edu.cn/gnu/gcc/gcc-11.2.0/gcc-11.2.0.tar.gz</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">tar -zxvf gcc-11.2.0.tar.gz</span></span>
<span class="line"></span></code></pre></div><p>2\u3001\u4E0B\u8F7D\u4F9D\u8D56\u53CA\u914D\u7F6E\u6587\u4EF6</p><div class="language-bash"><button class="copy"></button><span class="lang">bash</span><pre><code><span class="line"><span style="color:#A6ACCD;">yum -y install bzip2 </span><span style="color:#676E95;">#\u5DF2\u5B89\u88C5\u53EF\u4EE5\u8DF3\u8FC7\u8FD9\u4E00\u6B65</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">cd</span><span style="color:#A6ACCD;"> gcc-11.2.0</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">./contrib/download_prerequisites</span></span>
<span class="line"></span></code></pre></div><p>3\u3001\u914D\u7F6E</p><div class="language-bash"><button class="copy"></button><span class="lang">bash</span><pre><code><span class="line"><span style="color:#A6ACCD;">./configure -enable-checking=release -enable-languages=c,c++ -disable-multilib</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">#\u2013enable-languages\u8868\u793A\u4F60\u8981\u8BA9\u4F60\u7684gcc\u652F\u6301\u90A3\u4E9B\u8BED\u8A00\uFF0C</span></span>
<span class="line"><span style="color:#676E95;">#\u2013disable-multilib\u4E0D\u751F\u6210\u7F16\u8BD1\u4E3A\u5176\u4ED6\u5E73\u53F0\u53EF\u6267\u884C\u4EE3\u7801\u7684\u4EA4\u53C9\u7F16\u8BD1\u5668\u3002</span></span>
<span class="line"><span style="color:#676E95;">#\u2013disable-checking\u751F\u6210\u7684\u7F16\u8BD1\u5668\u5728\u7F16\u8BD1\u8FC7\u7A0B\u4E2D\u4E0D\u505A\u989D\u5916\u68C0\u67E5\uFF0C</span></span>
<span class="line"><span style="color:#676E95;">#\u4E5F\u53EF\u4EE5\u4F7F\u7528*\u2013enable-checking=xxx*\u6765\u589E\u52A0\u4E00\u4E9B\u68C0\u67E5</span></span>
<span class="line"></span></code></pre></div><p>4\u3001\u7F16\u8BD1\u5B89\u88C5</p><div class="language-bash"><button class="copy"></button><span class="lang">bash</span><pre><code><span class="line"><span style="color:#A6ACCD;">make </span><span style="color:#89DDFF;">&amp;&amp;</span><span style="color:#A6ACCD;"> make install</span></span>
<span class="line"><span style="color:#676E95;">#\u8FD9\u4E00\u6B65\u9700\u8981\u65F6\u95F4\u975E\u5E38\u4E45 \u53EF\u4EE5\u4F7F\u7528 make -j 4 \u8BA9make\u6700\u591A\u8FD0\u884C\u56DB\u4E2A\u7F16\u8BD1\u547D\u4EE4\u540C\u65F6\u8FD0\u884C\uFF0C\u52A0\u5FEB\u7F16\u8BD1\u901F\u5EA6\uFF08\u5EFA\u8BAE\u4E0D\u8981\u8D85\u8FC7CPU\u6838\u5FC3\u6570\u91CF\u76842\u500D\uFF09</span></span>
<span class="line"></span></code></pre></div><h3 id="\u91C7\u5751" tabindex="-1">\u91C7\u5751 <a class="header-anchor" href="#\u91C7\u5751" aria-hidden="true">#</a></h3><p>\u4E0D\u8981\u5FD8\u8BB0\u5B89\u88C5<code>gcc-c++</code>\u5426\u5219\u4F1A\u62A5\u4E0D\u652F\u6301 c++11</p><div class="language-bash"><button class="copy"></button><span class="lang">bash</span><pre><code><span class="line"><span style="color:#676E95;"># https://stackoverflow.com/questions/37806888/configure-error-a-compiler-with-support-for-c11-language-features-is-required</span></span>
<span class="line"><span style="color:#A6ACCD;">yum install gcc-c++</span></span>
<span class="line"></span></code></pre></div><h2 id="reference-recommend" tabindex="-1">Reference &amp; Recommend <a class="header-anchor" href="#reference-recommend" aria-hidden="true">#</a></h2><p>\u300ALinux \u8BE5\u8FD9\u4E48\u5B66\uFF08\u7B2C\u4E8C\u7248\uFF09\u300B</p><p>Operating Systems: Three Easy Pieces</p><p>Linux \u9AD8\u6027\u80FD\u670D\u52A1\u5668\u7F16\u7A0B</p><p>Linux \u591A\u7EBF\u7A0B\u670D\u52A1\u7AEF\u7F16\u7A0B\uFF1A\u4F7F\u7528 muduo C++\u7F51\u7EDC\u5E93</p><p>Unix \u73AF\u5883\u9AD8\u7EA7\u7F16\u7A0B</p>`,76),p=[t];function c(o,r,i,d,h,y){return n(),a("div",null,p)}const C=s(l,[["render",c]]);export{A as __pageData,C as default};