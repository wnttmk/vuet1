
export default[
    {
      path: '/about',
      name: 'About',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
      children:[
        {
          path:'a1',
          component:()=>import('@/components/a1.vue')
        },
        {
          path:'a2',
          component:()=>import('@/components/a2.vue')
        }
  
      ]
    }
]