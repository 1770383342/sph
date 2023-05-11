// 当前这个模块所以的api接口进行统一管理
import request from "./request";

// 三级联动的接口
// /api/product/getBaseCategoryList
// 发请求:axios发请求返回结果Promise对象
export const reqCatgoryList = () => request({ url: '/product/getBaseCategoryList', method: 'get' })