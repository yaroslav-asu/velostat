<template>
  <nav class="map_menu column">
    <SelectComponent/>
    <DateSelector/>
    <p></p>
    <q-select></q-select>
    <q-toggle></q-toggle>
  </nav>
</template>

<script>
import SelectComponent from "components/Map/MapMenu/SelectComponent/SelectComponent";
import DateSelector from "components/Map/MapMenu/DateSelector/DateSelector";
export default {
  name: "mapMenu",
  components: {
    SelectComponent,
    DateSelector,
  }
};
</script>

<style lang="scss" scoped>
.map_menu {
  max-width: 360px;
  width: 100%;
  height: 100%;
  background-color: red;
  //background-color: rgba(0, 0, 0, 0.5);
  border-radius: 20px;
}
//.select{
//  background-color: white;
//  width: 320px;
//  height: 25px;
//}
</style>
