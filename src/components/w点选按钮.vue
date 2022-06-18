<template>
    <p>1,请选择你的答案：</p>
    <input name="ss" type="radio" value="A" v-model="aa">
    <label for="ss">A</label><br>
    <input name="dd" type="radio" value="B" v-model="aa">
    <label for="dd">B</label><br>
    <input name="qq" type="radio" value="C" v-model="aa">
    <label for="qq">C</label><br>
    <input name="ww" type="radio" value="D" v-model="aa">
    <label for="ww">D</label>
    <p>你选择了:{{aa}}</p>
</template>
<script>
export default {
    data(){
        return{
            aa:''
        }
    }
}
</script>