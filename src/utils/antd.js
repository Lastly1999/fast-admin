import { message, notification } from "ant-design-vue"

/**
 * 全局弹窗 -> antd
 * @param {弹窗类型} type
 * @param {弹窗消息} msg
 */
export const alertMsg = (type, msg) => {
    return message[type](msg)
}

/**
 * 全局notifi提示
 * @param {弹窗类型} type
 * @param {弹窗消息} msg
 * @returns
 */
export const notifiMsg = (type, msg) => {
    return notification[type]({
        message: msg,
    })
}
