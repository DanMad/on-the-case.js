const CopyPlugin = require('copy-webpack-plugin');
const path = require('path');

module.exports = {
  entry: path.join(__dirname, 'src'),
  mode: 'production',
  module: {
    rules: [
      {
        exclude: /node_modules/,
        test: /\.ts$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                '@babel/env',
                '@babel/preset-typescript'
              ],
            },
          },
        ],
      },
    ],
  },
  output: {
    clean: true,
    path: path.join(__dirname, 'dist'),
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: path.join(__dirname, './types/index.d.ts'),
          to: '.',
        },
        path.join(__dirname, 'LICENSE'),
        path.join(__dirname, 'package.json'),
        path.join(__dirname, 'README.md'),
      ],
    }),
  ],
  resolve: {
    extensions: ['.ts'],
  },
};
