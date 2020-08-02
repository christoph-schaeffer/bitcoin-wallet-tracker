<template lang="pug">
  v-row.px-3.px-md-6.mt-sm-3.mb-md-3
    v-col( cols="12" sm="6" lg="4" xl="3"
        v-for="(currency, propertyName, index) in currencyRates"
        :key="'currency-rate-'+propertyName" )
      overlap-card(:title="propertyName+' / BTC'" :value="currency.buy" :smallValue="currency.sell")
        template(v-slot:icon) {{currency.symbol}}
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import OverlapCard from '@/components/OverlapCard';

export default {
  name: 'Dashboard',
  components: {
    OverlapCard,
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
    console.log(this.$vuetify.breakpoint);
    this.fetchCurrencyRates();
  },
};
</script>
