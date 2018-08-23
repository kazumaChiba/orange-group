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
        path: '/news/detail',
        component: resolve => require(['pages/layout/Landing.vue'], resolve),
        children: [
            {
                path: '',
                name: '',
                component: resolve => require(['pages/NewsInner.vue'], resolve),
            }
        ]
    },
    {
        path: '/contact',
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
