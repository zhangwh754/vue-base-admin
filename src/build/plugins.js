import { createHtmlPlugin } from 'vite-plugin-html'
import AutoImport from 'unplugin-auto-import/vite'
import { VueHooksPlusResolver } from '@vue-hooks-plus/resolvers'
import Components from 'unplugin-vue-components/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'

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
    imports: [
      'vue',
      'vue-router',
      {
        'naive-ui': ['useDialog', 'useMessage', 'useNotification', 'useLoadingBar'],
      },
    ],
    dts: 'auto-imports.d.ts',
    resolvers: [VueHooksPlusResolver()],
  })
}

export function configComponents() {
  return Components({
    resolvers: [NaiveUiResolver()],
    dts: true,
  })
}
