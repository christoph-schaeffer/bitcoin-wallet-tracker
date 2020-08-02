export default {
  setMarketCap: (state, payload) => {
    state.marketCap = payload;
  },
  setTotalBc: (state, payload) => {
    state.totalBc = payload;
  },
  setTransactionCount24Hr: (state, payload) => {
    state.transactionCount24Hr = payload;
  },
  setBtcSent24Hr: (state, payload) => {
    state.btcSent24Hr = payload;
  },
  setHashRate: (state, payload) => {
    state.hashRate = payload;
  },
  setDifficulty: (state, payload) => {
    state.difficulty = payload;
  },
};
