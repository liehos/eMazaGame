
const routes = [
  {
    path: '/',
    component: () => import('layouts/HomePageLayout.vue'),
    children: [
      { path: '', component: () => import('pages/HomePage.vue') }
    ]
  },
  {
    path: '/dashboard',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/dashboard', component: () => import('pages/Dashboard.vue') },
      // { path: '/account', component: () => import('pages/Account.vue') },
      // { path: '/statistics', component: () => import('pages/Statistics.vue') },
      // { path: '/ranking', component: () => import('pages/Ranking.vue') },
      // { path: '/points', component: () => import('pages/Points.vue') },
    ]
  },
  {
    path: '/account',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Account.vue') }
    ]
  },
  {
    path: '/statistics',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Statistics.vue') }
    ]
  },
  {
    path: '/points',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Points.vue') }
    ]
  },
  {
    path: '/ranking',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Ranking.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
