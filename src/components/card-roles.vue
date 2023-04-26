<script setup>
import arrowRight from "./arrow-right.vue";

defineProps({
  info: {
    type: Object,
    default: () => {},
  },
});
</script>

<template>
  <div class="card card-bg" :class="`card-${info.name}`">
    <p class="card-name title">{{ info.name }}</p>
    <p class="card-title title">
      <span class="strong">{{ info.strong }}</span>
      {{ info.title }}
    </p>
    <p class="card-content">{{ info.content }}</p>
    <a :href="info.url" class="more circle-btn"><arrowRight class="arrow" /></a>
  </div>
</template>

<style lang="scss" scoped>
@use "../assets/base.scss" as base;
@import "../assets/base.scss";
.card {
  position: relative;
  width: 100%;
  height: 380px;
  padding: 30px;
  background-color: #fff;
  border: $defaultSolidBorder;
  border-radius: $cardRadius;
  @include base.trans;

  &:hover {
    box-shadow: 0px 8px 16px 0px rgba(237, 229, 224, 0.5);
    .circle-btn {
      border-color: $primaryColor;
      background-color: $primaryColor;
    }
    border-color: $primaryColor;

    .arrow {
      fill: #fff;
    }
  }
}
.strong {
  color: $primaryColor;
}
.card-name {
  font-size: 20px;
  font-weight: 600;
  line-height: 30px;
}
.card-title {
  font-weight: 600;
  font-size: 32px;
  line-height: 45px;
  margin-top: 20px;
  color: $fontColor;
}
.card-content {
  color: $describeFontColor;
  font-size: 16px;
  font-weight: normal;
  line-height: 30px;
  margin-top: 40px;
}

.circle-btn {
  @include base.flexCenter;
  position: absolute;
  bottom: 30px;
  right: 30px;
  width: 28px;
  height: 28px;
  background-color: #fff;
  border-radius: 50%;
  border: $defaultSolidBorder;
  border-width: 1px;
  @include base.trans;
  .arrow {
    fill: $borderColor;
  }
}

.card-bg {
  background-size: 36%;
  background-repeat: no-repeat;
  background-position: calc(100% + 20px) -25px;
}
.card-Provider {
  background-image: url(../img/square.svg);
}
.card-Trader {
  background-image: url(../img/lighting.svg);
}
.card-Ruler {
  background-image: url(../img/tool.svg);
}

@media screen and (max-width: 750px) {
  .card {
    min-width: 232px;
    width: 100%;
    height: 232px;
    padding: 16px;
  }
  .card-title {
    margin-top: 4px;
    font-size: 24px;
    line-height: 36px;
  }
  .card-content {
    margin-top: 12px;
    font-size: 14px;

    line-height: 20px;
  }
  .circle-btn {
    bottom: 16px;
    right: 16px;
  }
}
</style>
