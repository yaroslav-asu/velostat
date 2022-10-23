<template>
  <q-layout>
    <NextSectionButton />
    <GreetingSection />
    <WhySection />
    <MapSection />
    <DownloadData
      v-if="downloadDataFormState"
      @close="downloadDataFormState = false"
    />
    <ContactForm
      v-if="contactFormState"
      @close="contactFormState = false"
    />
    <FooterComponent
      @openContactForm="showContactForm"
      @openDownloadDataForm="showDownloadDataForm"
    />
  </q-layout>
</template>

<script>
import { defineComponent } from "vue";
import GreetingSection from "src/sections/GreetingSection";
import WhySection from "src/sections/WhySection";
import MapSection from "src/sections/MapSection";
import FooterComponent from "components/Footer/FooterComponent";
import NextSectionButton from "components/NextSectionButton/NextSectionButton";
import ContactForm from "components/Core/Forms/ContactForm/ContactForm";
import DownloadData from "components/Core/Forms/DownloadData/DownloadDataForm";

export default defineComponent({
  name: "MainLayout",
  components: {
    NextSectionButton,
    GreetingSection,
    WhySection,
    MapSection,
    FooterComponent,
    ContactForm,
    DownloadData
  },
  data() {
    return {
      contactFormState: false,
      downloadDataFormState: false
    };
  },
  methods: {
    showDownloadDataForm() {
      this.downloadDataFormState = true;
      this.contactFormState = false;
    },
    showContactForm() {
      this.contactFormState = true;
      this.downloadDataFormState = false;
    }
  }
});
</script>

<style lang="scss" scoped>

</style>
