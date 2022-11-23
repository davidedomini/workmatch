const router = VueRouter.createRouter({
    history: VueRouter.createWebHistory(),
    routes: [
        { path: '/', component: Home },
        { path: '/students', component: studentscomp },
        { path: '/404', component: NotFound },
        //{path: '/:pathMatch(.*)*', redirect: '/404'}
        { path: '/:catchAll(.*)', redirect: '/404' }
    ]
  })