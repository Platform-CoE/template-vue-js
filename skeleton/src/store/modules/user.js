const state = () => ({
  user: null,
});

const mutations = {
  setUser(state, user) {
    state.user = user;
  },
  clearUser(state) {
    state.user = null;
  },
};

const actions = {
  login({ commit }, userData) {
    commit('setUser', userData);
  },
  logout({ commit }) {
    commit('clearUser');
  },
};

const getters = {
  user: (state) => state.user,
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
