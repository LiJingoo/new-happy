<template>
    <p>你一共点击了{{num}}次</p>
    <!--qw(a)这里也能加个参数，对应function里也就有-->
    <p><button v-on:click="qw()">点我增加</button></p>
    <p><button v-on:click="qe()">点我减少></button></p>
    <p><button v-on:click="num--">点我也能减少</button></p>
</template>
<script>
export default {
    data(){
        return{
            num:1
        }
    },
    methods:{
        qw:function(){
            //传参数后这的1要变为参数
            this.num+=1
            
        },
        qe:function(){
            this.num-=1
        }
    }
}
</script>