<template>
    <button v-on:click="show=!show">提交</button>
    <input type="text" name="" id="" v-model="aai">
   <p v-if="!show">{{aai}}</p>
</template>
<script>
export default {
    data(){
        return{
             aai:"",
             show:true
        }
    }
}
</script>