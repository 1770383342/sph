import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter)

// 引入路由组件
import routes from './routes'

// 重写push|replace
let originPush = VueRouter.prototype.push
// 第一个参数：告诉原来的push方法，你往哪里跳转（传递哪些参数）
VueRouter.prototype.push = function (locatipon, resolve, reject) {
    if (resolve && reject) {
        originPush.call(this, locatipon, resolve, reject)
    } else {
        originPush.call(this, locatipon, () => { }, () => { })
    }
}

export default new VueRouter({
    // 配置路由
    routes,
    // 滚动行为
    scrollBehavior (to, from, savedPosition) {
        // ...
        return {y:0}
    }
})