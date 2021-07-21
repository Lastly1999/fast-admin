<template>
    <a-layout id="components-layout-demo-custom-trigger">
        <a-layout-sider v-model="collapsed" :trigger="null" collapsible>
            <div class="logo" />
            <TreeMenus :data="menus" />
        </a-layout-sider>
        <a-layout>
            <a-layout-header style="background: #fff; padding: 0;">
                <a-icon class="trigger" :type="collapsed ? 'menu-unfold' : 'menu-fold'" @click="() => (collapsed = !collapsed)" />
            </a-layout-header>
            <a-layout-content :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }">
                <router-view />
            </a-layout-content>
        </a-layout>
    </a-layout>
</template>

<script>
export default {
    name: "manage",
    components: {
        // 左侧导航菜单
        TreeMenus: () => import("@/components/TreeMenus/TreeMenus.vue"),
    },
    data() {
        return {
            collapsed: false,
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
        }
    },
}
</script>
<style>
#components-layout-demo-custom-trigger {
    height: 100%;
}
#components-layout-demo-custom-trigger .trigger {
    font-size: 18px;
    line-height: 64px;
    padding: 0 24px;
    cursor: pointer;
    transition: color 0.3s;
}

#components-layout-demo-custom-trigger .trigger:hover {
    color: #1890ff;
}

#components-layout-demo-custom-trigger .logo {
    height: 32px;
    background: rgba(255, 255, 255, 0.2);
    margin: 16px;
}
</style>
