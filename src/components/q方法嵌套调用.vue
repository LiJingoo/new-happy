<template>
     <button v-on:click="way2()">隐藏的古诗为</button>
</template>
<script>
export default {
    data(){
        return{
            ss:"古诗为"
            }
        },
        methods:{
          way1:function(){
              alert("相见时难别亦难,东风无力百花残");
              },
          way2:function(){
              this.$options.methods.way1();
          }
        }

    
}
</script>