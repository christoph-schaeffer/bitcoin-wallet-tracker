export default {
  addBalance: (state, payload) => {
    state.balances.forEach((balance) => {
      if (payload.address === balance.address) {
        throw new Error('Tried to add an already existing address with the addBalance mutation');
      }
    });

    state.balances.push(payload);
    window.localStorage.setItem('vuex-balances', JSON.stringify(state.balances));
  },
  updateBalance: (state, payload) => {
    state.balances = state.balances.map(
      (balance) => (payload.address !== balance.address ? balance : payload),
    );

    window.localStorage.setItem('vuex-balances', JSON.stringify(state.balances));
  },
  removeBalance: (state, payload) => {
    state.balances = state.balances.filter((balance) => payload !== balance.address);

    window.localStorage.setItem('vuex-balances', JSON.stringify(state.balances));
  },
};
