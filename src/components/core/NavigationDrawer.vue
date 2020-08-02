<template lang="pug">
  div
    v-navigation-drawer(app fixed
      v-model="showDrawer"
      src="@/assets/drawerBackground.jpg"
      width="260px"
    )
      v-list
        v-list-item
          v-img.mr-2(src="@/assets/logo.svg" max-width="50")
          v-list-item-content
            v-list-item-title {{ $t('common.appName') }}

      v-divider.mb-2.mx-4

      v-list
        v-list-item-group(v-model="activeItem" color="primary")
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
      activeItem: 'nav-0',
      items: [
        {
          icon: 'mdi-view-dashboard',
          title: this.$t('navigation.dashboard'),
          to: routes.dashboard,
        },
      ],
    };
  },
};
</script>
