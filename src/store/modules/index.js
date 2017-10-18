import api from '../fetch/api';

const state = {
	modules: []
}

const actions = {
	LOAD_MODULES_LIST: function ({ commit }) {
		api.commonApi('/index').then( res => {
			commit('SET_MODULES_LIST', { list: res })
		})
	}
}

const mutations = {
	SET_MODULES_LIST: (state, { list }) => {
		state.modules = list;
	}
}

const getters = {

}

export default {
    state,
    actions,
    getters,
    mutations
}