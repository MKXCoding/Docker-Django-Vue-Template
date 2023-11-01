const { defineConfig } = require("@vue/cli-service");
const fs = require("fs");

module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    entry: "./src/main.js",
    devServer: {
      hot: true,
      port: 8035,
      host: "0.0.0.0", // Binding to 0.0.0.0 allows access from external addresses.
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
      allowedHosts: ["maris.com", "localhost", "0.0.0.0"],
    },
    watchOptions: {
      ignored: /node_modules/,
      poll: 1000,
    },
  },
});
