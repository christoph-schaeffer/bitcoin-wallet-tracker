<template lang="pug">
  v-data-table(v-bind="$attrs" :items="dataItems" :headers="dataHeaders")
    template(v-slot:body)
      tbody
        tr(v-for="item in dataItems" :key="item.name")
          td(v-for="header in dataHeaders" :key="header.value" v-bind="header" )
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
      dataItems: this.items,
      dataHeaders: this.headers,
    };
  },
};
</script>
