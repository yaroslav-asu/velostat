<template>
  <nav class="map_menu column">
    <p class="map_menu__title map_menu--first">{{ $t("mapMenu.city") }}</p>
    <SelectComponent />
    <p class="map_menu__title">{{ $t("mapMenu.date") }}</p>
    <DateSelector />
    <p class="map_menu__title">{{ $t("mapMenu.show") }}</p>
    <SwitchButtons
      v-model="rentShowSettings"
      class="map_menu__switch_buttons"
    />
    <div class="">
      <q-toggle
        v-model="showRoutes"
        :label="$t('mapMenu.routes')"
        left-label
        color="highlight"

      />
    </div>

  </nav>
</template>

<script>
import SelectComponent from "components/Map/MapMenu/SelectComponent/SelectComponent";
import DateSelector from "components/Map/MapMenu/DateSelector/DateSelector";
import SwitchButtons from "components/Map/SwitchButtons/SwitchButtons";

export default {
  name: "mapMenu",
  components: {
    SelectComponent,
    DateSelector,
    SwitchButtons
  },
  data() {
    return {

      showRoutes: false,
      rentShowSettings: {
        start: true,
        end: true,
      },

    };
  }
};
</script>

<style lang="scss" scoped>
.map_menu {
  max-width: 400px;
  width: 100%;
  //height: 100%;
  //background-color: red;
  //background-color: rgba(0, 0, 0, 0.5);
  border-radius: 12px;
  padding: 12px;
  color: $secondary;
  position: absolute;
  bottom: 15px;
  left: 15px;
  background: rgba( 0, 0, 0, 0.4 );
  box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
  backdrop-filter: blur( 4px );
  -webkit-backdrop-filter: blur( 4px );
  //border-radius: 10px;
  border: 1px solid rgba( 255, 255, 255, 0.18 );
}
.map_menu--first{
  margin-top: 0 !important;
}
.map_menu__title{
  margin: 12px 0 6px 0;
}
.map_menu__switch_buttons{
  margin-bottom: 2px;
}

</style>
