<template>
  <q-layout>
    <GreetingSection />
    <WhySection/>
  </q-layout>
</template>

<script>
import { defineComponent } from "vue";
import GreetingSection from "src/sections/GreetingSection";
import WhySection from "src/sections/WhySection";

export default defineComponent({
  name: "MainLayout",
  components: {
    GreetingSection,
    WhySection,
  }
});
</script>
