const path = require("path");
const CleanupMiniCssExtractPlugin = require("cleanup-mini-css-extract-plugin");
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = {
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: "ts-loader",
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        alias: {
            "@": path.resolve("resources/ts"),
            "@Layouts": path.resolve("resources/ts/Layouts"),
            "@Components": path.resolve("resources/ts/Components"),
            "@Sass": path.resolve("resources/sass"),
        },
        extensions: [
            ".ts",
            ".js",
            ".vue",
            ".mjs",
            ".json",
            ".wasm",
            ".jsx",
            ".tsx",
        ],
    },

    stats: {
        children: true,
    },
    output: {
        path: path.resolve("./nspp_emrs"),
        publicPath: "/nspp_emrs/",
    },
    plugins: [
        new CleanupMiniCssExtractPlugin({
            children: true,
            warnings: false,
        }),
        new ForkTsCheckerWebpackPlugin()
    ],
    watchOptions: {
        // for some systems, watching many files can result in a lot of CPU or memory usage
        // https://webpack.js.org/configuration/watch/#watchoptionsignored
        // don't use this pattern, if you have a monorepo with linked packages
        ignored: /node_modules/,
    },
};
