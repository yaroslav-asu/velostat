<template>
  <q-form
    class="contact-form q-px-lg q-py-xl"
    @submit.prevent="submitFunction"
  >
    <q-icon
      name="close"
      class="close-btn"
      @click="$emit('close')"
    />
    <h3 class="">
      {{ formTitle }}
    </h3>
    <div class="q-py-md">
      <slot />
    </div>
    <q-btn
      type="submit"
      no-caps
      :label="buttonTitle"
      outline
      :ripple="false"
      class="full-width button contact-form__button"
    />
  </q-form>
</template>

<script>
export default {
  name: "FormsWrapper",
  props: {
    formTitle: String,
    buttonTitle: String,
    submitFunction: {
      default: () => {

      }
    }
  }
};
</script>

<style lang="scss" scoped>
.contact-form {
  position: fixed;
  z-index: 100;
  max-width: 500px;
  //width: 25%;
  border: solid 1px #ccc;
  border-radius: $borderRadius;
  text-align: center;
  margin-left: 50%;
  transform: translateX(-50%) translateY(-50%);
  top: 50%;
  background-color: white;
}

.contact-form__button {
  padding: 5px 0 5px 0;
}

.close-btn {
  position: absolute;
  right: 10px;
  top: 10px;
  font-size: 25px;
  cursor: pointer;
}
</style>
