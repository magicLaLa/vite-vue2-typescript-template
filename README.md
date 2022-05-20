# Vue 2 + TypeScript + Vite

- views 下 按模块划分，每个模块算一个单元，包含当前模块所要的 route、store、components，公共组件放到外层 component 下

- 抛弃 babel

- node 版本可以修改 `.nvmec` / 或者在 `package.json` 中配置 [engines](https://docs.npmjs.com/cli/v8/configuring-npm/package-json#engines)

## 注意：

- 目前 node 的版本为 _12.5.0_，后续可以通过 nvm 来安装不同的 node版本 来升级相关依赖：例如把 ESlint7 -> ESlint8

- 目前项目中 ESLint 等相关依赖时基于 v7 版本，因为 v8 版本是强制 node 版本为 ^12.22.0

- 目前 Vuex、Vue-router 版本为 3.x 版，因为后续版本就是基于 vue3 来的

__推荐使用 [`nvm`](https://github.com/nvm-sh/nvm) 来做 node 的版本管理__

### Vetur + ESLint + Prettier + Editorconfig

- 推荐安装 VScode 插件

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

### vite 插件

- [@vitejs/plugin-legacy](https://github.com/vitejs/vite/tree/main/packages/plugin-legacy) 浏览器兼容插件

- [unplugin-vue-components](https://github.com/antfu/unplugin-vue-components) 按需引入插件

### 运行

```json
"scripts": {
	"dev": "vite",
	"build": "vite build",
	"preview": "vite preview"
},
```

### 功能

- 增加 gizp 压缩
- 增加 自动压缩 dist（可修改） 目录
