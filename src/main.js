import Vue from 'vue'
import App from './App.vue'
//  注册全局组件
import TypeNav from './components/TypeNav'
Vue.component(TypeNav.name, TypeNav)
import Carousel from './components/Carousel'
Vue.component(Carousel.name,Carousel)
// 引入仓库
import store from './store'
// 引入路由
import router from './router'
// 引入mock数据
import './mock/mockSever'

Vue.config.productionTip = false
new Vue({
  render: h => h(App),
  // 注册路由
  router,
  // 注册仓库,组件实例身上会多一个$store属性
  store
}).$mount('#app')
