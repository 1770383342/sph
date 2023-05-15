// detail模块的小仓库

import { reqGoodsInfo } from "@/api"

const state = {
    reqGoodsInfo: {}
}
const mutations = {
    GETGOODSINFO(state, reqGoodsInfo) {
        state.reqGoodsInfo = reqGoodsInfo
    }
}
const actions = {
    async getGoodsInfo({ commit }, params = {}) {
        let result = await reqGoodsInfo(params)
        if (result.code == 200) {
            commit("GETGOODSINFO", result.data)
        }
    },
}
const getters = {}

export default {
    state, mutations, actions, getters
}