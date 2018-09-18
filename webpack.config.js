const path = require('path');

module.exports = {
  entry: path.join(__dirname, 'sample.js'),
  mode: 'production',
  output: {
    filename: 'sampleBundle.js',
    path: __dirname
  }
};
