<template>
<input type="text" name="" id="" v-model="a">
    <p v-once>有v-once指令，只渲染一次:{{a}}</p>
    <p>无v-once指令，可一直改变:{{a}}</p>
    <!--用V-pre输出文本节点-->
     <p v-pre>三天不打，上房揭瓦xxx{{a}}</p>
</template>
<script>
export default {
    data(){
        return{
            a:"恭喜发财，红包拿来"
        }
    }
}
</script>