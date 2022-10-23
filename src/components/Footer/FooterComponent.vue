<template>
  <footer class="footer" id="footer">
    <div class="footer__container limiter flex justify-center items-center q-py-md">
      <div
        class="footer__link"
        @click="$emit('openDownloadDataForm')"
      >
        {{ $t("downloadData") }}
      </div>

      <div class="footer__link q-mx-md text-center">
        <div
          class="contact-us"
          @click="$emit('openContactForm')"
        >
          {{ $t("footer.contact") }}
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
  name: "FooterComponent",
};
</script>

<style lang="scss" scoped>
.footer {
  background-color: $section-grey;
}
.footer__link{
  cursor: pointer;
  transition: color 0.3s;
  &:hover {
    color: $highlight;
  }
}
</style>
