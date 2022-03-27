module.exports = {
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
    '^~/(.*)$': '<rootDir>/$1',
    '^vue$': 'vue/dist/vue.common.js'
  },
  moduleFileExtensions: [
    'ts',
    'js',
    'vue',
    'json'
  ],
  transform: {
    '^.+\\.ts$': 'ts-jest',
    '^.+\\.js$': 'babel-jest',
    '.*\\.(vue)$': 'vue-jest'
  },
  // Jestがテストファイルを検出するために使用するグロブパターン
  testMatch: ['<rootDir>/**/*.test.ts?(x)'],
  // テストする環境のこと
  testEnvironment: 'jest-environment-jsdom',
}
