<template>
  <div class="column">
    <div class="wrapper flex justify-between">
      <DateInput v-model="inputDate.from" class="wrapper__date_input" />
      <ButtonDateSelector
        v-model="calendarDate"
        @setCurrentMonth="setCurrentMonth"
        @setCurrentYear="setCurrentYear"
        ref="buttonDateSelector"
      />
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
  props: {
    modelValue: {
      type: Object,
      default: () => ({
        from: null,
        to: null
      })
    },
  },
  mounted(){
    this.setCurrentYear()
  },
  data() {
    return {
      calendarDate: this.modelValue,
      inputDate: this.modelValue,
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
    },
    async setCurrentYear() {
      let today = new Date();
      this.calendarDate = {
        from: `${today.getFullYear()}/01/01`,
        to: `${today.getFullYear()}/12/31`,
      };
    },
    setCurrentMonth() {
      let today = new Date();
      let thisMonth = today.getMonth() + 1;
      if (thisMonth.toString().length < 2) {
        thisMonth = `0${thisMonth}`;
      }
      let lastMonthDay = new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate();
      this.calendarDate = {
        from: `${today.getFullYear()}/${thisMonth}/01`,
        to: `${today.getFullYear()}/${thisMonth}/${lastMonthDay}`
      };
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
      this.$emit('update:modelValue', this.calendarDate);
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
