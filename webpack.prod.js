const merge = require("webpack-merge");
const common = require("./webpack.common.js");
const terserPlugin = require("terser-webpack-plugin");

module.exports = merge(common, {
  mode: "production",
  optimization: {
    minimizer: [
      new terserPlugin({
        cache: true,
        parallel: true,
        sourceMap: false,
      }),
    ],
  },
  module: {
    rules: [
      { test: /\.tsx?$/, loader: "awesome-typescript-loader" },
    ]
  }
});