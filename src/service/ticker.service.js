import apiService from '.';

const RESOURCE = 'ticker';

export default {
  get: () => apiService.get(RESOURCE),
};
