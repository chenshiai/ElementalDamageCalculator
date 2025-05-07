import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

export default defineConfig({
    // type: "module",
    plugins: [vue()],
    server: {
        host: "0.0.0.0",
        port: 3000,
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