// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'

import './assets/prism.css'
import '~/assets/style.css'

export default function (Vue, { router, head, isClient }) {
    head.script.push({
    src: 'https://kit.fontawesome.com/963f59e308.js',
    body: false
    })


  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
}
