<script setup lang="ts">
// import { ref } from 'vue';
import { MyButton } from 'lucky-ui-vite/dist/lucky-ui.mjs';

defineProps<{ msg: string }>();
</script>

<template>
    <h1>{{ msg }}</h1>
    <MyButton color="green">绿色按钮</MyButton>
</template>

<style lang="less" scoped></style>
