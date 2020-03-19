const path = require("path");

module.exports = {
  mode: "development",
  entry: "./js/app.js",
  output: {
    path: "./build",
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist")
  }
};
