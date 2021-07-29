/**
 * 后台路由配置
 * @date 2021年7月29日17:19:06
 * @deprecated 注意!! 这边的file路径名称是为了拼接 src/views/manage/children 文件夹下的视图模板
 * @author lastly
 */
export const routes = [
    {
        path: "/manage/home",
        file: '/Home/Home.vue',
        title: '工作台'
    },
    {
        path: "/manage/backBoneRole",
        file: '/BackBoneRole/BackBoneRole.vue',
        title: '基于后端权限'
    },
    {
        path: "/manage/FormDesign",
        file: '/FormDesign/FormDesign.vue',
        title: '表单设计器'
    }
]