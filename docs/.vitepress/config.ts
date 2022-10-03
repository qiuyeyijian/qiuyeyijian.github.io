export default {
  title: "秋叶依剑",
  description: "秋叶依剑的官方博客",
  ignoreDeadLinks: true,

  themeConfig: {
    logo: "/logo.png",
    lastUpdatedText: "Updated Date",
    outline: "deep",

    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/qiuyeyijian/qiuyeyijian.github.io",
      },
    ],

    nav: [
      { text: "Linux", link: "/Linux/", activeMatch: "/Linux/" },
      { text: "计算机基础", link: "/Computer/", activeMatch: "/Computer/" },
      {
        text: "编程语言",
        activeMatch: "/Language/",
        items: [
          { text: "CPP", link: "/Language/CPP/" },
          { text: "Python", link: "/Language/Python/" },
          { text: "JavaScript", link: "/Language/JavaScript/" },
          { text: "TypeScript", link: "/Language/TypeScript/" },
        ],
      },
      {
        text: "工具&效率",
        activeMatch: "/Tools/",
        items: [
          { text: "Docker", link: "/Tools/Docker/" },
          { text: "Markdown", link: "/Tools/Markdown/" },
        ],
      },
    ],
    sidebar: {
      "/Linux/": [
        {
          text: "Linux基础",
          collapsible: true,
          collapsed: true,
          items: [
            { text: "Index", link: "/Linux/" },
            { text: "GCC和GDB", link: "/Linux/gcc-and-gdb" },
            { text: "动态库和静态库", link: "/Linux/lib" },
            { text: "计划任务 ", link: "/Linux/scheduled-tasks" },
            { text: "Sed", link: "/Linux/sed" },
            { text: "用户管理", link: "/Linux/user-management" },
            { text: "磁盘管理", link: "/Linux/disk-management" },
          ],
        },
      ],
    },

    docFooter: {
      prev: "Pagina prior",
      next: "Proxima pagina",
    },
    editLink: {
      pattern:
        "https://github.com/qiuyeyijian/qiuyeyijian.github.io/edit/main/docs/:path",
      text: "Edit this page on GitHub",
    },

    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2022 秋叶依剑",
    },
  },
};
