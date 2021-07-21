<template>
    <div id="app">
        <router-view />
    </div>
</template>
<style>
html,
body {
    padding: 0;
    margin: 0;
    height: 100%;
    width: 100%;
}
#app {
    height: 100%;
    width: 100%;
}
</style>
<style lang="less">
// 重写导航菜单的滚动条样式
// @author lastly
.ant-layout-sider-children {
    overflow-y: auto;
    &::-webkit-scrollbar {
        width: 6px; /*高宽分别对应横竖滚动条的尺寸*/
        height: 1px;
    }
    &::-webkit-scrollbar-thumb {
        border-radius: 6px;
        // -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
        background: rgba(144, 147, 153, 0.5);
    }
    &::-webkit-scrollbar-track {
        // -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
        border-radius: 5px;
        background: transparent;
    }
}
</style>
<style lang="less">
@import url("./assets/style/animista.less");
</style>
