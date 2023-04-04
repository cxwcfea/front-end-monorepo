import { App } from 'vue';
import LuckyButton from './LuckyButton';
import 'uno.css';

// 导出Button组件
export { LuckyButton };

// 导出Vue插件
export default {
    install(app: App) {
        app.component(LuckyButton.name, LuckyButton);
    },
};
