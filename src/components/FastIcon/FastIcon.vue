<template>
    <i :class="`fa fa-${name}`"></i>
</template>

<script>
export default {
    props: {
        /**
         * font-awesome图标名称
         * 示例  <i class="fa fa-ambulance" aria-hidden="true"></i>
         * 只需要填写fa fa-图标名称 这边是做了简便化
         */
        name: {
            type: String,
            default: () => "",
        },
    },
}
</script>
