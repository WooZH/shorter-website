<template>
  <div class="partners-wrap">
    <div class="icons">
      <div
        v-for="(item, index) in list"
        :key="`partners_${index}`"
        class="icon-wrap"
      >
        <img class="origin" :src="tool.imgSrc(`${item}.svg`)" :alt="item" />
        <img class="gray" :src="tool.imgSrc(`${item}_gray.svg`)" :alt="item" />
      </div>
    </div>
    <div class="icons icons-second">
      <div
        v-for="(item, index) in listSecond"
        :key="`partners_${index}`"
        class="icon-wrap"
      >
        <img
          class="origin"
          :class="{
            bigger: item === 'GITCOIN',
            'style-salus': item === 'SALUS',
          }"
          :src="tool.imgSrc(`${item}.svg`)"
          :alt="item"
        />
        <img
          class="gray"
          :class="{
            bigger: item === 'GITCOIN',
            'style-salus': item === 'SALUS',
          }"
          :src="tool.imgSrc(`${item}_gray.svg`)"
          :alt="item"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { tool } from "../utils/tools";
const list = ["KKR", "CIRCLE", "HEDGUE", "STANFORD"];
const listSecond = ["IDG", "COINBASE", "GITCOIN", "SALUS"];
</script>

<style lang="scss" scoped>
@use "../assets/base.scss" as base;
.icons {
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  flex-flow: wrap;
  img {
    @include base.trans;
    height: 50px;
  }
  img.bigger {
    height: 60px;
  }
  .origin {
    opacity: 0;
  }
  &:not(:last-child) {
    margin-bottom: 48px;
  }
}
.icons-second {
  height: 60px;
  align-items: center;
}
.icon-wrap {
  position: relative;
  height: 50px;
  .gray {
    position: absolute;
    top: 0;
    left: 0;
  }

  &:hover .gray {
    opacity: 0;
  }

  &:hover .origin {
    opacity: 1;
  }
}

@media screen and (max-width: 750px) {
  .icon-wrap {
    position: relative;
    height: 70px;
    width: 50%;
  }
  .icons {
    height: auto;
    img {
      height: 30px;
    }
    img.bigger {
      height: 36px;
    }
    &:not(:last-child) {
      // margin-bottom: 90px;
      margin-bottom: 0px;
    }
  }
}
</style>
