require('./bootstrap');
import { createApp, h } from 'vue'
import { createInertiaApp } from '@inertiajs/vue3'
import { ZiggyVue } from '../../vendor/tightenco/ziggy/dist/vue.m';
import GuestLayout from "@Layouts/GuestLayout.vue";

const appName = window.document.getElementsByTagName('title')[0]?.innerText || 'EMRS';

createInertiaApp({
  title: (title) => `${title} - ${appName}`,
  resolve: async name => {
    let page =  await import(`./Pages/${name}`);
    page = page.default;
    if(page.layout === undefined){
        page.layout = GuestLayout;
    }
    return page;
  },
  setup({ el, App, props, plugin }) {
    createApp({ render: () => h(App, props) })
      .use(plugin)
      .use(ZiggyVue, Ziggy)
      .mount(el)
  },
})
