<template>
  <nav class="map_menu column">
    <p class="map_menu__title map_menu--first mb mt">{{ $t("mapMenu.city") }}</p>
    <SelectComponent :options="cities" v-model="activeCity" />
    <p class="map_menu__title mb mt">{{ $t("mapMenu.date") }}</p>
    <DateSelector v-model="dateInterval" class="q-mb-md"/>
<!--    <p class="map_menu__title mb mt">{{ $t("mapMenu.show") }}</p>-->
<!--    <SwitchButtons-->
<!--      v-model="rentShowSettings"-->
<!--      class="map_menu__switch_buttons q-mb-md"-->
<!--    />-->
  </nav>
</template>

<script>
import SelectComponent from "components/Core/MapMenu/SelectComponent/SelectComponent";
import DateSelector from "components/Core/MapMenu/DateSelector/DateSelector";


export default {
  name: "MapMenu",
  components: {
    SelectComponent,
    DateSelector,
  },
  async mounted() {
    await this.$nextTick();
    this.getMapContent();
  },
  methods: {
    getMapContent() {
      this.$emit("startLoading");
      this.$axios.get(`${this.$api}map`, {
        params: {
          city: this.activeCity,
          start_date: this.startDate,
          end_date: this.endDate,
          show_taken: this.rentShowSettings.start,
          show_returned: this.rentShowSettings.end,
          show_routes: false
        }
      }).then(res => {
        this.$emit("updateMapContent", res.data);
        this.$emit("endLoading");
      });
    }
  },
  data() {
    this.$axios.get(`${this.$api}cities`).then(res => {
      this.cities = {};
      for (let city of res.data) {
        this.cities[city.city_name] = this.$tc(`cities.${city.city_name}`, 0);
      }
    });
    return {
      cities: { "msc": "Москва" },
      activeCity: "msc",
      dateInterval: {
        from: "",
        to: ""
      },
      rentShowSettings: {
        start: false,
        end: true
      }
    };
  },
  computed: {
    startDate() {
      if (typeof this.dateInterval === "object" && this.dateInterval !== null) {
        return this.dateInterval.from.split("/").join("-");
      } else if (typeof this.dateInterval === "string") {
        return this.dateInterval.split("/").join("-");
      } else {
        return null;
      }
    },
    endDate() {
      if (typeof this.dateInterval === "object" && this.dateInterval !== null) {
        return this.dateInterval.to.split("/").join("-");
      } else if (typeof this.dateInterval === "string") {
        return this.dateInterval.split("/").join("-");
      } else {
        return null;
      }
    }
  },
  watch: {
    activeCity() {
      this.$axios.get(`${this.$api}cities`).then(res => {
        for (let i = 0; i < res.data.length; i++) {
          if (res.data[i].city_name === this.activeCity) {
            this.$emit("moveMap", res.data[i].coordinates);
          }
        }
      });
      this.getMapContent();
    },
    dateInterval() {
      this.getMapContent();
    },
    "rentShowSettings.start": function() {
      this.getMapContent();
    },
    "rentShowSettings.end": function() {
      this.getMapContent();
    },
    showRoutes() {
      this.getMapContent();
    },
    startDate() {
      this.getMapContent();
    },
    endDate() {
      this.getMapContent();
    }
  }

};
</script>

<style lang="scss" scoped>
.map_menu {
  max-width: 450px;
  width: 100%;
  border-radius: 12px;
  padding: 12px;
  color: $secondary;
  position: absolute;
  background: rgba(0, 0, 0, 0.6);
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border: 1px solid rgba(255, 255, 255, 0.18);
  font-size: 20px;
  z-index: 10;
}

.map_menu--first {
  margin-top: 0 !important;
}

.map_menu__title {
  margin: 12px 0 6px 0;
}

.mt {
  margin-top: 12px;
}

.mb {
  margin-bottom: 6px;
}

</style>
