<template>
    <li v-for:="a in b" @mouseover="a.show=!a.show" @mouseout="a.show=!a.show" id="vas">
       
        <a :href="a.url" id="av">
             {{a.name}}
        </a>
        <ul v-show="a.show">
           <li v-for:="c in a.d">
             
              <a :href="c.url" id="av">
                   {{c.name}}
              </a>
           </li>
        </ul>
    </li>
</template>
<script>
export default {
    data(){
        return{
            b:[
                {
                name:"我的淘宝",show:false,url:"https://www.baidu.com",d:[
                                                       {
                                                     name:"已购买的东西",url:"#"
                                                       },
                                                       {
                                                    name:"还没买的星系",url:"#" 
                                                       }
                                                     ] 
                },
                {
                name:"收藏夹",url:"#",show:false,d:[
                                                      {
                                                    name:"收藏的商品",url:"#"
                                                      },
                                                      {
                                                    name:"收藏的店铺",url:"#"
                                                      }
                                                   ]    
                }
            ]
        }
    }
}
</script>