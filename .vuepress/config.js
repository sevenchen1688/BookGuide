module.exports = {
  "title": "程序员读书指南",
  "description": "程序员读书指南",
  locales: {
    '/': {
      lang: 'zh-CN',
    }
  },
  base: '/',
  port: 8092,
  dest: 'dist',
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "/favicon.ico"
      }
    ],
    [
      "meta",
      {
        "name": "viewport",
        "content": "width=device-width,initial-scale=1,user-scalable=no"
      }
    ]
  ],
  "theme": "reco",
  "themeConfig": {
    "nav": [
      {
        "text": "首页",
        "link": "/",
        "icon": "reco-home"
      },
      {
        "text": "书库",
        "icon": "reco-blog",
        "link": "/docs/books/2023/2023读书计划.md"
      },
      {
        "text": "时间轴",
        "link": "/timeline/",
        "icon": "reco-date"
      },
      {
        "text": "Contact",
        "items": [
          {
            "text": "GitHub",
            "link": "https://github.com/sevenchen1688",
            "icon": "reco-github"
          }
        ]
      }
    ],
    sidebar: {
      '/docs/books/': [
        {
          title: "2023",
          collapsable: false,
          sidebarDepth: 0,
          children: [
            '/docs/books/2023/2023读书计划.md',
          ]
        },
      ]
    },
    subSidebar: 'auto',
    sidebarDepth: 0,
    "type": "blog",
    "blogConfig": {
      "category": {
        "location": 3,
        "text": "分类"
      },
      "tag": {
        "location": 4,
        "text": "标签"
      }
    },
    "friendLink": [
      {
        "title": "代码实验室",
        // "desc": "Enjoy when you can, and endure when you must.",
        // "email": "1156743527@qq.com",
        "link": "https://codelab7.cn"
      },
      // {
      //   "title": "Seven的读书博客",
      //   "desc": "A simple and beautiful vuepress Blog & Doc theme.",
      //   "avatar": "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
      //   "link": "https://vuepress-theme-reco.recoluan.com"
      // }
    ],
    "logo": "/logo.png",
    "search": true,
    "searchMaxSuggestions": 10,
    "lastUpdated": "Last Updated",
    "author": "Seven",
    "authorAvatar": "/avatar.png",
    // 搜索设置
    search: true,
    searchMaxSuggestions: 20,
    // 备案
    record: '粤ICP备2023020946号-1',
    recordLink: 'https://beian.miit.gov.cn/',
    cyberSecurityRecord: '粤公网安备 44011102003343号',
    cyberSecurityLink: 'http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=44011102003343',
    // 项目开始时间，只填写年份
    startYear: '2023',
    noFoundPageByTencent: false
  },
  "markdown": {
    "lineNumbers": true
  }
}