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
                component: () => import('@/views/study-group/vue-router-study'),
                children:[
                    {
                        path : 'multiview',
                        hideInMenu:true,
                        component: () => import('@/views/study-group/vue-router/vue-router-multiview')
                    },
                ]
            },
            // vue-router学习路由
            {
                path : 'vue-router-example',
                hideInMenu:true,
                component: () => import('@/views/study-group/vue-router/vue-router-example')
            },
            {
                path : 'vue-router-example/:id',
                hideInMenu:true,
                component: () => import('@/views/study-group/vue-router/vue-router-example')
            },
            {
                path : 'vue-router-example-*',
                hideInMenu:true,
                component: () => import('@/views/study-group/vue-router/vue-router-example')
            },
            {
                path : 'vue-router-404',
                hideInMenu:true,
                redirect : 'vue-router-example'
            },
            {
                path : 'vue-router-test-alias',
                alias : 'vue-router-alias',
                hideInMenu:true,
                component: () => import('@/views/study-group/vue-router/vue-router-example')
            },
            {
                path : 'vue-router-params',
                name : 'VueTransportParams',
                props:true,
                hideInMenu:true,
                component: () => import('@/views/study-group/vue-router/vue-router-example')
            },
            // end
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