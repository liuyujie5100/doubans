<template>
    <div>
        <p>{{stateobj}}</p>
    </div>
</template>
<script>
export default {
   computed: {
       stateobj(){
           return this.$store.state.obj;
       }
   }, 
}
</script>