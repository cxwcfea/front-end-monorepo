<template>
    <header :class="{ [className]: true }">
        <slot v-if="$slots.default"></slot>
    </header>
</template>

<script lang="ts" setup>
import prefixName from '../theme/index';

const className = `${prefixName}-header`;
</script>
