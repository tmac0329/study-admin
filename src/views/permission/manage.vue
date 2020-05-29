<template>
    <div>
        <el-card class="info-container">
            <div slot="header" class="header">
                <span>当前系统权限</span>
                <el-button type="text">{{currentPermissionList}}</el-button>
            </div>
            <div v-for="(permission,index) in sysPermissionList" :key="index" class="item">
                <el-button type="text">{{permission}}</el-button>
                <img src="@/assets/images/logo.png" class="avatar"/>
            </div>
        </el-card>
    </div>
</template>

<script>
export default {
    data(){
        return {
            currentPermissionList:['admin','simple'],
            sysPermissionList:['admin','simple','super']
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