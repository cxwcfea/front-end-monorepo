# Button 按钮
常用操作按钮

## 基础用法

基础的函数用法

<demo src="./BtnDemo.vue" title="" desc="使用`size`、`color`、`pain`、`round`属性来定义 Button 的样式"></demo>


```vue:demo
<template>
    <div class="flex flex-row">
        <MyButton icon="edit" plain></MyButton>
        <MyButton icon="delete" plain></MyButton>
        <MyButton icon="share" plain></MyButton>
        <MyButton round plain icon="search">搜索</MyButton>
    </div>
</template>
```