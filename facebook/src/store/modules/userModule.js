import { getCredentials } from "../../service.js";

export const userModule = {
  state: {
    userDetails: [],
    userName: ''
  },
  getters: {
    userLogin(state) {
      console.log(state.userDetails, "ee");
      state.userDetails.users.filter(el => {
        console.log(el.name);
      });
      return state.userDetails;
    },
    specificUser(state) {
      return state.userDetails;
    }
  },
  actions: {
    checkData({ commit }) {
      return new Promise((resolve) => {
        getCredentials().then(credentials => {
          resolve(credentials);
          commit('getJsonData', credentials)
        });
      })
    }
  },
  mutations: {
    getJsonData(state, credentials) {
      state.userDetails = credentials;
      state.specificUser = state.userDetails;
      console.log(state.userDetails)
    }

  },

}
