// home模块的小仓库
import { reqCatgoryList, reqFloorList, reqGetBanner } from "@/api"

// state：仓库存储数据的地方
const state = {
    // 根据接口返回值类型初始化
    categoryList: [],
    bannerList: [],
    floorList: []
}
// mutations：修改state的唯一手段
const mutations = {
    CATEGORYLIST(state, categoryList) {
        // 删掉最后两个数据
        categoryList.pop()
        categoryList.pop()
        state.categoryList = categoryList
    },
    GETBANNERLIST(state, bannerList) {
        state.bannerList = bannerList
    },
    GETFLOORLIST(state, floorList) {
        state.floorList = floorList
    }
}
// actions：处理actions，可以书写自己的业务逻辑，也可以处理异步
const actions = {
    // 通过api里面的接口函数，向服务器发请求，获取服务器数据
    async categoryList({ commit }) {
        let result = await reqCatgoryList()
        // console.log(result);
        if (result.code == 200) {
            commit("CATEGORYLIST", result.data)
        }
    },
    // 获取首页轮播图数据
    async getBannerList({ commit }) {
        let result = await reqGetBanner()
        if (result.code === 200) {
            commit("GETBANNERLIST", result.data)
        }
    },
    // 获取floor数据
    async getFloorList({ commit }) {
        let result = await reqFloorList()
        if (result.code === 200) {
            commit("GETFLOORLIST", result.data)
        }
    }
}
// getters：理解为计算属性，用于简化仓库数据，让组件获取仓库数据更加方便
const getters = {
    newMutations() {
        state.categoryList.pop()
        state.categoryList.pop()
        return state.categoryList
    }
}

export default {
    state,
    mutations,
    actions,
    getters
}