import path from "path";

export default {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve("dist"),
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif)$/i, // Обрабатываем PNG, JPEG, и GIF с помощью встроенного asset/resource
        type: "asset/resource",
        generator: {
          filename: "images/[name].[hash][ext]", // Установка шаблона имени и папки для изображений
        },
      },
      {
        test: /\.svg$/, // Обрабатываем SVG отдельно для инлайнового использования
        use: [
          {
            loader: "svg-inline-loader",
          },
        ],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  devServer: {
    static: path.resolve("dist"),
    compress: true,
    historyApiFallback: true,
    port: 9000,
  },
};
