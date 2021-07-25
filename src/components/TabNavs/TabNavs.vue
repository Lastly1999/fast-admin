<template>
    <a-tabs v-model="activeKey" hide-add type="editable-card" @edit="onEdit" style="padding: 5px 9px;" @change="tabChange">
        <!-- index ==== 1 ?  首个标签不允许删除 -->
        <a-tab-pane v-for="(pane, index) in panes" :key="pane.path" :tab="pane.title" :closable="index !== 0"> </a-tab-pane>
    </a-tabs>
</template>

<script>
export default {
    data() {
        return {
            activeKey: "",
            panes: [],
        }
    },
    methods: {
        /**
         * 移除tabNavs时的操作 因组件无法携带主要参数 因此要从tabs数据源中筛选出被删除的索引 再进行设置
         * @param key 删除tab的path名称
         */
        onEdit(key) {
            let editIndex = null
            for (let i = 0; i < this.panes.length; i++) {
                if (this.panes[i].path === key) {
                    editIndex = i
                    break
                }
            }
            this.panes.splice(editIndex, 1)
            this.activeKey = this.panes[this.panes.length - 1].path
            this.$router.push(this.panes[this.panes.length - 1].path)
        },
        /**
         * 检测路由改变 当改变时做一系列 -> 以及和初始化tabsNavs的生成tab导航公用
         * @param val 路由栈
         */
        changeRoutes(val) {
            const routes = val.matched
            let isRouteAdd = {
                path: routes[routes.length - 1].path,
                title: routes[routes.length - 1].meta.title,
            }
            const isSave = this.panes.filter((item) => item.path === isRouteAdd.path)
            if (!isSave.length > 0) {
                this.panes.push({
                    ...isRouteAdd,
                })
            }
            this.activeKey = isRouteAdd.path
        },
        /**
         * tabChange改变时 自动跳转路由
         * @parma val 组件回调的path数据
         */
        tabChange(val) {
            this.$router.push(val)
        },
    },
    watch: {
        /**
         * 监听路由栈改变 当路由改变时 进行tabNavs重置操作
         */
        $route: {
            immediate: true,
            deep: true,
            handler(val) {
                this.changeRoutes(val)
            },
        },
    },
}
</script>
<style lang="less">
@import url("./index.less");
</style>
<style lang="less">
/* 清除antd自带的边距样式 重写自带样式 */
.ant-tabs {
    border-top: 1px solid #eee;
    border-bottom: 1px solid #eee;
    background: #fff;
    .ant-tabs-bar {
        margin: 0 !important;
        border: none;
    }
}
</style>
