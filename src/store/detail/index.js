// detail模块的小仓库

import { reqAddOrUpdateShopToCart, reqGoodsInfo } from "@/api"

const state = {
    goodInfo: {}
}
const mutations = {
    GETGOODSINFO(state, goodInfo) {
        state.goodInfo = goodInfo
    }
}
const actions = {
    async getGoodsInfo({ commit }, params = {}) {
        let result = await reqGoodsInfo(params)
        if (result.code == 200) {
            commit("GETGOODSINFO", result.data)
        }
    },
    // 将产品添加到购物车中
    async AddOrUpdateShopToCart({ commit }, { skuId, skuNum }) {
        let result = await reqAddOrUpdateShopToCart(skuId, skuNum)
        // 因为服务器没有返回其他的数据，使用不需要进行数据存储
        if (result.code == 200) {
            return "成功"
        } else {
            return Promise.reject(new Error('faile'))
        }
    },
}
const getters = {
    // 简化数据
    // 无数据时数据保护
    categoryView() {
        return state.goodInfo.categoryView || {}
    },
    // 产品信息数据
    skuInfo() {
        return state.goodInfo.skuInfo || {}
    },
    // 产品售卖数据
    spuSaleAttrList() {
        return state.goodInfo.spuSaleAttrList || []
    }
}

export default {
    state, mutations, actions, getters
}