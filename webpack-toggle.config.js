/**
 * generates:
 *  - dist/toggle.js
 *  - dist/manifest.json
 *  - dist/webpack-bundle-analyzer-report.html
 */
const webpack = require("webpack");
const WebpackAssetsManifest = require("webpack-assets-manifest");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");

module.exports = {
  plugins: [
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV)
    }),
    new BundleAnalyzerPlugin({
      analyzerMode: "static",
      openAnalyzer: false,
      reportFilename: "webpack-bundle-analyzer-report.html"
    }),
    new WebpackAssetsManifest()
  ],
  entry: {
    main: "./src/index.js"
  },
  output: {
    libraryTarget: "commonjs"
  },
  externals: {
    "prop-types": "prop-types",
    react: "react",
    "styled-components": "styled-components"
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  }
};
