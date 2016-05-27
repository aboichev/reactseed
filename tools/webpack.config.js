var path = require('path');
var webpack = require('webpack');

var config = {
  context: path.join(__dirname, 'webapp'),
  entry: getEntrySources(['./client.js']),
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: '/static/',
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ['react-hot', 'babel?' + JSON.stringify(
          {
            presets: ['react', 'es2015', 'stage-0']
          }
        )]
      }
    ]
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]
};

module.exports = config;

function getEntrySources(sources) {
  if (process.env.NODE_ENV !== 'production') {
    sources.push('webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000');
  }

  return sources;
}
