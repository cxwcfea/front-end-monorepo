import { createApp, h } from 'vue';
import DialogComponent from './LuckyDialog';
import 'uno.css';
import './style/index.less';

function createDialog(params: { text: string; onOk: () => void }) {
    const dom = document.createElement('div');
    const body = document.querySelector('body') as HTMLBodyElement;
    body.appendChild(dom);

    const app = createApp({
        render() {
            return h(DialogComponent, params);
        },
    });
    app.mount(dom);

    return {
        close: () => {
            app.unmount();
            dom.remove();
        },
    };
}

const Dialog: { name: string; createDialog: typeof createDialog } = {
    name: 'LuckyDialog',
    createDialog,
};

export default Dialog;
