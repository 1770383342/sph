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