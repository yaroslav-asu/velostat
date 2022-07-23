<template>
  <nav class="map_menu column">
    <p>{{ $t("mapMenu.city") }}</p>
    <SelectComponent />
    <p>{{ $t("mapMenu.date") }}</p>
    <DateSelector />
    <p>{{ $t("mapMenu.show") }}</p>
    <q-btn-group spread>
      <q-btn></q-btn>
      <q-separator/>
      <q-btn></q-btn>
    </q-btn-group>
    <q-toggle
      :label="$t('mapMenu.routes')"
      left-label
    />
  </nav>
</template>

<script>
import SelectComponent from "components/Map/MapMenu/SelectComponent/SelectComponent";
import DateSelector from "components/Map/MapMenu/DateSelector/DateSelector";

export default {
  name: "mapMenu",
  components: {
    SelectComponent,
    DateSelector
  }
};
</script>

<style lang="scss" scoped>
.map_menu {
  max-width: 400px;
  width: 100%;
  //height: 100%;
  //background-color: red;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 12px;
  padding: 12px;
  color: $secondary;
  position: absolute;
  bottom:0;
  left: 0;
}
</style>
