<template>
    <div v-bind:style="{color:aa,border:'10px solid yellow',fontSize:'20px'}">君不见黄河之水天上来，奔流到海不复回</div>
    <div v-bind:style="[bb]">山色空蒙雨亦奇</div>
</template>
<script>
export default {
    data(){
        return{
            aa:"blue",
            bb:{
                color:'red',
                
                border:'10px solid blue'
            }
        }
    }
}
</script>