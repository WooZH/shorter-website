<script setup>
import { ref } from "vue";
const openDrawer = ref(false);

function toggleDrawer() {
  // openDrawer.value = !openDrawer.value;
}
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
});
</script>
<template>
  <div class="support-line" :class="{ 'line-closed': openDrawer }">
    <div class="describe" @click="toggleDrawer">
      <span class="learn-more">
        <span class="more">{{ text1 }}</span>
        <span>
          <slot name="before"></slot>
        </span>
        <span v-if="strong !== ''" class="more strong">{{ strong }}</span>
        <slot v-else></slot>
        <span class="more">{{ text2 }}</span>
      </span>
    </div>
    <!-- <Transition name="fade"> -->
    <div class="items" :class="{ 'closed-item': openDrawer }">
      <slot></slot>
    </div>
    <!-- </Transition> -->
    <!-- <svg
      @click="toggleDrawer"
      :class="{ opened: openDrawer }"
      class="icon-plus"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      fill="none"
      version="1.1"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <g style="mix-blend-mode: passthrough" transform="matrix(1,0,0,-1,0,48)">
        <g style="mix-blend-mode: passthrough"></g>
        <g transform="matrix(0,-1,1,0,-36,44)">
          <path
            d="M12.60777,42.0095L6.71361,47.99724L12.6852,54.0636L12.68411,54.0642C12.87967,54.2695,13,54.549099999999996,13,54.8572C13,55.4883,12.49629,56,11.87499,56C11.57177,56,11.296579999999999,55.8778,11.0944,55.6791L11.093869999999999,55.6797L4.343866,48.822559999999996L4.344417,48.822C4.132388,48.6144,4,48.32312,4,48.00002C4,47.99891,4,47.99836,4,47.99724C4,47.99611,4,47.99555,4,47.99499C4,47.67189,4.132388,47.38004,4.344416,47.17243L4.343865,47.17189L11.093820000000001,40.314728L11.096589999999999,40.317527C11.298770000000001,40.121102,11.57283,40,11.874970000000001,40C12.49627,40,12.99998,40.511712,12.99998,41.14286C12.99997,41.48939,12.84782,41.79965,12.60777,42.0095Z"
            fill="#"
            fill-opacity="1"
          />
        </g>
      </g>
    </svg> -->
  </div>
</template>

<style lang="scss" scoped>
@use "../assets/base.scss" as base;
@import "../assets/base.scss";

.support-line {
  display: flex;
}
.items {
  width: 0;

  margin-left: 12px;
}
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
    flex-direction: column;
    padding: 20px 0;
    height: 108px;
    transition: all 0.3s;
    &:first-child {
      border-bottom: 1px solid #e6e6e6;
    }
  }
  .line-closed {
    height: 64px;
  }
  .items {
    margin-left: 0;
    margin-top: 12px;
    transition: all 0.3s;
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
  .icon-plus {
    fill: #c0c4cc;
    position: absolute;
    right: 16px;
    transition: all 0.3s;
  }
  .opened {
    transform: rotateX(180deg);
  }
  .closed-item {
    transform: scaleY(0) translateY(-100%);
    transform-origin: top;
  }
}
</style>
