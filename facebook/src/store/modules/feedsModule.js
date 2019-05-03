import { getData } from "../../service.js";

export const feedsModule = {
  state: {
    feeds:[]
  },
  getters: {
    getFeeds(state) {
      return state.feeds;
    }
  },
  actions: {
    loadData({ commit }) {
      getData().then(data1 => {
        commit('getJsonData', data1)
      });
    },

  },
  mutations: {
    getJsonData(state, posts) {
      console.log(posts, "post");
      state.feeds =  posts;
    },

  }
}






