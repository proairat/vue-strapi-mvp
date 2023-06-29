import { createRouter, createWebHistory } from 'vue-router';
import userInterfaceRoutes from './user-interface.routes';
import dashboardRoutes from "./dashboard.routes";

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    /*
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
    */
    { ...userInterfaceRoutes },
    { ...dashboardRoutes },
    { path: "/:pathMatch(.*)*", name: "redirectHome", redirect: "/user-interface" },
  ],
});

router.beforeEach(async (to) => {});
