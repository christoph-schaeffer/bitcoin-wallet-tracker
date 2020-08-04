<template lang="pug">
  v-card
    v-text-field(v-model="addressField", :label="$t('myBitcoins.address')" )
    v-btn(@click="fetchBalance(addressField)") {{$t('myBitcoins.addAddress')}}
    v-row
      v-col(cols="12" v-for="balance in balances" :key="balance.address")
        p address: {{balance.address}}
        p btc: {{balance.btc | localizedNumber(0,8)}}
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'MyBitcoins',
  computed: {
    ...mapGetters('balance', [
      'balances',
    ]),
  },
  methods: {
    ...mapActions('balance', [
      'fetchBalance',
      'updateBalance',
      'removeBalance',
    ]),
  },
  data() {
    return {
      addressField: null,
    };
  },
};
</script>
