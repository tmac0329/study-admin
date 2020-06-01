import router from '@/router'
import ROLES from '@/define/user'
import {resetRouter} from '@/router'

const state = {
    roles:[],
    roleKey:0
}

const mutations = {
    SET_ROLES(state,currentRoles){
        if(!currentRoles instanceof Array){
            console.error('SET_ROLES参数异常');
            return;
        }
        state.roles = currentRoles;
    },
    SET_ROLE_KEY(state,roleKey){
        state.roleKey = roleKey;
    }
}

const actions = {
    changeRoles({state, commit, dispatch},roles){
        return new Promise(async resolve => {
            let currentRoles = (roles instanceof Array) ? [...roles] : [roles];
            commit('SET_ROLES',currentRoles);
            // roleKey目的是触发视图组件更新
            commit('SET_ROLE_KEY',++state.roleKey);
            //必须重置router否则只更新了视图并未更新路由，新路由无法被访问到
            resetRouter();

            let accessRoutes = await dispatch('permission/createRoutes',currentRoles,{root:true})
            
            router.addRoutes(accessRoutes)

            resolve()
        })
    }
}

export default {
    namespaced:true,
    state,
    mutations,
    actions
}
