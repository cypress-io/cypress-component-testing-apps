const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");
const { sveltePreprocess } = require("svelte-preprocess");

module.exports = {
  mode: "development",
  entry: {
    bundle: ["./src/main.ts"],
  },
  resolve: {
    alias: {
      svelte: path.resolve('node_modules', 'svelte/src/runtime'),
    },
    extensions: [".mjs", ".js", ".ts", ".svelte"],
    mainFields: ["svelte", "browser", "module", "main"],
  },
  output: {
    path: path.resolve(__dirname, "public/build"),
    publicPath: "/build/",
    filename: "[name].js",
    chunkFilename: "[name].[id].js",
  },
  module: {
    rules: [
      // Rule: Svelte
      {
        test: /\.svelte$/,
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
            preprocess: sveltePreprocess({
              postcss: true,
            }),
          },
        },
      },
      // Required to prevent errors from Svelte on Webpack 5+, omit on Webpack 4
      // See: https://github.com/sveltejs/svelte-loader#usage
      {
        test: /node_modules\/svelte\/.*\.mjs$/,
        resolve: {
          fullySpecified: false,
        },
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
