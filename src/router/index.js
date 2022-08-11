import { createRouter, createWebHistory } from 'vue-router'
import StartScreenView from "../views/StartScreenView.vue";
import HomeScreenView from "../views/HomeScreenView.vue";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'splash',
      component: StartScreenView,
    },
    {
      path: '/home',
      name: 'home',
      component: HomeScreenView
    },
  ],
});

export default router
