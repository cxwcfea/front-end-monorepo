import { App } from 'vue';
import LuckyLink from './LuckyLink';
import 'uno.css';

export { LuckyLink };

export default {
    install(app: App) {
        app.component(LuckyLink.name, LuckyLink);
    },
};
