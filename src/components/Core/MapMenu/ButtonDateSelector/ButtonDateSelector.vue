<template>
  <q-btn class="button_date_selector" icon="calendar_today" color="secondary" text-color="primary">
    <q-popup-proxy cover transition-show="scale" transition-hide="scale">
      <q-date
        v-model="date"
        color="highlight"
        range
        :options="options"
        class="date_calendar"
        ref="dateCalendar"
      >
        <q-btn-group class="btns_group row items-center justify-between" spread>
          <q-btn
            :label="$t('mapMenu.thisYear')"
            color="secondary"
            text-color="primary"
            no-caps
            @click="setCurrentYear"
            class="select_time_btn minimized_button"
            ref="a"
          />
          <q-separator vertical />
          <q-btn
            :label="$t('mapMenu.thisMonth')"
            color="secondary"
            text-color="primary"
            no-caps
            @click="setCurrentMonth"
            class="select_time_btn minimized_button"
          />
        </q-btn-group>
      </q-date>
    </q-popup-proxy>
  </q-btn>
</template>

<script>
export default {
  name: "ButtonDateSelector",
  props: {
    modelValue: {},
    options: {}
  },
  data() {
    setInterval(() => {
      console.log(this.$refs)
    })
    return {
      date: this.modelValue
    };
  },
  methods: {
    setCurrentMonth() {
      this.$emit("setCurrentMonth");
    },
    setCurrentYear() {
      this.$emit("setCurrentYear");
    },
    setCalendarTo(year, month) {
      console.log(this.$refs.dateCalendar)
      this.$refs.dateCalendar.setCalendarTo(year, month);
    }
  },
  watch: {
    date() {
      this.$emit("update:modelValue", this.date);
    },
    modelValue() {
      this.date = this.modelValue;
    }
  }
};
</script>
<style lang="scss" scoped>

.btns_group {
  .select_time_btn {
    height: 25px;
  }

  border-radius: 7px;
}
</style>
<style lang="scss">

.button_date_selector {
  padding: 0;
  width: 25px;
  height: 25px;
  min-height: auto;

  .q-btn__content {
    line-height: 25px;
    height: 25px !important;
    display: flex;

    .q-icon {
      font-size: 15px;
    }
  }
}

.date_calendar {
  .q-date__main {
    .q-date__content {
      .q-date__view {
        .q-date__calendar-days-container {
          .q-date__calendar-days {
            .q-date__range {
              color: #417fb2 !important;
            }

            .q-date__range-from {
              color: #417fb2 !important;
            }

            .q-date__range-to {
              color: #417fb2 !important;
            }

            .q-date__edit-range {
              color: #417fb2 !important;
            }

            .q-date__edit-range-from {
              color: #417fb2 !important;
            }

            .q-date__edit-range-to {
              color: #417fb2 !important;
            }

          }
        }
      }
    }
  }
}
</style>
