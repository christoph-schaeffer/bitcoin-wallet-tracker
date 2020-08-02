export default {
  mutateToggleShowDrawer: (state) => {
    state.showDrawer = !state.showDrawer;
  },
  mutateSetShowDrawer: (state, payload) => {
    state.showDrawer = payload;
  },
};
