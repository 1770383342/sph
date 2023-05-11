import Vue from 'vue'
import App from './App.vue'
//  注册全局组件
import TypeNav from './pages/Home/TypeNav'
Vue.component(TypeNav.name,TypeNav)

Vue.config.productionTip = false
// 引入路由
import router from './router'
new Vue({
  render: h => h(App),
  // 组测路由
  router
}).$mount('#app')
