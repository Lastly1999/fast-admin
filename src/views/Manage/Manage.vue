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
                <FButton bTColor='red' bBColor='blue' bType='primary'></FButton>
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
        FButton: () => import("@/components/FButton/FButton.vue")
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
