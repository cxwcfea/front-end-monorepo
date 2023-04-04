// import { createApp } from "vue";
// import LuckyButton from "./button";
// import SFCButton from './SFCButton.vue';
// import JSXButton from "./JSXButton";

// createApp(LuckyButton).mount("#app");
// createApp(SFCButton).mount("#app");
// createApp(JSXButton).mount("#app");

import { createApp } from 'vue/dist/vue.esm-browser';
import LuckyUI from './entry';

createApp({
    template: `
        <div style="margin-bottom:20px;">
            <LuckyButton color="blue">主要按钮</LuckyButton>
            <LuckyButton color="green">绿色按钮</LuckyButton>
            <LuckyButton color="gray">灰色按钮</LuckyButton>
            <LuckyButton color="yellow">黄色按钮</LuckyButton>
            <LuckyButton color="red">红色按钮</LuckyButton>
        </div>
        <div style="margin-bottom:20px;">
            <LuckyButton color="blue" plain>朴素按钮</LuckyButton>
            <LuckyButton color="green" plain>绿色按钮</LuckyButton>
            <LuckyButton color="gray" plain>灰色按钮</LuckyButton>
            <LuckyButton color="yellow" plain>黄色按钮</LuckyButton>
            <LuckyButton color="red" plain>红色按钮</LuckyButton>
        </div>
        <div style="margin-bottom:20px;">
            <LuckyButton size="small" plain>小按钮</LuckyButton>
            <LuckyButton size="medium" plain>中按钮</LuckyButton>
            <LuckyButton size="large" plain>大按钮</LuckyButton>
        </div>
        <div style="margin-bottom:20px;">
            <LuckyButton color="blue" round plain icon="search">搜索按钮</LuckyButton>
            <LuckyButton color="green" round plain icon="edit">编辑按钮</LuckyButton>
            <LuckyButton color="gray" round plain icon="check">成功按钮</LuckyButton>
            <LuckyButton color="yellow" round plain icon="message">提示按钮</LuckyButton>
            <LuckyButton color="red" round plain icon="delete">删除按钮</LuckyButton>
        </div>
        <div style="margin-bottom:20px;">
            <LuckyButton color="blue" round plain icon="search"></LuckyButton>
            <LuckyButton color="green" round plain icon="edit"></LuckyButton>
            <LuckyButton color="gray" round plain icon="check"></LuckyButton>
            <LuckyButton color="yellow" round plain icon="message"></LuckyButton>
            <LuckyButton color="red" round plain icon="delete"></LuckyButton>
        </div>
        <div style="margin-bottom:20px;">
            <LuckyLink></LuckyLink>
        </div>
    `,
})
    .use(LuckyUI)
    .mount('#app');
