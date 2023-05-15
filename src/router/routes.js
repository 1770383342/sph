import Home from '../pages/Home'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Search from '../pages/Search'
import Detail from '../pages/Detail'

// 配置路由
export default [
    {
        // 商品详情
        path: '/detail/:skuid',
        component: Detail,
        meta: { show: true }
    },
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