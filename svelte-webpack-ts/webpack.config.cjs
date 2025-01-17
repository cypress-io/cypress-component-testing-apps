const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");
const { sveltePreprocess } = require("svelte-preprocess");

module.exports = {
  mode: "development",
  entry: {
    bundle: ["./src/main.ts"],
  },
  resolve: {
    extensions: [".mjs", ".js", ".ts", ".svelte"],
  },
  output: {
    path: path.resolve(__dirname, "public/build"),
    publicPath: "/build/",
    filename: "[name].js",
    chunkFilename: "[name].[id].js",
  },
  module: {
    rules: [
      {
        test: /\.svelte\.ts$/,
        use: [ "svelte-loader", "ts-loader"],
      },
      {
        test: /(?<!\.svelte)\.ts$/,
        loader: "ts-loader",
      },
      {
        test: /\.(svelte|svelte\.js)$/,
        use: {
          loader: "svelte-loader",
          options: {
            compilerOptions: {
              // Dev mode must be enabled for HMR to work!
              dev: true,
            },
            emitCss: true,
            hotReload: true,
            hotOptions: {
              // List of options and defaults: https://www.npmjs.com/package/svelte-loader-hot#usage
              noPreserveState: false,
              optimistic: true,
            },
          },
        }
      },
      {
        test: /node_modules\/svelte\/.*\.mjs$/,
        resolve: {
          fullySpecified: false
        }
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          "css-loader",
          "postcss-loader",
        ],
      },
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  devServer: {
    hot: true,
  },
  target: "web",
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css",
    }),
  ],
  devtool: "source-map",
};
