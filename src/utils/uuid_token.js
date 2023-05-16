import { v4 as uuidv4 } from 'uuid'

// 生成一个uuid，每次执行不发生变化，且持久存储
export const getUUID = () => {
    // 先从本地存储看一下是否有uuid
    let uuid_token = localStorage.getItem('UUIDTOKEN')
    if (!uuid_token) {
        // 生成游客随机身份
        uuid_token = uuidv4()
        // 本地存储
        localStorage.setItem('UUIDTOKEN', uuid_token)
    }
    return uuid_token
}