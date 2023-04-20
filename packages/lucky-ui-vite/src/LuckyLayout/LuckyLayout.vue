<template>
    <section :class="{ [className]: true, [hasSiderClassName]: hasSider }">
        <slot v-if="$slots.default"></slot>
    </section>
</template>

<script setup lang="ts">
import prefixName from '../theme/index';

defineProps<{ hasSider?: boolean }>();
const className = `${prefixName}-layout`;
const hasSiderClassName = `${className}-has-sider`;
</script>
