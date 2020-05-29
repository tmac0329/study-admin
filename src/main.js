import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import store from '@/store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import '@/style/common.scss'
import '@/style/element.scss'

// 权限验证
import '@/feature/permission'
// 自定义插件
import CommonDialog from './customPlugins/commonDialog'

Vue.config.productionTip = false

Vue.use(ElementUI);
Vue.use(CommonDialog);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
