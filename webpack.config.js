const path = require('path');
const babel = require('./babel.config.json');

module.exports = {
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
              presets: babel.presets,
            },
          },
        ],
      },
    ],
  },
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    extensions: ['.ts'],
  },
};
