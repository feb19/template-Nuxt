module.exports = {
  modules: [
    ['@nuxtjs/pwa'],
    ['@nuxtjs/sitemap'],
    ['nuxt-sass-resources-loader', [
      'assets/scss/variables/__imports.scss'
    ]],
    // ['@nuxtjs/google-tag-manager', { id: 'GTM-*******' }],
  ],
  css: [
    { src: '~assets/scss/main.scss', lang: 'sass' },
  ],
  head: {
    title: '**********',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '***********' },
      { hid: 'og:image', property: 'og:image', content: 'https://*******.com/og.png' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ],
  },
  loading: { color: '#dadada' },
  // @nuxtjs/pwa
  manifest: {
    short_name: 'nuxt oreore',
    name: 'nuxt-oreore-starter-kit',
    lang: 'ja',
    background_color: '#dadada',
    theme_color: '#dadada',
    orientation: 'portrait',
  },
  // @nuxtjs/sitemap
  sitemap: {
    hostname: 'https://*******.com',
    generate: true,
    gzip: true,
    exclude: ['/404'],
  },
}
