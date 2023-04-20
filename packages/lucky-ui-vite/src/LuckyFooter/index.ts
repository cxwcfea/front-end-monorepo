import { App } from 'vue';
import LuckyFooter from './LuckyFooter.vue';
import 'uno.css';
import './style/index.less';

export { LuckyFooter };

export default {
    install(app: App) {
        app.component('LuckyFooter', LuckyFooter);
    },
};
