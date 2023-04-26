<template>
  <ul class="advance-row">
    <li
      v-for="(item, index) in traderList"
      :key="`wvt_${index}`"
      class="advance-item"
    >
      <div class="advance-border">
        <div class="advance-title-block">
          <img
            class="advance-icon"
            :src="tool.imgSrc(`${item.icon}.svg`)"
            type="image/svg+xml"
          />
          <p class="advance-title title">{{ item.title }}</p>
        </div>
        <p class="advance-content">
          {{ item.desc }}
        </p>
      </div>
    </li>
  </ul>
  <div class="mobile-trader">
    <Carousel :autoplay="4500" :wrap-around="true">
      <Slide v-for="(item, index) in traderList" :key="`wvtm_${index}`">
        <div class="advance-item">
          <div class="advance-border">
            <div class="advance-title-block">
              <img
                class="advance-icon"
                :src="tool.imgSrc(`${item.icon}.svg`)"
                type="image/svg+xml"
              />
              <p class="advance-title title">{{ item.title }}</p>
            </div>
            <p class="advance-content">
              {{ item.desc }}
            </p>
          </div>
        </div>
      </Slide>

      <template #addons>
        <Pagination />
      </template>
    </Carousel>
  </div>
</template>

<script setup>
import { tool } from "../utils/tools";
import { Carousel, Pagination, Slide } from "vue3-carousel";

const traderList = [
  {
    icon: "guard_100",
    title: "100% Decentralized",
    desc: "Reinvent the modules and evict each ounce of intervention from off-chain programs and services.",
  },
  {
    icon: "guard_varying",
    title: "Diverse Portfolio Selection",
    desc: "Plenty handy to diversify your crypto portfolio by setting up short positions within the flavored loan pools.",
  },
  {
    icon: "guard_paltrier",
    title: "Abundant Market Liquidity",
    desc: "Maximize the liquidity across corresponding infrastructures collectively to makes trading foolproof and practical.",
  },
];
</script>

<style lang="scss" scoped>
@use "../assets/base.scss" as base;
@import "../assets/base.scss";
.advance-icon {
  width: 40px;
  height: 40px;
}
.advance-title {
  margin-top: 16px;
  font-size: 20px;
  font-weight: 600;
  line-height: 30px;
}
.advance-content {
  margin-top: 12px;
  font-size: 16px;
  line-height: 24px;
  color: $describeFontColor;
  width: 360px;
}
.advance-item {
  border-bottom: $defaultSolidBorder;
}
.advance-border {
  padding: 40px 24px;
  border-left: $defaultSolidBorder;
  width: 480px;
}
.advance-row {
  :first-child.advance-item {
    padding-left: 80px;
    .advance-border {
      padding-top: 0;
    }
  }
  :nth-child(2).advance-item .advance-border {
    border-left: 0;
    border-right: $defaultSolidBorder;
    padding-left: 40px;
    padding-right: 80px;
  }
  :last-child.advance-item {
    border-bottom: 0;
    padding-left: 80px;
    .advance-border {
      padding-bottom: 8px;
    }
  }
}
.mobile-trader {
  display: none;
}

// todo 可切换的卡片

@media screen and (max-width: 750px) {
  .advance-row {
    display: none;
  }
  .mobile-trader {
    display: block;
    border: 1px solid #e9e9e9;
    margin-top: 40px;
    margin-bottom: 48px;
    padding: 24px 0 32px;
    border-radius: 12px;

    .advance-item {
      text-align: center;
      border-bottom: 0;
      padding: 0 16px;
    }
    .advance-border {
      padding: 0;
      border-left: 0;
      width: calc(100vw - 64px);
    }
    .advance-content {
      width: 100%;
    }
    .carousel__slide {
      padding: 0 16px;
      width: 100%;
    }
    .carousel__slide--sliding {
      transition: 0.5s;
    }

    .carousel__slide {
      opacity: 1;
      transform: scale(1);
    }
  }
}
</style>
