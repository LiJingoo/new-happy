<template>
   小时：<input type="text" v-model="num">
   分钟：<input type="text" v-model="num1">
   <br><a href="https://www.baidu.com" v-on:click.prevent="w()">百度的链接</a>
   <br>
   <form action="#" method="get">
       <input type="submit" value="提交" v-on:click.prevent="e()">
   </form>
</template>
<script>
export default {
    data(){
        return{      
            num:0,
            num1:0
        }
    },
    methods:{
        w:function(){
            alert("跳转不了了");
        },
        e:function(){
            alert("提交不了了");
        }
        
    },
    watch:{
        num(va1){
            this.num1=va1*60;
        },
        num1(va1){
               this.num=va1/60;
        }

    }
}
</script>