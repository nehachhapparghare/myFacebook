import { getData } from "../../service.js";

export const feedsModule = {
  state: {
    feeds:[],
  },
  getters: {
    getFeeds(state) {
      console.log(state.feeds);
      return state.feeds;
    }
  },
  actions: {
    loadData({ commit }) {
      getData().then(data1 => {
        commit('getFeedsData', data1.feeds)
      });
    },
    searchData({commit}, searchText) {
      commit('getSearchData', searchText)
    }

  },
  mutations: {
  getFeedsData(state, posts) {
      console.log(posts, "feeds in mutations");
      state.feeds =  posts;
    },
    getSearchData(state, searchText){
      console.log(searchText, "search in mutation");
      console.log(state.feeds);
      state.feeds =  state.feeds.filter((el) => {
        return el.title.match(searchText);
      });
    }
  }
}






