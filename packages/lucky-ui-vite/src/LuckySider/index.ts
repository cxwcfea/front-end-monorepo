import { App } from 'vue';
import LuckySider from './LuckySider.vue';
import 'uno.css';
import './style/index.less';

export { LuckySider };

export default {
    install(app: App) {
        app.component('LuckySider', LuckySider);
    },
};
