import type { ModuleTree } from 'vuex';
import { RootState } from './interface';
import IndexStore from '@/views/Index/store';

const modules: ModuleTree<RootState> = {
	IndexStore,
};

export default modules;
