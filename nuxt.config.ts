export default defineNuxtConfig({
    modules: ['@nuxtjs/i18n'],

    compatibilityDate: '2025-07-15',
    devtools: { enabled: false },
    srcDir : 'app',
    
    app : 
    {
        head : 
        {
            title: "2x10's Portfolio",
            script: 
            [
                { src: "/scripts/script.js" }
            ],

            charset : 'utf-8',
            viewport : 'width=device-width, initial-scale=1, maximum-scale=1',

            meta : 
            [
                { property: 'og:title', content: "2x10's Portfolio" },
                { property: 'og:description', content: "Voidence Network" },
                { property: 'og:type', content: "website" },
                { property: 'theme-color', content: "#FF00FF" },
            ]
        }
    },

    css : 
    [
        '~/assets/css/global.scss',
        '~/assets/css/variables.scss'
    ],

    components: [
        {
          path: '~/components',
          pathPrefix: false,    
          global: true,
          
        },
    ],

    i18n: 
    {
        strategy: 'prefix',  

        locales: 
        [
            { code: 'en', iso: 'en-US', file: 'en.json' },
            { code: 'de', iso: 'de-DE', file: 'de.json' }
        ],

        defaultLocale: 'en',

        langDir: 'locales/',

        detectBrowserLanguage: 
        {
            useCookie: true,
            cookieKey: 'language',
            redirectOn: 'root'
        },
    }
})
