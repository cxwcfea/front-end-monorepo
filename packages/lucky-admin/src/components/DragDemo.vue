<template>
    <div>
        <LuckyDrag
            :horizontal="horizontal"
            :component-map="componentMap"
            :layout-list="layoutList"
            @change="onChange"
        ></LuckyDrag>
    </div>
</template>

<script setup lang="ts">
import { LuckyDrag } from '@cxwcfea/lucky-ui-vite';
import Mod1 from './mod-1.vue';
import Mod2 from './mod-2.vue';
import Mod3 from './mod-3.vue';

const horizontal = false;

const componentMap = {
    Mod1,
    Mod2,
    Mod3,
};

const layoutList = [
    {
        name: '组件001',
        componentName: 'Mod1',
    },
    {
        name: '组件002',
        componentName: 'Mod2',
    },
    {
        name: '组件003',
        componentName: 'Mod3',
    },
];

const onChange = (e: unknown) => {
    console.log('onChange ===', e);
};
</script>
