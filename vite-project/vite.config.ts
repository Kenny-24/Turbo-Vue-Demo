import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path';

//DevUI按需加载
import Components from 'unplugin-vue-components/vite'
import { DevUiResolver } from 'unplugin-vue-components/resolvers'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),
  // 新增
 
  Components({
    resolvers: [
      DevUiResolver()
    ]
  })],
  resolve: {
    alias: [
      {
        find: '@',                                   // 别名
        replacement: resolve(__dirname, 'src'),      // 别名对应地址
      },
      {
        find: 'components',
        replacement: resolve(__dirname, 'src/components'),
      }
    ]
  }
})
