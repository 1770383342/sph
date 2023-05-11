// 对于axios进行二次封装
import axios from "axios";

// 1:利用axios对象的方法create，去创建一个axios实例
// 2:request就是axios，只不过稍微配置了一下
const request = axios.create({
    // 配置对象
    // 基础路径，发送请求的时候，路径中会出现api
    baseURL: '/api',
    // 代表请求超时的时间5s
    timeout: 5000,
})

// 请求拦截器：在发送请求之前，请求拦截器可以监测到，可以在请求发出去之前做一些事情
request.interceptors.request.use((config) => {
    // config:配置对象，对象里面有一个属性很重要，header请求头
    return config
})

// 响应拦截器
request.interceptors.response.use((res) => {
    // 成功的回调函数：服务器响应数据回来以后，响应拦截器可以检测到，可以做一些事情
    return res.data
}, (error) => {
    // 服务器响应失败的回调函数
    return Promise.reject(new Error('faile'))
})

// 对外暴露
export default request;