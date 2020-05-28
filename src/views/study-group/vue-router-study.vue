<template>
    <div class="app-container">
        <div class="content-list">
            <el-card class="content-item" shadow="never">
                <div slot="header" class="clearfix">
                    <span>起步1</span>
                </div>
                <div class="content-row">
                    <span class="l">基本跳转</span>
                    <router-link to="vue-router-example">to Example</router-link>
                </div>
            </el-card>
            <el-card class="content-item" shadow="never">
                <div slot="header" class="clearfix">
                    <span>动态路由匹配</span>
                </div>
                <div class="content-row">
                    <span class="l">to = /vue-router-example/101</span>
                    <router-link to="vue-router-example/101">to Example</router-link>
                </div>
                <div class="content-row">
                    <span class="l">to = /vue-router-example/102</span>
                    <router-link to="vue-router-example/102">to Example</router-link>
                </div>
            </el-card>
            <el-card class="content-item" shadow="never">
                <div slot="header" class="clearfix">
                    <span>路由query传值</span>
                </div>
                <div class="content-row">
                    <span class="l">query = {name:'Tamc'}</span>
                    <el-button type="primary" size="mini" @click="onTransportQuery">to Example</el-button>
                </div>
            </el-card>
            <el-card class="content-item" shadow="never">
                <div slot="header" class="clearfix">
                    <span>* 通配符跳转</span>
                </div>
                <div class="content-row">
                    <span class="l">to = /vue-router-example-test</span>
                    <router-link to="vue-router-example-test">to Example</router-link>
                </div>
            </el-card>
            <el-card class="content-item" shadow="never">
                <div slot="header" class="clearfix">
                    <span>嵌套路由</span>
                </div>
                <div class="content-row">
                    <span class="l">观察路由和内容改变</span>
                    <router-link to="/study/vue-router-study/multiview">to Multiview</router-link>
                </div>
                <div class="content-row">
                    <router-view/>
                </div>
            </el-card>
            <el-card class="content-item" shadow="never">
                <div slot="header" class="clearfix">
                    <span>replace跳转</span>
                </div>
                <div class="content-row">
                    <span class="l">将不会对上个路由产生历史记录</span>
                    <el-button type="primary" size="mini" @click="onReplace">to Example</el-button>
                </div>
            </el-card>
            <el-card class="content-item" shadow="never">
                <div slot="header" class="clearfix">
                    <span>路由redirect</span>
                </div>
                <div class="content-row">
                    <span class="l">to = vue-router-404<br>redirect = vue-router-example</span>
                    <router-link to="/study/vue-router-404">to Error404</router-link>
                </div>
            </el-card>
            <el-card class="content-item" shadow="never">
                <div slot="header" class="clearfix">
                    <span>路由param传值</span>
                </div>
                <div class="content-row">
                    <span class="l">路由param传值</span>
                    <el-button type="primary" size="mini" @click="transportParams">to Example</el-button>
                </div>
            </el-card>
        </div>
    </div>
</template>

<script>
export default {
    methods:{
        onTransportQuery(){
            this.$router.push({path:'/study/vue-router-example',query:{name:'Tamc'}});
        },
        onReplace(){
            this.$router.replace({path:'/study/vue-router-example'});
        },
        transportParams(){
            this.$router.push({name:'VueTransportParams',params:{name:'Tmac'}});
        }
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
            line-height: 1.5;
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