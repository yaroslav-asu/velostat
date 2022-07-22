<template>
  <section class="site_section">
    <div class="container limiter flex justify-between">
      <div class="wrapper">
        <h2 class="question highlight text-centegr">
          {{ $t("questionLayout.question") }}
        </h2>
      </div>
      <div class="wrapper ">
        <h4 class="text-justify">
          {{ $t("questionLayout.text") }}
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

.wrapper {
  width: calc(50% - 75px);
  height: 100%;
  text-align: center;
  display: flex;
  align-items: center;
}
</style>
