<template>
  <section class="site_section" id="why_section">
    <div class=" container limiter flex justify-between">
      <div class="half_wrapper container__half_wrapper">
        <h2 class="question highlight text-center">
          {{ $t("questionSection.question") }}
        </h2>
      </div>
      <div class="half_wrapper container__half_wrapper">
        <h4 class="text-justify">
          {{ $t("questionSection.text") }}
        </h4>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "WhySection"
};
</script>

<style lang="scss" scoped>
.site_section {
  background-color: $section-grey;
}

.container {
  height: 100%;
}

.container__half_wrapper {
  display: flex;
  align-items: center;
}
</style>
