<template>
  <q-layout>
    <HeaderComponent />
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
import HeaderComponent from "components/Header/HeaderComponent";
import FooterComponent from "components/Footer/FooterComponent";

export default defineComponent({
  name: "MainLayout",
  components: {
    GreetingSection,
    WhySection,
    MapSection,
    HeaderComponent,
    FooterComponent
  }
});
</script>

<style lang="scss" scoped>

</style>
