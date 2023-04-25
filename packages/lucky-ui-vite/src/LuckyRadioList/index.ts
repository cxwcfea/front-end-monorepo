import { App } from 'vue';
import LuckyRadioList from './LuckyRadioList.vue';
import 'uno.css';
import './style/index.less';

export { LuckyRadioList };

export default {
    install(app: App) {
        app.component('LuckyRadioList', LuckyRadioList);
    },
};
