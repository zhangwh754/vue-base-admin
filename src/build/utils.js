import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevTools from 'vite-plugin-vue-devtools'
import { visualizer } from 'rollup-plugin-visualizer'

import { configHtmlPlugin } from './plugins'

const httpsReg = /^https:\/\//

export function createPlugins(mode, env) {
  const plugins = [vue(), vueJsx(), configHtmlPlugin(mode, env)]

  if (mode === env.VITE_DEVELOPMENT) {
    plugins.push(vueDevTools())
  }
  if (mode === env.VITE_PRODUCTION) {
    plugins.push(visualizer({ open: true }))
  }

  return plugins
}

export function createProxy(_list) {
  if (!_list) return {}

  const list = JSON.parse(_list)

  const rst = {}
  for (const [prefix, target] of list) {
    const isHttps = httpsReg.test(target)

    // https://github.com/http-party/node-http-proxy#options
    rst[prefix] = {
      target: target,
      changeOrigin: true,
      ws: true,
      rewrite: (path) => path.replace(new RegExp(`^${prefix}`), ''),
      // https is require secure=false
      ...(isHttps ? { secure: false } : {})
    }
  }

  return rst
}
