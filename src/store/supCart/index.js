// supCart模块的小仓库

import { reqCartList } from "@/api"

const state = {
    carList: {}
}
const mutations = {
    GETCARTLIST(state, goodInfo) {
        state.carList = carList
    }
}
const actions = {
    async getCartList({ commit }) {
        let result = await reqCartList()
        if (result.code == 200) {
            commit("GETCARTLIST", result.data)
        }
    },
}
const getters = {

}

export default {
    state, mutations, actions, getters
}