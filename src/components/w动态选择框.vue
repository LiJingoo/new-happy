<template>
        <select v-model="qw">
            <option v-for:="aw in bc" v-bind:value="aw.value">{{aw.text}}</option>
        </select>
        <span>你选择的课程为:{{qw}}</span>
</template>
<script>
export default {
    data(){
        return{
            qw:[],
            bc:[
                 {text:"课程序号1",value:"web前端开发"},
                 {text:"课程序号2",value:"java开发"},
                 {text:"课程序号3",value:"c语言开发"}
            ]
        }
    }
}
</script>