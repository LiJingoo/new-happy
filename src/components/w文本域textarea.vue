<template>
    文本域的值为:<p>{{a}}</p>
    <textarea name="" id="" cols="30" rows="7" v-model="a"></textarea>
</template>
<script>
export default {
    data(){
        return{
               a:''
    }
    }
}
</script>