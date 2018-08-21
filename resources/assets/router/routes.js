const routes = [
    {
        path: '/',
        redirect: '/',
        component: resolve => require(['pages/layout/Landing.vue'], resolve),
        children: [
            {
                path: '/',
                name: '首頁',
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
                name: '關於橘色',
                component: resolve => require(['pages/About.vue'], resolve),
            }
        ]
    },
    {
        path: '/news',
        redirect: '/news',
        component: resolve => require(['pages/layout/Landing.vue'], resolve),
        children: [
            {
                path: '',
                name: '橘色新訊',
                component: resolve => require(['pages/News.vue'], resolve),
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
                name: '聯絡我們',
                component: resolve => require(['pages/Contact.vue'], resolve),
            }
        ]
    }



]
export default routes
