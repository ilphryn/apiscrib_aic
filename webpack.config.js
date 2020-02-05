const path = require('path');

module.exports = {
  entry: './server.js',
  optimization: {
    minimize: false
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'apiscribe_aic.js'
  },
  target: 'node',
  mode: 'production'
};