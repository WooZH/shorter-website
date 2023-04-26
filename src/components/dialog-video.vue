<template>
  <dialogMask @click.self="closeVideo">
    <div class="video-dialog-wrap" :class="{ mobile: deviceType === 'mobile' }">
      <iframe
        style="width: 100%; height: 100%"
        :src="`${address}?&autoplay=1&loop=1&vq=hd1080`"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write;fullscreen; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  </dialogMask>
</template>
<script setup>
import dialogMask from "./dialog-mask.vue";
import { onMounted, onUnmounted, ref } from "@vue/runtime-core";
defineProps({
  address: {
    default: "https://www.youtube.com/embed/djCap1Z8sXM",
    type: String,
  },
});
const emit = defineEmits(["close"]);
function closeVideo() {
  emit("close");
}
const deviceType = ref("");
onMounted(() => {
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
    deviceType.value = "mobile";
  }
});
onUnmounted(() => {});
</script>
<style lang="scss" scoped>
@use "../assets/base.scss" as base;
@import "../assets/index.scss";
@import "../assets/base.scss";
.video-dialog-wrap {
  // width: 50%;
  width: 50vw;
  height: calc(50vw / 16 * 9);
  max-width: 1000px;
  @include base.flexCenter;
  .video-player-wrap {
    width: 100%;
    .video-player {
      width: 100%;
    }
  }
}
.mobile.video-dialog-wrap {
  width: 100vw;
  height: calc(100vw / 16 * 9);
  max-width: 100vw;
}
</style>
