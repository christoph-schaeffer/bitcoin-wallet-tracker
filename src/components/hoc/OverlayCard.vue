<template lang="pug">
  v-card.bwt-overlay-card.pa-3.pa-md-6.mt-3.mt-md-6(v-bind="$attrs")
    .d-flex.flex-wrap
      .justify-space-between.d-flex.grow.flex-wrap
        v-sheet.bwt-overlay-card__overlay(dark
          v-if="$slots.overlay"
          elevation="6"
          :color="overlayColor")
          slot(name="overlay")

        .text-right(v-if="$slots.rightCorner")
          slot(name="rightCorner")
    slot
</template>

<script>
export default {
  name: 'OverlayCard',
  props: {
    overlayColor: {
      type: String,
      default: '#00cae3',
    },
    overlayWidth: {
      type: [Number, String],
      default: 'auto',
    },
  },
};
</script>
<style lang="sass" scoped>
.bwt-overlay-card

  &__overlay
    margin-top: -30px
    margin-bottom: 15px
    padding: 28px
    height: 80px
    border-radius: 4px
    font-size: 36px
    line-height: 24px
    text-align: center

</style>
