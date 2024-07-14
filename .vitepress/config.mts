import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "docs.solidimage.dev",
  description: "API Documentation for solidimage.dev",
  appearance: 'force-dark',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [],
    search: {
      provider: 'local'
    },
    sidebar: [
      {
        text: 'API',
        items: [
          { text: 'Getting started', link: '/getting-started' },
          { text: 'Request', link: '/request' },
          { text: 'Error codes', link: '/errors' },
        ]
      },
      {
        text: 'Examples',
        items: [
          { text: 'cURL', link: '/examples/curl' },
          { text: 'Ruby on Rails', link: '/examples/ruby-on-rails' },
          { text: 'NextJS', link: '/examples/nextjs' },
          { text: '... request or contribute', link: '/examples/contribute' },
        ]
      }
    ],
  },
  lastUpdated: true
})
