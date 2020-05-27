import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routers = [
    {
        path:'/',
        redirect:'/study/vue-router-study',
        hideInMenu:true
    },
    {
        path:'/study',
        meta:{
            title:'学习用例',
            icon:'el-icon-location'
        },
        component: () => import('@/components/layout'),
        children : [
            {
                path : 'vue-router-study',
                meta:{
                    title:'vue-router',
                    icon:''
                },
                component: () => import('@/views/study-group/vue-router-study')
            },
            {
                path : 'vuex-study',
                meta:{
                    title:'vuex',
                    icon:''
                },
                component: () => import('@/views/study-group/vuex-study')
            }
        ]
    },
    {
        path:'/example-page',
        meta:{
            title:'示例页面',
            icon:'el-icon-setting'
        },
        component: () => import('@/components/layout'),
        children:[
            {
                path:'index',
                meta:{
                    title:'首页'
                },
                component: () => import('@/views/example/example-page')
            }
        ]
    }
];

const router = new VueRouter({
    mode:'history',
    routes:[...routers]
})

export default router;