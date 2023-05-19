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
    let token = store.state.user.token
    let name = store.state.user.userInfo.name
    // 判断用户是否登录
    if (token) {
        // 用户已经登录不能去登录页面,停留在首页
        if (to.path === '/login') {
            next('/')
        } else {
            // 登录了去的不是login
            if (name) {
                next()
            } else {
                // 没有用户信息，派发action让仓库存储用户信息再跳转
                store.dispatch("getUserinfo").then((res) => {
                    // 获取用户信息成功
                    if (res === '成功') {
                        next()
                    } else {
                        // 请求失败（token失效）获取不到用户信息
                        // 清除失效token
                        store.dispatch('Userout')
                        next('/login')
                    }
                })
            }
        }
    } else {
        // 未登录，放行
        next()
    }
})

export default router