<template>
    <div ref="domItem" :class="baseClassName" draggable="true" data-drag-item="yes" @dragstart="onDragStart">
        <slot />
    </div>
</template>

<script lang="ts" setup>
import { ref, inject } from 'vue';
import { DRAG_CONTEXT_KEY, getElementIndex } from './common';
import prefixName from '../theme';
import type { DragContext } from './common';

const baseClassName = `${prefixName}-drag-item`;
const domItem = ref<HTMLElement>();
const dragContext = inject<DragContext>(DRAG_CONTEXT_KEY);

const onDragStart = (e: DragEvent) => {
    e.stopPropagation();
    const index = getElementIndex(domItem.value);
    if (dragContext) {
        dragContext.activeIndex = index;
    }
};
</script>
