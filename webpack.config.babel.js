import CopyPlugin from 'copy-webpack-plugin';
import path from 'path';

const webpackConfig = {
  entry: './src/index',
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
              presets: ['@babel/env', '@babel/preset-typescript'],
            },
          },
        ],
      },
    ],
  },
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, './dist'),
  },
  plugins: [
    new CopyPlugin({
      patterns: [{ from: path.join(__dirname, './types/index.d.ts'), to: '.' }],
    }),
  ],
  resolve: {
    extensions: ['.ts'],
  },
};

export { webpackConfig as default };
