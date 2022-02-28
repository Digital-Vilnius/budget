module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '@assets': './assets',
          '@api': './src/api',
          '@components': './src/components',
          '@core': './src/core',
          '@features': './src/features',
          '@navigation': './src/navigation',
          '@styles': './src/styles',
          '@utils': './src/utils'
        }
      }
    ],
    [
      'module:react-native-dotenv',
      {
        moduleName: '@env',
        path: '.env'
      }
    ],
    'react-native-reanimated/plugin'
  ]
};
