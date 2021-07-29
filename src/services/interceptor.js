import axios from "axios"
import { alertMsg } from '@/utils/antd'

const axioxInterceptor = axios.create({
    timeout: 20000,
})

// interceptors.request
axioxInterceptor.interceptors.request.use((config) => {
    return config
})

// interceptors.response
axioxInterceptor.interceptors.response.use((response) => {
    return response
}, error => {
    if (error && error.response) {
        switch (error.response.status) {
            case 400:
                error.message = '错误请求'; alertMsg('error', '错误请求');
                break
            case 401:
                error.message = '未授权，请重新登录'; alertMsg('error', '未授权，请重新登录');
                break
            case 403:
                error.message = '拒绝访问'; alertMsg('error', '拒绝访问');
                break
            case 404:
                error.message = '请求错误,未找到该资源'; alertMsg('error', '请求错误,未找到该资源');
                break
            case 405:
                error.message = '请求方法未允许'; alertMsg('error', '请求方法未允许');
                break
            case 408:
                error.message = '请求超时'; alertMsg('error', '请求超时');
                break
            case 500:
                error.message = '服务器端出错'; alertMsg('error', '服务器端出错');
                break
            case 501:
                error.message = '网络未实现'; alertMsg('error', '网络未实现');
                break
            case 502:
                error.message = '网络错误'; alertMsg('error', '网络错误');
                break
            case 503:
                error.message = '服务不可用'; alertMsg('error', '服务不可用');
                break
            case 504:
                error.message = '网络超时'; alertMsg('error', '网络超时');
                break
            case 505:
                error.message = 'http版本不支持该请求'; alertMsg('error', 'http版本不支持该请求');
                break
            default:
                error.message = `连接错误${error.response.status}`; alertMsg('error', `'连接错误'${error.response.status}`);
        }
    } else {
        alertMsg('error', '服务器连接失败');
    }
})
export default axioxInterceptor
