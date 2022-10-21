<template>
    <span
      class="loading-animation"
      :style="{
        width: `${width}px !important`,
      }"
    >
  {{ content }}
</span>
</template>

<script>

export default {
  name: "LoadingAnimation",
  mounted() {
    let span = document.createElement("span");
    let loadingAnimation = document.getElementsByClassName("loading-animation")[0];
    span.style.fontSize = window.getComputedStyle(loadingAnimation).fontSize;
    document.body.append(span);
    span.innerHTML = "...";
    this.width = span.offsetWidth;
    span.remove();
  },
  data() {
    setInterval(() => {
      if (this.content.length < 3) {
        this.content += ".";
      } else {
        this.content = "";
      }
    }, 400);
    return {
      content: "",
      width: null
    };
  }

};
</script>

<style lang="scss" scoped>
.loading-animation {
  display: inline-block;
}
</style>
