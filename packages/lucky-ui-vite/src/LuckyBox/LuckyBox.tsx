import { defineComponent } from 'vue';

export default defineComponent({
    name: 'LuckyBox',
    setup(props, { slots }) {
        return () => {
            return <div class='lucky-box'>{slots?.default?.()}</div>;
        };
    },
});
