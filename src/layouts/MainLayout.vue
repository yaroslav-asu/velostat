<template>
  <q-layout>
    <GreetingSection />
    <WhySection />
    <MapSection />
  </q-layout>
</template>

<script>
import { defineComponent } from "vue";
import GreetingSection from "src/sections/GreetingSection";
import WhySection from "src/sections/WhySection";
import MapSection from "src/sections/MapSection";

export default defineComponent({
  name: "MainLayout",
  components: {
    GreetingSection,
    WhySection,
    MapSection,
  }
});
</script>
