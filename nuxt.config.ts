// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  extends: [process.env.NUXT_UI_PRO_PATH || '@nuxt/ui-pro'],
  modules: [
    '@nuxt/content',
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/ui',
    '@nuxt/fonts',
    '@nuxthq/studio',
    '@vueuse/nuxt',
    'nuxt-og-image',
    '@nuxtjs/partytown'
    
  ],
  partytown: {
    forward: ['$plausible', '$plausible.push'],
  },
  app: {
    head: {
      script: [
        { innerHTML: 'window.$plausible = [];' },
        // Update this
        {
          src: 'https://plausible.io/js/script.js',
          defer: true,
          type: 'text/partytown',
          'data-domain': 'rightbraingroup',
        },
      ],
    },
  },
  hooks: {
    // Define `@nuxt/ui` components as global to use them in `.md` (feel free to add those you need)
    'components:extend': (components) => {
      const globals = components.filter(c => ['UButton'].includes(c.pascalName))

      globals.forEach(c => c.global = true)
    }
  },
  colorMode: {
    preference: 'light', // default value of $colorMode.preference
  },
  css: ['/assets/css/main.css'],
  ui: {
    icons: ['heroicons', 'simple-icons']
  },
  routeRules: {
    '/api/search.json': { prerender: true },
    '/docs': { redirect: '/docs/getting-started', prerender: false }
  },
  // supabase: {
  //   redirect: false
  // },
  devtools: {
    enabled: false
  },
  typescript: {
    strict: false
  },
  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs'
      }
    }
  }
})