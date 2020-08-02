import Dashboard from '@/views/Dashboard';

export const root = {
  path: '/',
  redirect: '/Dashboard',
};
export const dashboard = {
  path: '/Dashboard',
  name: 'Dashboard',
  component: Dashboard,
};

export default [
  root,
  dashboard,
];
