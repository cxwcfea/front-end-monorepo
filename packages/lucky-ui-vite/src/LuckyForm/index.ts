import { App } from 'vue';
import LuckyForm from './LuckyForm.vue';
import LuckyFormItem from './LuckyFormItem.vue';
import 'uno.css';
import './style/index.less';

LuckyForm.FormItem = LuckyFormItem;

export { LuckyForm };

export type { FormInstance, ValidateRule } from './common';

export default {
    install(app: App) {
        app.component('LuckyForm', LuckyForm);
    },
};
