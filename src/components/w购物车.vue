<template>
    <table>
        <tr>
            <th>商品名称</th>
            <th>单价</th>
            <th>数量</th>
            <th>金额</th>
        </tr>
        <tr v-for:="a in b">
            <td>{{a.name}}</td>
            <td>{{a.price}}</td>
            <td><button v-on:click="a.count-=1">-</button></td>
            {{a.count}}
            <td><button v-on:click="a.count+=1">+</button></td>
            <td>{{total(a.price,a.count)}}</td>
        </tr>
        <tr>
            总价为：{{totalprice}}
        </tr>
    </table>
    
</template>
<script>
export default {
    data(){
        return{
            b:[
                {name:"矿泉水",
                price:20,
                count:1
                
                },
                {
                name:"方便面",
                price:10,
                count:1
                },
                {
                name:"毛巾",
                price:30,
                count:1,
                }
            ]
        }
        
    },
    methods:{
        total(price,count){
            return price*count; 
        }
    },
    computed:{
        totalprice(){
            let totalprice=0;
            for(let a of this.b){
                totalprice+=a.price*a.count
            }
            return totalprice
        }
    }
}
</script>