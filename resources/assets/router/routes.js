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
    },
    {
        path: '/about',
        redirect: '/about',
        component: resolve => require(['pages/layout/Landing.vue'], resolve),
        children: [
            {
                path: '',
                name: 'about',
                component: resolve => require(['pages/About.vue'], resolve),
            }
        ]
    },
    {
        path: '/contact',
        redirect: '/contact',
        component: resolve => require(['pages/layout/Landing.vue'], resolve),
        children: [
            {
                path: '',
                name: 'contact',
                component: resolve => require(['pages/Contact.vue'], resolve),
            }
        ]
    }



]
export default routes
