<template>
    <button v-on:click="show=!show">对雪</button>
    <transition name="as">
    <p v-if="show">锦瑟无端五十弦，一线一柱思华年</p>
    </transition>
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