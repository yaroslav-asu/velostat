<template>
  <q-select
    v-model="model"
    class="map_menu_select"
    dense
    bg-color="secondary"
    rounded
    borderless
    color="primary"
    :options="options"
    options-dense
  />
</template>

<script>
import { ref } from "vue";

export default {
  name: "MapMenuSelect",
  data() {
    return {
      model: ref(null),
      options: [
        "Google", "Facebook", "Twitter", "Apple"
      ]
    };
  }
};
</script>

<style lang="scss">
.map_menu_select {
  .q-field__inner {
    .q-field__control {
      padding: 0 15px 0 15px;
      border-radius: 7px;
      min-height: 25px;

      .q-field--dense {
        min-height: 25px;
      }

      .q-field__append {
        height: 25px;
      }

      .q-field__control-container {
        .q-field__native {
          padding: 0;
          min-height: 25px;
        }
      }
    }
  }
}
</style>
