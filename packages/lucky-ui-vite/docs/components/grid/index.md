# 栅格系统 
24等分栅格系统

## 基础用法

展示栅格的用法

```vue:demo
<template>
  <div class="example">
    <LuckyRow>
      <LuckyCol class="gird" :span="24">col-24</LuckyCol>
    </LuckyRow>
    <LuckyRow>
      <LuckyCol class="gird" :span="12">col-12</LuckyCol>
      <LuckyCol class="gird gird-dark" :span="12">col-12</LuckyCol>
    </LuckyRow>
    <LuckyRow>
      <LuckyCol class="gird" :span="8">col-8</LuckyCol>
      <LuckyCol class="gird gird-dark" :span="8">col-8</LuckyCol>
      <LuckyCol class="gird" :span="8">col-8</LuckyCol>
    </LuckyRow>
    <LuckyRow>
      <LuckyCol class="gird" :span="6">col-6</LuckyCol>
      <LuckyCol class="gird gird-dark" :span="6">col-6</LuckyCol>
      <LuckyCol class="gird" :span="6">col-6</LuckyCol>
      <LuckyCol class="gird gird-dark" :span="6">col-6</LuckyCol>
    </LuckyRow>
    <LuckyRow>
      <LuckyCol class="gird" :span="4">col-4</LuckyCol>
      <LuckyCol class="gird gird-dark" :span="4">col-4</LuckyCol>
      <LuckyCol class="gird" :span="4">col-4</LuckyCol>
      <LuckyCol class="gird gird-dark" :span="4">col-4</LuckyCol>
      <LuckyCol class="gird" :span="4">col-4</LuckyCol>
      <LuckyCol class="gird gird-dark" :span="4">col-4</LuckyCol>
    </LuckyRow>
    <LuckyRow>
      <LuckyCol class="gird" :span="3">col-3</LuckyCol>
      <LuckyCol class="gird gird-dark" :span="3">col-3</LuckyCol>
      <LuckyCol class="gird" :span="3">col-3</LuckyCol>
      <LuckyCol class="gird gird-dark" :span="3">col-3</LuckyCol>
      <LuckyCol class="gird" :span="3">col-3</LuckyCol>
      <LuckyCol class="gird gird-dark" :span="3">col-3</LuckyCol>
      <LuckyCol class="gird" :span="3">col-3</LuckyCol>
      <LuckyCol class="gird gird-dark" :span="3">col-3</LuckyCol>
    </LuckyRow>
    <LuckyRow>
      <LuckyCol class="gird" :span="2">col-2</LuckyCol>
      <LuckyCol class="gird gird-dark" :span="2">col-2</LuckyCol>
      <LuckyCol class="gird" :span="2">col-2</LuckyCol>
      <LuckyCol class="gird gird-dark" :span="2">col-2</LuckyCol>
      <LuckyCol class="gird" :span="2">col-2</LuckyCol>
      <LuckyCol class="gird gird-dark" :span="2">col-2</LuckyCol>
      <LuckyCol class="gird" :span="2">col-2</LuckyCol>
      <LuckyCol class="gird gird-dark" :span="2">col-2</LuckyCol>
      <LuckyCol class="gird" :span="2">col-2</LuckyCol>
      <LuckyCol class="gird gird-dark" :span="2">col-2</LuckyCol>
      <LuckyCol class="gird" :span="2">col-2</LuckyCol>
      <LuckyCol class="gird gird-dark" :span="2">col-2</LuckyCol>
    </LuckyRow>
  </div>
</template>

<style lang="less">
.example {
  width: 960px;
  margin: 0 auto;
  margin-top: 10px;
  // gird-shadow: #0000004f 1px 1px 16px;
}
.gird {
  background: #0092ff6b;
  border: 1px #0092ff6b solid;
  margin-bottom: 10px;
  height: 50px;
  color: #035593;
  font-size: 18px;
  // font-weight: bolder;
  text-align: center;
  line-height: 50px;

  &.gird-dark {
    background: #068aed;
    border: 1px #068aed solid;
    color: #ffffff;
    margin-bottom: 10px;
  }
}
</style>
`