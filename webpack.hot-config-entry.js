var webpack = require('webpack');
module.exports = {
  // devtool: 'eval',
  // debug: true,
  // hotComponents: true,
  // hot: true,
  // stats: {
  //   colors: true
  // },
  // host: '0.0.0.0',
  entry: [
    'webpack-dev-server/client?http://0.0.0.0:3000/',
    'webpack/hot/only-dev-server',
    './index.js'
  ],
  output: {
    filename: 'bundle.js', // Will output App_wp_bundle.js
    publicPath: '/' // Required for webpack-dev-server
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [{
      test: /\.scss$/,
      loaders: ["style", "css", "sass"]
    },{
      test: /\.css$/,
      loaders: ["style", "css"]
    }, {
      test: /\.json$/,
      loaders: ["json-loader"]
    }, {
      test: /\.js$/,
      exclude: /node_modules/,
      loaders: ['react-hot', 'babel-loader?' + JSON.stringify({
        cacheDirectory: true,
        presets: ['react', 'es2015']
      })]
    }]
  },
  resolve: {
    extensions:["", ".webpack.js", ".web.js", ".js",".css"],
    alias: {
      moment: __dirname + "/bower_components/moment/min/moment-with-locales.min.js",
      timezone: __dirname + "/bower_components/moment-timezone/builds/moment-timezone-with-data-2010-2020.min.js",
      selectCss: 'react-select/dist/react-select.css'
    },
  }
}