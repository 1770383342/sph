import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter)

// 引入路由组件
import Home from '../pages/Home'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Search from '../pages/Search'

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
    routes: [
        {
            path: '/home',
            component: Home,
            meta: { show: true }
        },
        {
            path: '/login',
            component: Login,
            meta: { show: false }
        },
        {
            path: '/register',
            component: Register,
            meta: { show: false }
        },
        {
            // params的url参数跳转需要占位接收
            path: '/search/:keyword?',
            component: Search,
            name: 'search',
            meta: { show: true },
            props($route) {
                return { keyword: $route.params.keyword }
            }
        },
        // 重定向，访问/，让其访问Home页面
        {
            path: '*',
            component: Home,
            meta: { show: true }
        }
    ]
})