import type { Module } from 'vuex';
import { RootState } from '@/store/interface';
import { State } from './interface';

const store: Module<State, RootState> = {
	namespaced: true,
	state: {
		str: 'test',
	},
	mutations: {
		modifyStr(state, payload: string) {
			state.str = payload;
		}
	}
};

export default store;
