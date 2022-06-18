<template>
    <p>{{abc}}</p>
    <input type="text" v-model="abc">
</template>
<script>
export default {
    data(){
        return{
            abc:"我真服了你了"
        }
    }
}
</script>