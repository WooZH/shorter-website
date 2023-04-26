<script setup>
import { computed } from "@vue/reactivity";
import { onMounted, ref } from "vue";
import { CountTo } from "vue3-count-to";
const props = defineProps({
  info: {
    type: Object,
    default: () => {},
  },
});
const counter = ref(null);
onMounted(() => {
  let io = ref(null);
  const block = document.querySelector(".block");
  io = new IntersectionObserver((entries) => {
    entries.forEach((item) => {
      if (item.isIntersecting) {
        counter.value.start();
        block.style.maxWidth = "100%";
        io.unobserve(block);
      } else {
        return "";
      }
    });
  });
  io.observe(block);
});

const widthPinned = computed(() => {
  return {
    width: `${props.info.data.length * 25 + 70}px`,
  };
});

const startVal = computed(() => {
  const start = Math.floor(props.info.origin * 0.8);
  return start;
});

const isMoney = computed(() => {
  return props.info.name === "Total Value Locked";
});

const autoDecimals = computed(() => {
  return props.info.name === "Total Value Locked" ? 2 : 0;
});
</script>

<template>
  <div class="block" :style="widthPinned">
    <div class="vertical-line"></div>
    <div class="data-block">
      <p class="name title">{{ info.name }}</p>
      <p class="data">
        <span v-show="isMoney">$</span>
        <count-to
          ref="counter"
          separator=","
          :decimals="autoDecimals"
          :useEasing="false"
          :ref="refset"
          :startVal="startVal"
          :endVal="info.origin"
          :duration="1000"
        ></count-to>
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../assets/base.scss" as base;
@import "../assets/base.scss";

.block {
  @include base.flexVerticalCenter;
}
.vertical-line {
  width: 1px;
  height: 60px;
  background: #ffffff;
}
.data-block {
  margin-left: 32px;
  color: #ffffff;
  .name {
    opacity: 0.8;
    font-size: 20px;
    font-weight: 600;
    line-height: 22px;
  }
  .title {
    color: #ffffff;
  }
  .data {
    margin-top: 16px;
    font-size: 50px;
    font-weight: 600;
    line-height: 56px;
  }
}

@media screen and (max-width: 750px) {
  .vertical-line {
    display: none;
  }
  .data-block {
    margin-left: 0;
    &:not(last-child) {
      margin-bottom: 16px;
    }
    .title {
      font-weight: 500;
      font-size: 20px;
      line-height: 30px;
    }
    .data {
      margin-top: 0;
      font-size: 40px;
      line-height: 60px;
    }
  }
}
</style>
