import Dashboard from '@/views/Dashboard';
import BitcoinDetails from '@/views/BitcoinDetails';

export const root = {
  path: '/',
  redirect: '/Dashboard',
};
export const dashboard = {
  path: '/Dashboard',
  name: 'Dashboard',
  component: Dashboard,
};
export const bitcoinDetails = {
  path: '/Bitcoin-Details',
  name: 'BitcoinDetails',
  component: BitcoinDetails,
};

export default [
  root,
  dashboard,
  bitcoinDetails,
];
