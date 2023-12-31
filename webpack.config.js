const path = require('path');

module.exports = {
  entry: './src/index.js',
  mode: 'production',
  performance: {
    hints: false,
  },
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
     {
       test: /\.(png|svg|ico|jpg|jpeg|gif)$/i,
       type: 'asset/resource',
     },
    ],
  }
};