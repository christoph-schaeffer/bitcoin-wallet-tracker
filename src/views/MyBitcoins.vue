<template lang="pug">
  v-row.px-md-3.mx-0.mt-sm-3.mb-md-3
    v-col( cols="12" lg="6" xl="7")
      v-card.pa-6
        v-row
          v-col(cols="4" lg="6")
            v-select(:label="$t('myBitcoins.currency')"
              v-model="selectedCurrency" :items="currencies")
          v-col(cols="8" lg="6")
            simple-dialog(max-width="600px" :text="$t('myBitcoins.addAddress')" )
              template(v-slot:activator="{ on, attrs }")
                v-btn.mt-2(right absolute dark color="primary" v-bind="attrs" v-on="on")
                  | {{$t('myBitcoins.addAddress')}}
              template(v-slot:content)
                v-text-field(
                  v-model="addressField" :label="$t('myBitcoins.address')" :error="showDialogError"
                  :rules="[v => v.length > 25 && v.length < 36 || $t('myBitcoins.emptyAddress')]")
              template(v-slot:actions)
                v-btn(text color="blue darken-1" @click="saveAddress()") {{$t('common.save')}}
    v-col(cols="12" lg="6"  xl="5" )
      colored-card(:title="$t('myBitcoins.sum')" color="#00cae3")
        template(v-if="btcBalanceSum" v-slot:headline) {{ btcBalanceSum | localizedNumber(0,8)}} BTC
        template(v-else v-slot:headline) 0 BTC
        template(v-if="cBalanceSum" v-slot:subHeadline)
          | {{ cBalanceSum | localizedNumber(2,2)}} {{selectedCurrencySymbol}}
        template(v-else v-slot:subHeadline) 0 {{selectedCurrencySymbol}}
    v-col(v-if="computedBalances.length" cols="12")
      v-card.pa-6
        computed-table(:headers="tableHeaders" :items="computedBalances"
          :footerProps="{itemsPerPageText: $t('myBitcoins.addressesPerPage')}")
          template(v-slot:itemActions="{item}")
            v-icon.mr-3(small @click="updateBalance(item.address)") mdi-refresh
            v-icon(small @click="removeBalance(item.address)") mdi-delete
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import ColoredCard from '@/components/hoc/ColoredCard';
import ComputedTable from '@/components/ComputedTable';
import SimpleDialog from '@/components/hoc/SimpleDialog';
import localizedNumber from '@/filters/localizedNumber';

export default {
  name: 'MyBitcoins',
  components: {
    ColoredCard,
    ComputedTable,
    SimpleDialog,
  },
  computed: {
    ...mapGetters('balance', [
      'balances',
    ]),
    ...mapGetters('ticker', [
      'currencyRates',
    ]),
    currencies() {
      return this.currencyRates ? Object.keys(this.currencyRates) : [];
    },
    selectedCurrencySymbol() {
      return this.currencyRates ? this.currencyRates[this.selectedCurrency].symbol
        : this.$t('common.localeCurrencySymbol');
    },
    computedBalances() {
      return this.balances.map((balance) => ({
        address: balance.address,
        btc: localizedNumber(balance.btc, 0, 8),
        converted: localizedNumber(this.currencyRates
          ? balance.btc * this.currencyRates[this.selectedCurrency].buy : 0,
        2, 2),
      }));
    },
    btcBalanceSum() {
      return this.balances
        ? this.balances.reduce((btcBalanceSum, balance) => btcBalanceSum + balance.btc, 0)
        : 0;
    },
    cBalanceSum() {
      return this.balances && this.currencyRates
        ? this.btcBalanceSum * this.currencyRates[this.selectedCurrency].buy
        : 0;
    },
    tableHeaders() {
      return [
        { text: this.$t('myBitcoins.address'), value: 'address' },
        { text: 'Bitcoin', value: 'btc', align: 'right' },
        { text: this.selectedCurrency, value: 'converted', align: 'right' },
      ];
    },
  },
  methods: {
    ...mapActions('balance', [
      'fetchBalance',
      'updateBalance',
      'updateAllBalances',
      'removeBalance',
    ]),
    ...mapActions('ticker', [
      'fetchCurrencyRates',
    ]),
    ...mapActions('layout', [
      'setShowDialog',
    ]),
    saveAddress() {
      if (this.addressField) {
        this.setShowDialog(false);
        this.fetchBalance(this.addressField.replace(' ', '')).then(() => {
          this.addressField = '';
        });
      } else {
        this.showDialogError = true;
      }
    },
  },
  data() {
    return {
      showDialogError: false,
      addressField: '',
      selectedCurrency: this.$t('common.localeCurrency'),
      showDialog: false,
    };
  },
  mounted() {
    this.fetchCurrencyRates();
    this.updateAllBalances();
  },
};
</script>
