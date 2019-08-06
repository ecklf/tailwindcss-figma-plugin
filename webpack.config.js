const HtmlWebpackInlineSourcePlugin = require("html-webpack-inline-source-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

/**
 * Custom PurgeCSS Extractor
 * https://github.com/FullHuman/purgecss
 */
class TailwindExtractor {
  static extract(content) {
    return content.match(/[A-z0-9-:\/]+/g);
  }
}

module.exports = (env, argv) => ({
  mode: argv.mode === "production" ? "production" : "development",

  // This is necessary because Figma's 'eval' works differently than normal eval
  devtool: argv.mode === "production" ? false : "inline-source-map",

  entry: {
    ui: "./src/App.tsx", // The entry point for your UI code
    code: "./src/init.ts" // The entry point for your plugin code
  },

  module: {
    rules: [
      // Converts TypeScript code to JavaScript
      { test: /\.tsx?$/, use: "ts-loader", exclude: /node_modules/ },

      // Enables including CSS by doing "import './file.css'" in your TypeScript code
      {
        test: /\.css$/,
        use: [
          "style-loader",
          { loader: "css-loader", options: { importLoaders: 1 } },
          {
            loader: "postcss-loader",
            options: {
              ident: "postcss",
              plugins: [
                require("tailwindcss")("./tailwind.config.js"),
                ...(argv.mode === "production"
                  ? [
                      require("@fullhuman/postcss-purgecss")({
                        content: ["**/*.html", "**/*.tsx", "**/*.jsx"],
                        css: ["**/*.css"],
                        extractors: [
                          {
                            extractor: TailwindExtractor,
                            // Specify the file extensions to include when scanning
                            extensions: ["html", "js", "jsx", "css"]
                          }
                        ]
                      })
                    ]
                  : []),
                require("autoprefixer")
              ]
            }
          }
        ]
      },

      // Allows you to use "<%= require('./file.svg') %>" in your HTML code to get a data URI
      {
        test: /\.(png|jpg|gif|webp|svg|zip)$/,
        loader: [{ loader: "url-loader" }]
      }
    ]
  },

  // Webpack tries these extensions for you if you omit the extension like "import './file'"
  resolve: { extensions: [".tsx", ".ts", ".jsx", ".js"] },

  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist") // Compile into a folder called "dist"
  },

  // Tells Webpack to generate "ui.html" and to inline "ui.ts" into it
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/ui.html",
      filename: "ui.html",
      inlineSource: ".(js)$",
      chunks: ["ui"]
    }),
    new HtmlWebpackInlineSourcePlugin()
  ]
});
