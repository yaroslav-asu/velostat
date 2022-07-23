<template>
  <q-input
    class="date_input"
    bg-color="secondary"
    dense
    borderless
    color="highlight"
    v-model="date"
    mask="##.##.####"
  />
</template>

<script>
export default {
  name: "DateInput",
  props: {
    modelValue: {}
  },
  data() {
    return {
      date: this.modelValue
    };
  },
  watch: {
    date() {
      this.$emit("update:modelValue", this.date);
    },
    modelValue() {
      this.date = this.modelValue;
    }
  }
};
</script>

<style lang="scss">
.date_input {
  height: 25px;

  .q-field__inner {
    .q-field__control {
      border-radius: 7px;
      height: 25px;

      .q-field__control-container {
        .q-field__native {
          padding: 0;
          text-align: center;
        }
      }
    }
  }
}
</style>
