<template>
  <q-layout>
    <NextSectionButton/>
      <GreetingSection />
      <WhySection />
      <MapSection />
    <FooterComponent />
  </q-layout>
</template>

<script>
import { defineComponent } from "vue";
import GreetingSection from "src/sections/GreetingSection";
import WhySection from "src/sections/WhySection";
import MapSection from "src/sections/MapSection";
import FooterComponent from "components/Footer/FooterComponent";
import NextSectionButton from "components/NextSectionButton/NextSectionButton";

export default defineComponent({
  name: "MainLayout",
  components: {
    NextSectionButton,
    GreetingSection,
    WhySection,
    MapSection,
    FooterComponent
  }
});
</script>

<style lang="scss" scoped>

</style>
