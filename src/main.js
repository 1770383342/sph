import Vue from 'vue'
import App from './App.vue'
//  注册全局组件
import TypeNav from './pages/Home/TypeNav'
Vue.component(TypeNav.name, TypeNav)

Vue.config.productionTip = false
// 引入仓库
import store from './store'
// 引入路由
import router from './router'
// 测试接口
import { reqCatgoryList } from "./api";
reqCatgoryList( )
new Vue({
  render: h => h(App),
  // 注册路由
  router,
  // 注册仓库,组件实例身上会多一个$store属性
  store
}).$mount('#app')
