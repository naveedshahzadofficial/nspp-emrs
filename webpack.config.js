const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


module.exports = {
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            },
            {
                test: /\.tsx?$/,
                loader: "ts-loader",
                exclude: /node_modules/
            },
        ]
    },
    resolve: {
        alias: {
            '@': path.resolve('resources/ts'),
            '@Layouts': path.resolve('resources/ts/Layouts'),
            '@Components': path.resolve('resources/ts/Components'),
            '@Sass': path.resolve('resources/sass'),
        },
        extensions: ['.ts', '.js',".vue", '.mjs', '.json','.wasm','.jsx', '.tsx'],
    },
    stats: {
        children: true,
    },
    plugins: [
        new MiniCssExtractPlugin(),
    ],
};
