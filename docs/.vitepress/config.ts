import { getSidebarData, getNavData } from "./navSidebarUtil";

export default {
  title: "秋叶依剑",
  titleTemplate: "秋叶依剑的官方博客",
  description: "秋叶依剑的官方博客",
  ignoreDeadLinks: true,

  head: [["link", { rel: "icon", href: "/logo.png" }]],

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
    nav: getNavData({enableDirActiveMatch: true}),
    sidebar: getSidebarData(),

    // nav: [
    //   { text: "Linux", link: "/Linux/", activeMatch: "/Linux/" },
    //   { text: "计算机基础", link: "/Computer/", activeMatch: "/Computer/" },
    //   {
    //     text: "编程语言",
    //     activeMatch: "/Language/",
    //     items: [{ text: "CPP", link: "/Language/CPP/" }],
    //   },
    //   {
    //     text: "工具&效率",
    //     activeMatch: "/Tools/",
    //     items: [
    //       { text: "Git", link: "/Tools/Git/" },
    //       { text: "Docker", link: "/Tools/Docker/" },
    //     ],
    //   },
    // ],
    // sidebar: {
    //   "/Linux/": [
    //     {
    //       text: "Linux基础",
    //       collapsible: true,
    //       collapsed: true,
    //       items: [
    //         { text: "Index", link: "/Linux/" },
    //         { text: "GCC和GDB", link: "/Linux/gcc-and-gdb" },
    //         { text: "动态库和静态库", link: "/Linux/lib" },
    //         { text: "计划任务 ", link: "/Linux/scheduled-tasks" },
    //         { text: "Sed", link: "/Linux/sed" },
    //         { text: "用户管理", link: "/Linux/user-management" },
    //         { text: "磁盘管理", link: "/Linux/disk-management" },
    //       ],
    //     },
    //   ],
    //   "/Language/CPP/": [
    //     {
    //       text: "CPP11",
    //       collapsible: true,
    //       collapsed: true,
    //       items: [
    //         { text: "Index", link: "/Language/CPP/CPP11/" },
    //         { text: "多线程", link: "/Language/CPP/CPP11/multi-thread" },
    //         { text: "智能指针", link: "/Language/CPP/CPP11/smart-pointer" },
    //       ],
    //     },
    //     {
    //       text: "Gtest",
    //       collapsible: true,
    //       collapsed: true,
    //       items: [{ text: "Index", link: "/Language/CPP/Gtest/" }],
    //     },
    //   ],
    // },

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
