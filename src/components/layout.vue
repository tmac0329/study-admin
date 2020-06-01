<template>
    <div class="container">
        <el-container>
            <el-header height="50px">
                <div class="l">
                    <i class="el-icon-s-fold i-fold"></i>
                    <div class="logo" @click="testFun">
                        <img src="@/assets/images/logo.png" alt="">
                    </div>
                </div>
                <div class="r">
                    <div class="avatar">
                        <img src="@/assets/images/avatar_default.png" alt="">
                    </div>
                </div>
            </el-header>
            <el-container>
                <el-aside width="240px">
                    <el-menu
                        :router="true"
                        :default-active="currentPath"
                        class="plat-menu">
                        <sidebar-item v-for="route in permission.accessRoutes" :key="route.path" :item="route" :parentPath="route.path"/>
                    </el-menu>
                </el-aside>
                <el-main>
                    <transition name="main-anim">
                        <router-view/>
                    </transition>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'
import SidebarItem from '@/components/home/SidebarItem'
export default {
    components:{
        SidebarItem
    },
    data(){
        return{
            
        }
    },
    computed:{
        ...mapGetters([
            'permission',
            'user'
        ])
    },
    methods:{
        testFun(){
            console.log("currentRoles",this.user);
            this.$store.dispatch('user/changeRoles',['admin']);
            // console.log('accessRoutes',this.permission.accessRoutes);
            // console.log(564,this.user.roles);
        }
    },
    created(){
        // this.routers = this.$router.options.routes;
        // console.log(111,this.permission);
        // this.routers = this.permission.accessRoutes;
        this.currentPath = this.$route.path;
    }
}
</script>

<style lang="scss" scoped>
@import "@/style/common";
.container{
    height: 100%;
    .el-container{
        height: 100%;
        .el-header{
            background: #fff;
            box-shadow: rgba(0, 0, 0, 0.08) 0px 1px 4px 0px;
            position: relative;
            z-index: 9;
            display: flex;
            justify-content: space-between;
            align-items: center;
            .l{
                height: 100%;
                display: flex;
                align-items: center;
                .i-fold{
                    width: 50px;
                    height: 50px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    background: $theme-color;
                    color: #fff;
                    font-size: 25px;
                    cursor: pointer;
                }
                .logo{
                    width: 80px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    cursor: pointer;
                    img{
                        width: 35px;
                    }
                }
            }
            .r{
                height: 100%;
                display: flex;
                align-items: center;
                .avatar{
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    width: 40px;
                    img{
                        width: 28px;
                    }
                }
            }
        }
        .el-aside{
            background: #fff;
            box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 4px 0px;
        }
        .el-main{
            overflow-x: hidden;
            height: 100%;
        }
    }
}

</style>