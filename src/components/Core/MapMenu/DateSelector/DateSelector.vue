<template>
  <div class="column">
    <div class="wrapper flex justify-between">
      <DateInput v-model="inputDate.from" class="wrapper__date_input" />
      <ButtonDateSelector v-model="calendarDate" />
      <DateInput v-model="inputDate.to" class="wrapper__date_input" />
    </div>
  </div>
</template>

<script>
import DateInput from "components/Core/MapMenu/DateInput/DateInput";
import ButtonDateSelector from "components/Core/MapMenu/ButtonDateSelector/ButtonDateSelector";
import { toRuFormat, toEnFormat } from "src/js/DatesFormatting";

export default {
  name: "DatePicker",
  components: {
    DateInput,
    ButtonDateSelector
  },
  data() {
    // setInterval(() => {
    //   console.log(this.calendarDate);
    //   console.log(this.inputDate);
    // }, 100);
    return {
      calendarDate: { from: "2019/02/05", to: "2019/02/06" },
      inputDate: {
        from: "",
        to: ""
      },
      options: (date) => {
        return date >= "2019/02/03" && date <= "2019/02/15";
      }
    };
  },
  methods: {
    updateCalendarDate() {
      if (this.inputDate.from === this.inputDate.to && this.inputDate.from !== "") {
        this.calendarDate = toEnFormat(this.inputDate.from);
      } else if (typeof this.calendarDate === "object" && this.calendarDate !== null) {
        this.calendarDate.to = toEnFormat(this.inputDate.to);
        this.calendarDate.from = toEnFormat(this.inputDate.from);
      } else if (this.inputDate.to && this.inputDate.from) {
        this.calendarDate = {
          from: toEnFormat(this.inputDate.from),
          to: toEnFormat(this.inputDate.to)
        };
      } else {
        this.calendarDate = null;
      }
    }
  },

  watch: {
    calendarDate() {
      if (typeof this.calendarDate === "object" && this.calendarDate !== null) {
        this.inputDate.to = toRuFormat(this.calendarDate.to);
        this.inputDate.from = toRuFormat(this.calendarDate.from);
      } else if (typeof this.calendarDate === "string") {
        this.inputDate.to = toRuFormat(this.calendarDate);
        this.inputDate.from = toRuFormat(this.calendarDate);
      } else {
        this.inputDate.to = "";
        this.inputDate.from = "";
      }
    },
    "inputDate.from": function() {
      this.updateCalendarDate();

    },
    "inputDate.to": function() {
      this.updateCalendarDate();
    }
  }
};
</script>

<style scoped>
.wrapper__date_input {
  width: calc(50% - 32.5px);
}
</style>
