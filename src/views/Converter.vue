<template lang="pug">
  v-row.px-md-3.mx-0.mt-sm-3.mb-md-3
    v-col( cols="12" lg="6" xl="7")
      v-card.pa-6
        v-form
          v-row
            v-col.pt-0(cols="5")
              v-select(v-if="toBtc" v-model="selectedCurrency", :items="currencies",
                :label="$t('converter.input')")
              v-text-field.no-pointer-events(v-else readonly  value="BTC",
                :label="$t('converter.input')" )
            v-col.pt-0.cursor-pointer(cols="2" @click="toBtc = !toBtc")
              center.mt-3
                v-icon.text-h3 mdi-swap-horizontal-bold
            v-col.pt-0(cols="5")
              v-text-field.no-pointer-events(v-if="toBtc" readonly value="BTC",
                :label="$t('converter.output')" )
              v-select(v-else v-model="selectedCurrency", :items="currencies",
                :label="$t('converter.output')")

          v-text-field(required v-model="input" :label="$t('converter.amount')",
            :rules="[v => isNumber(v) || $t('converter.notNumericError')]")
          v-btn.mt-4.mr-4(color="primary", @click="reset")
            | {{$t('converter.resetForm')}}
          v-btn.mt-4.mr-4.white--text(color="green" @click="toBtc = !toBtc")
            | {{$t('converter.swapInputOutput')}}

    v-col( v-if="output" cols="12" lg="6"  xl="5" )
      colored-card(v-if="toBtc" :title="$t('converter.result')")
        template(v-slot:headline) {{ output | localizedNumber(0,8)}} BTC
        template(v-slot:subHeadline) {{ output | btcToSatoshi | localizedNumber(0,0)}} Satoshi
      colored-card(v-else :title="$t('converter.result')")
        template(v-slot:headline) {{ output | localizedNumber(2,2)}} {{outputSymbol}}
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import ColoredCard from '@/components/hoc/ColoredCard';

export default {
  name: 'Converter',
  components: {
    ColoredCard,
  },
  props: {
    currency: {
      type: String,
      required: true,
    },
  },
  computed: {
    ...mapGetters('ticker', [
      'currencyRates',
    ]),
    currencies() {
      return this.currencyRates ? Object.keys(this.currencyRates) : [];
    },
    outputSymbol() {
      return this.currencyRates[this.selectedCurrency].symbol;
    },
    output() {
      if (!this.input) { return undefined; }

      const inputNumber = parseFloat(this.input.replace(',', '.'));
      const buyPrice = this.currencyRates[this.selectedCurrency].buy;

      return this.toBtc ? inputNumber / buyPrice : inputNumber * buyPrice;
    },

  },
  data() {
    return {
      input: undefined,
      selectedCurrency: this.currency,
      toBtc: true,
    };
  },
  methods: {
    ...mapActions('ticker', [
      'fetchCurrencyRates',
    ]),
    reset() {
      this.input = undefined;
      this.selectedCurrency = this.currency;
      this.toBtc = true;
    },
    isNumber(value) {
      if (!value) { return false; }

      return !Number.isNaN(value.replace(',', '.'));
    },
  },
  mounted() {
    this.fetchCurrencyRates();
  },
};
</script>
