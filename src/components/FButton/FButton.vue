<template>
    <div>
         <a-button :type="bType" :style="{'color':bTColor,'background':bBColor}">Primary Button</a-button>
    </div>
</template>

<script>
export default {
    name: 'FButton',
    component: {},
    props: {
        bTColor: {
            type: String,
            default: () => ''
        },
        bBColor: {
            type: String,
            default: () => ''
        },
        bType: {
            type: String,
            default:() => ''
        }
    },
    data() {
        return {

        }
    },
    mounted() {
      if(this.bType=='link') this.bBColor='white'  
    },
    methods: {
        
    }
}
</script>

<style scoped>

</style>