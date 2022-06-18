<template>
    <p>{{AK.toUpperCase()}}</p>
    <input type="text" v-model="AK">
</template>
<script>
export default {
    data(){
        return{
            AK:"beijinghuanyinni"
            
        }
    }
}
</script>