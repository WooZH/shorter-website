<script setup>
defineProps({
  title: {
    type: String,
    default: "",
  },
});
</script>

<template>
  <div class="line-title">
    <div class="line"></div>
    <p class="title">{{ title }}</p>
  </div>
</template>

<style lang="scss" scoped>
@use "../assets/base.scss" as base;
@import "../assets/base.scss";
.line-title {
  @include base.flexVerticalCenter;

  font-size: 24px;
  font-weight: 600;
  line-height: 36px;
  .line {
    width: 6px;
    height: 24px;
    background: $primaryColor;
    margin-right: 16px;
  }
}
</style>
