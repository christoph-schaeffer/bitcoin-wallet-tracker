<template lang="pug">
  v-card.bwt-overlap-card.pa-3.mt-3.mt-md-6.d-flex.flex-wrap
    .justify-space-between.d-flex.grow.flex-wrap
      v-sheet.bwt-overlap-card__heading(:color="overlapColor" elevation="6" dark)
        slot(name="icon")

      .text-right
        .grey--text.font-weight-light {{title}}
        .text-h5.font-weight-light {{ value }}
          br
          small {{ smallValue }}
</template>

<script>
export default {
  name: 'OverlapCard',
  props: {
    title: {
      type: String,
      default: undefined,
    },
    value: {
      type: Number,
      default: undefined,
    },
    smallValue: {
      type: Number,
      default: undefined,
    },
    overlapColor: {
      type: String,
      default: '#00cae3',
    },
  },
  data() {
    return {
      subText: 'henlo this is subtext',
    };
  },
  methods: {
  },
};
</script>
<style lang="sass" scoped>
.bwt-overlap-card

  &__heading
    margin-top: -30px
    padding: 28px
    height: 80px
    border-radius: 4px
    font-size: 36px
    line-height: 24px
    text-align: center

</style>
