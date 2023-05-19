// detail模块的小仓库

import { reqFindUserAddressList, reqUserTrade } from "@/api"

const state = {
    UserAddressList: [],
    UserTrade: {}
}
const mutations = {
    FINDUSERADDRESSLIST(state, UserAddressList) {
        state.UserAddressList = UserAddressList
    },
    USERTRADE(state, UserTrade) {
        state.UserTrade = UserTrade
    }
}
const actions = {
    // 将产品添加到购物车中
    async findUserAddressList({ commit }) {
        let result = await reqFindUserAddressList()
        if (result.code == 200) {
            commit('FINDUSERADDRESSLIST', result.data)
            return "成功"
        } else {
            return Promise.reject(new Error('faile'))
        }
    },
    // 获取用户交易页信息
    async UserTrade({ commit }) {
        let result = await reqUserTrade()
        if (result.code == 200) {
            commit('USERTRADE', result.data)
            return "成功"
        } else {
            return Promise.reject(new Error('faile'))
        }
    },
}
const getters = {
    UserAddressList(state) {
        return state.UserAddressList
    },
    UserTrade(state) {
        return state.UserTrade
    }
}

export default {
    state, mutations, actions, getters
}