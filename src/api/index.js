// 当前这个模块所以的api接口进行统一管理
import request from "./request";
import mockRequests from "./mockAjax"

// 三级联动的接口
// /api/product/getBaseCategoryList
// 发请求:axios发请求返回结果Promise对象
export const reqCatgoryList = () => request({ url: '/product/getBaseCategoryList', method: 'get' })

// 获取banner（home首页轮播）接口
export const reqGetBanner=()=>mockRequests.get('/banner')

// 获取floor数据
export const reqFloorList=()=>mockRequests.get('/floor')