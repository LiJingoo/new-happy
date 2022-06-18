<template>
    <p>姓名:<input type="text" v-model="names"></p>
     <p>学号:<input type="text" v-model="numbers"></p>
      <p>性别:<input type="text" v-model="sexs"></p><button v-on:click="add()">添加</button>
<div>
<p v-for:="a in list">姓名:{{a.name}}--学号:{{a.number}}--性别:{{a.sex}}</p>
</div>
<ul>
    <p>筛选学号大于2的学生有</p>
    <li v-for:="v in select"> {{v.name}}--{{v.number}}--{{v.sex}}</li>
</ul>
</template>
<script>
import { computed } from '@vue/runtime-core'
export default {
    data(){
        return{
            names:'',
            numbers:'',
            sexs:'',
            list:[
                {name:"李京",number:"1",sex:"男"},
                {name:"奥特曼",number:"2",sex:"男"}
                
            ]
        }
    },
    computed:{
        select:function(){
                return this.list.filter(function(list){
                    return list.number>=2;
                })
        }
    },
    methods:{
        add:function(){
            this.list.unshift({
                name:this.names,
                number:this.numbers,
                sex:this.sexs
            })
        }
    }
}
</script>
