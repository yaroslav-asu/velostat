<template>
  <FormsWrapper
    :form-title="$t('downloadData')"
    :button-title="$t('downloadData')"
    :submit-function="onSubmit"
    @close="$emit('close')"
    class="download-data-form"
  >
    <SelectComponent
      class="download-data-form__input q-mb-md"
      :options="cities"
      v-model="activeCity"
    />
    <DateSelector
      v-model="dateInterval"
      class="download-data-form__input q-mb-md"
    />
    {{ $t("dataExample") }}:
    {
      Id: int,
      Lala: str,
      Position: [lat: int, lon: int]
    }
  </FormsWrapper>
</template>

<script>
import FormsWrapper from "components/Core/Forms/FormsWrapper/FormsWrapper";
import SelectComponent from "components/Core/MapMenu/SelectComponent/SelectComponent";
import DateSelector from "components/Core/MapMenu/DateSelector/DateSelector";

export default {
  name: "DownloadData",
  components: {
    FormsWrapper,
    SelectComponent,
    DateSelector
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
      }
    };
  },
  methods: {
    onSubmit() {

    }
  }
};

</script>

<style lang="scss" scoped>
.download-data-form__input {
  border: solid 1px $borderLight;
  border-radius: $borderRadius;
}
</style>
