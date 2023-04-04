# LuckyButton 按钮
常用操作按钮

## 基础用法

基础的函数用法

<demo src="./BtnDemo.vue" title="" desc="使用`size`、`color`、`pain`、`round`属性来定义 LuckyButton 的样式"></demo>


```vue:demo
<template>
    <div class="flex flex-row">
        <LuckyButton icon="edit" plain></LuckyButton>
        <LuckyButton icon="delete" plain></LuckyButton>
        <LuckyButton icon="share" plain></LuckyButton>
        <LuckyButton round plain icon="search">搜索</LuckyButton>
    </div>
</template>
```