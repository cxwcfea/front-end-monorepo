import { defineConfig } from 'vitepress';
import { applyPlugins } from '@ruabick/md-demo-plugins';

const sidebar = {
    '/': [
        {
            text: '快速开始', links: '/',
        },
        {
            text: '通用',
            items: [
                { text: '栅格', link: '/components/grid/' },
                { text: 'Layout 布局', link: '/components/layout/' },
                { text: 'Button 按钮', link: '/components/button/' },
                { text: 'Link 链接', link: '/components/link/' },
                { text: 'Box 区块', link: '/components/box/' },
                { text: 'Message 消息', link: '/components/message/' },
                { text: 'Dialog 弹窗', link: '/components/dialog/' },
                { text: 'Form 表单', link: '/components/form/' },
                { text: 'DynamicForm 动态表单', link: '/components/dynamic-form/' },
            ],
        },
        { text: '导航' },
        { text: '反馈' },
        { text: '数据录入' },
        { text: '数据展示' },
        { text: '布局' },
    ],
};

export default defineConfig({
    title: "🔨  Lucky-UI",
    description: "组件库DEMO",
    themeConfig: {
        sidebar,
    },
    markdown: {
        config: (md) => {
            applyPlugins(md);
        },
    },
});