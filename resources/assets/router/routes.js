const routes = [
    {
        path: '/',
        redirect: '/index',
        component: resolve => require(['pages/layout/Landing.vue'], resolve),
        children: [
            {
                path: 'index',
                name: 'home',
                component: resolve => require(['pages/Home.vue'], resolve),
            }
        ]
    }


]
export default routes
