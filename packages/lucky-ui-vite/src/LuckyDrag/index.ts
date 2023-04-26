import { App } from 'vue';
import LuckyDrag from './LuckyDrag.vue';
import DragItem from './DragItem.vue';
import DragLayout from './DragLayout.vue';
import 'uno.css';
import './style/index.less';

LuckyDrag.DragLayout = DragLayout;
LuckyDrag.DragItem = DragItem;

export { LuckyDrag };

// export type { FormInstance, ValidateRule } from './common';

export default {
    install(app: App) {
        app.component('LuckyDrag', LuckyDrag);
    },
};
