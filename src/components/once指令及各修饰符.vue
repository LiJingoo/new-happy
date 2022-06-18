<template>
    <button v-on:click.once="waaa()">{{s}}</button>
    <br>
    <input type="text" name="" id="" v-on:keydown="name()" v-on:keyup="name1()">
    <p>.{{dd}}</p>
  <hr>
    <p>请输入回车键以继续,并且可是按下shift+enter键增添内容</p>
    <input type="text" name="" id="" v-on:keyup.enter="name2s()" v-on:keydown.shift.enter="name3()">
    <p>{{bb}}</p>
    
</template>
<script>
export default {
    data(){
        return{
            s:"微信朋友圈未点赞",
            dd:"",
            bb:"暂未增添"
        }
    },
    methods:{
        waaa:function(){
            this.s="已点赞";
        },
        name:function(){
               this.dd="对方正在输入中";
        },
        name1:function(){
                  this.dd="";
                        
        },
        name2s:function(){
            alert("您现在可以继续了");
        },
        name3:function(){
            this.bb="这是增添的内容:中华人民共和国"
        }
    }
}
</script>