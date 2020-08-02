import ApiService from '.';

const resource = 'ticker';

export default {
  get: () => ApiService.get(resource),
};
