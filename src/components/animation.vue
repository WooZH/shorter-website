<template>
  <div class="presentation">
    <div class="ani-body"></div>
  </div>
</template>
<script setup>
import { onMounted } from "@vue/runtime-core";
import animationData from "../assets/presentation.json";
import lottie from "lottie-web";

onMounted(() => {
  document.querySelector(".ani-body").innerHTML = "";
  lottie.loadAnimation({
    container: document.querySelector(".ani-body"),
    renderer: "svg",
    loop: true,
    autoplay: true,
    animationData: animationData,
    name: "introduce 1",
  });
});
</script>

<style lang="scss" scoped>
.presentation {
  width: 700px;
  height: 480px;
  position: absolute;
  right: 0px;
  top: 0;
  transform: translateX(140px);
  overflow: hidden;
  z-index: 10;
  .ani-body {
    width: 700px;
    height: 480px;
    transform: translateX(50px);
  }
}

@media screen and (max-width: 750px) {
  .presentation {
    position: relative;
    width: 100%;
    transform: translateX(0);
    height: auto;

    .ani-body {
      height: auto;
      width: 100%;

      transform: translateX(0);
    }
  }
}
</style>
