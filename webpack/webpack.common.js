const Path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: Path.resolve(__dirname, '../src/index.ts'),
  output: {
    path: Path.resolve(__dirname, '../dist'),
    filename: 'index.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: Path.resolve(__dirname, '../src/index.html')
    })
  ],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        options: {
          transpileOnly: true
        }
      },
      {
        test: /\.s?css$/i,
        use: [{
          loader: 'style-loader',
          options: { injectType: 'styleTag' }
        },
          'css-loader?sourceMap=true',
          'sass-loader'
        ]
      }
    ]
  },
};
