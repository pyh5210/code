import { fileURLToPath, URL } from 'node:url'

import { UserConfig, ConfigEnv, loadEnv, defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
// import { env } from 'node:process'

// https://vitejs.dev/config/


  export default defineConfig(({ mode }: ConfigEnv): UserConfig => {
  const env = loadEnv(mode, process.cwd(), '')
  
  return {
    plugins: [
      vue(),
      vueJsx(),
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    },
    server:{
      proxy:{
         '/api':{
             target:env.VITE_BASE_API, //跨域地址
             changeOrigin:true, //支持跨域
             rewrite:(path) => path.replace(/^\/api/, "")//重写路径,替换/api
         }
      }
    }
  
  }

})
