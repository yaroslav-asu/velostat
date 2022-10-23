<template>
  <FormsWrapper
    :form-title="$t('feedBack')"
    :button-title="$t('buttons.send')"
    :submit-function="onSubmit"
    @close="$emit('close')"
  >
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
  </FormsWrapper>
</template>

<script>
import FormsWrapper from "components/Core/Forms/FormsWrapper/FormsWrapper";

export default {
  name: "ContactForm",
  components: {
    FormsWrapper
  },

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

</style>
