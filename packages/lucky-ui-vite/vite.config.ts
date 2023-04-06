import { defineConfig, UserConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import viteEslint from 'vite-plugin-eslint';
import dts from 'vite-plugin-dts';
import Unocss from './config/unocss';

const rollupOptions = {
    external: ['vue', 'vue-router'],
    output: {
        globals: {
            vue: 'Vue',
        },
    },
};

export const config: UserConfig = {
    plugins: [
        vue(),
        vueJsx(),
        viteEslint(),
        Unocss(),
        dts({
            outputDir: './dist/types',
            insertTypesEntry: false,
            copyDtsFiles: true,
        }),
    ],
    build: {
        rollupOptions,
        minify: 'terser',
        lib: {
            entry: './src/entry.ts',
            name: 'LuckyUI',
            fileName: 'lucky-ui',
            formats: ['es', 'umd', 'iife'],
        },
        outDir: 'dist',
    },
};

export default defineConfig(config);
