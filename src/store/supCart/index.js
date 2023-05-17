// supCart模块的小仓库

import { reqCartList, reqDeleteCart } from "@/api"


const state = {
    carList: []
}
const mutations = {
    GETCARTLIST(state, carList) {
        state.carList = carList
    }
}
const actions = {
    // 获取购物车列表
    async getCartList({ commit }) {
        let result = await reqCartList()
        if (result.code == 200) {
            commit("GETCARTLIST", result.data)
        }
    },
    // 删除购物车数据
    async deleteCart({ commit }, skuId) {
        let result = await reqDeleteCart(skuId)
        if (result.code == 200) {
            return '成功'
        } else {
            return '失败'
        }
    },
}
const getters = {
    carList() {
        return state.carList[0]
    },
    cartInfoList() {
        return state.carList[0].cartInfoList
    }
}

export default {
    state, mutations, actions, getters
}