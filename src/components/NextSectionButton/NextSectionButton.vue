<template>
  <div
    class="next-section-button"
    @click="scrollToNextSection"
  >
    <q-icon name="arrow_drop_down"/>
  </div>
</template>

<script>
export default {
  name: "NextSectionButton",
  methods: {
    scrollToNextSection() {
      const screenHeight = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
      const scrollTo = Math.floor(document.documentElement.scrollTop / screenHeight) * screenHeight + screenHeight;
      window.scrollTo({
        top: scrollTo,
        behavior: "smooth"
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.next-section-button {
  position: fixed;
  bottom: 10px;
  right: 40px;
  cursor: pointer;
  z-index: 1;
  color: white;
  font-size: 3em;
  background-color: $highlight;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
