// search模块的小仓库

import { reqGetsearchInfo } from "@/api"

// state：仓库存储数据的地方
const state = {
    searchList: {}
}
// mutations：修改state的唯一手段
const mutations = {
    GETSEARCHLIST(state, searchList) {
        state.searchList = searchList
    },
}
// actions：处理actions，可以书写自己的业务逻辑，也可以处理异步
const actions = {
    // params形参：是当用户排除action的时候，第二个参数传递过来，至少是一个空对象
    async getSearchList({ commit }, params = {}) {
        let result = await reqGetsearchInfo(params)
        if (result.code == 200) {
            commit("GETSEARCHLIST", result.data)
        }
    }
}
// getters：理解为计算属性
// 用于简化仓库数据，让组件获取仓库数据更加方便
const getters = {
    // 当前行参为小仓库的state并非大仓库的state
    goodsList() {
        // 可能数据出错导致searchList无数据
        return state.searchList.goodsList || []
    },
    attrsList() {
        return state.searchList.attrsList || []
    },
    trademarkList() {
        return state.searchList.trademarkList || []
    },
}

export default {
    state,
    mutations,
    actions,
    getters
}