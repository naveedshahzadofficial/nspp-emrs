const path = require('path');
const AutoImport = require('unplugin-auto-import/webpack')
const Components = require('unplugin-vue-components/webpack')
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')
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
        AutoImport({
            resolvers: [ElementPlusResolver()],
        }),
        Components({
            resolvers: [ElementPlusResolver()],
        }),
    ],
};
