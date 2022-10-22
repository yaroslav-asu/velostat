<template>
  <div
    class="resizable_wrapper"
    ref="resizableWrapper"
  >
    <div
      class="resizable"
      :class="{'resizable--maximized': isFullscreen}"
      :style="resizableStyles"
      ref="resizable"
    >
      <q-icon class="change_size_btn" :name="iconName" @click="isFullscreen = !isFullscreen" />
      <slot />
    </div>
  </div>

</template>

<script>
import { mapMutations } from "vuex";

export default {
  name: "ResizableComponent",
  components: {},
  props: {
    modelValue: {
      default: false
    },
    resizableStyles: {
      default: {}
    }
  },
  mounted() {
    this.resizableSize = this.$refs.resizableWrapper.getBoundingClientRect();
    this.$refs.resizable.style.width = this.resizableSize.width + "px";
    this.$refs.resizable.style.height = this.resizableSize.height + "px";
  },
  data() {
    return {
      isFullscreen: this.modelValue,
      animationDuration: 1000
    };
  },
  methods: {
    ...mapMutations("main", ["hideHeader", "showHeader"]),
    startTransition() {
      this.$refs.resizable.style.transition = `all ${this.animationDuration}ms`;
    },
    stopTransition() {
      this.$refs.resizable.style.transition = "transition-duration: 0s";
    },
    open() {
      this.hideHeader();
      let parentPos = this.$refs.resizableWrapper.getBoundingClientRect();
      this.startTransition();
      this.$refs.resizable.style.position = `fixed`;
      this.$refs.resizable.style.width = `100vw`;
      this.$refs.resizable.style.height = `100vh`;

      this.$refs.resizable.style.top = `${parentPos.top}px`;
      this.$refs.resizable.style.left = `${parentPos.left}px`;
      setTimeout(() => {
        this.$refs.resizable.style.top = `0`;
        this.$refs.resizable.style.left = "0";
      }, 0);
      setTimeout(() => {
        this.stopTransition();
        this.$refs.resizable.style.top = `0`;
        this.$refs.resizable.style.left = `0`;
      }, this.animationDuration);

      document.body.style.overflow = "hidden";
    },
    close() {
      this.showHeader();
      let parentPos = this.$refs.resizableWrapper.getBoundingClientRect();
      this.$refs.resizable.style.position = "absolute";
      this.$refs.resizable.style.top = `${window.scrollY}px`;
      this.$refs.resizable.style.left = `${window.scrollX}px`;

      setTimeout(() => {
        this.startTransition();
        this.$refs.resizable.style.width = this.resizableSize.width + "px";
        this.$refs.resizable.style.height = this.resizableSize.height + "px";
        this.$refs.resizable.style.top = `${window.scrollY + parentPos.top}px`;
        this.$refs.resizable.style.left = `${window.scrollX + parentPos.left}px`;
      }, 0);

      setTimeout(() => {
        this.$refs.resizable.style.position = "relative";
        this.$refs.resizable.style.left = "";
        this.$refs.resizable.style.top = "";
      }, this.animationDuration);

      document.body.style.overflow = "visible";
    }

  },
  computed: {
    iconName() {
      return this.isFullscreen ? "fullscreen_exit" : "fullscreen";
    }
  },
  watch: {
    isFullscreen() {
      this.$emit("startResizing");
      if (this.isFullscreen) {
        this.open();
      } else {
        this.close();
      }

      setTimeout(() => {
        this.$refs.resizable.style.transition = "";
        this.$emit("endResizing");
      }, this.animationDuration);
      this.$emit("update:modelValue", this.isFullscreen);
    }
  }
};

</script>

<style lang="scss" scoped>


.resizable_wrapper {
  width: 100%;
  height: 100%;

  .resizable {
    position: relative;
    overflow: hidden;

    .change_size_btn {
      position: absolute;
      right: 10px;
      top: 10px;
      z-index: 100;
      cursor: pointer;
      font-size: 35px;
    }
  }

  .resizable--maximized {
    border-radius: unset !important;
    z-index: 100;
  }
}

</style>
