import { App } from 'vue';
import LuckyDynamicForm from './LuckyDynamicForm.vue';
import 'uno.css';
import './style/index.less';

export { LuckyDynamicForm };

export type { DynamicFormField } from './common';

export default {
    install(app: App) {
        app.component('LuckyDynamicForm', LuckyDynamicForm);
    },
};
