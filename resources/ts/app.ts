import '@/bootstrap';
import { createApp, h } from 'vue'
import { createInertiaApp, Head, Link } from '@inertiajs/vue3'
import { ZiggyVue } from '../../vendor/tightenco/ziggy/dist/vue.m';
import DefaultLayout from "@/Layouts/DefaultLayout.vue";
import store from "./store";
import i18n from "@/core/plugins/i18n";
import { initInlineSvg } from "@/core/plugins/inline-svg";
import HtmlClass from "@/core/services/LayoutService";
import { initializeComponents, reinitializeComponents } from "@/core/plugins/keenthemes";


const appName = window.document.getElementsByTagName('title')[0]?.innerText || 'EMRS';

createInertiaApp({
  title: (title) => `${title} - ${appName}`,
  resolve: async name => {
    let page =  await import(`./Pages/${name}`);
    page = page.default;
    if(page.layout === undefined){
        page.layout = DefaultLayout;
    }
    return page;
  },
  setup({ el, App, props, plugin }) {
    createApp({ render: () => h(App, props) })
      .use<any>(plugin)
      .use<any>(store)
      .use<any>(i18n)
      .use(ZiggyVue)
      .use(initInlineSvg)
      .component('Head', Head)
      .component('Link', Link)
      .mount(el)
  },
})

// initialize html element classes
HtmlClass.init();
initializeComponents();


