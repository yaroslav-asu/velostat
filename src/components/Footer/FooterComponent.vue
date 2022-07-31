<template>
  <footer class="footer" id="footer">
    <div class="footer__container limiter flex justify-center items-center q-py-md">
      <a class="footer__link" id="dowload_data">
        {{ $t("footer.download") }}
      </a>

      <div class="footer__link q-mx-md text-center">
        <p>
          {{ $t("footer.contact") }}
        </p>
        <div class="number">
          +79-967-967-967
        </div>
        <div class="telegram">
          @ortieom
        </div>
      </div>
      <div class="copyright">
        ©Velostat 2022
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "FooterComponent"
};
</script>

<style lang="scss" scoped>
.footer {
  background-color: $section-grey;
}
</style>
