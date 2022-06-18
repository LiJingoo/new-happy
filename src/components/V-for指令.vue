<template>
 <!--用index可以为输出的列表添加序号-->
   <p v-for:="(a,index) in books">{{index}}:{{a.name}}--{{a.number}}</p>
   <!--直接遍历整数-->
   <p v-for:="b in 6">{{b}}</p>
   <p v-for:="(c,index) in news">{{index}}---{{c}}</p>
</template>
<script>
export default {
    data(){
        return{
            books:[
                {
                    name:"李京",number:"123"
                },
                {
                    name:"迪迦奥特曼",number:"456"
                }
            ],
            news:["上海","北京","天津","广州"]
        }
    }
}
</script>