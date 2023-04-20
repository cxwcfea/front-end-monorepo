<script setup lang="ts">
// import { ref } from 'vue';
import {
    LuckyButton,
    LuckyMessage,
    LuckyLayout,
    LuckyHeader,
    LuckyFooter,
    LuckyContent,
    LuckySider,
    LuckyRow,
    LuckyCol,
} from '@cxwcfea/lucky-ui-vite';

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
    <div>
        <LuckyLayout class="example">
            <LuckyHeader class="example-header">Header</LuckyHeader>
            <LuckyLayout :has-sider="true">
                <LuckySider class="example-sider">Sider</LuckySider>
                <LuckyLayout>
                    <LuckyContent class="example-content">
                        <LuckyRow :style="{ width: '100%' }">
                            <LuckyCol class="gird" :span="4">col-4</LuckyCol>
                            <LuckyCol class="gird gird-dark" :span="4">col-4</LuckyCol>
                            <LuckyCol class="gird" :span="4">col-4</LuckyCol>
                            <LuckyCol class="gird gird-dark" :span="4">col-4</LuckyCol>
                            <LuckyCol class="gird" :span="4">col-4</LuckyCol>
                            <LuckyCol class="gird gird-dark" :span="4">col-4</LuckyCol>
                        </LuckyRow>
                        <LuckyRow :style="{ width: '100%' }">
                            <LuckyCol class="gird gird-dark" :span="8">col-8</LuckyCol>
                            <LuckyCol class="gird" :span="8">col-8</LuckyCol>
                            <LuckyCol class="gird gird-dark" :span="8">col-8</LuckyCol>
                        </LuckyRow>
                        <LuckyRow :style="{ width: '100%' }">
                            <LuckyCol class="gird" :span="8">col-8</LuckyCol>
                            <LuckyCol class="gird gird-dark" :span="8">col-8</LuckyCol>
                            <LuckyCol class="gird" :span="8">col-8</LuckyCol>
                        </LuckyRow>
                        <LuckyRow :style="{ width: '100%' }">
                            <LuckyCol class="gird" :span="12">col-12</LuckyCol>
                            <LuckyCol class="gird gird-dark" :span="12">col-12</LuckyCol>
                        </LuckyRow>
                        <LuckyRow :style="{ width: '100%' }">
                            <LuckyCol class="gird gird-dark" :span="12">col-12</LuckyCol>
                            <LuckyCol class="gird" :span="12">col-12</LuckyCol>
                        </LuckyRow>
                    </LuckyContent>
                </LuckyLayout>
                <LuckySider class="example-sider">Sider</LuckySider>
            </LuckyLayout>
            <LuckyFooter class="example-footer">Footer</LuckyFooter>
        </LuckyLayout>
    </div>
</template>

<style lang="less" scoped>
.example {
    width: 100%;
    height: 100%;
    margin: 0 auto;
    margin-top: 10px;
    font-size: 24px;
    color: #02290a;
    text-align: center;
}

.example-header {
    background: #00968880;
    height: 40px;
    justify-content: center;
    align-items: center;
}

.example-content {
    background: #007a6ec0;
    // height: 100px;
    justify-content: center;
    align-items: center;
}

.example-footer {
    background: #00968880;
    height: 40px;
    justify-content: center;
    align-items: center;
}

.example-sider {
    background: #106d64d6;
    width: 200px;
    justify-content: center;
    align-items: center;
}

.gird {
    background: #1397fcf2;
    margin-bottom: 10px;
    height: 100px;
    color: #ffffff;
    font-size: 18px;
    text-align: center;
    line-height: 120px;

    &.gird-dark {
        background: #023a64;
        color: #ffffff;
        margin-bottom: 10px;
    }
}
</style>
