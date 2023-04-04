import { defineConfig, UserConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import viteEslint from 'vite-plugin-eslint';
import Unocss from '../../config/unocss';

const rollupOptions = {
    external: ['vue', 'vue-router'],
    output: {
        globals: {
            vue: 'Vue',
        },
    },
};

export const config: UserConfig = {
    plugins: [vue(), vueJsx(), viteEslint(), Unocss()],
    build: {
        rollupOptions,
        minify: 'terser',
        lib: {
            entry: '$$entry',
            name: '$$name',
            fileName: 'index',
            formats: ['es', 'umd', 'iife'],
        },
        outDir: '$$outDir',
    },
};

export default defineConfig(config);
