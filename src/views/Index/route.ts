import type { RouteConfig } from 'vue-router';

export default [
	{
		path: '/',
		name: 'index',
		component: () => import('@/views/Index/index.vue')
	}
] as RouteConfig[];
