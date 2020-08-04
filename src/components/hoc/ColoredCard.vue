<template lang="pug">
  v-card.pa-12.text-center(:color="color" :class="{ 'white--text': dark }")
    .text-h5.mt-n8.mb-4 {{title}}
    v-divider.mb-6(:dark="dark")
    .text-h3
      slot(name="headline")
    .text-h6(v-if="$slots.subHeadline")
      slot(name="subHeadline")
    .mt-4(v-if="$slots.content")
      slot(name="content")
</template>

<script>
export default {
  name: 'SumCard',
  props: {
    title: {
      type: String,
    },
    color: {
      type: String,
      default: '#4caf50',
    },
    dark: {
      type: Boolean,
      default: true,
    },
  },
};
</script>
