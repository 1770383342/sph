// 当前这个模块所以的api接口进行统一管理
import request from "./request";
import mockRequests from "./mockAjax"

// 三级联动的接口
// /api/product/getBaseCategoryList
// 发请求:axios发请求返回结果Promise对象
export const reqCatgoryList = () => request({ url: '/product/getBaseCategoryList', method: 'get' })

// 获取banner（home首页轮播）接口
export const reqGetBanner = () => mockRequests.get('/banner')

// 获取floor数据
export const reqFloorList = () => mockRequests.get('/floor')

// 获取搜索模块数据 /api/list post请求
export const reqGetsearchInfo = (params) => request.post('/list', params)

// 获取产品信息详情接口
export const reqGoodsInfo = (skuId) => request.get(`/item/${skuId}`)

// 添加购物车请求
export const reqAddOrUpdateShopToCart = (skuId, skuNum) => request.post(`/cart/addToCart/${skuId}/${skuNum}`)

// 获取购物车列表接口
export const reqCartList = () => request.get('/cart/cartList')

// 删除购物车商品
export const reqDeleteCart = (skuId) => request.delete(`/cart/deleteCart/${skuId}`)

// 切换商品选中状态
export const reqChangeCheckCart = (skuId, isChecked) => request.get(`/cart/checkCart/${skuId}/${isChecked}`)

// 获取验证码接口
export const reqSendCode = (phone) => request.get(`/user/passport/sendCode/${phone}`)

// 注册用户
export const reqRegister = (params) => request.post('/user/passport/register', params)

// 用户登录
export const reqUserLogin = (params) => request.post('/user/passport/login', params)

// 获取用户信息【需要带token】
export const reqUserInfo = () => request.get('/user/passport/auth/getUserInfo')

// 退出登录
export const reqUserLogout = () => request.get('/user/passport/logout')

// 获取用户地址信息
export const reqFindUserAddressList = () => request.get('/user/userAddress/auth/findUserAddressList')

// 获取用户交易页信息
export const reqUserTrade = () => request.get('/order/auth/trade')

// 提交订单
export const reqSubmitOrder = (tradeNo, params) => request.post(`/order/auth/submitOrder?tradeNo=${tradeNo}`, params)

// 获取支付信息
export const reqPayInfo = (orderId) => request.get(`/payment/weixin/createNative/${orderId}`)

// 查询支付订单状态
export const reqQueryPayStatus = (orderId) => request.get(`/payment/weixin/queryPayStatus/${orderId}`)

// 获取我的订单列表
export const reqOrderLimit = (page, limit) => request.get(`/order/auth/${page}/${limit}`)