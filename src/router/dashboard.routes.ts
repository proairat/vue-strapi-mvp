import { ViewDashboardRoute, ViewDashboardRouteAdd, ViewDashboardRouteEdit } from '@/views/dashboard';

// todo lazy loading

export default {
  path: '/dashboard',
  name: 'ViewDashboardRoute',
  component: ViewDashboardRoute,
  children: [
    { path: 'add', name: 'ViewDashboardRouteAdd', component: ViewDashboardRouteAdd },
    { path: 'edit', name: 'ViewDashboardRouteEdit', component: ViewDashboardRouteEdit },
  ],
};
