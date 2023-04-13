import { App } from 'vue';
import LuckyBox from './LuckyBox';
import 'uno.css';
import './style/index.less';

// 导出Button组件
export { LuckyBox };

// 导出Vue插件
export default {
    install(app: App) {
        app.component(LuckyBox.name, LuckyBox);
    },
};
