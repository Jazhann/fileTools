const path = require('path');

module.exports = {
  mode: 'production',
  target: 'node',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'fileTools.js',
    library: "fileTools",
    libraryTarget: 'umd',
    globalObject: 'this'
  },
};