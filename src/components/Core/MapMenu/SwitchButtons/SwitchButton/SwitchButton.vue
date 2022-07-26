<template>
  <q-btn
    class="switch_button minimized_button"
    @click="state = !state"
    :color="currentColor"
    :text-color="currentTextColor"
    :label="label"
    :icon="icon"
    no-caps
    :dense="dense"
    :disable="disable"
  >
  </q-btn>
</template>

<script>
export default {
  name: "SwitchButton",
  props: {
    label: {},
    colorScheme: {
      default: {
        on: {
          bgColor: "white",
          textColor: "black"
        },
        off: {
          bgColor: "black",
          textColor: "white",
        }
      }
    },
    dense: {},
    icon: {},
    modelValue: {
      default: false,
    },
    disable: {
      default: false,
    },
  },
  data() {
    return {
      state: this.modelValue,
    };
  },
  computed: {
    currentColor(){
      return this.state ? this.colorScheme.on.bgColor : this.colorScheme.off.bgColor
    },
    currentTextColor(){
      return this.state ? this.colorScheme.on.textColor : this.colorScheme.off.textColor
    },
  },
  watch: {
    state(){
      this.$emit('update:modelValue', this.state)
    }
  }
};
</script>

<style lang="scss" scoped>
.switch_button{
  transition: background-color .2s ease, color .2s ease;
}

</style>
