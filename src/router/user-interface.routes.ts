import { 
  ViewUserInterfaceRoute,
  ViewUserInterfaceRouteAdd,
  ViewUserInterfaceRouteEdit,
} from '@/views/user-interface';

export default {
  path: '/user-interface',
  name: 'ViewUserInterfaceRoute',
  component: ViewUserInterfaceRoute,
  children: [
    { path: "add", name: "ViewUserInterfaceRouteAdd", component: ViewUserInterfaceRouteAdd },
    { path: "edit", name: "ViewUserInterfaceRouteEdit", component: ViewUserInterfaceRouteEdit },
  ],
};
