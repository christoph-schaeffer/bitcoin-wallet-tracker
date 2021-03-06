import SimpleService from '@/service/simple.service';

const SATOSHI_FACTOR = 100000000;

export default {
  fetchBalance: ({ commit }, address) => SimpleService.getAddressBalance(address)
    .then(({ data }) => {
      commit('addBalance', { address, btc: parseFloat(data) / SATOSHI_FACTOR });
    }),
  updateBalance: ({ commit }, address) => SimpleService.getAddressBalance(address)
    .then(({ data }) => {
      commit('updateBalance', { address, btc: parseFloat(data) / SATOSHI_FACTOR });
    }),
  removeBalance: ({ commit }, address) => commit('removeBalance', address),

  updateAllBalances: ({ state, dispatch }) => {
    const actions = state.balances.map((balance) => dispatch('updateBalance', balance.address));

    return Promise.all(actions);
  },
};
