<template>
    <div>
        <!-- 若子元素需要根据权限热更新视图，需在父元素上加key属性，user.roleKey为权限动态改变次数，每次调用user.changeRole会递增 -->
        <el-card class="info-container" :key="'limit'+user.roleKey">
            <div slot="header" class="header">
                <span>当前系统权限</span>
                <el-button type="text">{{user.roles}}</el-button>
            </div>
            <div v-for="(permission,index) in sysPermissionList" :key="index" class="item" @click="changeRoles(permission.role)" v-hasPermission="permission.limit">
                <el-button type="text">{{permission.role}}</el-button>
                <img src="@/assets/images/logo.png" class="avatar"/>
            </div>
        </el-card>
        <div :key="'card'+user.roleKey">
            <el-card class="permission-card" v-hasPermission="['admin','super']">
                <div>当前元素只能通过admin+super权限查看</div>
            </el-card>
            <el-card class="permission-card" v-hasPermission="['simple','super']">
                <div>当前元素只能通过simple+super权限查看</div>
            </el-card>
            <el-card class="permission-card" v-hasPermission="['super']">
                <div>当前元素只能通过super权限查看</div>
            </el-card>
        </div>
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
            sysPermissionList:[{
                role:'admin',
                limit:['admin','super']
            },
            {
                role:'simple',
                limit:['simple','super']
            },
            {
                role:'super',
                limit:['simple','admin','super']
            }]
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
.permission-card{
    margin: 20px;
    display: inline-block;
}
</style>