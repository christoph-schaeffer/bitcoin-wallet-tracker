<template lang="pug">
  v-row.px-3.px-md-6.mt-sm-3.mb-md-3
    v-col( cols="12" lg="6")
      overlay-card
        template(v-slot:overlay) {{$t('bitcoinDetails.market')}}
        computed-table(hide-default-footer hide-default-header :items="market")
    v-col( cols="12" lg="6")
      overlay-card
        template(v-slot:overlay) {{$t('bitcoinDetails.transactions')}}
        computed-table(hide-default-footer hide-default-header :items="transactions")
    v-col( cols="12" lg="12")
      overlay-card
        template(v-slot:overlay) {{$t('bitcoinDetails.blockchain')}}
        computed-table(hide-default-footer hide-default-header :items="blockchain")
</template>

<script>
import { mapActions } from 'vuex';

import OverlayCard from '@/components/hoc/OverlayCard';
import ComputedTable from '@/components/ComputedTable';

import localizedNumberFilter from '@/filters/localizedNumber';

export default {
  name: 'Dashboard',
  components: {
    OverlayCard,
    ComputedTable,
  },
  computed: {
    market() {
      return [
        {
          name: this.$t('bitcoinDetails.currentPrice'),
          value: `$ ${localizedNumberFilter(this.$store.getters['simple/price24Hr'], 2)}`,
        },
        {
          name: this.$t('bitcoinDetails.marketCapitalization'),
          value: `$ ${localizedNumberFilter(this.$store.getters['simple/marketCap'], 2)}`,
        },
      ];
    },
    transactions() {
      return [
        {
          name: this.$t('bitcoinDetails.transactions24Hr'),
          value: localizedNumberFilter(this.$store.getters['simple/transactionCount24Hr']),
        },
        {
          name: this.$t('bitcoinDetails.tradingVolume24Hr'),
          value: `${localizedNumberFilter(this.$store.getters['simple/btcSent24Hr'])} BTC`,
        },
      ];
    },
    blockchain() {
      return [
        {
          name: this.$t('bitcoinDetails.difficulty'),
          value: localizedNumberFilter(this.$store.getters['simple/difficulty']),
        },
        {
          name: this.$t('bitcoinDetails.blockCount'),
          value: localizedNumberFilter(this.$store.getters['simple/blockCount']),
        },
        {
          name: this.$t('bitcoinDetails.bitcoinPerBlock'),
          value: `${localizedNumberFilter(this.$store.getters['simple/bcPerBlock'])} BTC`,
        },
        {
          name: this.$t('bitcoinDetails.totalBitcoin'),
          value: `${localizedNumberFilter(this.$store.getters['simple/totalBc'])} BTC`,
        },
        {
          name: this.$t('bitcoinDetails.interval'),
          value: `${localizedNumberFilter(this.$store.getters['simple/interval'])} ${this.$t('time.seconds')}`,
        },
        {
          name: this.$t('bitcoinDetails.hashRate'),
          value: localizedNumberFilter(this.$store.getters['simple/hashRate']),
        },
      ];
    },
  },
  methods: {
    ...mapActions('simple', [
      'fetchAll',
    ]),
  },
  mounted() {
    this.fetchAll();
  },
};
</script>
