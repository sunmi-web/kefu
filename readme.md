# 客服模块组件

## 使用

### 引用

```html

<!-- 项目入口文件 index.html | document.ejs -->

<body>
  <!-- 实例化（可选，因为包里有自动实例化的逻辑） -->
  <sunmi-kefu></sunmi-kefu>
  <!-- 调用方自定义客服UI -->
  <sunmi-kefu customed></sunmi-kefu>
  
  <!-- sunmi-kefu组件定义 -->
  <script src="https://cdn.jsdelivr.net/npm/@sunmi/kefu@latest/dist/sunmi-kefu/sunmi-kefu.js"></script>
  <!-- Kefu操作方法(可选，当需要调用 window.Kefu.toggleVisible 时为必选) -->
  <script src="https://cdn.jsdelivr.net/npm/@sunmi/kefu@latest/dist/sunmi-kefu/index.esm.js"></script>
</body>

```

### 触发客服显示

```ts

const someEventhandler = () => {
  window.Kefu.toggleVisible()
}
```

## 使用 StencilJS 开发

[StencilJS](https://stenciljs.com/docs/getting-started)
