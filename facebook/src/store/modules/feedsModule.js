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
        commit('getFeedsData', data1)
      });
    },

  },
  mutations: {
  getFeedsData(state, posts) {
      console.log(posts, "feeds in mutations");
      state.feeds =  posts;
    },

  }
}






