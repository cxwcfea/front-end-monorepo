import { App } from 'vue';
import LuckyLayout from './LuckyLayout.vue';
import 'uno.css';
import './style/index.less';

export { LuckyLayout };

export default {
    install(app: App) {
        app.component('LuckyLayout', LuckyLayout);
    },
};
