<template>
    <input type="checkbox" value="北京市" v-model="aa" name="a1">
    <label for="a1">北京市</label>
    <input type="checkbox" value="河北省" v-model="aa" name="a2">
    <label for="a2">河北省</label>
    <input type="checkbox" value="山东省" v-model="aa" name="a3">
    <label for="a3">山东省</label>
    <input type="checkbox" value="天津市" v-model="aa" name="a4">
    <label for="a4">天津市</label>
    <input type="checkbox" value="四川省" v-model="aa" name="a5">
    <label for="a5">四川省</label>
    <p>您选择的省份有:{{aa}}</p>
</template>
<script>
export default {
    data(){
        return{
            aa:[]
        }
    }
}
</script>