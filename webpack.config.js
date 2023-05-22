const path = require('path');

module.exports = {
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: "ts-loader",
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        alias: {
            '@': path.resolve('resources/ts'),
            '@Layouts': path.resolve('resources/ts/Layouts'),
            '@Components': path.resolve('resources/ts/Components'),
            '@Sass': path.resolve('resources/sass'),
        },
        extensions: ["*",".wasm",".mjs",".js",".jsx",".json",".vue", ".ts", ".tsx", ".js", ".jsx",],
    },
};
