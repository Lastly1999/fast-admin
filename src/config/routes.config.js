export const routes = [
    {
        path: "/",
        redirect: "/login",
    },
    {
        path: "/login",
        name: "login",
        component: () => import("@/views/Login/Login.vue"),
    },
    {
        path: "/manage",
        name: "/manage",
        component: () => import("@/views/Manage/Manage.vue"),
        meta: {
            title: "首页",
        },
        children: [
            {
                path: "/manage/home",
                name: "/manage/home",
                component: () => import("@/views/Manage/Children/Home/Home.vue"),
                meta: {
                    title: "工作台",
                },
            },
            {
                path: "/manage/backBoneRole",
                component: () => import("@/views/Manage/Children/BackBoneRole/BackBoneRole.vue"),
                meta: {
                    title: "基于后端权限",
                },
            },
        ],
    },
]
