<template>
    <div>
        <h1></h1>
    </div>
</template>
<script>
export default {
    computed:{
        obja(){
            return this.$store.getters.obja; 

        }
    }
}
</script>