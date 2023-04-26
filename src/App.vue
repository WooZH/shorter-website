<template>
  <router-view></router-view>
</template>
<script setup>
import { onMounted } from "vue";
onMounted(async () => {
  // window.alert(window.innerWidth);
  // const vp = document.querySelector("meta[name=viewport]");
  // const windowWidth = window.outerWidth;
  // if (windowWidth <= 768) {
  //   vp.setAttribute(
  //     "content",
  //     `width=device-width, initial-scale=${windowWidth / 1200}`
  //   );
  // }
});
</script>
