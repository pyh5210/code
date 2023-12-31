// import { fileURLToPath, URL } from 'node:url'

import { UserConfig, ConfigEnv, loadEnv, defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import path from 'path'
const pathSrc = path.resolve(__dirname, "src")

import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import Icons from "unplugin-icons/vite";
import IconsResolver from "unplugin-icons/resolver";
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';

// import { env } from 'node:process'

// https://vitejs.dev/config/
  export default defineConfig(({ mode }: ConfigEnv): UserConfig => {
  const env = loadEnv(mode, process.cwd(), '')
  
  return {
    plugins: [
      vue(),
      vueJsx(),
      createSvgIconsPlugin({
        // 指定需要缓存的图标文件夹
        iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
        // 指定symbolId格式
        symbolId: 'icon-[dir]-[name]',
      }),

      AutoImport({
        // 自动导入 Vue 相关函数，如：ref, reactive, toRef 等
        imports: ["vue"],
        eslintrc: {
          enabled: true, // 是否自动生成 eslint 规则，建议生成之后设置 false 
          filepath: "./src/utils/.eslintrc-auto-import.json", // 指定自动导入函数 eslint 规则的文件
       
        },
       
        resolvers: [
          // 自动导入 Element Plus 相关函数，如：ElMessage, ElMessageBox... (带样式)
          ElementPlusResolver(),
          // 自动导入图标组件
          IconsResolver({}),
        ],
        vueTemplate: true, // 是否在 vue 模板中自动导入
        dts: path.resolve(pathSrc, "utils", "auto-imports.d.ts"), // 指定自动导入函数TS类型声明文件路径

      }),
      Components({
        resolvers: [
          // 自动导入 Element Plus 组件
          ElementPlusResolver(),
          // 自动注册图标组件
          IconsResolver({
            enabledCollections: ["ep"] // element-plus图标库，其他图标库 https://icon-sets.iconify.design/
          }),
        ],
        dts: path.resolve(pathSrc, "utils", "components.d.ts"), // 指定自动导入组件TS类型声明文件路径
      }),
      Icons({
        // 自动安装图标库
        autoInstall: true,
      }),
 

    ],
    resolve: {
      alias: {
        // '@': fileURLToPath(new URL('./src', import.meta.url))
        '@': pathSrc
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
    },
    css: {
      // CSS 预处理器
      preprocessorOptions: {
          //define global scss variable
          scss: {
              javascriptEnabled: true,
              additionalData: `@use "@/styles/variables.scss" as *;`
          }
      }
    }
  
  }

})
