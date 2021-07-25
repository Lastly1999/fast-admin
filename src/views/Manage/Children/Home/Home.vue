<template>
    <div>
        <UserPanel />
        <a-row type="flex" :gutter="16" style="padding:10px">
            <a-col :span="6" :order="4">
                <a-card title="Card title" :bordered="false">
                    <p>Card content</p>
                    <p>Card content</p>
                    <p>Card content</p>
                </a-card>
            </a-col>
            <a-col :span="6" :order="3">
                <a-card title="Card title" :bordered="false">
                    <p>Card content</p>
                    <p>Card content</p>
                    <p>Card content</p>
                </a-card>
            </a-col>
            <a-col :span="6" :order="2">
                <a-card title="Card title" :bordered="false">
                    <p>Card content</p>
                    <p>Card content</p>
                    <p>Card content</p>
                </a-card>
            </a-col>
            <a-col :span="6" :order="2">
                <a-card title="Card title" :bordered="false">
                    <p>Card content</p>
                    <p>Card content</p>
                    <p>Card content</p>
                </a-card>
            </a-col>
        </a-row>
    </div>
</template>

<script>
export default {
    components: {
        UserPanel: () => import("@/components/UserPanel/UserPanel.vue"),
    },
}
</script>
