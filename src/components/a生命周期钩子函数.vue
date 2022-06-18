<template>
    <p>改变前的古诗为{{sss}}</p>
    <button v-on:click="er()">点我改变古诗</button>
</template>
<script>
export default {
    data(){
        return{
            sss:"车到山前必有路"
              }
          },
    beforeUpdate:function(){
        alert("这是没更新前的显示");
                           },
    updated:function(){
        alert("这是更新显示的东西");
                      },
    //想象更新转换的画面，更新完了后才挂载，才在页面显示新内容
    methods:{
    er:function(){
        this.sss="你在狗叫什么";
            }
                 }
}
</script>