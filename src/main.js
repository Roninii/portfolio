// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
import 'victormono';
// import "./assets/prism.css"
import 'gridsome-plugin-remark-prismjs-all/themes/night-owl.css';
import '~/assets/style.css';

// plugins
import VueCompositionAPI from '@vue/composition-api';

// Event bus
import Vue from 'vue'
export const EventBus = new Vue()

export default function(Vue, { router, head, body, isClient }) {
    head.script.push({
        src: 'https://kit.fontawesome.com/963f59e308.js',
        body: false,
        async: true,
        defer: true
    });

    Vue.use(VueCompositionAPI);
}
