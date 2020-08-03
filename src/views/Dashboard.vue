<template lang="pug">
  v-row.px-3.px-md-6.mt-sm-3.mb-md-3
    v-col( cols="12" sm="6" lg="4" xl="3"
        v-for="(currency, currencyName, index) in currencyRates"
        :key="'currency-rate-'+currencyName" )
      overlay-card
        template(v-slot:overlay)
          | {{currency.symbol}}
        template(v-slot:rightCorner)
          .grey--text.font-weight-light {{currencyName}} / BTC
          .text-h5.font-weight-light {{ currency.buy }}
            br
            small {{ currency.sell }}
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import OverlayCard from '@/components/hoc/OverlayCard';

export default {
  name: 'Dashboard',
  components: {
    OverlayCard,
  },
  computed: {
    ...mapGetters('ticker', [
      'currencyRates',
    ]),
  },
  methods: {
    ...mapActions('ticker', [
      'fetchCurrencyRates',
    ]),
  },
  mounted() {
    this.fetchCurrencyRates();
  },
};
</script>
