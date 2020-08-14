<template lang="pug">
  v-navigation-drawer(app fixed
    v-model="showDrawer" src="@/assets/drawerBackground.jpg" width="260px"
  )
    v-list
      v-list-item
        v-img.mr-2(src="@/assets/logo.svg" max-width="50")
        v-list-item-content
          v-list-item-title {{ $t('common.appName') }}

    v-divider.mb-2.mx-4

    v-list
      v-list-item-group(color="primary")
        v-list-item(v-for="(item, i) in items" :key="'nav-'+i" :to="item.to")
          v-list-item-icon
            v-icon {{item.icon}}
          v-list-item-content
            v-list-item-title {{item.title}}
</template>

<script>
import * as routes from '@/router/routes';

export default {
  name: 'NavigationDrawer',
  computed: {
    showDrawer: {
      get() {
        return this.$store.getters['layout/showDrawer'];
      },
      set(value) {
        this.$store.dispatch('layout/setShowDrawer', value);
      },
    },
  },
  data() {
    return {
      items: [
        {
          icon: 'mdi-view-dashboard',
          title: this.$t('navigation.dashboard'),
          to: { name: routes.dashboard.name },
        },
        {
          icon: 'mdi-ballot',
          title: this.$t('navigation.bitcoinDetails'),
          to: { name: routes.bitcoinDetails.name },
        },
        {
          icon: 'mdi-chart-line',
          title: this.$t('navigation.chart'),
          to: { name: routes.chart.name },
        },
        {
          icon: 'mdi-swap-horizontal-bold',
          title: this.$t('navigation.converter'),
          to: { name: routes.converter.name, params: { currency: this.$t('common.localeCurrency') } },
        },
        {
          icon: 'mdi-wallet',
          title: this.$t('navigation.myBitcoins'),
          to: { name: routes.myBitcoins.name },
        },
      ],
    };
  },
  mounted() {
    this.showDrawer = ['lg', 'xl'].includes(this.$vuetify.breakpoint.name);
  },
};
</script>
