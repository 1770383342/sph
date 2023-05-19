// user模块的小仓库

import { reqRegister, reqSendCode, reqUserInfo, reqUserLogin, reqUserLogout } from "@/api"

const state = {
    code: '',
    token: localStorage.getItem('TOKEN'),
    userInfo: {}
}
const mutations = {
    GETSENDCODE(state, code) {
        state.code = code
    },
    USERLOGIN(state, token) {
        state.token = token
    },
    GETUSERINFO(state, userInfo) {
        state.userInfo = userInfo
    },
    USERLOGOUT(state) {
        state.userInfo = {}
        state.token = ''
    }
}
const actions = {
    // 获取验证码
    async getSendCode({ commit }, phone) {
        let result = await reqSendCode(phone)
        if (result.code == 200) {
            commit("GETSENDCODE", result.data)
            return result.data
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
            commit("USERLOGIN", result.data.token)
            // 持久化存储token
            localStorage.setItem('TOKEN', result.data.token)
            return '成功'
        } else {
            // 请求错误返回message
            return result.message
        }
    },
    // 获取用户信息
    async getUserinfo({ commit }) {
        let result = await reqUserInfo()
        if (result.code == 200) {
            commit("GETUSERINFO", result.data)
            return '成功'
        } else {
            // 请求错误返回message
            return result.message
        }
    },
    // 用户退出登录
    async Userout({ commit }) {
        let result = await reqUserLogout()
        if (result.code == 200) {
            commit('USERLOGOUT')
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