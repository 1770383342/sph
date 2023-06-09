// supCart模块的小仓库

import { reqCartList, reqChangeCheckCart, reqDeleteCart } from "@/api"

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
    // 切换商品选中状态
    async changeCheckCart({ commit }, { skuId, isChecked }) {
        isChecked = isChecked ? 1 : 0
        let result = await reqChangeCheckCart(skuId, isChecked)
        if (result.code == 200) {
            return '成功'
        } else {
            return '失败'
        }
    },
    // 删除全部勾选的商品
    deleteAllChecked({ dispatch, getters }) {
        let PromiseAll = []
        getters.cartInfoList.forEach(e => {
            if (e.isChecked === 1) {
                PromiseAll.push(dispatch('deleteCart', e.skuId))
            }
        });
        return Promise.all(PromiseAll)
    }
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