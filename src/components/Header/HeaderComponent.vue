<template>
  <header class="header" ref="header">
    <nav class="header__container limiter flex justify-center q-py-md">
      <a class="navigation_link" href="#why_section">
        {{ $t("header.why") }}
      </a>
      <a class="navigation_link q-mx-xl" href="#map_section">
        {{ $t("header.map") }}
      </a>
      <a class="navigation_link" href="#footer">
        {{ $t("header.download") }}
      </a>
    </nav>
  </header>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "HeaderComponent",
  props: {
    hideTime: {
      default: 300
    }
  },
  mounted() {
    this.showHeader()
    this.$refs.header.style.transition = `opacity ${this.hideTime}ms`;
  },
  methods: {
    ...mapGetters("main", ["isHeaderVisible"]),
    ...mapMutations("main", ["hideHeader", 'showHeader']),
    hide() {
      this.$refs.header.style.opacity = "0";
      setTimeout(() => {
        this.$refs.header.style.display = "none";
      }, this.hideTime);
    },
    show() {
      this.$refs.header.style.display = "block";
      setTimeout(() => {
        this.$refs.header.style.opacity = "1";
      })

    }
  },
  computed: {
    isVisible(){
      return this.$store.getters['main/isHeaderVisible']
    }
  },
  watch: {
    isVisible() {
      if (this.isVisible) {
        this.show();
      } else {
        this.hide();
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.header {
  position: fixed;
  top: 0;
  width: 100%;
  border-bottom: solid black 1px;
  background-color: $secondary;
  z-index: 1000;
}

.navigation_link {
  font-size: 20px;
}
</style>
