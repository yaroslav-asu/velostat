<template>
  <q-form
    class="contact-form q-px-lg q-py-xl"
    @submit.prevent="onSubmit"
    @v-click-outside="onBlur"
  >
    <q-icon
      name="close"
      class="close-btn"
      @click="$emit('close')"
    />
    <h3 class="q-mb-lg">{{ $t("feedBack") }}</h3>
    <q-input
      outlined
      autofocus
      class="input q-mb-md"
      color="highlight"
      :rules="[val => val.length > 0 || $t('errors.required')]"
      v-model="name"
      :placeholder="$t('name')"
    />
    <q-input
      outlined
      class="input q-mb-md"
      color="highlight"
      :rules="[val => val.length > 0 || $t('errors.required')]"
      v-model="subject"
      :placeholder="$t('subject')"
    />
    <q-input
      outlined
      class="input q-mb-md"
      color="highlight"
      :rules="[val => val.length > 0 || $t('errors.required'), val =>  val.includes('@') || $t('errors.requiredEmailOrTelegram')]"
      v-model="contactAddress"
      :placeholder="$t('emailOrTelegram')"
    />
    <q-input
      outlined
      type="textarea"
      class="textarea q-mb-md"
      color="highlight"
      :rules="[val => val.length > 0 || $t('errors.required')]"
      v-model="message"
      :placeholder="$t('message')"
    />
    <q-btn
      type="submit"
      no-caps
      :label="$t('buttons.send')"
      outline
      :ripple="false"
      class="full-width button contact-form__button"
    />
  </q-form>
</template>

<script>
export default {
  name: "ContactForm",
  data() {
    return {
      name: "",
      subject: "",
      contactAddress: "",
      message: ""
    };
  },
  methods: {
    onSubmit() {

    },
    onBlur() {
      console.log("asd");
    }
  }
};
</script>

<style lang="scss" scoped>
.contact-form {
  position: fixed;
  z-index: 100;
  //max-width: 350px;
  width: 25%;
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
.close-btn{
  position: absolute;
  right: 10px;
  top: 10px;
  font-size: 25px;
  cursor: pointer;
}
</style>
