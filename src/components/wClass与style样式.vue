<template>
   <input type="text" name="" id="" v-model="a">
    <p v-bind:class="['c','d']">{{a}}</p>
</template>
<script>
export default {
    data(){
        return{
            a:""
        }
    }
}
</script>
