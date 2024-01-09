const path = require("path");
const CleanupMiniCssExtractPlugin = require("cleanup-mini-css-extract-plugin");

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
    /*output: {
        path: path.resolve("./nspp_emrs"),
        publicPath: "/nspp_emrs/",
    },*/
    plugins: [
        new CleanupMiniCssExtractPlugin({
            children: true,
            warnings: false,
        }),
    ],
};
