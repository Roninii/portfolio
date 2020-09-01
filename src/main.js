import 'victormono';
// import "./assets/prism.css"
import 'gridsome-plugin-remark-prismjs-all/themes/night-owl.css';
import '~/assets/style.css';

// plugins
import VueCompositionAPI from '@vue/composition-api';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { config, library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons';
import { faLightbulb } from '@fortawesome/free-regular-svg-icons';
import {
    faAws,
    faDev,
    faGithub,
    faLinkedin,
    faNodeJs,
    faReact,
    faSass,
    faTwitter,
    faVuejs,
} from '@fortawesome/free-brands-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';

config.autoAddCss = false;
library.add(
    faGithub,
    faTwitter,
    faDev,
    faLinkedin,
    faEnvelopeOpenText,
    faVuejs,
    faAws,
    faNodeJs,
    faSass,
    faReact,
    faLightbulb
);

// Event bus
import Vue from 'vue';
export const EventBus = new Vue();

export default function(Vue, { router, head, body, isClient }) {
    head.style.push({
        href:
            'https://fonts.googleapis.com/css2?family=Spartan:wght@100;200;300;400;500;600;700;800;900&display=swap',
        rel: 'stylesheet',
    });

    head.script.push({
        src: 'https://kit.fontawesome.com/963f59e308.js',
        body: false,
        async: true,
        defer: true,
    });

    Vue.component('font-awesome', FontAwesomeIcon);
    Vue.use(VueCompositionAPI);
}
