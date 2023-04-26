<script setup>
import { toRefs } from "vue";
import arrowRight from "./arrow-right.vue";
const props = defineProps({
  text1: {
    type: String,
    default: "",
  },
  text2: {
    type: String,
    default: "",
  },
  strong: {
    type: String,
    default: "",
  },
  link: {
    type: String,
    default: "",
  },
});
const { link } = toRefs(props);
function jumpTo() {
  if (link.value) window.open(link.value);
}
</script>
<template>
  <div class="support-line">
    <a :href="link" target="_blank">
      <span class="learn-more">
        <span class="more">{{ text1 }}</span>
        <span>
          <slot name="before"></slot>
        </span>
        <span v-if="strong !== ''" class="more strong">{{ strong }}</span>
        <slot v-else></slot>
        <span class="more">{{ text2 }}</span>
        <arrowRight class="array" /> </span
    ></a>
  </div>
</template>

<style lang="scss" scoped>
@use "../assets/base.scss" as base;
@import "../assets/base.scss";
.learn-more {
  display: inline;
  font-size: 20px;
  line-height: 30px;
  @include base.flexVerticalCenter;
  span {
    display: inline-block;
  }
  &:hover {
    .array {
      fill: $primaryColor;
    }
  }
}
.strong {
  color: $primaryColor;
  margin: 0 8px;
}
.array {
  @include base.trans;
  margin-left: 4px;
  fill: $fontColor;
}
@media screen and (max-width: 750px) {
  .support-line {
    padding: 20px 0;
    &:first-child {
      border-bottom: 1px solid #e6e6e6;
    }
  }
  .learn-more {
    font-size: 16px;
    line-height: 24px;
  }
  .array {
    position: absolute;
    right: 16px;
    fill: #c0c4cc;
    width: 28px;
    height: 28px;
  }
}
</style>
