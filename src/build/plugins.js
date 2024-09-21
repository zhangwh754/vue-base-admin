import { createHtmlPlugin } from 'vite-plugin-html'
import AutoImport from 'unplugin-auto-import/vite'

export function configHtmlPlugin(mode, env) {
  const { VITE_APP_TITLE } = env
  const htmlPlugin = createHtmlPlugin({
    minify: mode === env.VITE_PRODUCTION,
    inject: {
      data: {
        title: VITE_APP_TITLE,
      },
    },
  })
  return htmlPlugin
}

export function configAutoImport() {
  return AutoImport({
    imports: ['vue', 'vue-router'],
    dts: 'auto-imports.d.ts',
  })
}
