import { createApp, h } from 'vue';
import LuckyMessage from './LuckyMessage.vue';
import type { MessageParams } from './types';
import './style/index.less';

const Message = {
    name: 'LuckyMessage',
    open(params: MessageParams) {
        const dom = document.createElement('div');
        const body = document.querySelector('body') as HTMLBodyElement;
        let { duration } = params;
        if (duration === undefined) {
            duration = 3000;
        }
        body.appendChild(dom);
        const msg = h(LuckyMessage, params);
        const app = createApp({
            render() {
                return msg;
            },
        });
        app.mount(dom);

        const internalClose = () => {
            msg.component?.exposed?.closeMessage?.();
            setTimeout(() => {
                app.unmount();
                dom.remove();
            }, 500);
        };

        let timer: number | null = null;
        if (duration > 0) {
            timer = setTimeout(() => {
                internalClose();
            }, duration);
        }

        return {
            close: () => {
                if (timer) {
                    clearTimeout(timer);
                    timer = null;
                }
                internalClose();
            },
        };
    },
};

export default Message;
