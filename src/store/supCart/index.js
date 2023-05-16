// supCart模块的小仓库

import { reqCartList } from "@/api"

const state = {
    carList: []
}
const mutations = {
    GETCARTLIST(state, carList) {
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