# Vue 2 + TypeScript + Vite

- views 下 按模块划分，每个模块算一个单元，包含当前模块所要的 route、store、components，公共组件放到外层 component 下

### ESLint + Prettier + Editorconfig

- 推荐安装插件

```json
{
  "recommendations": [
    "octref.vetur",
		"EditorConfig.EditorConfig",
		"esbenp.prettier-vscode",
		"dbaeumer.vscode-eslint"
  ]
}
```

### 运行

```json
"scripts": {
	"dev": "vite",
	"build": "vite build",
	"preview": "vite preview"
},
```

#### 注意：

目前项目中 ESLint 等相关依赖时基于 v7 版本，因为 v8 版本是强制 node 版本为 ^12.22.0

目前 Vuex、Vue-router 版本为 3.x 版，因为后续版本就是基于 vue3 来的了
