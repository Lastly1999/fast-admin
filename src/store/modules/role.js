/**
 * vuex 权限模块
 * @date 2021年7月22日00:05:19
 * @author lastly
 */
const role = {
    state: () => ({
        roleId: 2,
        // 普通用户
        user: {
            id: 1,
            menus: [
                {
                    key: "1",
                    title: "工作台",
                },
            ],
        },
        // 超级用户
        superUser: {
            id: 2,
            menus: [
                {
                    key: "1",
                    title: "工作台",
                },
                {
                    key: "2",
                    title: "权限管理",
                    children: [
                        {
                            key: "2.1",
                            title: "基于前端权限",
                        },
                        {
                            key: "2.2",
                            title: "基于后端权限",
                        },
                    ],
                },
                {
                    key: "3",
                    title: "功能",
                    children: [
                        {
                            key: "3.1",
                            title: "webScoket",
                        },
                        {
                            key: "3.2",
                            title: "cavans",
                        },
                        {
                            key: "3.3",
                            title: "全屏",
                        },
                        {
                            key: "3.4",
                            title: "动画效果",
                        },
                        {
                            key: "3.5",
                            title: "右键菜单",
                        },
                        {
                            key: "3.6",
                            title: "打印功能",
                        },
                        {
                            key: "3.7",
                            title: "日志",
                        },
                        {
                            key: "3.8",
                            title: "异常捕获",
                        },
                    ],
                },
                {
                    key: "4",
                    title: "组件",
                    children: [
                        {
                            key: "4.1",
                            title: "表格",
                        },
                        {
                            key: "4.2",
                            title: "表单",
                        },
                        {
                            key: "4.3",
                            title: "动态按钮组",
                        },
                        {
                            key: "4.4",
                            title: "树形菜单",
                        },
                        {
                            key: "4.5",
                            title: "二维码",
                        },
                        {
                            key: "4.6",
                            title: "滑动验证",
                        },
                        {
                            key: "4.7",
                            title: "图片验证",
                        },
                        {
                            key: "4.8",
                            title: "MarkDown",
                            children: [
                                {
                                    key: "4.8.1",
                                    title: "WangEdit",
                                },
                                {
                                    key: "4.8.2",
                                    title: "QuckEdit",
                                },
                            ],
                        },
                        {
                            key: "4.9",
                            title: "图片裁剪",
                        },
                        {
                            key: "4.10",
                            title: "拖动窗口",
                        },
                    ],
                },
            ],
        },
        // 基于后台的权限菜单配置
        roleStore: {
            userRoleId: null,
            roleMenus: [],
        },
    }),
    mutations: {
        getUserRoleInfo(state, data) {
            state.roleStore = {
                ...data,
            }
            console.log(state)
        },
    },
    getters: {},
    actions: {
        // 请求权限菜单
        saveUserRoleInfo({ commit }, data) {
            commit("getUserRoleInfo", data)
        },
    },
}

export default role
