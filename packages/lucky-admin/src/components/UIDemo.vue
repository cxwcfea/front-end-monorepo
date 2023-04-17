<script setup lang="ts">
// import { ref } from 'vue';
import { LuckyButton, LuckyMessage } from '@cxwcfea/lucky-ui-vite';

defineProps<{ msg: string }>();

const handleClick = () => {
    LuckyMessage.open({
        text: '您好，这是默认的信息提示',
        type: 'warn',
    });
};
</script>

<template>
    <h1>{{ msg }}</h1>
    <LuckyButton color="green" @click="handleClick">绿色按钮</LuckyButton>
</template>

<style lang="less" scoped></style>
