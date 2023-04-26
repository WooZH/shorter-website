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
  <div class="card">
    <div class="company-wrap">
      <img class="logo" :src="tool.imgSrc(info.logo)" alt="" />
      <p class="company">{{ info.company }}</p>
    </div>
    <div class="comment">
      <p>{{ info.comment }}</p>
    </div>
    <div class="user-block">
      <img class="avatar" :src="tool.imgSrc(info.avatar)" alt="" />
      <div class="user-wrap">
        <p class="name">{{ info.name }}</p>
        <p class="position">{{ info.position }}</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../assets/base.scss" as base;
@import "../assets/base.scss";
.card {
  width: 100%;
  padding: 32px;
  border-radius: $cardRadius;
  background: #ffffff;
  border: $defaultSolidBorder;
  font-size: 20px;
  line-height: 30px;
}
.company-wrap {
  align-items: center;
}
.company-wrap,
.user-block {
  display: flex;
}
.logo {
  width: 20px;
  height: 20px;
  @include base.round;
  background-color: $defaultBGColor;
}
.user-wrap {
  margin-left: 16px;
  .name {
    color: $fontColor;
  }
}
.company {
  margin-left: 6px;
  font-size: 18px;
  line-height: 22px;
  color: $describeFontColor;
  opacity: 0.75;
}
.avatar {
  width: 64px;
  height: 64px;
  @include base.round;
  background-color: $defaultBGColor;

  border: $defaultSolidBorder;
  border-color: #eeeeee;
}
.name {
  font-weight: 600;
}
.position {
  margin-top: 4px;
  color: $describeFontColor;
}
.comment {
  margin: 12px 0;
  min-height: 180px;
  color: $fontColor;

  p {
    padding-top: 0.5em;
    color: #525252;
    font-style: italic;
    text-indent: 1em;
  }
}

@media screen and (max-width: 750px) {
  .card {
    padding: 16px 16px 24px;
  }
  .comment {
    font-size: 14px;
    line-height: 20px;
    min-height: auto;
  }
  .company {
    font-size: 16px;
    line-height: 24px;
  }
  .user-block {
    margin-top: 30px;
    .avatar {
      width: 40px;
      height: 40px;
    }
    .user-wrap {
      margin-left: 12px;
      font-size: 14px;
      line-height: 20px;
      .position {
        margin-top: 0;
      }
    }
  }
}
</style>
