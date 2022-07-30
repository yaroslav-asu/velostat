<template>
  <header class="header flex items-center">
    <nav class="header__container limiter flex justify-center">
      <a class="navigation_link" href="#why">
         {{$t("header.why") }}
      </a>
      <a class="navigation_link q-mx-xl" href="#map">
        {{$t("header.map") }}
      </a>
      <a class="navigation_link" href="#footer">
        {{$t("header.download") }}
      </a>
    </nav>
  </header>
</template>

<script>
export default {
  name: "HeaderComponent"

};
</script>

<style lang="scss" scoped>
.header {
  position: fixed;
  top: 0;
  width: 100%;
  min-height: 50px;
  border-bottom: solid black 1px;
  background-color: $secondary;
  z-index: 1000;
}
.navigation_link{
  font-size: 20px;
  transition: color .1s;
  &:hover{
    color: $highlight;
  }
}
</style>
