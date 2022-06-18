<template>
    <p v-show="a">有些人是带着使命来到这个世界上的</p>
    <p v-show="b">左手是今天的收获，右手是明天的希望</p>
    <p v-show="c">有些路总要有人去走</p>
    <!--if语句都差不多-->
    <p v-if="d">天命无常，世事轮回</p>
    <p v-if="e">尽人事而听天命</p>
    
    <p v-if="socre>=90">有点厉害哟</p>
    <p v-else-if="socre>=60">考试良好</p>
    <p v-else>准备补考吧</p>
</template>
<script>
export default {
    data(){
        return{
            a:true,
            b:false,
            c:true,
            d:true,
            e:false,
            socre:40
        }
    }
}
</script>