import {constantRoutes,asyncRoutes} from '@/router'
import ROLES from '@/define/user'

const state = {
    accessRoutes:[]
}

const mutations = {
    'SET_ACCESS_ROUTES' : (state,routes) => {
        state.accessRoutes = constantRoutes.concat(routes);
    }
}

const actions = {
    createRoutes({commit},currentRoles){
        return new Promise(resolve => {
            let accessAsyncRoutes = filterRoutes(asyncRoutes,currentRoles);
            commit('SET_ACCESS_ROUTES',accessAsyncRoutes);
            resolve(accessAsyncRoutes);
        })
    }
}

function filterRoutes(routes,currentRoles){
    let accessRoutes = [];
    routes.map(route => {
        const tmp = {...route}  //避免修改数据源
        if(tmp.meta && tmp.meta.roles && tmp.meta.roles.length > 0){
            if(!hasPermission(tmp,currentRoles)) return false;
        }
        //未设置权限默认展示
        if(tmp.children && tmp.children.length > 0){
            tmp.children = filterRoutes(tmp.children,currentRoles)
        }
        accessRoutes.push(tmp);
    })
    return accessRoutes;
}

function hasPermission(route,currentRoles){
    return route.meta.roles.some(role => currentRoles.includes(role))
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}