export default defineNuxtConfig({
    modules: ['@nuxtjs/i18n'],

    compatibilityDate: '2025-07-15',
    devtools: { enabled: false },
    srcDir : 'src',

    app : 
    {
        head : 
        {
            title: "voidence",
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
        '~/assets/css/style.css',
        '~/assets/css/background.css',
        '~/assets/css/global.css',
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
