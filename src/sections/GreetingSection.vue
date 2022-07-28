<template>
  <section class="site_section ">
    <div class="wrapper limiter column justify-center items-center full-height text-center">
      <h4 class="site_domain">VELOSTAT.RU</h4>
      <h2 class="title">
        {{ $t("greetingSection.bikeSharing") }}
        <span class="city_title">
          {{ $tc("cities.moscow", 2) }}
        </span>
        {{ $t("greetingSection.inNumbers") }}
      </h2>
      <h4 class="bikes_taken">
        {{ $t("greetingSection.bikesTaken") }}
        <span class="highlight">
          {{ bikesTaken }}
        </span>
        {{ $tc("bike", bikesTaken) }}
      </h4>
    </div>
  </section>
</template>

<script>
export default {
  name: "GreetingSection",
  methods: {
    getBikesTakenCount(){
      this.$axios.get(`${this.$api}/v1/total_counter`).then(res => {
        this.bikesTaken = res.data
      })
    }
  },
  data() {
    return {
      bikesTaken: 31
    };
  }
};
</script>

<style lang="scss" scoped>
.site_section {
  background-image: url(https://thumb.tildacdn.com/tild3261-3031-4432-b136-373330323635/-/format/webp/DSCF7927-2.jpg);
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
  }
}

.title {
  //font-weight: 400;
  margin-top: 80px;
  margin-bottom: 25px;
}

.wrapper {
  position: relative;
  color: $secondary;
}

.site_domain {
  color: $highlight;
}
.bikes_taken{
  font-size: 40px;
}
</style>
