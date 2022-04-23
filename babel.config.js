module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@common': './src/common',
          '@details': './src/details',
          '@settings': './src/settings',
          '@lib': './src/lib',
        },
      },
    ],
  ],
};
