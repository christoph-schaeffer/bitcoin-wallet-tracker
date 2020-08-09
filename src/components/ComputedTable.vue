<template lang="pug">
  v-data-table(v-bind="$attrs" :items="dataItems" :headers="computedHeaders"
    :footerProps="dataFooterProps" :headerProps="dataHeaderProps"
  )

    template(v-slot:body)
      tbody
        tr(v-for="item in dataItems" :key="item.name")
          td(v-for="header in computedHeaders" :key="header.value" v-bind="header" )
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
  },
  computed: {
    computedHeaders() {
      return this.$scopedSlots.itemActions
        ? [...this.headers, {
          text: '', value: 'actions', align: 'right', sortable: false,
        }]
        : [...this.headers];
    },
  },
  data() {
    return {
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
};
</script>
