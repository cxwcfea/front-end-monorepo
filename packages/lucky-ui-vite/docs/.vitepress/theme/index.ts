import DefaultTheme from 'vitepress/theme'
import DemoBlock from '@ruabick/vitepress-demo-block';
import '@ruabick/vitepress-demo-block/dist/style.css';
import LuckyUI from '../../../src/entry';

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.use(LuckyUI);
    app.component('demo', DemoBlock);
  },
}