<template>
<ul>
   <template v-for:="(a,index) in b">
   <li v-if="a.number>10">
       {{index}}--{{a.name}}    
   </li>
   </template> 
</ul>
</template>
<script>
export default {
    data(){
        return{
            b:[
                {name:"李京",number:"11",sex:"男"},
                {name:"奥特曼",number:"2",sex:"男"},
                {name:"奥里给",number:"20",sex:"男"},
                {name:"特朗普威廉",number:"23",sex:"男"}
            ]
        }
    }
}
</script>