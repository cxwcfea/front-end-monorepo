<script setup lang="ts">
// import { ref } from 'vue';
import { LuckyButton } from '@cxwcfea/lucky-ui-vite';

defineProps<{ msg: string }>();
</script>

<template>
    <h1>{{ msg }}</h1>
    <LuckyButton color="green">绿色按钮</LuckyButton>
</template>

<style lang="less" scoped></style>
