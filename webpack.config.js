const TerserPlugin = require("terser-webpack-plugin");

const isProd = process.env.NODE_ENV === "production";

module.exports = {
  mode: process.env.NODE_ENV || "development",
  entry: {
    "options/options": "./src/options/main.jsx",
    main: "./src/main/main.js"
  },
  output: {
    path: __dirname + "/dist"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.jsx$/,
        use: [
          {
            loader: "babel-loader",
            options: { presets: ["@babel/env", "@babel/react"] }
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: [".js", ".jsx"]
  },
  plugins: [],
  devtool: isProd ? false : "cheap-module-inline-source-map",
  performance: {
    maxEntrypointSize: 1000000,
    maxAssetSize: 3000000
  },
  optimization: {
    minimize: isProd,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          compress: true,
          warnings: false
        }
      })
    ]
  }
};
