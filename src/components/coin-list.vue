<template>
  <div class="coin-list">
    <div class="scroll">
      <div
        v-for="(coin, index) in list"
        :key="`coin_${index}`"
        class="coin-block"
      >
        <img :src="coin.logoURI" :alt="coin.symbol" />
      </div>
    </div>
    <div class="scroll">
      <div
        v-for="(coin, index) in list"
        :key="`coin_${index}`"
        class="coin-block"
      >
        <img :src="coin.logoURI" :alt="coin.symbol" />
      </div>
    </div>
  </div>
</template>
<script setup>
defineProps({
  list: {
    type: Array,
    default: () => [],
  },
});
</script>
<style lang="scss" scoped>
@import "../assets/base.scss";
.coin-list {
  position: relative;
  display: flex;
  width: calc(52px * 8);
  overflow: hidden;

  &:hover .scroll {
    animation-play-state: paused;
  }
  &::before,
  &::after {
    content: "";
    position: absolute;
    top: 0;
    height: 32px;
    width: 16px;
    z-index: 1;
  }
  &::before {
    left: 0;
    background: linear-gradient(to right, $defaultBGColor, transparent);
  }
  &::after {
    right: 0;
    background: linear-gradient(to left, $defaultBGColor, transparent);
  }
  .coin-block {
    margin-right: 20px;
    height: 32px;
    width: 32px;

    img {
      width: 100%;
      border-radius: 50%;
    }
  }
  .coin {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background-color: #ededed;
  }
}

.scroll {
  display: flex;
  animation: scrollLeft 50s infinite linear;
}
@keyframes scrollLeft {
  from {
    transform: translateX(0%);
  }
  to {
    transform: translateX(-100%);
  }
}
@media screen and (max-width: 750px) {
  .coin-list {
    width: calc(100% - 52px);

    &::before,
    &::after {
      content: "";
      position: absolute;
      top: 0;
      height: 40px;
      width: 20px;
      z-index: 1;
    }
    .coin-block {
      margin-right: 20px;
      height: 40px;
      width: 40px;
    }
  }
  .scroll {
    display: flex;
    animation: scrollLeft 50s infinite linear 10ms;
  }
}
</style>
