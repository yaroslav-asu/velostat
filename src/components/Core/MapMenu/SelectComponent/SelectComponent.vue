<template>
  <q-select
    v-model="titledModel"
    class="map_menu_select"
    dense
    bg-color="secondary"
    rounded
    borderless
    color="primary"
    :options="Object.values(this.options)"
    options-dense
  />
</template>

<script>
export default {
  name: "MapMenuSelect",
  props: {
    modelValue: {},
    options: {}
  },
  data() {
    let defaultModel = Object.keys(this.options)[0];
    return {
      titledModel: this.options[defaultModel],
      model: defaultModel
    };
  },
  watch: {
    titledModel() {
      for (let i = 0; i < Object.values(this.titledModel).length; i++) {
        if (Object.values(this.options)[i] === this.titledModel) {
          this.model = Object.keys(this.options)[i];
        }
      }
    },
    model() {
      this.$emit("update:modelValue", this.model);
    },
    modelValue() {
      this.model = this.modelValue;
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
