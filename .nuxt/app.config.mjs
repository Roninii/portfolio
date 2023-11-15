
import { updateAppConfig } from '#app'
import { defuFn } from '/Users/ronini/dev/personal/portfolio/node_modules/defu/dist/defu.mjs'

const inlineConfig = {
  "nuxt": {
    "buildId": "test"
  }
}

// Vite - webpack is handled directly in #app/config
if (import.meta.hot) {
  import.meta.hot.accept((newModule) => {
    updateAppConfig(newModule.default)
  })
}

import cfg0 from "/Users/ronini/dev/personal/portfolio/app.config.ts"

export default /* #__PURE__ */ defuFn(cfg0, inlineConfig)
