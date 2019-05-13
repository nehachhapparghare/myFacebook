import { getData } from "../../service.js";

export const feedsModule = {
  state: {
    feeds: [],
    selectedFeed: null,
    activeFeeds: []
  },
  getters: {
    getFeeds(state) {
      console.log(state.feeds, "feeds in getters");
      return state.feeds;
    },
    displaySelectedFeed(state) {
      console.log(state.selectedFeed, "selected feed in getter");
      return state.selectedFeed;
    },
    getActiveFeeds(state) {
      return state.activeFeeds;
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
    setActivityLog({ commit }, activeFeeds) {
      commit('getActivityLog', activeFeeds)
    },
    getUnlinkedFeed({ commit }, unlinkedFeed) {
      commit('removeUnlikedFeed', unlinkedFeed)
    }

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
    },
    getActivityLog(state, activeFeeds) {
      state.activeFeeds = activeFeeds;
      // let finalArray = [];
      // state.activeFeeds.forEach((el1) => state.feeds.forEach((el2) => {
      //   if (el1 == el2) {
      //   el2.like = 1;
      //   }
      // })
      // );
      // console.log(finalArray, "final array");
      console.log(state.activeFeeds, "active feeds in mutation");
    },
    removeUnlikedFeed(state, unlinkedFeed) {
      let temp = state.activeFeeds.filter(el => {
        return el != unlinkedFeed
      });
      state.activeFeeds = temp;
      console.log(state.activeFeeds, "filtered with unliked feed");
    }
  }
}






