import path from 'path'
import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'

import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ArcoResolver } from 'unplugin-vue-components/resolvers'

export default defineConfig(({ command, mode }) => {
  const evn = loadEnv(mode, process.cwd())
  return {
    plugins: [
      vue(),
      AutoImport({
        resolvers: [ArcoResolver()],
      }),
      Components({
        resolvers: [
          ArcoResolver({
            sideEffect: true,
          }),
        ],
      }),
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.', './src'),
      },
    },
    server: {
      proxy: {
        '^/api/blade-auth/oauth/logout': {
          target: evn.VITE_APP_API_URL,
          changeOrigin: true,
          // rewrite: path => path.replace(/^\/api\/get-token/, ''),
        },
        '^/api/get-token': {
          target: evn.VITE_APP_API_URL,
          changeOrigin: true,
          rewrite: path => path.replace(/^\/api\/get-token/, ''),
        },
        '^/api': {
          target: evn.VITE_APP_API_URL,
          changeOrigin: true,
          rewrite: path => path.replace(/^\/api/, '/api/hats-biz'),
        },
      },
    },
  }
})
