const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const config = require("./webpack.config");

const htmlPlugin = new HtmlWebpackPlugin({
  filename: "index.html",
  template: "src/index.html"
});

module.exports = {
  entry: "./src/dev.js",
  plugins: [
    ...config.plugins,
    htmlPlugin,
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  module: config.module,
  devServer: {
    hot: true
  }
};
