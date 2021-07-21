import axioxInterceptor from "./interceptor"

const apiUrl = "http://127.0.0.1:8080/v1"

/**
 * 公用请求
 * @param {*} param0
 * @returns
 */
export const request = ({ method, data, path }) => {
    return new Promise((resolve, reject) => {
        axioxInterceptor({
            url: apiUrl + path,
            method: method,
            data: data,
        })
            .then((res) => {
                resolve(res.data)
            })
            .catch((err) => {
                reject(err)
            })
    })
}
