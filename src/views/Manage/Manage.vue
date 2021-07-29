<template>
    <a-layout id="components-layout-demo-custom-trigger">
        <a-layout-sider v-model="collapsed" :trigger="null" collapsible>
            <div class="logo" />
            <!-- 导航菜单 -->
            <TreeMenus :data="menus" @change="menuChange" />
        </a-layout-sider>
        <a-layout>
            <a-layout-header style="background: #fff; padding: 0; height: 50px; line-height: 50px;">
                <!-- 收展按键 -->
                <a-icon class="trigger" :type="collapsed ? 'menu-unfold' : 'menu-fold'" @click="() => (collapsed = !collapsed)" />
                <!-- 面包屑 -->
                <Breadcrumb />
                <!-- 顶部操作栏 -->
                <HeaderTools style="float:right;"/>
            </a-layout-header>
            <TabsNavs />
            <a-layout-content>
                <!-- 为路由设置过渡效果 appear为是否初始化过渡效果 -->
                <transition appear mode="out-in" enter-active-class="fade-in-left" leave-active-class="fade-out-right">
                    <router-view />
                </transition>
            </a-layout-content>
        </a-layout>
    </a-layout>
</template>

<script>
import { mapState } from "vuex"
export default {
    name: "manage",
    components: {
        // 左侧导航菜单
        TreeMenus: () => import("@/components/TreeMenus/TreeMenus.vue"),
        // 面包屑
        Breadcrumb: () => import("@/components/Breadcrumb/Breadcrumb.vue"),
        // tabs导航
        TabsNavs: () => import("@/components/TabNavs/TabNavs.vue"),
        // 顶部工具操作栏
        HeaderTools: () => import("@/components/HeaderTools/HeaderTools.vue"),
    },
    data() {
        return {
            collapsed: false,
            menus: [],
        }
    },
    computed: {
        ...mapState({
            role: (state) => state.role,
        }),
    },
    created() {
        this.initSystemRoleMenus()
    },
    methods: {
        /**
         * 系统菜单权限判断 -> 基于前端
         * @deprecated 系统级id判断 这边是由vuex的前端判断，所以暂时的写死的权限
         */
        initSystemRoleMenus() {
            for (const roleKey in this.role) {
                if (this.role[roleKey].id === this.role.roleId) {
                    this.menus = this.role[roleKey].menus
                }
            }
        },
        /**
         * 系统菜单权限判断 -> 基于后台
         * @deprecated 系统级权限判断 基于后台传递的权限菜单以及权限id进行动态配置判断
         */
        requestSystemRoleMenus() {
            this.$store.dispatch("saveUserRoleInfo", {
                userRoleId: 1,
                roleMenus: "",
            })
        },
        menuChange(item) {
            this.$router.push(item.key)
        },
    },
}
</script>
<style>
#components-layout-demo-custom-trigger {
    height: 100%;
}
#components-layout-demo-custom-trigger .trigger {
    font-size: 18px;
    line-height: 50px;
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
