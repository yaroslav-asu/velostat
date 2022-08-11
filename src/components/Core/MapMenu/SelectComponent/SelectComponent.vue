<template>
  <q-select
    v-model="model"
    class="map_menu_select"
    dense
    bg-color="secondary"
    rounded
    borderless
    color="primary"
    :options="cities"
    options-dense
  />
</template>

<script>
export default {
  name: "MapMenuSelect",
  props: {
    cities: {
      default: [],
    },
    modelValue: {},
  },
  data() {
    return {
      model: this.modelValue,
    };
  },
  watch: {
    modelValue() {
      this.model = this.modelValue;
    },
    model(){
      this.$emit("update:modelValue", this.model)
    }
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
