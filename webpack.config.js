const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const path = require("path");
const autoprefixer = require("autoprefixer");
const { APP_PORT, GRAPHQL_PORT } = require("./config.json");
const theme = require("./client/theme.config");

const isProduction = process.env.NODE_ENV === "production";
const GRAPHQL_URL = "/graphql";

module.exports = {
  entry: {
    index: ["babel-polyfill", "whatwg-fetch", "./client/index.js"]
  },

  output: {
    path: path.resolve(__dirname, "./client/build"),
    filename: "bundle.[hash:7].js"
  },

  module: {
    rules: [
      {
        test: /\.js[x]?$/,
        exclude: /node_modules/,
        use: "babel-loader"
      },
      {
        test: /\.less$/,
        exclude: /node_modules/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [
            {
              loader: "css-loader",
              options: {
                modules: true,
                localIdentName: "[local]___[hash:base64:5]",
                importLoaders: 2
              }
            },
            {
              loader: "postcss-loader",
              options: {
                ident: "postcss",
                plugins: loader => [autoprefixer()],
                sourceMap: true
              }
            },
            {
              loader: "less-loader",
              options: {
                sourceMap: true,
                modifyVars: theme
              }
            }
          ]
        })
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [
            {
              loader: "css-loader",
              options: {
                modules: true,
                localIdentName: "[local]___[hash:base64:5]",
                importLoaders: 1
              }
            },
            {
              loader: "postcss-loader",
              options: {
                ident: "postcss",
                plugins: loader => [autoprefixer()],
                sourceMap: true
              }
            }
          ]
        })
      },
      {
        test: /\.less$/,
        include: /node_modules/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [
            {
              loader: "css-loader"
            },
            {
              loader: "less-loader",
              options: {
                sourceMap: true,
                modifyVars: theme
              }
            }
          ]
        })
      },
      {
        test: /\.css$/,
        include: /node_modules/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [
            {
              loader: "css-loader"
            }
          ]
        })
      },
      {
        test: /\.ejs$/,
        use: "ejs-loader"
      },
      {
        test: /\.(png|jpe?g|gif|ttf|eot|svg|woff|woff2)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 10000,
              name: "[name].[sha512:hash:base64:7].[ext]"
            }
          }
        ]
      }
    ]
  },

  plugins: [
    new webpack.DefinePlugin({
      PRODUCTION: isProduction,
      GRAPHQL_URL: JSON.stringify(GRAPHQL_URL)
    }),
    new webpack.ProvidePlugin({
      React: "react",
      ReactDOM: "react-dom",
      classNames: "classnames"
    }),
    new HtmlWebpackPlugin({
      title: "安全屋 UCLOUD SAFE HOUSE",
      inject: true,
      hash: true,
      minify: {
        collapseWhitespace: true,
        collapseWhitespace: true,
        minifyCSS: true,
        minifyJS: true
      },
      template: "client/index.ejs"
    }),
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, "./client/public"),
        to: path.resolve(__dirname, "./client/build/static"),
        toType: "dir",
        ignore: [".*"]
      }
    ]),
    new ExtractTextPlugin("[name].[contenthash:7].css", { allChunks: true })
  ],

  devtool: isProduction ? "source-map" : "eval-source-map",

  devServer: {
    contentBase: [
      path.join(__dirname, "./client/public"),
      path.join(__dirname, "./client/js/assets")
    ],
    port: APP_PORT,
    historyApiFallback: true,
    proxy: { [GRAPHQL_URL]: `http://localhost:${GRAPHQL_PORT}` }
  }
};
