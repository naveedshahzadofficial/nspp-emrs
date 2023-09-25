import '@/bootstrap';
import { createApp, h } from 'vue'
import { createInertiaApp, Head, Link } from '@inertiajs/vue3'
import { ZiggyVue } from '../../vendor/tightenco/ziggy/dist/vue.m';
import DefaultLayout from "@/Layouts/DefaultLayout.vue";
import store from "./store";
import i18n from "@/core/plugins/i18n";
import { initInlineSvg } from "@/core/plugins/inline-svg";
import HtmlClass from "@/core/services/LayoutService";
import { initializeComponents } from "@/core/plugins/keenthemes";
import vSelect from 'vue-select'
import globalFunctions from '@/core/functions/global-functions';
import Toolbar from "@/Components/toolbars/Toolbar.vue";
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';


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
      .use(globalFunctions)
      .component('Head', Head)
      .component('Link', Link)
      .component('Toolbar', Toolbar)
      .component('v-select', vSelect)
      .component('v-date-picker', VueDatePicker)
      .mount(el)
  },

})

// initialize html element classes
HtmlClass.init();
initializeComponents();


