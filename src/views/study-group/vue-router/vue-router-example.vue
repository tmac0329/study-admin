<template>
    <div class="app-container">
        <div class="content-list">
            <el-card class="content-item" shadow="never">
                <div slot="header" class="clearfix">
                    <span>动态路由匹配</span>
                </div>
                <div class="content-row">
                    <span class="l">打印当前页面动态ID值</span>
                    <span class="r">{{dynamicId}}</span>
                </div>
            </el-card>
            <el-card class="content-item" shadow="never">
                <div slot="header" class="clearfix">
                    <span>query传参</span>
                </div>
                <div class="content-row">
                    <span class="l">打印当前页面query</span>
                    <span class="r">{{$route.query.name || '等待打印'}}</span>
                </div>
            </el-card>
            <el-card class="content-item" shadow="never">
                <div slot="header" class="clearfix">
                    <span>param传参</span>
                </div>
                <div class="content-row">
                    <span class="l">打印当前页面prop name值</span>
                    <span class="r">{{name || '等待打印'}}</span>
                </div>
            </el-card>
        </div>
    </div>
</template>

<script>
export default {
    props:['name'],
    data(){
        return {

        }
    },
    created(){
        console.log(this.$route);
        this.dynamicId = this.$route.params.id || '等待打印';
    }
}
</script>

<style lang="scss" scoped>
.app-container{
    height: 100%;
}
.content-list{
    padding: 20px;
    box-sizing: border-box;
    overflow: auto;
    column-gap:15px;
    @media screen and (min-width: 1700px){
        column-count: 4;
    }
    @media screen and (max-width: 1700px){
        column-count: 3;
    }
    @media screen and (max-width: 1370px){
        column-count: 2;
    }
    @media screen and (max-width: 1000px){
        column-count: 1;
    }
    .content-item{
        width:100%;
        break-inside: avoid;
        margin:0 0 15px 0;
        .content-row{
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-size: 14px;
            margin-bottom: 10px;
            a{
                color: #999;
            }
            a:hover{
                color: #ff6a00;
            }
            .l{
                margin-right: 40px;
            }
        }
    }
}
</style>