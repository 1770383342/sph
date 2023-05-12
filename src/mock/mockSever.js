// 先引入mockjs模块
import Mock from "mockjs";
// 引入josn数据
import banner from './banner'
import floor from './floor'

// mock数据
Mock.mock('/mock/banner',{code:200,data:banner})
Mock.mock('/mock/floor',{code:200,data:floor})