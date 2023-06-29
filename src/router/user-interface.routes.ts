import { ViewUserInterfaceRoute, ViewUserInterfaceRouteAdd, ViewUserInterfaceRouteEdit } from '@/views/user-interface';

// todo lazy loading

export default {
  path: '/user-interface',
  name: 'ViewUserInterfaceRoute',
  component: ViewUserInterfaceRoute,
  children: [
    { path: 'add', name: 'ViewUserInterfaceRouteAdd', component: ViewUserInterfaceRouteAdd },
    { path: 'edit', name: 'ViewUserInterfaceRouteEdit', component: ViewUserInterfaceRouteEdit },
  ],
};
