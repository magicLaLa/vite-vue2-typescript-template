import { resolve } from 'path';
import { defineConfig, loadEnv } from 'vite';
import { createVuePlugin } from 'vite-plugin-vue2';
import viteCompression from 'vite-plugin-compression';

export default defineConfig(({ mode }) => {
	const env = loadEnv(mode, process.cwd());
	return {
		publicDir: 'static',
		base: env.VITE_ASSETS_PUBLICPATH,
		resolve: {
			alias: {
				'@': resolve(__dirname, 'src')
			},
		},
		plugins: [
			createVuePlugin({
				jsx: true,
			}),
			viteCompression({
				threshold: 10240,
				algorithm: 'gzip'
			})
		]
	};
});
