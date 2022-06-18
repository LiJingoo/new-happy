<template>
    <input type="text" name="" id="" v-model="link">
    <p><a href="https://www.baidu.com" v-bind:style="{fontSize:Color}">可跳转不同的地方</a></p>
    <p><a v-bind:href="link">链接</a></p>
</template>
<script>
export default {
    data(){
        return{
            Color:'20px',
            link:"https://www.baidu.com"
        }
    }
}
</script>

