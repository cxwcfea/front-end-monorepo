<template>
    <div :class="baseClassName">
        <DragLayout :horizontal="props.horizontal" @drag-over="onDragOver" @drag-end="onDragEnd">
            <DragItem v-for="(item, index) in viewData.list" :key="index">
                <div>{{ item.name }}</div>
                <component :is="componentMap[item.componentName]" v-if="item.componentName"></component>
            </DragItem>
        </DragLayout>
    </div>
</template>

<script lang="ts" setup>
import { reactive, toRaw } from 'vue';
import type { Component } from 'vue';
import DragLayout from './DragLayout.vue';
import DragItem from './DragItem.vue';
import prefixName from '../theme';
import type { DragContext } from './common';

const baseClassName = `${prefixName}-drag`;

const props = defineProps<{
    horizontal?: boolean;
    componentMap: { [name: string]: Component };
    layoutList: { name: string; componentName: string }[];
}>();

const emits = defineEmits<{
    (event: 'change', e: { layoutList: { name: string; componentName: string }[] }): void;
}>();

const componentMap = toRaw(props.componentMap);
const prevContext: DragContext = {
    activeIndex: -1,
    dragToIndex: -1,
};

const clone = (data: unknown) => {
    return JSON.parse(JSON.stringify(data));
};

let layoutList: { name: string; componentName: string }[] = toRaw(props.layoutList);

const viewData = reactive<{
    list: { name: string; componentName: string }[];
}>({
    list: clone(layoutList),
});

function resetLayoutList(context: DragContext) {
    const { activeIndex, dragToIndex } = context;
    const tempList = clone(layoutList);
    if (prevContext.activeIndex === activeIndex && prevContext.dragToIndex === dragToIndex) {
        return;
    }
    if (activeIndex >= 0 && dragToIndex >= 0) {
        const [target] = tempList.splice(activeIndex, 1);
        if (dragToIndex === 0) {
            tempList.unshift(target);
        } else if (dragToIndex >= tempList.length) {
            tempList.push(target);
        } else {
            tempList.splice(dragToIndex, 0, target);
        }
        viewData.list = tempList;
    }

    prevContext.activeIndex = activeIndex;
    prevContext.dragToIndex = dragToIndex;
}

const onDragOver = (ctx: DragContext) => {
    resetLayoutList(ctx);
};

const onDragEnd = () => {
    prevContext.activeIndex = -1;
    prevContext.dragToIndex = -1;
    layoutList = toRaw(viewData.list);
    emits('change', { layoutList });
};
</script>
