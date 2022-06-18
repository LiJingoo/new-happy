<template>
    <button v-on:click="show=!show">断桥残雪</button>
    <transition>
    <p v-if="!show">牧童骑黄牛，歌声振林月</p>
    </transition>
    <transition name="aw">
    <p v-if="!show">明月松间照，清泉石上流</p>
    </transition>
    <br><br><br><br><br>
</template>
<script>
export default {
    data(){
        return{
            show:true
        }
    }
}
</script>