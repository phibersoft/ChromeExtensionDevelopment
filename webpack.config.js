const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");

const config = {
  mode: "production",
  entry: {
    content: path.join(__dirname, "src", "content.ts"),
    background: path.join(__dirname, "src", "background.ts"),
    popup: path.join(__dirname, "src", "popup", "popup.ts"),
    options: path.join(__dirname, "src", "options", "options.ts"),
  },
  output: { path: path.join(__dirname, "dist"), filename: "[name].js" },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".js", ".ts"],
  },
  devServer: {
    contentBase: "./dist",
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: "public", to: "." },
        ...["options", "popup"]
          .map((name) => {
            return [
              {
                from: `src/${name}/${name}.html`,
                to: `${name}.html`,
              },
              {
                from: `src/${name}/${name}.css`,
                to: `${name}.css`,
              },
            ];
          })
          .flat(),
      ],
    }),
  ],
};

module.exports = config;
