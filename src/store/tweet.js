import router from "../router";
import { tweetService } from "../services/tweetService";

const user = JSON.parse(localStorage.getItem("user"));
const state = {};

const actions = {
  getFeed({ dispatch, commit }) {
    tweetService.getFeed().then(
      (tweet) => {
        console.log(tweet);
        commit("setTweets", tweet);
      },
      (error) => {
        console.log(error);
      }
    );
  },
  postTweet({ dispatch, commit }, data) {
    tweetService.postTweet(data).then(
      (tweet) => {
        console.log(tweet);
      },
      (error) => {
        console.log(error);
      }
    );
  },
};

const mutations = {
  setTweets(state, tweets) {
    state.tweets = tweets;
  },
  addTweet(state, tweet) {
    state.tweets.unshift(tweet);
  },
  appendTweets(state, tweets) {
    state.tweets = tweets.concat(state.tweets);
  },
};

const getters = {
  tweets(state) {
    return state.tweets;
  },
};

export const tweet = {
  namespaced: true,
  state,
  actions,
  getters,
  mutations,
};
