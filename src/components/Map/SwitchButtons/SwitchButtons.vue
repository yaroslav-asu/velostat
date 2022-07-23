<template>
  <q-btn-group spread>
    <SwitchButton
      v-model="state.start"
      class="btn-group__switch_button"
      :label="$t('mapMenu.startRent')"
      :color-scheme="switchButtonColorScheme"
      :disable="disableState.start"
    />
    <q-separator vertical />
    <SwitchButton
      v-model="state.end"
      class="btn-group__switch_button"
      :label="$t('mapMenu.endRent')"
      :color-scheme="switchButtonColorScheme"
      :disable="disableState.end"
    />
  </q-btn-group>
</template>

<script>
import SwitchButton from "components/Core/SwitchButton/SwitchButton";
export default {
  name: "SwitchButtons",
  components: {
    SwitchButton,
  },
  props: {
    modelValue: {
      required: true
    },
  },
  data() {
    return {
      switchButtonColorScheme: {
        on: {
          bgColor: "highlight",
          textColor: "black"
        },
        off: {
          bgColor: "white",
          textColor: "black"
        },
      },
      state: this.modelValue,

    }
  },
  watch: {
    state(){
      this.$emit('update:modelValue', this.state)
    }
  },
  computed: {
    disableState(){
      if (this.state.start + this.state.end === 1){
        return {
          start: this.state.start,
          end: this.state.end,
        }
      }
      return {
        start: false,
        end: false,
      }
    }
  }
};
</script>

<style scoped>
.btn-group__switch_button{
  height: 25px;
  border-radius: 7px;
}
</style>
