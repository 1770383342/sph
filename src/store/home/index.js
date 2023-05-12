// home模块的小仓库
import { reqCatgoryList } from "@/api"

// state：仓库存储数据的地方
const state = {
    // 根据接口返回值类型初始化
    categoryList: []
}
// mutations：修改state的唯一手段
const mutations = {
    CATEGORYLIST(state, categoryList) {
        state.categoryList = categoryList
    }
}
// actions：处理actions，可以书写自己的业务逻辑，也可以处理异步
const actions = {
    // 通过api里面的接口函数，向服务器发请求，获取服务器数据
    async categoryList({ commit }) {
        let result = await reqCatgoryList()
        console.log(result);
        if (result.code == 200) {
            commit("CATEGORYLIST", result.data)
        }
    }
}
// getters：理解为计算属性，用于简化仓库数据，让组件获取仓库数据更加方便
const getters = {}

export default {
    state,
    mutations,
    actions,
    getters
}