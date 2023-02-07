import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path';
import pxtorem from "postcss-pxtorem";
export default defineConfig({
  plugins: [
    vue(),
    
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')    // 配置别名；将 @ 指向'src'目录
    }
  },
  server: {
    port: 5173,       
    open: true,       
    proxy: {          
      '/api': {
        target: '真实接口服务地址',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')     // 注意代理地址的重写
      },
    }
  },

})

