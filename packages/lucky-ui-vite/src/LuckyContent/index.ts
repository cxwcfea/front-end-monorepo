import { App } from 'vue';
import LuckyContent from './LuckyContent.vue';
import 'uno.css';
import './style/index.less';

export { LuckyContent };

export default {
    install(app: App) {
        app.component('LuckyContent', LuckyContent);
    },
};
