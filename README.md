# Vue 2 + TypeScript + Vite

- views 下 按模块划分，每个模块算一个单元，包含当前模块所要的 route、store、components，公共组件放到外层 component 下

- 抛弃 babel，因为 vite 是基于 esbuild 来进行编译转换的

- node 版本可以修改 `.nvmec` / 或者在 `package.json` 中配置 [engines](https://docs.npmjs.com/cli/v8/configuring-npm/package-json#engines)

## 注意：

- 目前 node 的版本为 ~~12.5.0~~, 需要升级为 __^14.17.0__([vue-eslint-parser 移除了对 12.22.0 的支持](https://github.com/vuejs/vue-eslint-parser/commit/caac5e8eb1118c46ab0b2720b740166c136c39b4))，后续可以通过 nvm 来安装不同的 node 版本 来升级相关依赖：例如把 ESlint7 -> ESlint8

- 目前项目中 ESLint 等相关依赖时基于 v7 版本，因为 v8 版本是强制 node 版本为 ~~^12.22.0~~ ^14.17.0

- 目前 Vuex、Vue-router 版本为 3.x 版，因为后续版本就是基于 vue3 来的

- vite 的 sass 是基于 [`sass`](https://github.com/sass/sass) 默认调用的是 [`dart-sass`](https://github.com/sass/dart-sass)，而且不能更改，所以项目中使用 `/deep/` 改为 `::v-deep`

**推荐使用 [`nvm`](https://github.com/nvm-sh/nvm) 来做 node 的版本管理**

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

- [unplugin-vue-components](https://github.com/antfu/unplugin-vue-components) 按需引入插件,如果 node 版本在 14 以下 只能安装 0.14.12 或以下 版本 [v0.14.13 specify node version](https://github.com/antfu/unplugin-vue-components/commit/62f7798)，引入方式需要改为:

```ts
import Components from 'unplugin-vue-components/dist/vite';
import { ViewUiResolver } from 'unplugin-vue-components/dist/resolvers';
```

- [vite-plugin-style-import](https://github.com/vbenjs/vite-plugin-style-import) 按需导入组件库样式 node >= 14

- [@rollup/plugin-inject](https://github.com/rollup/plugins/tree/master/packages/inject) 全局注入变量，记得声明:

	```ts
	import jQuery from 'jquery';

	declare global {
		interface window {
			$: jQuery;
		}
	}

	// vite.config.ts
	import inject  from '@rollup/plugin-inject';
	{
		plugins: [
			...
			inject({
				$: 'jquery',
			}),
			...
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

### 功能

- 增加 gizp 压缩
- 增加 自动压缩 dist（可修改） 目录
- 添加全局 scss 样式:

```ts
defineConfig({
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: '@import "@/styles/global.scss";',
			}
		},
	},
});
```
