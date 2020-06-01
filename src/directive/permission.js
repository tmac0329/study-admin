import store from '@/store'

export default {
    inserted(el,{value}){
                console.log(46);
        let accessPermission = value;
        if(accessPermission instanceof Array){
            if(accessPermission.some(item => store.getters.user.roles.includes(item))){
                return;
            }
            el.remove();
        }else{
            console.error('指令参数错误，需要Array');
        }
    }
}