<template>
    <div>
        <el-card class="info-container" :key="user.roleKey">
            <div slot="header" class="header">
                <span>当前系统权限{{user.roleKey}}</span>
                <el-button type="text">{{currentPermissionList}}</el-button>
            </div>
            <div v-for="(permission,index) in sysPermissionList" :key="index" class="item" @click="changeRoles(permission)" v-hasPermission="['super']">
                <el-button type="text">{{permission}}</el-button>
                <img src="@/assets/images/logo.png" class="avatar"/>
            </div>
        </el-card>
    </div>
</template>

<script>
import hasPermission from '@/directive/permission'
import { mapGetters } from 'vuex'
export default {
    directives:{
        hasPermission
    },
    data(){
        return {
            currentPermissionList:['admin','simple'],
            sysPermissionList:['admin','simple','super']
        }
    },
    computed:{
        ...mapGetters(['user'])
    },
    methods:{
        changeRoles(permission){
            this.$store.dispatch('user/changeRoles',permission);
        }
    }
}
</script>

<style lang="scss" scoped>
.info-container{
    margin: 20px;
    display: inline-block;
    width: 400px;
    .header{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .item{
        &:hover{
            background: #f5f5f5;
        }
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 5px;
        cursor: pointer;
        .avatar{
            width: 30px;
        }
    }
}
</style>