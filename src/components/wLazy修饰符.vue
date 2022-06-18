<template>
    <input type="text" v-model.lazy="a">
    <p>用lazy修饰后的效果:{{a}}</p>
</template>
<script>
export default {
    data(){
        return{
            a:"你在狗叫什么?"
        }
    }
}
</script>