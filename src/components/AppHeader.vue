<template>
  <div class="header">
    <h1>{{title}}</h1>
  </div>
</template>

<script>
export default {
  props: ['title']
}
</script>

<style scoped>
.header {
  position: fixed;
  width: 100%;
  height: 50px;
  line-height: 50px;
  background-color: #00b358;
  color: #fff;
  text-align: center;
  z-index: 1;
}

.header h1 {
  font-size: 18px;
  line-height: 50px;
  margin: 0;
}
</style>
