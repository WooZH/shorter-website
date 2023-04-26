<script setup>
import { toRefs } from "vue";
import arrowRight from "./arrow-right.vue";

const props = defineProps({
  info: {
    type: Object,
    default: () => {},
  },
});

const { info } = toRefs(props);
function jumpTo() {
  if (info.value.link) window.open(info.value.link);
}
</script>

<template>
  <div>
    <div class="big-icon">
      <img :src="info.url" :alt="info.title" />
    </div>
    <p class="title">
      {{ info.title }}
    </p>
    <p class="intro">{{ info.intro }}</p>
    <button class="btn btn-learn" @click="jumpTo">
      <span>Learn more</span><arrowRight class="arrow"></arrowRight>
    </button>
  </div>
</template>

<style lang="scss" scoped>
@use "../assets/base.scss" as base;
@import "../assets/base.scss";

.big-icon {
  width: 68px;
  height: 68px;
  img {
    width: 100%;
  }
}

.title {
  margin-top: 16px;
  font-size: 20px;
  font-weight: 600;
  line-height: 30px;
}

.intro {
  color: $describeFontColor;
  margin-top: 54px;
  height: 96px;
  font-size: 16px;
  line-height: 24px;
}

.btn-learn {
  margin-top: 30px;
  @include base.flexCenter;
  width: 121px;
  height: 34px;
  border-radius: 8px;
  transform: translateX(-12px);
  background-color: transparent;
  color: $primaryColor;
  fill: $primaryColor;
  font-size: 14px;
  font-weight: normal;
  line-height: 22px;
  padding: 0 12px;
  .arrow {
    width: 16px;
    margin-left: 4px;
  }
  &:hover {
    background-color: $primaryColor;
    color: #fff;
    fill: #fff;
    transform: translateY(0);
    transform: translateX(0);
  }
}

@media screen and (max-width: 750px) {
  .function-card {
    &:first-child {
      margin-bottom: 40px;
    }
  }
  .big-icon {
    display: inline-block;
  }
  .intro {
    margin-top: 12px;
    height: auto;
  }
  .btn-learn {
    margin: 24px auto;
    transform: translateX(0);
    width: 160px;
    height: 40px;
    border-radius: 3.96px;
    border: $defaultSolidBorder;
    border-color: $primaryColor;
    font-family: "Haas Grot Text";
  }
}
</style>
