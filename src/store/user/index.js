// user模块的小仓库

import { reqRegister, reqSendCode, reqUserLogin } from "@/api"

const state = {
    code: '',
    token: ''
}
const mutations = {
    GETSENDCODE(state, code) {
        state.code = code
    },
    USERLOGIN(state, token) {
        state.token = token.token
    }
}
const actions = {
    // 获取验证码
    async getSendCode({ commit }, phone) {
        let result = await reqSendCode(phone)
        if (result.code == 200) {
            commit("GETSENDCODE", result.data)
            return '成功'
        } else {
            return result.message
        }
    },
    // 注册用户
    async userRegister({ commit }, params) {
        let result = await reqRegister(params)
        if (result.code == 200) {
            return '成功'
        } else {
            // 请求错误返回message
            return result.message
        }
    },
    // 用户登录
    async UserLogin({ commit }, params) {
        let result = await reqUserLogin(params)
        if (result.code == 200) {
            commit("USERLOGIN", result.data)
            return '成功'
        } else {
            // 请求错误返回message
            return result.message
        }
    },
}
const getters = {
    sendCode() {
        return state.code
    }
}

export default {
    state, mutations, actions, getters
}