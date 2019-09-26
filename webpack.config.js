const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");
const webpack = require("webpack");

const APP_PATH = path.resolve(__dirname, "src");

const isDevelopment = process.env.NODE_ENV === "development";
const isProduction = process.env.NODE_ENV === "production";

const styleLoaders = {
  test: /\.s?css$/,
  loader: [
    "style-loader",
    isProduction && {
      loader: MiniCssExtractPlugin.loader,
    },
    "css-loader",
    "sass-loader",
    {
      loader: require.resolve("postcss-loader"),
      options: {
        plugins: () => [
          require("postcss-preset-env")({
            autoprefixer: {
              flexbox: "no-2009",
            },
            stage: 3,
          }),
          require("postcss-normalize")(),
        ],
      },
    },
  ].filter(Boolean),
};

module.exports = {
  entry: APP_PATH,
  mode: isProduction ? "production" : isDevelopment && "development",
  bail: isProduction,
  devtool: isDevelopment ? "source-map" : false,
  stats: "minimal",

  output: {
    path: path.resolve(__dirname, "dist"),
    filename: isProduction ? "[name].[hash].js" : "bundle.js",
    chunkFilename: isProduction
      ? "[name].[hash].chunk.js"
      : isDevelopment && "[name].chunk.js",
    publicPath: "/",
  },

  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx", ".json"],
  },

  optimization: {
    minimize: isProduction,
    minimizer: [new TerserPlugin(), new OptimizeCSSAssetsPlugin()],
    splitChunks: {
      chunks: "all",
      name: false,
    },
  },

  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        use: ["babel-loader", "source-map-loader"],
        exclude: /node_modules/,
      },
      styleLoaders,
      {
        test: /\.(png|jpe?g|svg|ico)$/,
        loader: "file-loader",
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin(
      Object.assign(
        {},
        {
          inject: true,
          template: path.join(APP_PATH, "index.html"),
        },
        isProduction
          ? {
              minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeRedundantAttributes: true,
                useShortDoctype: true,
                removeEmptyAttributes: true,
                removeStyleLinkTypeAttributes: true,
                keepClosingSlash: true,
                minifyJS: true,
                minifyCSS: true,
                minifyURLs: true,
              },
            }
          : undefined,
      ),
    ),
    isProduction &&
      new MiniCssExtractPlugin({
        filename: "[name].[contenthash:8].css",
      }),
    new ForkTsCheckerWebpackPlugin({
      async: isDevelopment,
      useTypescriptIncrementalApi: true,
    }),
  ].filter(Boolean),
};
