import Vue from "vue";
import Vuex from "vuex";
// 需要使用插件一次
Vue.use(Vuex)

// 引入小仓库
import home from "./home";
import search from "./search";
import detail from "./detail";
import supCart from "./supCart";
import user from "./user";
// 引入swiper插件的样式
import "swiper/css/swiper.css"

// 对外暴露Store类的一个实例
export default new Vuex.Store({
    // 实例 Vuex仓库模块化开发存储数据
    modules: {
        home,
        search,
        detail,
        supCart,
        user
    }
})