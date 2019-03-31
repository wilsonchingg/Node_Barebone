const path = require('path');

module.exports = {
  entry: ['babel-polyfill', './src/react/router.jsx'],
  output: {
    path:  path.resolve(__dirname+ '/src/public/js'),
    filename: 'main.js',
    publicPath: '/public',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  }
};
