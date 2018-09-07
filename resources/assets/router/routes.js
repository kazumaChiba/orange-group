const routes = [
    {
        path: '/',
	    component: resolve => require(['pages/layout/Landing.vue'], resolve),
        children: [
            {
                path: '',
                name: '首頁',
                component: resolve => require(['pages/Home.vue'], resolve),
            },
	        {
		        path: 'about',
		        name: '關於橘色',
		        component: resolve => require(['pages/About.vue'], resolve),
            },
	        {
		        path: 'news',
		        name: '橘色新訊',
                component: resolve => require(['pages/News.vue'], resolve),

            },
            {
                path: 'news/detail/:id',
                name: '新光三越旗艦店開幕全店享九折優惠',
                component: resolve => require(['pages/NewsInner.vue'], resolve)
            },
	        {
		        path: 'family',
		        name: '橘色家庭',
                component: resolve => require(['pages/Family.vue'], resolve),
	        },
	        {
		        path: 'contact',
		        name: '聯絡我們',
                component: resolve => require(['pages/Contact.vue'], resolve),
	        }
        ]
    },
]
export default routes
