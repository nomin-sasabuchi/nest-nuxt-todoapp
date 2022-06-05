const { nuxifyStorybook } = require('../.nuxt-storybook/storybook/main.js')
const path = require('path')

import VueCompositionApi from '@vue/composition-api'
import Vue from 'vue'

Vue.use(VueCompositionApi)

module.exports = nuxifyStorybook({
  //絶対パスインポートの解決↓
  webpackFinal: async (baseConfig) => {
    baseConfig.resolve.modules = [
      ...(baseConfig.resolve.modules || []),
      path.resolve(__dirname, '../src'),
    ]
    return baseConfig
  },
  //storiesの対象ディレクトリ
  stories: ['../src'],
  //拡張機能
  addons: [],
})
