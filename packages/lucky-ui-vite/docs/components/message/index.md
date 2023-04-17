# LuckyMessage 消息
简单的消息

## 基础用法

展示消息的用法

```vue:demo
<template>
    <div class="flex flex-row">
        <button @click="handleClick">点我</button>
    </div>
</template>

<script lang="ts" setup>
import LuckyMessage from '../../../../dist/LuckyMessage/index.mjs';

const handleClick = () => {
    LuckyMessage.open({
        text: '您好，这是默认信息提示',
        // duration: 0,
    });
};
</script>
```