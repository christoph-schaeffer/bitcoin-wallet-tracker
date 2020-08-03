import apiService from '.';

const resource = 'ticker';

export default {
  get: () => apiService.get(resource),
};
