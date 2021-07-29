<template>
    <div class="tools-class" style="display: inline-block;">
        <span class="tools-item">
            <a-icon type="search" />
        </span>
        <span class="tools-item">
            <a-popover trigger="click">
                <template slot="content" style="padding: 10px;">
                    <a-tabs default-active-key="1" style="padding: 0;">
                        <a-tab-pane key="1" tab="系统通知">
                            <a-list item-layout="horizontal" :data-source="data">
                                <a-list-item slot="renderItem" slot-scope="item">
                                    <a-list-item-meta description="系统未知的错误">
                                        <a slot="title" href="https://www.antdv.com/">{{ item.title }}</a>
                                        <fast-icon name="exclamation-triangle" />
                                    </a-list-item-meta>
                                </a-list-item>
                            </a-list>
                        </a-tab-pane>
                        <a-tab-pane key="2" tab="系统错误" force-render>
                            系统错误
                        </a-tab-pane>
                    </a-tabs>
                </template>
                <a-icon type="bell" />
            </a-popover>
        </span>
        <span class="tools-item">
            <a-icon type="sound" />
        </span>
        <span class="tools-item">
            <a-icon type="fullscreen" />
        </span>
        <span class="tools-item">
            <a-icon type="poweroff" />
        </span>
    </div>
</template>

<script>
export default {
    data() {
        return {
            data: [
                {
                    title: "Ant Design Title 1",
                },
                {
                    title: "Ant Design Title 2",
                },
                {
                    title: "Ant Design Title 3",
                },
                {
                    title: "Ant Design Title 4",
                },
            ],
        }
    },
}
</script>
<style lang="less">
.tools-class {
    .anticon {
        font-size: 18px;
        padding: 0 8px;
    }
    .tools-item {
        transition: 0.2s linear;
        height: 100%;
        display: inline-block;
        &:hover {
            background: rgb(248, 248, 248);
            cursor: pointer;
        }
    }
}
.ant-popover-inner {
    padding: 0 10px 0 10px;
}
.ant-popover-inner-content {
    padding: 0;
}
</style>
