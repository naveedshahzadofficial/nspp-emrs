import '@/bootstrap';
import { createApp, h } from 'vue'
import { createInertiaApp, Head, Link } from '@inertiajs/vue3'
import { ZiggyVue } from '../../vendor/tightenco/ziggy/dist/vue.m';
import Layout from "@/Layouts/Layout.vue";
import i18n from "@/core/plugins/i18n";


const appName = window.document.getElementsByTagName('title')[0]?.innerText || 'EMRS';

createInertiaApp({
  title: (title) => `${title} - ${appName}`,
  resolve: async name => {
    let page =  await import(`./Pages/${name}`);
    page = page.default;
    if(page.layout === undefined){
        page.layout = Layout;
    }
    return page;
  },
  setup({ el, App, props, plugin }) {
    createApp({ render: () => h(App, props) })
      .use(plugin)
      .use(i18n)
      .use(ZiggyVue)
        .component('Head', Head)
        .component('Link', Link)
      .mount(el)
  },
})
