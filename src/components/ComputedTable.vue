<template lang="pug">
  v-data-table(v-bind="$attrs" :items="dataItems" :headers="dataHeaders"
    :footerProps="dataFooterProps" :headerProps="dataHeaderProps")

    template(v-slot:body)
      tbody
        tr(v-for="item in dataItems" :key="item.name")
          td(v-for="header in dataHeaders" :key="header.value" v-bind="header" )
            template(v-if="header.value === 'actions'")
              slot(name="itemActions" :item="item")
            template(v-else)
              | {{item[header.value]}}
</template>

<script>
export default {
  name: 'ComputedTable',
  props: {
    items: {
      type: Array,
      required: true,
    },
    headers: {
      type: Array,
      default: () => [
        { value: 'name' },
        { value: 'value', align: 'right' },
      ],
    },
    footerProps: {
      type: Object,
    },
    headerProps: {
      type: Object,
    },
  },
  watch: {
    items() {
      this.dataItems = this.items;
    },
    headers() {
      this.dataHeaders = this.headers;
    },
  },
  data() {
    return {
      dataHeaders: [...this.headers],
      currentPage: 1,
      dataItems: this.items,
      dataHeaderProps: {
        ...this.$t('table.header'),
        ...this.headerProps,
      },
      dataFooterProps: {
        ...this.$t('table.footer'),
        ...this.footerProps,
      },
    };
  },
  mounted() {
    if (this.$scopedSlots.itemActions) {
      this.dataHeaders.push({
        text: '', value: 'actions', align: 'right', sortable: false,
      });
    }
  },
};
</script>
