<template>
  <q-layout>
    <NextSectionButton />
    <GreetingSection />
    <WhySection />
    <MapSection />
    <ContactForm
      v-if="showContactForm"
      @close="showContactForm = false"
    />
    <FooterComponent
      @openContactForm="a"
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
import ContactForm from "components/Core/ContactForm/ContactForm";

export default defineComponent({
  name: "MainLayout",
  components: {
    NextSectionButton,
    GreetingSection,
    WhySection,
    MapSection,
    FooterComponent,
    ContactForm
  },
  data() {
    return {
      showContactForm: false
    };
  },
  methods: {
    a() {
      console.log("a");
      this.showContactForm = true;
    }
  }
});
</script>

<style lang="scss" scoped>

</style>
