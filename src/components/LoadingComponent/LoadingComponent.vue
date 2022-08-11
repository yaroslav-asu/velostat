<template>
<div class="loading_component flex justify-center items-center">
  <q-spinner
    color="primary"
    size="3em"
  />
</div>
</template>

<script>
export default {
  name: "LoadingComponent"
};
</script>

<style scoped>
.loading_component{
  position: absolute;
  z-index: 10;
  width: 100%;
  height: 100%;
  /*background-color: rgba(0, 0, 0, 0.5);*/
}
</style>
