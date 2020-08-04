import SimpleService from '@/service/simple.service';

export default {
  fetchBalance: ({ commit }, address) => {
    return SimpleService.getAddressBalance(address)
      .then(({ data }) => {
        commit('addBalance', { address: address, btc: data });
      });
  },
  updateBalance: ({ commit }, address) => {
    return SimpleService.getAddressBalance(address)
      .then(({ data }) => {
        commit('updateBalance', { address: address, btc: data });
      });
  },
  removeBalance: ({ commit }, address) => {
    commit('removeBalance', address);
  },
};
