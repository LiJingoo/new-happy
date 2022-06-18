<template>
    <input type="text" v-model="message">
    <p>{{message}}</p>
</template>
<script>
export default {
    data(){
        return{
            message:"你在狗叫什么"
        }
    }
}
</script>