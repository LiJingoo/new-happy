<template>
    <div>
    <input type="number" v-model.number="a">
     <p> 输入的类型为：{{typeof(a)}}</p>
    </div>
    <div>
        <input type="text" v-model.trim="b">
        <p>数据的长度为：{{b.length}}</p>
    </div>
</template>
<script>
export default {
    data(){
        return{
            a:"",
            b:""
        }
    }
}
</script>