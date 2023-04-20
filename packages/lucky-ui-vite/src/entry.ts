import { App } from 'vue';
import { LuckyButton } from './LuckyButton';
import { LuckyLink } from './LuckyLink';
import { LuckyBox } from './LuckyBox';
import LuckyMessage from './LuckyMessage';
import LuckyDialog from './LuckyDialog';
import { LuckyRow } from './LuckyRow';
import { LuckyCol } from './LuckyCol';
import { LuckyLayout } from './LuckyLayout';
import { LuckyHeader } from './LuckyHeader';
import { LuckyFooter } from './LuckyFooter';
import { LuckyContent } from './LuckyContent';
import { LuckySider } from './LuckySider';
import SFCButton from './SFCButton.vue';
import JSXButton from './JSXButton';
import 'uno.css';
import './theme/theme.less';

export {
    LuckyButton,
    LuckyLink,
    LuckyBox,
    LuckyMessage,
    LuckyDialog,
    LuckyRow,
    LuckyCol,
    LuckyLayout,
    LuckyHeader,
    LuckyFooter,
    LuckyContent,
    LuckySider,
    SFCButton,
    JSXButton,
};

export default {
    install(app: App): void {
        app.component(LuckyButton.name, LuckyButton);
        app.component(LuckyLink.name, LuckyLink);
        app.component(LuckyBox.name, LuckyBox);
        app.component('LuckyRow', LuckyRow);
        app.component('LuckyCol', LuckyCol);
        app.component('LuckyLayout', LuckyLayout);
        app.component('LuckyHeader', LuckyHeader);
        app.component('LuckyFooter', LuckyFooter);
        app.component('LuckyContent', LuckyContent);
        app.component('LuckySider', LuckySider);
        app.component(SFCButton.name, SFCButton);
        app.component(JSXButton.name, JSXButton);
    },
};
