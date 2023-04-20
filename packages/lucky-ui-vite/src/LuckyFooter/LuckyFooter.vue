<template>
    <footer :class="{ [className]: true }">
        <slot v-if="$slots.default"></slot>
    </footer>
</template>

<script lang="ts" setup>
import prefixName from '../theme/index';

const className = `${prefixName}-header`;
</script>
