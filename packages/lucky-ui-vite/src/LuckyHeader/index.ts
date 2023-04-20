import { App } from 'vue';
import LuckyHeader from './LuckyHeader.vue';
import 'uno.css';
import './style/index.less';

export { LuckyHeader };

export default {
    install(app: App) {
        app.component('LuckyHeader', LuckyHeader);
    },
};
