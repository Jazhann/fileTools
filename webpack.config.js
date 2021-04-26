const path = require('path');

module.exports = {
  mode: 'production',
  target: 'node',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'jsFileTools.js',
    library: "jsFileTools",
    libraryTarget: 'umd',
    globalObject: 'this'
  },
};