<template>
    <a-menu mode="inline" theme="dark" :inline-collapsed="collapsed" @click="menuClick">
        <template v-for="item in data">
            <a-menu-item v-if="!item.children" :key="item.key">
                <a-icon type="pie-chart" />
                <span>{{ item.title }}</span>
            </a-menu-item>
            <sub-menu v-else :key="item.key" :menu-info="item" />
        </template>
    </a-menu>
</template>

<script>
import { Menu } from "ant-design-vue"
const SubMenu = {
    template: `
      <a-sub-menu :key="menuInfo.key" v-bind="$props" v-on="$listeners">
        <span slot="title">
          <a-icon type="mail" /><span>{{ menuInfo.title }}</span>
        </span>
        <template v-for="item in menuInfo.children">
          <a-menu-item v-if="!item.children" :key="item.key">
            <a-icon type="pie-chart" />
            <span>{{ item.title }}</span>
          </a-menu-item>
          <sub-menu v-else :key="item.key" :menu-info="item" />
        </template>
      </a-sub-menu>
    `,
    name: "SubMenu",
    isSubMenu: true,
    props: {
        ...Menu.SubMenu.props,
        menuInfo: {
            type: Object,
            default: () => ({}),
        },
    },
}
export default {
    components: {
        "sub-menu": SubMenu,
    },
    props: {
        data: {
            type: Array,
            default: () => [],
        },
    },
    data() {
        return {
            collapsed: false,
        }
    },
    methods: {
        toggleCollapsed() {
            this.collapsed = !this.collapsed
        },
        menuClick(menuItem) {
            this.$emit("change", menuItem)
        },
    },
}
</script>
