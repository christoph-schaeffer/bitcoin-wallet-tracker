export default {
  setDescription: (state, payload) => {
    state.description = payload;
  },
  setName: (state, payload) => {
    state.name = payload;
  },
  setPeriod: (state, payload) => {
    state.period = payload;
  },
  setStatus: (state, payload) => {
    state.status = payload;
  },
  setUnit: (state, payload) => {
    state.unit = payload;
  },
  setValues: (state, payload) => {
    state.values = payload;
  },
  fetchStart: (state) => {
    state.isLoading = true;
  },
  fetchEnd: (state) => {
    state.isLoading = false;
  },
};
