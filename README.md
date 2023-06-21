
## Installation

npm install -g browser-sync
browser-sync start --config bs-config.js

const domain = 'nspp-emrs.test'; // <= EDIT THIS
const homedir = require('os').homedir();


.browserSync({
proxy: 'https://' + domain,
host: domain,
open: 'external',
https: {
key: homedir + '/.valet/Certificates/' + domain + '.key',
cert: homedir + '/.valet/Certificates/' + domain + '.crt'
},
port: 8080,
notify: true, //Enable or disable notifications
})



- [Simple, fast routing engine](https://laravel.com/docs/routing).

- **[Vehikl](https://vehikl.com/)**


https://www.youtube.com/watch?v=QyqrYdhSku0
https://laraveldaily.com/course/vue-inertia-laravel
https://laracasts.com/series/inertia-and-spa-techniques/episodes/7

https://vuejs.org/guide/typescript/composition-api.html
https://adocasts.com/lessons/creating-layouts-and-defining-default-layouts

- ** Webpack.mix.js**
//mix.setPublicPath('/nspp_emrs/')
//mix.setResourceRoot('/nspp_emrs/');

- ** webpack.config.js**
  /*output: { chunkFilename: 'js/[name].js?id=[chunkhash]', publicPath: '/' }, */


composer install --no-dev
