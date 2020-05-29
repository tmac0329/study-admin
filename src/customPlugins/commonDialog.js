import permissionDialog from './commonDialog/permissionDialog'

// 定义插件对象
const CommonDialog = {}

CommonDialog.install = (Vue,options) => {
    // 实例化permissionDialog
    const PermissionDialogInstance = Vue.extend(permissionDialog);
    let permissionComponentInstance;
    const initInstance = () => {
        // 初始化实例
        permissionComponentInstance = new PermissionDialogInstance();
        // 获取实例DOM
        let permissionEl = permissionComponentInstance.$mount().$el;
        // 将DOM插入文档
        document.body.appendChild(permissionEl);
    }

    // 将实例方法绑定到全局
    Vue.prototype.$permissionDialog = {
        show(){
            if(!permissionComponentInstance){
                initInstance();
            }
            permissionComponentInstance.show();
        }
    }
}

export default CommonDialog;