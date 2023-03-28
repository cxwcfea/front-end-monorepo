import { createApp } from 'vue';
import './style.css';
import 'lucky-ui-vite/dist/style.css';
import LuckyUI from 'lucky-ui-vite/dist/lucky-ui.mjs';
import App from './App.vue';

createApp(App).use(LuckyUI).mount('#app');
