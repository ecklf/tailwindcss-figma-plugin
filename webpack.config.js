const HtmlWebpackInlineSourcePlugin = require("html-webpack-inline-source-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const trimEnd = require("lodash/trimEnd");

module.exports = (env, argv) => ({
  mode: argv.mode === "production" ? "production" : "development",

  // This is necessary because Figma's 'eval' works differently than normal eval
  devtool: argv.mode === "production" ? false : "inline-source-map",

  entry: {
    ui: "./src/App.tsx", // The entry point for your UI code
    code: "./src/code.ts", // The entry point for your plugin code
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
              postcssOptions: {
                plugins: [
                  require("tailwindcss")("./tailwind.config.js"),
                  ...(argv.mode === "production"
                    ? [
                        require("@fullhuman/postcss-purgecss")({
                          whitelist: ["link"],
                          content: ["**/*.html", "**/*.tsx"],
                          css: ["**/*.css"],
                          defaultExtractor: (content) => {
                            // Capture as liberally as possible, including things like `h-(screen-1.5)`
                            const broadMatches =
                              content.match(/[^<>"'`\s]*[^<>"'`\s:]/g) || [];
                            const broadMatchesWithoutTrailingSlash = broadMatches.map(
                              (match) => trimEnd(match, "\\")
                            );

                            // Capture classes within other delimiters like .block(class="w-1/2") in Pug
                            const innerMatches =
                              content.match(
                                /[^<>"'`\s.(){}[\]#=%]*[^<>"'`\s.(){}[\]#=%:]/g
                              ) || [];

                            return broadMatches
                              .concat(broadMatchesWithoutTrailingSlash)
                              .concat(innerMatches);
                          },
                        }),
                      ]
                    : []),
                  require("autoprefixer"),
                  require("cssnano"),
                ],
              },
            },
          },
        ],
      },
      // Allows you to use "<%= require('./file.svg') %>" in your HTML code to get a data URI
      {
        test: /\.(png|jpg|gif|webp|svg|zip)$/,
        loader: [{ loader: "url-loader" }],
      },
    ],
  },

  // Webpack tries these extensions for you if you omit the extension like "import './file'"
  resolve: { extensions: [".ts", ".tsx", ".js"] },

  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"), // Compile into a folder called "dist"
  },

  // Tells Webpack to generate "ui.html" and to inline "ui.ts" into it
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/ui.html",
      filename: "ui.html",
      inlineSource: ".(js)$",
      chunks: ["ui"],
    }),
    new HtmlWebpackInlineSourcePlugin(),
  ],
});
