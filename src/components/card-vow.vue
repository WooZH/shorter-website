<script setup>
defineProps({
  info: {
    type: Object,
    default: () => {},
  },
});
</script>

<template>
  <div class="card">
    <div class="pic">
      <img class="center-img" :src="info.url" alt="" />
      <div class="title-mask">
        <p class="title title-h2">{{ info.title }}</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../assets/base.scss" as base;
@import "../assets/index.scss";
.card {
  width: 100%;
  height: 388px;
  .pic {
    width: 100%;
    height: 388px;
    border-radius: 4px;
    background: #d8d8d8;
    position: relative;
    overflow: hidden;
    .center-img {
      height: 100%;
      margin-left: 50%;
      transform: translateX(-50%);
    }
    .title {
      color: #fff;
      font-size: 26px;
      line-height: 34px;
    }
  }
  .title-mask {
    padding: 24px 16px;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.01) 0%,
      rgba(0, 0, 0, 0.01) 0%,
      rgba(0, 0, 0, 0.35) 35%,
      rgba(0, 0, 0, 0.92) 100%,
      rgba(0, 0, 0, 0.92) 100%
    );
  }
  .describe {
    margin-top: 24px;
    font-size: 16px;
    line-height: 24px;
    color: $fontColor;
  }
}

@media screen and (max-width: 750px) {
  .card,
  .card .pic {
    width: 85vw;
    height: 56vw;
    .title {
      font-size: 24px;
      line-height: 36px;
    }

    .center-img {
      width: 100%;
      height: auto;
    }
  }
}
</style>
