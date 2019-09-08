<template>
  <div class="comment">
    <div class="haha">
      <szi ></szi>
    </div>
  </div>
</template>
<script>
import szi from "./szi";
export default {
  components: {
    szi
  }
};
</script>
<style scoped>
.comment{
    width:100%;
    overflow: auto;
}
.haha {
  display: flex;
}
</style>