module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'ox-form.js',
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
  }
};
