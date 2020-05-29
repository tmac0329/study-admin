<template>
    <div>
        <el-dialog title="编辑权限" :visible.sync="currentVisible">
            <el-checkbox-group v-model="currentPermission">
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
import store from '@/store'
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
        }
    }
}
</script>

<style lang="scss" scoped>

</style>