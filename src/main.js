// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
import 'victormono';
import 'prismjs/plugins/line-numbers/prism-line-numbers.css';
import 'gridsome-plugin-remark-prismjs-all/themes/night-owl.css';
import '~/assets/style.css';

// plugins
import VueCompositionAPI from '@vue/composition-api';

export default function(Vue, { router, head, isClient }) {
    head.script.push({
        src: 'https://kit.fontawesome.com/963f59e308.js',
        body: false,
    });

    Vue.use(VueCompositionAPI);
}
