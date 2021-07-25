<template>
    <div>
        <div style="padding: 20px; background: #fff;">
            <h1 style="font-weight: 600; font-size: 20px;">后端权限</h1>
            <span>后台权限由接口数据动态渲染接管</span>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        onEdit(targetKey, action) {
            this[action](targetKey)
        },
        add() {
            const panes = this.panes
            const activeKey = `newTab${this.newTabIndex++}`
            panes.push({
                title: `New Tab ${activeKey}`,
                content: `Content of new Tab ${activeKey}`,
                key: activeKey,
            })
            this.panes = panes
            this.activeKey = activeKey
        },
        remove(targetKey) {
            let activeKey = this.activeKey
            let lastIndex
            this.panes.forEach((pane, i) => {
                if (pane.key === targetKey) {
                    lastIndex = i - 1
                }
            })
            const panes = this.panes.filter((pane) => pane.key !== targetKey)
            if (panes.length && activeKey === targetKey) {
                if (lastIndex >= 0) {
                    activeKey = panes[lastIndex].key
                } else {
                    activeKey = panes[0].key
                }
            }
            this.panes = panes
            this.activeKey = activeKey
        },
    },
}
</script>
