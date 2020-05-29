import ROLES from '@/define/user'

const state = {
    roles:[]
}

const mutations = {
    SET_ROLES(state,currentRoles){
        if(!currentRoles instanceof Array){
            console.error('SET_ROLES参数异常');
            return;
        }
        state.roles = currentRoles;
    }
}

export default {
    state,
    mutations
}
