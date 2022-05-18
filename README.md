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
