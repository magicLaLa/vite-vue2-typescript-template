import Vue from 'vue';
import Vuex from 'vuex';
import type { StoreOptions } from 'vuex';
import modules from './modules';
import { RootState } from './interface';

const baseStore: StoreOptions<RootState> = {
	state: {
		count: 0,
	},
	mutations: {
		modifyCount(state, payload: number) {
			state.count = payload;
		},
	},
	actions: {
		actionModifyCount({ commit }, payload: number) {
			commit('modifyCount', payload);
		}
	},
	modules,
};

Vue.use(Vuex);
export default new Vuex.Store(baseStore);
