import Dashboard from '@/views/Dashboard';
import BitcoinDetails from '@/views/BitcoinDetails';
import Converter from '@/views/Converter';
import Chart from '@/views/Chart';
import MyBitcoins from '@/views/MyBitcoins';

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
export const converter = {
  path: '/Converter/:currency',
  name: 'Converter',
  component: Converter,
  props: true,
};
export const chart = {
  path: '/Chart',
  name: 'Chart',
  component: Chart,
};
export const myBitcoins = {
  path: '/My-Bitcoins',
  name: 'MyBitcoins',
  component: MyBitcoins,
};

export default [
  root,
  dashboard,
  bitcoinDetails,
  converter,
  chart,
  myBitcoins,
];
