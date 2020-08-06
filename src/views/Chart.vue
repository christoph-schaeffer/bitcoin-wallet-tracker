<template lang="pug">
  v-card.ma-3.ma-md-6.pa-3.pa-md-6
    v-form
      v-row
        v-col.pt-0(cols="6" lg="4" xl="3")
          v-select(:label="$t('chart.timespan')" v-model="timespan" :items="timespans")

    line-chart(:height="180" :chartData="chartData" :options="chartOptions")
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import LineChart from '@/components/LineChart';
import localizedDate from '@/filters/localizedDate';

export default {
  name: 'Chart',
  components: { LineChart },
  computed: {
    ...mapGetters('chart', [
      'values', 'unit',
    ]),
    chartData() {
      if (!this.values) { return {}; }

      return {
        labels: this.formatLabels(this.values),
        datasets: [
          {
            label: this.unit,
            backgroundColor: 'transparent',
            borderColor: '#00cae3',
            data: this.values,
            pointRadius: 0,
            pointHitRadius: 5,
            pointHoverRadius: 10,
            pointBackgroundColor: '#00cae3',
          },
        ],
      };
    },
    chartOptions() {
      return {
        legend: {
          display: false,
        },
        scales: {
          yAxes: [
            {
              scaleLabel: {
                display: true,
                labelString: this.unit ? this.unit : '',
              },
            },
          ],
          xAxes: [
            {
              scaleLabel: {
                display: true,
                labelString: this.$t('chart.date'),
              },
            },
          ],
        },
      };
    },
  },
  methods: {
    ...mapActions('chart', [
      'fetchChart',
    ]),
    formatLabels(values) {
      return values.map((value) => localizedDate((new Date(value.x * 1000))));
    },
  },
  watch: {
    timespan() {
      this.fetchChart(this.timespan);
    },
  },
  data() {
    return {
      timespan: '1year',
      timespans: [
        { text: this.$t('chart.1week'), value: '1week' },
        { text: this.$t('chart.1month'), value: '30days' },
        { text: this.$t('chart.6months'), value: '180days' },
        { text: this.$t('chart.1year'), value: '1year' },
        { text: this.$t('chart.3years'), value: '3years' },
        { text: this.$t('chart.allTime'), value: 'all' },
      ],
    };
  },
  mounted() {
    this.fetchChart(this.timespan);
  },
};
</script>
