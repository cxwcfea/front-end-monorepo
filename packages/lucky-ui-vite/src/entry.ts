import { App } from 'vue';
import { LuckyButton } from './LuckyButton';
import { LuckyLink } from './LuckyLink';
import { LuckyBox } from './LuckyBox';
import SFCButton from './SFCButton.vue';
import JSXButton from './JSXButton';
import 'uno.css';

export { LuckyButton, LuckyLink, LuckyBox, SFCButton, JSXButton };

export default {
    install(app: App): void {
        app.component(LuckyButton.name, LuckyButton);
        app.component(LuckyLink.name, LuckyLink);
        app.component(LuckyBox.name, LuckyBox);
        app.component(SFCButton.name, SFCButton);
        app.component(JSXButton.name, JSXButton);
    },
};
