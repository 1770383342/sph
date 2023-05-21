import Vue from 'vue'
import App from './App.vue'
//  注册全局组件
import TypeNav from './components/TypeNav'
Vue.component(TypeNav.name, TypeNav)
import Carousel from './components/Carousel'
Vue.component(Carousel.name, Carousel)
import Pagination from './components/Pagination'
Vue.component(Pagination.name, Pagination)
// 引入仓库
import store from './store'
// 引入路由
import router from './router'
// 引入mock数据
import './mock/mockSever'
// 引入接口文件
import * as API from "@/api";
// 引入element-ui
// import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css';
// Vue.use(ElementUI); 全局注册
import { Button } from 'element-ui';
Vue.component(Button.name, Button);
// 引入插件
import VueLazyload from 'vue-lazyload'
import load from '../public/images/load.gif'
// 注册
Vue.use(VueLazyload, {
  // 懒加载默认图片
  loading: load
})

Vue.config.productionTip = false
new Vue({
  render: h => h(App),
  // 全局事件总线
  beforeCreate() {
    Vue.prototype.$bus = this
    Vue.prototype.$api = API
  },
  // 注册路由
  router,
  // 注册仓库,组件实例身上会多一个$store属性
  store
}).$mount('#app')
