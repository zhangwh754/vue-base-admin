import { fileURLToPath, URL } from 'node:url'

import { defineConfig, loadEnv } from 'vite'
import { createPlugins, createProxy } from './src/build/utils'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  return {
    base: env.VITE_PUBLIC_PATH,
    plugins: createPlugins(mode, env),
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    },
    server: {
      host: '0.0.0.0',
      port: env.VITE_PORT,
      proxy: createProxy(env.VITE_PROXY) // 代理
    },
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern', // fix deprecation warn when build
          additionalData: `@import '@/styles/variables.scss';`
        }
      }
    }
  }
})
