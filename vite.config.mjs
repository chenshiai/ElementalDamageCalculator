import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

export default defineConfig({
    // type: "module",
    plugins: [vue()],
    server: {
        host: "0.0.0.0",
        port: 3000,
        proxy: {
            "/player-info": {
              target: "http://8.155.52.59:8088/",
              changeOrigin: true,
            },
          },
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        }
    },
    build: {
        assetsInlineLimit: 100 * 1024 // 设置为 100kb
      },
});