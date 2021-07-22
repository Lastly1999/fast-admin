<template>
         <a-button :type="type" :style="{'color':color,'background':type=='link'?'white':bg}"><slot/></a-button>
</template>

<script>
export default {
    name: 'FButton',
    props: {
        color: {
            type: String,
            default: () => ''
        },
        bg: {
            type: String,
            default: () => ''
        },
        type: {
            type: String,
            default:() => ''
        }
    },
    methods: {
        
    }
}
</script>

<style scoped>

</style>