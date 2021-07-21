import { request } from "../http"

/**
 * 用户登录
 * @param {} data
 * @returns
 */
export const userLogin = (params) => {
    return request({
        method: "post",
        path: "/user/login",
        data: params,
    })
}
