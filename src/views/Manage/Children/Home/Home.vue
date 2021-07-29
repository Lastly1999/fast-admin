<template>
    <div>
        <UserPanel />
        <a-row type="flex" :gutter="[16, 8]" style="padding: 10px;">
            <a-col :span="6">
                <a-card title="Card title" :bordered="false">
                    <p>Card content</p>
                    <p>Card content</p>
                    <p>Card content</p>
                </a-card>
            </a-col>
            <a-col :span="6">
                <a-card title="Card title" :bordered="false">
                    <p>Card content</p>
                    <p>Card content</p>
                    <p>Card content</p>
                </a-card>
            </a-col>
            <a-col :span="6">
                <a-card title="Card title" :bordered="false">
                    <p>Card content</p>
                    <p>Card content</p>
                    <p>Card content</p>
                </a-card>
            </a-col>
            <a-col :span="6">
                <a-card title="Card title" :bordered="false">
                    <p>Card content</p>
                    <p>Card content</p>
                    <p>Card content</p>
                </a-card>
            </a-col>
            <a-col :span="24" style="padding: 10px;">
                <a-tabs default-active-key="1">
                    <a-tab-pane key="1" tab="数据统计面板" style="padding: 25px;">
                        <PercentageCharts />
                    </a-tab-pane>
                    <a-tab-pane key="2" tab="流量统计面板" style="padding: 10px;">
                        <ColumnarCharts />
                    </a-tab-pane>
                </a-tabs>
            </a-col>
        </a-row>
    </div>
</template>

<script>
export default {
    components: {
        UserPanel: () => import("@/components/UserPanel/UserPanel.vue"),
        PercentageCharts: () => import("@/components/Charts/PercentageCharts.vue"),
        ColumnarCharts: () => import("@/components/Charts/ColumnarCharts.vue"),
    },
}
</script>
