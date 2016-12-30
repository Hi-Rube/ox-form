module.exports = {
  entry: __dirname + '/src/index.js',
  output: {
    filename: 'index.js',
  },
  module: {
    loaders: [
      {
        test: /\.js?$/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react'],
        },
      }
    ]
  },
  resolve: {
    alias: {
      'ox-form': __dirname + "/../../src/index.js"
    }
  }
};
