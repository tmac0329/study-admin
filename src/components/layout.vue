<template>
    <div class="container">
        <el-container>
            <el-aside width="250px">
                <div class="logo">
                    <span class="sys-name">学习系统</span>
                </div>
                <p class="slogen">自律使你自由</p>
                <el-menu
                    default-active="1-1"
                    class="plat-menu">
                    <el-submenu index="1">
                        <template slot="title">
                            <div class="menu-title">
                                <div>
                                    <i class="el-icon-location"></i>
                                    <span>导航一</span>
                                </div>
                                <s></s>
                            </div>
                        </template>
                        <el-menu-item index="1-1">选项1</el-menu-item>
                        <el-menu-item index="1-2">选项2</el-menu-item>
                        <el-menu-item index="1-3">选项3</el-menu-item>
                    </el-submenu>
                    <el-menu-item index="2">
                        <i class="el-icon-menu"></i>
                        <span slot="title">导航二</span>
                    </el-menu-item>
                    <el-menu-item index="4">
                        <i class="el-icon-setting"></i>
                        <span slot="title">导航四</span>
                    </el-menu-item>
                </el-menu>
            </el-aside>
            <el-main>Main</el-main>
        </el-container>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
@import "@/style/common";
.container{
    height: 100%;
    .el-container{
        height: 100%; 
        display: flex;
        .el-aside{
            flex-shrink: 0;
            flex-grow: 0;
            background: #fff;
            margin: 15px;
            border-radius: 6px;
            .logo{
                display: flex;
                margin: 20px 0 0;
                justify-content: center;
                align-items: center;
                font-size: 20px;
                color: #42276a;
                font-weight: 700;
            }
            .slogen{
                text-align: center;
                font-size: 14px;
                color: #42276a;
                margin-top: 10px;
            }
            .el-menu{
                margin-top: 20px;
                .menu-title{
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    s{
                        display: none;
                        width: 15px;
                        height: 15px;
                        border-radius: 50%;
                        border: 2px solid $stress-color;
                    }
                }
            }
        }
        .el-main{
            flex-grow: 1;
            flex-shrink: 1;
            background: #fff;
            border-radius: 6px;
            margin: 15px 15px 15px 0;
        }
    }
}
</style>