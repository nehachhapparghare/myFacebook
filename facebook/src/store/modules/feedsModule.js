import { getData } from "../../service.js";

export const feedsModule = {
  state: {
    feeds: [],
    selectedFeed: null
  },
  getters: {
    getFeeds(state) {
      console.log(state.feeds, "feeds in getters");
      return state.feeds;
    },
    displaySelectedFeed(state) {
      console.log(state.selectedFeed, "selected feed in getter");
      return state.selectedFeed;
    }

  },
  actions: {
    loadData({ commit }) {
      getData().then(data1 => {
        commit('getFeedsData', data1.feeds)
      });
    },
    searchData({ commit }, searchText) {
      commit('getSearchData', searchText)
    },
    getSelectedFeed({ commit }, selectedFeed) {
      commit('showSelectedFeed', selectedFeed)
    },

  },
  mutations: {
    getFeedsData(state, posts) {
      console.log(posts, "feeds in mutations");
      state.feeds = posts;
    },
    getSearchData(state, searchText) {
      console.log(searchText, "search in mutation");
      console.log(state.feeds, "feeds in mutation");
      state.feeds = state.feeds.filter((el) => {
        return el.title.match(searchText);
      });
    },
    showSelectedFeed(state, selectedFeed) {
      state.selectedFeed = selectedFeed;
      console.log(selectedFeed, "selected feed in mutation");
    }
  }
}






