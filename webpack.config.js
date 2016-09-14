const webpack = require("webpack")
const ExtractTextPlugin = require("extract-text-webpack-plugin")
const CopyWebpackPlugin = require("copy-webpack-plugin")

module.exports = {
  devtool: "source-map",
  entry: {
    "app": ["./web/static/css/app.scss", "./web/static/js/app.js"],
  },

  output: {
    path: "./priv/static",
    filename: "js/app.js",
    publicPath: "/"
  },

  resolve: {
    modulesDirectories: [ "node_modules", __dirname + "/web/static/js" ]
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel",
        query: {
          plugins: ["transform-decorators-legacy"],
          presets: ["react", "es2015", "stage-2"],
        }
      }, {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract("style", "css")
      }, {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract(
          "style",
          "css!sass?includePaths[]=" + __dirname +  "/node_modules/bootstrap/scss"
        )
      }
    ]
  },

  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery"
    }),
    new ExtractTextPlugin("css/app.css"),
    new CopyWebpackPlugin([{ from: "./web/static/assets" }])
  ]
}
