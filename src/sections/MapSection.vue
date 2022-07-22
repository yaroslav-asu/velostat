<template>
  <section class="site_section flex justify-between">
    <div class="half_wrapper site_section__half_wrapper">

    </div>
    <div class="half_wrapper site_section__half_wrapper">
      <h2 class="highlight">
        {{ $t("mapSection.title") }}
      </h2>
    </div>
  </section>
</template>

<script>
export default {
  name: "MapSection"
};
</script>

<style lang="scss" scoped>
.site_section__half_wrapper{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  text-align: center;
}
</style>
