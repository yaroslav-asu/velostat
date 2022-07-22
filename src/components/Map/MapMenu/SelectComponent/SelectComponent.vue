<template>
  <q-select v-model="model" class="map_menu_select" dense bg-color="secondary"  rounded borderless color="primary" :options="options">

  </q-select>
</template>

<script>
import { ref } from "vue";

export default {
  name: "MapMenuSelect",
  data(){
    return {
      model:  ref(null),
      options: [
        'Google', 'Facebook', 'Twitter', 'Apple', 'Oracle'
      ]
    }
  }
};
</script>

<style lang="scss">
.map_menu_select{
  margin: 20px 0 20px 0;
  padding: 0 20px 0 20px;
  border-radius: 10px;
  .q-field__inner{
    .q-field__control{
      padding: 0 15px 0 15px;
      border-radius: 15px;
      .q-field__control-container{
        .q-field__native{
          padding: 0;
        }
      }
    }
  }
}
</style>
