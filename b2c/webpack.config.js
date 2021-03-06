const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

const mode = process.env.NODE_ENV || "development";
const prod = mode === "production";
const deps = require("./package.json").dependencies;

module.exports = {
  entry: {
    "build/bundle": ["./src/main.js"],
  },
  resolve: {
    alias: {
      svelte: path.dirname(require.resolve("svelte/package.json")),
    },
    extensions: [".mjs", ".js", ".svelte"],
    mainFields: ["svelte", "browser", "module", "main"],
  },
  output: {
    path: path.join(__dirname, "/public"),
    filename: "[name].js",
    chunkFilename: "[name].[id].js",
  },
  module: {
    rules: [
      {
        test: /\.svelte$/,
        use: {
          loader: "svelte-loader",
          options: {
            compilerOptions: {
              dev: !prod,
            },
            emitCss: prod,
            hotReload: !prod,
          },
        },
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        // required to prevent errors from Svelte on Webpack 5+
        test: /node_modules\/svelte\/.*\.mjs$/,
        resolve: {
          fullySpecified: false,
        },
      },
    ],
  },
  mode,
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css",
    }),
    new ModuleFederationPlugin({
      name: "b2c",
      filename: "remoteEntry.js",
      remotes: {
        // b2c: "b2c@http://localhost:3001/remoteEntry.js",
        b2b: "b2b@http://localhost:3000/remoteEntry.js",
      },
      exposes: {
        "./store": "./src/store",
        "./queries":"./src/gql/queries",
        "./mutations":"./src/gql/mutations"
      },
      shared: {
        ...deps,
      },
    }),
  ],
  devtool: prod ? false : "source-map",
  devServer: {
    port: 3001,
    hot: true,
  },
};
