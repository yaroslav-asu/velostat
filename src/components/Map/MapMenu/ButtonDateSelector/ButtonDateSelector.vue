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
        <q-btn-group class="row items-center justify-between" spread>
          <q-btn :label="$t('mapMenu.thisYear')" color="primary" flat @click="setCurrentYear" />
          <q-btn :label="$t('mapMenu.thisMonth')" color="primary" flat @click="setCurrentMonth" />
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
    return {
      date: this.modelValue
    };
  },
  methods: {
    setCurrentYear() {
      let today = new Date();

      this.date = {
        from: `${today.getFullYear()}/01/01`,
        to: `${today.getFullYear()}/12/31`
      };
      // this.$refs.dateCalendar.setCalendarTo(today.getFullYear(), 11)
    },
    setCurrentMonth() {
      let today = new Date();
      let thisMonth = today.getMonth() + 1;
      if (thisMonth.toString().length < 2) {
        thisMonth = `0${thisMonth}`;
      }
      let lastMonthDay = new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate();
      this.date = {
        from: `${today.getFullYear()}/${thisMonth}/01`,
        to: `${today.getFullYear()}/${thisMonth}/${lastMonthDay}`
      };
      console.log({
          from: `${today.getFullYear()}/${thisMonth}/01`,
          to: `${today.getFullYear()}/${thisMonth}/${lastMonthDay}`
        }
      );
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
