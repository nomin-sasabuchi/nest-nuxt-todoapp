const path = require('path')
import postcss from 'postcss'
import postcssImport from 'postcss-import'
import postcssNested from 'postcss-nested'
import postcssSimpleVars from 'postcss-simple-vars'
import postcssMath from 'postcss-math'
import postcssNesting from 'postcss-nesting'

import * as tailwindcss from '../tailwind.config'

module.exports = {
  //storiesの対象ディレクトリ
  stories: ['../src/components'],
  //拡張機能
  addons: [
    //Storybookのストーリー間を移動するリンク
    '@storybook/addon-links',
    //Storybookの優れた機能を提供
    '@storybook/addon-essentials',
    //postcssの設定
    {
      name: '@storybook/addon-postcss',
      options: {
        postcssLoaderOptions: { implementation: require('postcss') },
      },
    },
  ],
  //絶対パスインポートの解決↓
  webpackFinal: async (baseConfig) => {
    baseConfig.resolve.modules = [
      ...(baseConfig.resolve.modules || []),
      path.resolve(__dirname, '../src'),
    ]
    return baseConfig
  },
}

// const { resolve } = require('path')
// const { getWebpackConfig } = require('nuxt')
// module.exports = {
//   //storiesの対象ディレクトリ
//   stories: ['../src/components'],
//   // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
//   // You can change the configuration based on that.
//   // 'PRODUCTION' is used when building the static version of storybook.
//   webpackFinal: async (sbWebpack, { configType }) => {
//     const nuxtWebpack = await getWebpackConfig('client', {
//       for: process.env.NODE_ENV === 'production' ? 'build' : 'dev',
//     })
//     const recomposedWebpackConfig = {
//       mode: nuxtWebpack.mode,
//       devtool: nuxtWebpack.devtool,
//       entry: sbWebpack.entry,
//       output: sbWebpack.output,
//       bail: sbWebpack.bail,
//       module: {
//         rules: [
//           ...nuxtWebpack.module.rules.map((el) => {
//             const reg = RegExp(el.test)
//             // 拡張子が「.postcss」か「.css」の時
//             if (reg.test('.postcss') || reg.test('.css')) {
//               el.oneOf = el.oneOf.map((e) => {
//                 e.use.push({
//                   loader: 'postcss-loader',
//                   options: {
//                     ident: 'postcss',
//                     plugins: [
//                       require('tailwindcss')('./tailwind.config.js'),
//                       require('autoprefixer'),
//                     ],
//                   },
//                 })
//                 return e
//               })
//             }
//             // 拡張子が「.sass」か「.scss」の時(基本scssのみで良いが念のためsassも記載)
//             if (reg.test('.sass') || reg.test('.scss')) {
//               el.oneOf = el.oneOf.map((e) => {
//                 e.use.push(
//                   {
//                     loader: 'postcss-loader',
//                     options: {
//                       postcssOptions: {
//                         plugins: [
//                           require('postcss-import'),
//                           require('postcss-nested'),
//                           require('postcss-mixins'),
//                           require('postcss-simple-vars'),
//                           require('postcss-math'),
//                           require('postcss-nesting'),
//                           require('tailwindcss')('./tailwind.config.js'),
//                           require('autoprefixer'),
//                         ],
//                       },
//                     },
//                   },
//                   {
//                     loader: 'sass-loader',
//                   },
//                   // ここでscssの変数などの変換を行う
//                   {
//                     loader: 'sass-resources-loader',
//                     options: {
//                       resources: ['./assets/scss/variable.scss'],
//                       include: resolve(__dirname, '../'),
//                     },
//                   }
//                 )
//                 return e
//               })
//             }
//             return el
//           }),
//         ],
//       },
//       plugins: sbWebpack.plugins,
//       resolve: {
//         extensions: nuxtWebpack.resolve.extensions,
//         modules: nuxtWebpack.resolve.modules,
//         alias: {
//           ...nuxtWebpack.resolve.alias,
//           ...sbWebpack.resolve.alias,
//         },
//       },
//       optimization: sbWebpack.optimization,
//       performance: {
//         ...sbWebpack.performance,
//         ...nuxtWebpack.performance,
//       },
//     }
//     return recomposedWebpackConfig
//   },
// }
