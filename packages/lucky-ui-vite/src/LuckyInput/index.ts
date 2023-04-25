import { App } from 'vue';
import LuckyInput from './LuckyInput.vue';
import 'uno.css';
import './style/index.less';

export { LuckyInput };

export default {
    install(app: App) {
        app.component('LuckyInput', LuckyInput);
    },
};
