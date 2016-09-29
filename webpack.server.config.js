module.exports = {
  entry: {
    component: "./web/static/js/components/todo/app.js",
  },
  output: {
    path: "./priv/static/server/js",
    filename: "todo_plugin.js",
    library: "todo_plugin",
    libraryTarget: "commonjs2"
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: "babel",
      query: {
        plugins: ["transform-decorators-legacy"],
        presets: ["react", "es2015", "stage-2", "stage-0"],
      }
    }],
  },
  resolve: {
    extensions: ["", ".js"],
    modulesDirectories: ["node_modules", __dirname + "/web/static/js"]
  }
};
