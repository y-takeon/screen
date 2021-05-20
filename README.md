# screen

> vue3.0

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

## 组件

## 开发

此项目采用 vue3.0 开发，需要熟悉 vue3.0 相关的技术，具体可查看官方文档

### axios

接口使用 axios 统一封装，需要修改域名或者拦截请求可在 src/utils/request.js 中进行配置，需要修改 api 接口可在 src/api/index.js 中进行配置

### 组件通信

此项目采用两种组件通信方式，具体使用以及原理可以参照 vue 文档

> props/emit provide/inject

### echarts

项目中使用 echarts 进行数据可视化操作，主要使用了折线图，柱状图和地图渲染，其中地图渲染过程如下：

1、获取高德地图地图数据（需要用到高德地图 key）

2、获取地图数据，然后对数据进行格化操作

3、渲染地图

注意：地图轮播预警信息弹框不是使用 echart 渲染，而是上层 DOM 移动实现，该弹框的定位需要计算获得，弹框的移动范围为页面正中间以页面高度为边长的正方形，地图区域高亮是通过区域判断对地图重新渲染实现的。

### 边框
