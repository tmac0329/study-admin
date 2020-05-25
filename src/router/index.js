import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routers = [
    {
        path : '/home',
        component: () => import('@/components/layout')
    },
    {
        path : '/vue-router-study',
        component: () => import('@/components/layout'),
        children : [
            {
                path : '/',
                component: () => import('@/views/vue-router-study')
            }
        ]
    }
];

const router = new VueRouter({
    mode:'history',
    routes:[...routers]
})

export default router;