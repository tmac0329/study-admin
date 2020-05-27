<template>
    <div v-if="!item.hideInMenu">
        <template v-if="hasChild(item) && !isOnlyOneChild(item)">
            <el-submenu :index="item.path">
                <template slot="title">
                    <i :class="item.meta.icon?item.meta.icon:''"></i>
                    <span>{{item.meta.title}}</span>
                </template>
                <el-menu-item v-for="child in item.children" :key="child.path" :index="resolvePath(child.path)">{{child.meta.title}}</el-menu-item>
            </el-submenu>
        </template>
        <el-menu-item v-else :index="resolvePath(item.path)">
            <i :class="item.meta.icon?item.meta.icon:''"></i>
            <span slot="title">{{item.meta.title}}</span>
        </el-menu-item>
    </div>
</template>

<script>
export default {
    name:"SidebarItem",
    props:{
        item:{
            type:Object,
            required:true   
        },
        parentPath:{
            type:String,
            default:''
        }
    },
    methods:{
        // 判断是否有子菜单
        hasChild(item){
            if(item.hideInMenu){
                return;
            }
            if(item.children && item.children.length > 0){
                return true;
            }
            return false;
        },
        // 判断是否只有一个子菜单，若只有一个子菜单不展开，路由直接赋值到父路由
        isOnlyOneChild(item){
            if(item.hideInMenu){
                return;
            }
            if(item.children && item.children.length === 1){
                return true;
            }
            return false;
        },
        // 合并路径
        resolvePath(routePath){
            if(this.isOnlyOneChild(this.item)){
                return routePath + '/' + this.item.children[0].path;
            }
            if(this.parentPath && this.parentPath.length > 0){
                return this.parentPath + '/' + routePath;
            }
            return routePath;
        }
    }
}
</script>

<style lang="scss" scoped>

</style>