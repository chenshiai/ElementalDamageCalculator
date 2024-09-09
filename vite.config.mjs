import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

export default defineConfig({
    type: "module",
    plugins: [vue()],
    server: {
        host: '0.0.0.0',
        port: '8080',
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        }
    }
});