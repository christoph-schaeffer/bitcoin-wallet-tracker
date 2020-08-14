<template lang="pug">
  v-row.px-md-3.mx-0.mt-sm-3.mb-md-3
    v-col( cols="12" sm="6" lg="4" xl="3"
      v-for="(currency, currencyName) in currencyRates" :key="'currency-rate-'+currencyName"
    )
      overlay-card
        template(v-slot:overlay)
          | {{currency.symbol}}
        template(v-slot:rightCorner)
          .grey--text.font-weight-light {{currencyName}} / BTC
          .text-h5.font-weight-light {{ currency.buy }} {{currency.symbol}}
            br
            small {{ currency.sell }} {{currency.symbol}}
        v-divider.my-3
        .text-right
          v-btn(text :to="{ name: 'Converter', params: { currency: currencyName }}")
            | {{$t('dashboard.convert')}}
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
