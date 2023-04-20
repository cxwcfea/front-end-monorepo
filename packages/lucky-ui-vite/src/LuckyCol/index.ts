import { App } from 'vue';
import LuckyCol from './LuckyCol.vue';
import 'uno.css';
import './style/index.less';

export { LuckyCol };

export default {
    install(app: App) {
        app.component('LuckyCol', LuckyCol);
    },
};
