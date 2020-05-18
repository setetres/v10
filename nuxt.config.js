const autoprefixer = require('autoprefixer')
const StyleLintPlugin = require('stylelint-webpack-plugin')
const webpack = require('webpack')

export default {
    mode: 'spa',
    head: {
        htmlAttrs: {
            lang: 'en',
        },
        title: 'Sete Três — v10',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, height=device-height, initial-scale=1' },
            { hid: 'description', name: 'description', content: 'v10.0 of my website.' },

            { hid: 'fb:app_id', property: 'fb:app_id', content: '1129806853741128' },
            { hid: 'og:type', property: 'og:type', content: 'website' },
            { hid: 'og:title', property: 'og:title', content: 'Sete Três — v10' },
            { hid: 'og:description', property: 'og:description', content: 'v10.0 of my website.' },
            { hid: 'og:image', property: 'og:image', content: 'https://v10.setetres.st/images/share-v10.png' },
            { hid: 'og:url', property: 'og:url', content: 'https://v10.setetres.st' },

            { hid: 'twitter:card', name: 'twitter:card', content: 'summary' },
            { hid: 'twitter:title', name: 'twitter:title', content: 'Sete Três — v10' },
            { hid: 'twitter:description', name: 'twitter:description', content: 'v10.0 of my website.' },
            { hid: 'twitter:image', name: 'twitter:image', content: 'https://v10.setetres.st/images/share-v10.png' }
        ],
        link: [
            { rel: 'canonical', href: 'https://v10.setetres.st' },
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }
        ]
    },
    css: [
        '@/node_modules/normalize.css/normalize.css',
        '@/assets/application.scss'
    ],
    loading: {
        color: '#000000',
        height: '100%',
        failedColor: '#e02020',
        throttle: 0
    },
    plugins: [
        {
            src: '~/plugins/locomotive-scroll.js',
            mode: 'client'
        }, {
            src: '~/plugins/ga.js',
            mode: 'client'
        }
    ],
    modules: [
        '@nuxtjs/axios'
    ],
    build: {
        postcss: {
            autoprefixer
        },
        plugins: [
            new StyleLintPlugin({
                files: [
                    '/assets/**/*.scss'
                ],
                configFile: 'stylelintrc.json'
            })
        ],
        extend(config, ctx) {
            if (ctx.isDev && ctx.isClient) {
                config.module.rules.push({
                    enforce: 'pre',
                    test: /\.(js|vue)$/,
                    loader: 'eslint-loader',
                    exclude: /(node_modules)/
                })
            }
        }
    }
}
