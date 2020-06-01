import Vue from 'vue'
import router from '@/router'
import store from '@/store'
import ROLES from '@/define/user'

router.beforeEach(async(to,from,next) => {
    // next();
    // 权限验证
    let hasRoles = store.getters.user.roles && store.getters.user.roles.length > 0;
    if(hasRoles){
        next();
    }else{
        // 未单独设置权限给最高权限
        store.commit('user/SET_ROLES',[ROLES.SUPER]);
        console.log(store.getters.user);
        let accessRoutes = await store.dispatch('permission/createRoutes',store.getters.user.roles);
        router.addRoutes(accessRoutes);
        next({...to});
        // Vue.prototype.$permissionDialog.show();
    }
})