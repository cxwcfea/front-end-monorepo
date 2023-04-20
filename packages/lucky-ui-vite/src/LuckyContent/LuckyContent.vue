<template>
    <main :class="{ [className]: true }">
        <slot v-if="$slots.default"></slot>
    </main>
</template>

<script lang="ts" setup>
import prefixName from '../theme/index';

const className = `${prefixName}-content`;
</script>
