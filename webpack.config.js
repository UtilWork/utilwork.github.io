var path = require('path');

module.exports = {
  mode: 'development',
  entry: './tsout/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.bundle.js'
  }
};