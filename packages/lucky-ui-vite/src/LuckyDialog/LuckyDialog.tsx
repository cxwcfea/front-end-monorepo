import { defineComponent } from 'vue';
import prefixName from '../theme/index';

export default defineComponent({
    props: {
        text: {
            type: String,
            default: '默认内容',
        },
        onOk: {
            type: Function,
            default: null,
        },
    },
    emits: ['onOk'],
    setup(props, { emit }) {
        const onOk = () => {
            emit('onOk');
            if (props.onOk) {
                props.onOk();
            }
        };
        return () => {
            return (
                <div class={`${prefixName}-dialog-mask`}>
                    <div class={`${prefixName}-dialog`}>
                        <div class={`${prefixName}-dialog-text`}>{props.text}</div>
                        <div class={`${prefixName}-dialog-footer`}>
                            <button class={`${prefixName}-dialog-btn`} onClick={onOk}>
                                确定
                            </button>
                        </div>
                    </div>
                </div>
            );
        };
    },
});
