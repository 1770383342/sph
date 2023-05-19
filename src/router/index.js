import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter)

// 引入路由组件
import routes from './routes'
import store from '@/store'

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

let router = new VueRouter({
    // 配置路由
    routes,
    // 滚动行为
    scrollBehavior(to, from, savedPosition) {
        return { y: 0 }
    }
})

// 全局首位，前置守卫
router.beforeEach((to, from, next) => {
    // to and from are both route objects. must call `next`.
    // to:你想要跳转的路由信息
    // from:你从那个路由来的信息
    // next:放行函数 next()放行     next(path)放行到指令路由
    next()
})

export default router