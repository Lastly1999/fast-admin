<template>
    <a-breadcrumb :style="{ display: inline ? 'inline' : block ? 'block' : '' }">
        <a-breadcrumb-item v-for="(item, index) in breadList" :key="index">
            {{ item.meta.title }}
        </a-breadcrumb-item>
    </a-breadcrumb>
</template>

<script>
export default {
    props: {
        inline: {
            type: Boolean,
            default: () => true,
        },
        block: {
            type: Boolean,
            default: () => false,
        },
    },
    data() {
        return {
            breadList: [],
        }
    },
    created() {
        this.breadList = this.$route.matched.filter((item) => item.name)
    },
    // 监听路由栈变化 -> 因为要进行路由变化时的面包屑更新
    watch: {
        $route: {
            immediate: true,
            deep: true,
            handler() {
                this.breadList = this.$route.matched
                console.log(this.$route.matched)
            },
        },
    },
}
</script>
