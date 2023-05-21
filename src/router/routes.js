import Home from '../pages/Home'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Search from '../pages/Search'
import Detail from '../pages/Detail'
import AddCartSuccess from '../pages/AddCartSuccess'
import SchopCart from '../pages/ShopCart'
import Trade from '../pages/Trade'
import Pay from "../pages/Pay";
import PaySuccess from '../pages/PaySuccess'
import Center from '../pages/Center'
// 引入二级路由
import MyOrder from '../pages/Center/MyOrder'
import GroupOrder from '../pages/Center/GroupOrder'

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
        name: 'home',
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
    },
    {
        path: '/addCartSuccess',
        name: 'addcartssuccess',
        component: AddCartSuccess,
        meta: { show: false }
    },
    {
        path: '/shopcart',
        name: 'ShopCart',
        component: SchopCart,
        meta: { show: false }
    },
    {
        path: '/trade',
        component: Trade,
        meta: { show: false }
    },
    {
        path: '/pay',
        component: Pay,
        meta: { show: false },
        beforeEnter: (to, from, next) => {
            if (from.path === '/trade') {
                next()
            } else {
                next(false)
            }
        }
    },
    {
        path: '/paysuccess',
        component: PaySuccess,
        meta: { show: false }
    },
    {
        path: '/center',
        component: Center,
        meta: { show: false },
        // 重定向
        redirect: '/center/myorder',
        // 二级路由
        children: [
            {
                path: 'myorder',
                component: MyOrder
            },
            {
                path: 'grouporder',
                component: GroupOrder
            }
        ]
    }
]