<template>
    <div>
    <select v-model="a" multiple>
        <option>html5</option>
        <option>css3</option>
        <option>javascripr</option>
        <option>Vue3.0</option>
        <option>Node .js</option>
    </select>
    <p>选择你感兴趣的课程(可以多选,按住ctrl键):{{a}}</p>
    </div>

</template>
<script>
export default {
    data(){
        return{
            a:''  
        }
    }
}
</script>