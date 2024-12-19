import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../components/HomePage.vue';
import Dinosaur from '../components/Dinosaur.vue';

export default createRouter({
  history: createWebHistory('/'),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomePage,
    },
    {
      path: '/:id',
      name: 'Dinosaur',
      component: Dinosaur,
      props: true
    },
  ],
});
