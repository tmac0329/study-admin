<template>
    <div class="app-container">
        <div class="content">
            <span>我是嵌套路由组件</span>
            <el-button type="primary" size="mini" @click="$router.go(-1)">back</el-button>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {

        }
    },
    created(){

    }
}
</script>

<style lang="scss" scoped>
.app-container{
    width: 100%;
    .content{
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
}
</style>