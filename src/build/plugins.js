import { createHtmlPlugin } from 'vite-plugin-html'

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
