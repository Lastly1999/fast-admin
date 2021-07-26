<template>
         <a-button
          :type="type" 
          :disabled="disabled"
          :ghost="ghost"
          :shape="shape"
          :size="size"
          :loading="loading"
          :icon="icon"
          :style="{'color':color,'background':type=='link'?'white':bg}"
         >
         <slot/>
         </a-button>
</template>

<script>
export default {
    name: 'FButton',
    props: {
        //按钮文字颜色
        color: {
            type: String,
            default: () => ''
        },
        //按钮背景颜色
        bg: {
            type: String,
            default: () => ''
        },
        //按钮类型
        type: {
            type: String,
            default: () => ''
        },
        //是否禁用
        disabled: {
            type: Boolean,
            default: () => false
        },
        //是否透明
        ghost: {
            type: Boolean,
            default: () => false
        },
        //按钮形状
        shape: {
            type: String,
            default: () => ''
        },
        //按钮尺寸
        size: {
            type: String,
            default: () => 'default'
        },
        //按钮载入状态
        loading: {
            type: Boolean,
            default: () => false
        },
        //按钮图标类型  (tips: 按钮图标类型和按钮载入状态只能二选一，载入状态优先级高于图标类型)
        icon: {
            type: String,
            default: () => ''
        }
    },
    methods: {
        
    }
}
</script>

<style scoped>

</style>