import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-CN',
  title: '我的博客',
  description: '极简工程师风格技术博客',

  cleanUrls: true,
  lastUpdated: true,

  themeConfig: {
    logo: '/logo.svg',

    nav: [
      { text: '首页', link: '/' },
      { text: '文章', link: '/posts/' },
      { text: '标签', link: '/posts/tags' },
      { text: '关于', link: '/about' }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/' }
    ],

    outline: {
      level: [2, 3],
      label: '目录'
    },

    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    },

    lastUpdated: {
      text: '最后更新于'
    },

    search: {
      provider: 'local'
    },

    footer: {
      message: 'Powered by VitePress',
      copyright: 'Copyright © 2026'
    },

    sidebar: {
      '/posts/': [
        {
          text: '文章',
          items: [
            { text: '文章归档', link: '/posts/' },
            { text: '标签', link: '/posts/tags' },
            { text: '第一篇文章', link: '/posts/post-1' },
            { text: '第二篇文章', link: '/posts/post-2' }
          ]
        }
      ]
    }
  }
})