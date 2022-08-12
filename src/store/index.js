import { createStore } from "vuex";
import axios from "axios"

const store = createStore( {
  state() {
    return {
      ExclusiveOfferData: [],
    };
  },
  mutations: {
    setFetchData(state, payload) {
      state.ExclusiveOfferData = payload;
    },
  },
  actions: {
    async fetchData({ commit }, payload) {
      const fetchData = await axios.get("http://localhost:3000/ExclusiveOffer");
      commit("setFetchData", fetchData.data);
    },
}});

export default store;
