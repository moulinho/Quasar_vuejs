
const routes = [
  {
    path: '/', Name:'HOME',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: '/ABOUT',name: 'ABOUT', component: () => import('pages/about.vue') },
      { path: '/SERVICES',name: 'SERVICES',  component: () => import('pages/service.vue') },
      { path: '/CONTACTS',name: 'CONTACTS',  component: () => import('pages/contact.vue') }
    
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
