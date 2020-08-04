const localStorageBalances = JSON.parse(window.localStorage.getItem('vuex-balances'));

export default {
  balances: !localStorageBalances ? [] : localStorageBalances,
};
