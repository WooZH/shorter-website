<script setup>
import { tool } from "../utils/tools";
defineProps({
  info: {
    type: Object,
    default: () => {},
  },
});
</script>
<template>
  <div class="support-panel">
    <div class="short-line"></div>
    <div class="title">
      <p class="mobile">100%</p>

      <p class="sub">{{ info.title }}</p>
    </div>
    <div class="intro">
      <p>{{ info.intro }}</p>
    </div>
    <div class="support-wrap support-grid">
      <div
        v-for="(item, index) in info.list"
        :key="`support_${index}`"
        class="support-item"
      >
        <img class="icon" :src="tool.imgSrc(item.url)" :alt="item.name" />
      </div>
    </div>
    <div class="links">
      <slot></slot>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../assets/base.scss" as base;
@import "../assets/base.scss";
.support-panel {
  .title {
    color: #333333;
    font-size: 36px;
    font-weight: 600;
    line-height: 60px;
    margin-top: 32px;
    .sub {
      opacity: 0.8;
    }
  }
  .intro {
    height: 72px;
    color: $describeFontColor;
    font-size: 20px;
    line-height: 36px;
    margin-top: 16px;
  }
}
.short-line {
  width: 80px;
  height: 6px;
  background: $primaryColor;
}
.support-grid {
  margin-top: 80px;
  display: grid;
  grid-template: auto / 1fr 1fr;
  gap: 30px 30px;
  width: 510px;
  .support-item {
    width: 240px;
    height: 78px;
    border-radius: 8px;
    background: rgba(255, 255, 255, 0.8);
    @include base.flexCenter;
    .icon {
      width: 127px;
      height: 53px;
    }
  }
}
.links {
  padding: 80px 14px;
}
.mobile {
  margin-right: 12px;
}
.mobile,
.sub {
  display: inline-block;
}

@media screen and (max-width: 750px) {
  .short-line {
    display: none;
  }

  .mobile,
  .sub {
    display: block;
    text-align: center;
    font-size: 24px;
    line-height: 36px;
  }
  .mobile {
    color: $primaryColor;
    font-size: 36px;
    margin-right: 0;
  }
  .support-wrap :first-child.support-item {
    width: 100%;
  }
  .support-panel {
    .title {
      margin-top: 40px;
    }
    .intro {
      text-align: center;
      font-size: 16px;
      line-height: 24px;
    }
  }
  .support-grid {
    margin-top: 24px;
    gap: 15px 15px;
    width: 100%;
    .support-item {
      width: 100%;
      height: 50px;
      .icon {
        height: 28px;
      }
    }
  }

  .links {
    padding: 0;
    margin-top: 44px;
  }
}
</style>
