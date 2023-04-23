# LuckyForm 表单 
简单的表单

## 基础用法

展示表单的用法

```vue:demo
<template>
    <div class="example">
        <LuckyForm
            ref="formRef"
            :model="model"
            @finish="onFinish"
            @finishFail="onFinishFail"
        >
            <FormItem label="数据1" name="data1" :rule="rule1">
                <input v-model="model.data1" />
            </FormItem>
            <FormItem label="数据2" name="data2" :rule="rule2">
                <input v-model="model.data2" />
            </FormItem>
            <FormItem>
                <button html-type="submit">submit</button>
                <button @click="onReset">reset</button>
            </FormItem>
        </LuckyForm>
        <div>
            <div>data1: {{ model.data1 }}</div>
            <div>data2: {{ model.data2 }}</div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue';
import { LuckyForm } from '../../../../dist/LuckyForm/index.mjs';

const { FormItem } = LuckyForm;

const formRef = ref<any>();
const model = reactive<{ data1: string; data2: string }>({
    data1: 'Data 001',
    data2: 'Data 002'
});

const onReset = () => {
    formRef.value?.resetFields();
};

const rule1 = {
    validator: (val: string) => {
        const hasError = /^[0-9]{1,}$/gi.test(`${val || ''}`) !== true;
        return {
            hasError,
            message: hasError ? '仅支持0-9的数字' : ''
        };
    }
};

const rule2 = {
    validator: (val: string) => {
        const hasError = /^[a-z]{1,}$/gi.test(`${val || ''}`) !== true;
        return {
            hasError,
            message: hasError ? '仅支持a-z的大小写字母' : ''
        };
    }
};

const onFinish = (e: any) => {
    console.log('success =', e);
};

const onFinishFail = (e: any) => {
    console.log('fail =', e);
};
</script>

<style>
html,
body {
  height: 100%;
  width: 100%;
}
.example {
  width: 400px;
  margin: 100px auto;
  box-sizing: border-box;
  background: #f0f0f0;
}
</style>
```