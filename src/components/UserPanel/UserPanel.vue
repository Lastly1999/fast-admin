<template>
    <div class="banner-flex-container">
        <div class="banner-avatar">
            <a-avatar :size="64" icon="user" />
        </div>
        <div class="banner-title">
            <div>
                <div style="font-size: 18px; font-weight: 500; color: rgba(0, 0, 0, 0.85);">
                    晚上好！Lastly 工作了一天，辛苦啦
                </div>
                <div>
                    厦门阵雨，气温26℃，西南风4-5级，相对湿度96%。
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {}
</script>
<style lang="less" scoped>
.banner-flex-container {
    display: flex;
    padding: 20px;
    align-items: center;
    background: #fff;
    .banner-avatar {
        margin-right: 15px;
    }
    .banner-title {
        display: inline-block;
    }
}
</style>
