<template>
    <div>
        <el-dialog title="编辑权限" :visible.sync="currentVisible">
            <el-checkbox-group v-model="currentPermission" class="wrapper" @change="onPermissionChange">
                <el-checkbox-button v-for="(permission,index) in allPermission" :label="permission" :key="index">{{permission}}</el-checkbox-button>
            </el-checkbox-group>
            <div slot="footer">
                <el-button @click="currentVisible = false">取 消</el-button>
                <el-button type="primary" @click="currentVisible = false">确定</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>
/**
 * 该插件需要迭代修改为系统公用方法，目前置于插件中主要是为了学习插件方式，但是由于要操作store，使得该插件耦合性较高，不适合独立封装为项目插件，后面有其他插件案例可迭代将此插件转移
 */
import store from '@/store' //因为是在插件中 store需通过引用调用
import ROLES from '@/define/user'
export default {
    data(){
        return {
            currentVisible : false,
            allPermission : ROLES,
            currentPermission : []
        }
    },
    created(){
        console.log(ROLES);
    },
    methods:{
        show(){
            this.currentVisible = true;
        },
        onPermissionChange(permission){
            if(permission.length <= 0){
                return;
            }
            store.commit('SET_ROLES',[...permission]);
        }
    }
}
</script>

<style lang="scss" scoped>
.wrapper{
    display: flex;
    justify-content: center;
}
</style>