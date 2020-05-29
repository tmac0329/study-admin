import Vue from 'vue'
import router from '@/router'
import store from '@/store'

router.beforeEach(async(to,from,next) => {
    next();
    // 权限验证
    let hasRoles = store.state.user.roles && store.state.user.roles.length > 0;
    if(hasRoles){

    }else{
        Vue.prototype.$permissionDialog.show();
    }
    console.log(hasRoles);
})