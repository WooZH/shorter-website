<template>
  <headerVue></headerVue>
  <div class="eco-container">
    <div class="container">
      <div class="wrap-default">
        <div class="page-intro">
          <p class="title title-h2">Shorter Ecosystem</p>
          <p class="describe">Explore the Shorter Ecosystem</p>
          <a href="
https://docs.google.com/presentation/d/1vIV5IxkECq9nX1WaZ_CmoKxzHioxQn7h2yfpniWoTbo/edit" target="_blank">
            <button class="btn btn-guide">
              Brand Usage Guidelines<arrowRight class="arrow"></arrowRight></button></a>
        </div>

        <div class="eco-list">
          <cardApplicationVue class="eco-item" v-for="(item, index) in apps" :key="`eco_${index}`" :title="item.title"
            :describe="item.describe" :img-link="item.imgUrl" :link="item.link" :tags="item.tags"></cardApplicationVue>
        </div>

        <div class="bg-img"></div>
      </div>
    </div>
  </div>
</template>
<script setup>
import headerVue from "../../components/header.vue";
import arrowRight from "../../components/arrow-right.vue";
import { ref } from "@vue/reactivity";

import cardApplicationVue from "./components/card-application.vue";
const apps = [
  {
    title: "IPTSTR.com",
    describe:
      "IPISTR.com was an independent website designated to be the catalyst energizing IPISTR holders and enthusiasts via detailed on-chain data and price history.",
    tags: ["Website", "Trading"],
    link: "https://ipistr.com",
    imgUrl: "https://ipistr.com/img/gold.svg",
  },
];
</script>

<style lang="scss" scoped>
@use "../../assets/base.scss" as base;
@import "../../assets/index.scss";
@import "../../assets/base.scss";

.eco-container {
  padding: 80px 0 160px;

  .wrap-default {
    position: relative;

    .bg-img {
      position: absolute;
      top: 106px;
      right: 0px;
      width: 782px;
      height: 425px;
      background-image: url("../../img/eco_bg.svg");
      background-size: 100% 100%;
      z-index: 0;
    }
  }
}

.eco-list {
  margin-top: 193px;

  .eco-item {
    margin-bottom: 133px;
  }
}

.page-intro {
  margin-top: 145px;
  justify-content: flex-start;

  .describe {
    margin-top: 16px;
    color: $describeFontColor;
    font-size: 20px;
    line-height: 30px;
  }
}

.btn-guide {
  margin-top: 56px;
  @include base.flexCenter;
  width: auto;
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
</style>
