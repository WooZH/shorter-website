<template>
  <div class="slider">
    <div
      v-for="(item, index) in cards"
      :key="`${index}_cv`"
      @touchstart="touchStart"
      @touchmove="touchMove"
      @touchend="touchEnd"
      class="slide-item"
    >
      <cardVow class="sub-card" :info="item"></cardVow>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import cardVow from "./card-vow.vue";
const props = defineProps({
  cards: {
    default: () => [],
    type: Array,
  },
});
// const currentIndex = ref(0);
const startX = ref(0);
const endX = ref(0);

function touchStart(e) {
  clearInterval(timer.value);
  startX.value = e.touches[0].clientX;
}
function touchMove(e) {
  let parentElement = e.target;
  const left = e.touches[0].clientX - startX.value;
  parentElement.style.transform = `translate(${left}px)`;
}

function touchEnd(e) {
  let parentElement = e.currentTarget.parentElement;
  let currentEl = e.target;
  endX.value = e.changedTouches[0].clientX;
  const halfWidth = window.innerWidth * 0.33;
  const diff = startX.value - endX.value;

  if (Math.abs(diff) > halfWidth) {
    if (diff > 0) {
      // currentEl
      currentEl.style.transform = `translateX(-100vw)`;
      currentEl.style.transition = "all 200ms ease-out";
      setTimeout(() => {
        parentElement.appendChild(currentEl);
        restSlideAll();
      }, 300);
    } else {
      currentEl.style.transform = `translateX(100vw)`;
      currentEl.style.transition = "all 200ms ease-out";
      setTimeout(() => {
        const listItems = document.querySelectorAll(".slide-item");
        const lastItem = listItems[listItems.length - 1];
        parentElement.insertBefore(lastItem, listItems[0]);
        restSlideAll();
      }, 300);
    }
  } else {
    restSlide();
  }
  autoplay();

  startX.value = 0;
  endX.value = 0;
}
function restSlide() {
  let listItems = document.querySelectorAll(".slide-item");
  listItems[0].style.transform = `translateX(0)`;
  listItems[0].style.transition = "all 200ms ease-out";
  setTimeout(() => {
    listItems[0].style.transition = "";
    listItems[0].style.transform = ``;
  }, 300);
}
function restSlideAll() {
  let listItems = document.querySelectorAll(".slide-item");

  for (let i = 0; i < listItems.length; i++) {
    listItems[i].style.transform = `scale(${Math.pow(0.9, i)})`;
    listItems[i].style.transition = "all 200ms ease-out";
    setTimeout(() => {
      listItems[i].style.transition = "";
    }, 300);
  }
}
const timer = ref(null);
// auto play
function autoplay() {
  timer.value = setInterval(() => {
    let listItems = document.querySelectorAll(".slide-item");
    const currentEl = listItems[0];
    const parentElement = document.querySelector(".slider");

    currentEl.style.transform = `translateX(-100vw)`;
    currentEl.style.transition = "all 200ms ease-out";
    setTimeout(() => {
      parentElement.appendChild(currentEl);
      restSlideAll();
    }, 150);
  }, 2500);
}

onMounted(() => {
  autoplay();
});
</script>

<style lang="scss" scoped>
.slider {
  width: 100%;
  height: 56vw;

  position: relative;
}
.slide-item {
  // width: 90%;
  // // height: 300px;
  width: 85vw;
  height: 56vw;
  position: absolute;
  left: 0;
  top: 0;
  &:nth-child(1) {
    z-index: 20;
    transition: opacity 0.2s, scale 0.2s, left 0.2s;
  }
  &:nth-child(2) {
    opacity: 0.9;
    left: 10%;
    transform: scale(0.9);
    z-index: 19;
    transition: opacity 0.2s, scale 0.2s, left 0.2s;
  }
  &:nth-child(3) {
    opacity: 0.81;

    left: 18%;
    transform: scale(0.81);
    z-index: 18;
    transition: opacity 0.2s, scale 0.2s, left 0.2s;
  }
  &:nth-child(4) {
    opacity: 0;
    // scale: 0;
    // left: -30%;

    transition: opacity 0.2s, scale 0.2s, left 0.2s;
  }
}
.sub-card {
  pointer-events: none;
}
</style>
