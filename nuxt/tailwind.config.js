console.log('Tailwind Running !')

module.exports = {
  content: [
    './src/**/*.{js,vue,ts}',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    colors: {
      black: {
        DEFAULT: '#333333',
      },
      gray: {
        DEFAULT: '#eeeeee',
      },
      blue: {
        DEFAULT: '#0000FF',
      },
      yellow: {
        DEFAULT: '#ffa800',
      },
      white: {
        DEFAULT: '#ffffff',
      },
      red: {
        DEFAULT: '#ff7676',
      },
      transparent: 'transparent',
    },
    screens: {
      pc: '769px',
    },
    fontFamily: {
      'yu-gothic': `'游ゴシック体', YuGothic, '游ゴシック Medium', 'Yu Gothic Medium', '游ゴシック', 'Yu Gothic', sans-serif`,
      oswald: `'Oswald', sans-serif`,
    },
    extends: {},
  },
  plugins: [],
}
