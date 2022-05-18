import Vue from 'vue';
import Router from 'vue-router';
import type { RouteConfig } from 'vue-router';
import Indexrouter from '@/views/Index/route';

const routes: RouteConfig[] = [
	...Indexrouter,
];

Vue.use(Router);
export default new Router({
	routes
});
