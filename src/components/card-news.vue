<script setup>
defineProps({
  info: {
    type: Object,
    default: () => {},
  },
  sort: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <div class="card" :class="{ reverse: sort }">
    <div class="card-item image">
      <img :src="info.url" :alt="info.url" />
    </div>
    <div class="card-item content">
      <p class="subTitle">{{ info.subtitle }}</p>
      <p class="title">{{ info.title }}</p>
      <p class="describe">{{ info.describe }}</p>
      <a class="btn btn-ghost more" :href="info.link">{{ info.linkName }}</a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../assets/base.scss" as base;
@import "../assets/base.scss";
.card {
  width: 100%;
  display: flex;
  justify-content: space-between;
  .card-item {
    width: calc(50% - 40px);
  }
  .image {
    height: 372px;
    background: #d8d8d8;
  }
  .subTitle {
    font-size: 18px;
    line-height: 27px;
    color: $primaryColor;
  }
  .title {
    margin-top: 16px;
    color: $fontColor;
    font-size: 30px;
    font-weight: 600;
    line-height: 42px;
  }
  .describe {
    margin-top: 24px;
    color: $describeFontColor;
    font-size: 16px;
    line-height: 24px;
  }

  .more {
    margin-top: 50px;
  }
}
.reverse {
  flex-direction: row-reverse;
}
</style>
