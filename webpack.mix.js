const mix = require('laravel-mix');

const webpackConfig = require('./webpack.config');
/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.ts('resources/ts/app.ts', 'public/js')
    .extract()
    .vue({ version: 3 })
    .sass('resources/sass/app.scss', 'public/css')
    .browserSync('nspp-emrs.test')
    .webpackConfig(webpackConfig);

if (mix.inProduction()) {
    mix.version();
}
