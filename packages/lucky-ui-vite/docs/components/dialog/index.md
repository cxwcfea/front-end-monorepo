# LuckyDialog 弹窗
简单的弹窗

## 基础用法

展示弹窗的用法

```vue:demo
<template>
    <div class="flex flex-row">
        <button @click="handleClick">点我</button>
    </div>
</template>

<script lang="ts" setup>
import LuckyDialog from '../../../../dist/LuckyDialog/index.mjs';

const handleClick = () => {
    const dialog = LuckyDialog.createDialog({
        text: '您好',
        onOk: () => {
            dialog.close();
        },
    });
};
</script>
```