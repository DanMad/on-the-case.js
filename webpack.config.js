const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: 'src',
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
              presets: ['@babel/preset-env', '@babel/preset-typescript'],
            },
          },
        ],
      },
    ],
  },
  output: {
    clean: true,
    filename: 'index.js',
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: 'types/index.d.ts',
          to: 'index.d.ts',
        },
        'LICENSE',
        'package.json',
        'README.md',
      ],
    }),
  ],
  resolve: {
    extensions: ['.ts'],
    modules: ['node_modules'],
    preferRelative: true,
  },
};
