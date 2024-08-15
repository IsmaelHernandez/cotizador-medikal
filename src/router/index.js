import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/components/HomeComponent.vue'),
  },
  {
    path: '/form-medikal',
    name: 'form-medikal',
    component: () => import('@/components/FormComponent.vue'),
  },
  {
    path: '/download',
    name: 'download',
    component: () => import('@/components/DownloadComponent.vue'),
  },
  {
    path: '/users-additional',
    name: 'users-additional',
    component: () => import('@/components/UsersAdditionalComponent.vue'),
  },
  {
    path: '/additional-users',
    name: 'additional-users',
    component: () => import('@/components/AdditionalUsersComponent.vue'),
  },
  {
    path: '/folios-additional',
    name: 'folios-additional',
    component: () => import('@/components/FoliosAdditionalComponent.vue'),
  },
  {
    path: '/additional-folios',
    name: 'additional-folios',
    component: () => import('@/components/AdditionalFoliosComponent.vue'),
  },
  {
    path: '/plans-medikal',
    name: 'plans-medikal',
    component: () => import('@/components/PlansComponent.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;