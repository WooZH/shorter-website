<template>
  <div class="sub-title">
    <div class="spot"></div>
    <p class="title">{{ title }}</p>
  </div>
</template>

<script setup>
defineProps({
  title: {
    default: "Title",
    type: String,
  },
});
</script>

<style lang="scss" scoped>
@use "../../../assets/base.scss" as base;
@import "../../../assets/base.scss";

.sub-title {
  @include base.flexVerticalCenter;
}

.spot {
  width: 8px;
  height: 8px;
  background: $primaryColor;
  margin-right: 10px;
}
.title {
  font-size: 24px;
  font-weight: 600;
  line-height: 36px;
}
@media screen and (max-width: 750px) {
  .title {
    font-size: 20px;
    line-height: 30px;
  }
}
</style>
