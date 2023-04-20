import { App } from 'vue';
import LuckyRow from './LuckyRow.vue';
import 'uno.css';
import './style/index.less';

export { LuckyRow };

export default {
    install(app: App) {
        app.component('LuckyRow', LuckyRow);
    },
};
