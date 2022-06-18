<template>
    <p>{{way()}}</p>
    <input type="text" name="" id="" v-model="BKM">
</template>
<script>
export default {
    data(){
        return{
            BKM:"你在狗叫什么"
        }
    },
    methods:{
        way:function(){
           return this.BKM.split('').reverse().join('')
}
    }
}
</script>
