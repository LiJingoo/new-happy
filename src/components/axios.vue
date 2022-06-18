<template>
    <div>sssssss</div>
    
</template>
<script>
export default {
    name:axios,
    created(){
        this.$axios.get('http://localhost:8080/data/dd.json')
        .then(function(response){
            console.log(response);
        })
        .catch(function(error){
            console.log(error);
        })
}
}
</script>