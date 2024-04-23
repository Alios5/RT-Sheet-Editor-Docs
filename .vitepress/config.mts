import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "RT Sheet Editor Documentation",
  description: "Documentation",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Docs', link: '/What-is-this' }
    ],

    sidebar: [
      {
        text: 'Introduction',
        items: [
          { text: 'RT Sheet Editor', link: '/What-is-this' },
          { text: 'Getting Started', link: '/Getting-stardet' }
        ]
      },
      {
        text: 'Interface',
        items:[
          {text: 'Home page', link: '/Home'},
          {text: 'Sheet editor page', link: '/Sheet-editor'}
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
