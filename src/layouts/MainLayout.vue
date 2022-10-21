<template>
  <q-layout>
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

export default defineComponent({
  name: "MainLayout",
  components: {
    GreetingSection,
    WhySection,
    MapSection,
    FooterComponent
  }
});
</script>

<style lang="scss" scoped>

</style>
