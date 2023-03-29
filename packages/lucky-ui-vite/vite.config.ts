import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import viteEslint from 'vite-plugin-eslint';
import Unocss from './config/unocss';

const rollupOptions = {
    external: ['vue', 'vue-router'],
    output: {
        globals: {
            vue: 'Vue',
        },
    },
};

export default defineConfig({
    plugins: [vue(), vueJsx(), viteEslint(), Unocss()],
    build: {
        rollupOptions,
        minify: 'terser',
        lib: {
            entry: './src/entry.ts',
            name: 'LuckyUI',
            fileName: 'lucky-ui',
            formats: ['es', 'umd', 'iife'],
        },
    },
});
