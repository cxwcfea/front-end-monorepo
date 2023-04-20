# LuckyLayout 布局
简单的布局

## 基础用法

展示布局的用法

```vue:demo
<template>
    <LuckyLayout class="example" :hasSider="true">
        <LuckySider class="example-sider">Sider</LuckySider>
        <LuckyLayout>
            <LuckyHeader class="example-header">Header</LuckyHeader>
            <LuckyContent class="example-content">Content</LuckyContent>
            <LuckyFooter class="example-footer">Footer</LuckyFooter>
        </LuckyLayout>
    </LuckyLayout>
</template>

<style lang="less">
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
  height: 100px;
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
```

无侧边栏的布局的用法

```vue:demo
<template>
    <LuckyLayout class="example">
        <LuckyHeader class="example-header">Header</LuckyHeader>
        <LuckyContent class="example-content">Content</LuckyContent>
        <LuckyFooter class="example-footer">Footer</LuckyFooter>
    </LuckyLayout>
</template>

<style lang="less">
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
  height: 100px;
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
```

双侧边栏的布局的用法

```vue:demo
<template>
    <LuckyLayout class="example" :hasSider="true">
        <LuckySider class="example-sider">Sider</LuckySider>
        <LuckyLayout>
            <LuckyHeader class="example-header">Header</LuckyHeader>
            <LuckyContent class="example-content">Content</LuckyContent>
            <LuckyFooter class="example-footer">Footer</LuckyFooter>
        </LuckyLayout>
        <LuckySider class="example-sider">Sider</LuckySider>
    </LuckyLayout>
</template>

<style lang="less">
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
  height: 100px;
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
```

顶部Header的布局的用法

```vue:demo
<template>
    <LuckyLayout class="example">
        <LuckyHeader class="example-header">Header</LuckyHeader>
        <LuckyLayout :hasSider="true">
            <LuckySider class="example-sider">Sider</LuckySider>
            <LuckyLayout>
                <LuckyContent class="example-content">Content</LuckyContent>
                <LuckyFooter class="example-footer">Footer</LuckyFooter>
            </LuckyLayout>
        </LuckyLayout>
    </LuckyLayout>
</template>

<style lang="less">
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
  height: 100px;
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
```

顶部底部铺满的布局的用法

```vue:demo
<template>
    <LuckyLayout class="example">
        <LuckyHeader class="example-header">Header</LuckyHeader>
        <LuckyLayout :hasSider="true">
            <LuckySider class="example-sider">Sider</LuckySider>
            <LuckyLayout>
                <LuckyContent class="example-content">Content</LuckyContent>
            </LuckyLayout>
            <LuckySider class="example-sider">Sider</LuckySider>
        </LuckyLayout>
        <LuckyFooter class="example-footer">Footer</LuckyFooter>
    </LuckyLayout>
</template>

<style lang="less">
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
  height: 100px;
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
```

综合的布局的用法

```vue:demo
<template>
  <LuckyLayout class="example">
    <LuckyHeader class="example-header">Header</LuckyHeader>
    <LuckyLayout :hasSider="true">
      <LuckySider class="example-sider">Sider</LuckySider>
      <LuckyLayout>
        <LuckyContent class="example-content-1">
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
</template>

<style lang="less">
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

.example-content-1 {
  background: #007a6ec0;
//   height: 100px;
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
```