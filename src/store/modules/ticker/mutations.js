export default {
  setCurrencyRates: (state, payload) => {
    state.currencyRates = payload;
  },
  fetchStart: (state) => {
    state.isLoading = true;
  },
  fetchEnd: (state) => {
    state.isLoading = false;
  },
};
