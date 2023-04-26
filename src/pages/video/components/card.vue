<template>
  <div class="video-preview" :class="{ vertical: vertical }">
    <img class="cover-img" :src="imgUrl" :alt="title" />
    <div class="img-mask"></div>
    <div class="intro-wrap">
      <p class="title">{{ title }}</p>
      <p class="describe">
        {{ describe }}
      </p>
    </div>
    <playButton @click="openVideo()"></playButton>
  </div>
</template>

<script setup>
import { ref } from "@vue/reactivity";
import playButton from "../../../components/play-button.vue";
const props = defineProps({
  title: {
    default: "Title",
    type: String,
  },
  describe: {
    default: "",
    type: String,
  },
  videoLink: {
    default: "",
    type: String,
  },
  imgUrl: {
    default: "",
    type: String,
  },
  vertical: {
    default: false,
    type: Boolean,
  },
});

const emit = defineEmits(["play"]);

function openVideo() {
  emit("play", props.videoLink);
}
</script>

<style lang="scss" scoped>
@use "../../../assets/base.scss" as base;
@import "../../../assets/base.scss";

.video-preview {
  width: 384px;
  height: 256px;
  background: #f2f2f2;
  border-radius: 12px;
  position: relative;
  overflow: hidden;
  // default image background
  background: url("../../../img/default.png");
  background-color: #fffefb;
  background-position: center center;
  background-size: 100% 100%;
  .img-mask {
    width: 100%;
    height: 100%;
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.6) 100%
    );
    position: absolute;
    z-index: 2;
  }
  .cover-img {
    position: absolute;
    // width: 100%;
    left: 50%;
    transform: translateX(-50%);
    height: 100%;
    z-index: 1;
    @include base.trans;
  }
  &:hover {
    .cover-img {
      transform: scale(1.2) translateX(-42%);
    }
    .intro-wrap {
      transform: translateY(-16px);
    }
  }
}
.vertical {
  .cover-img {
    position: absolute;
    width: 100%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: auto;
    z-index: 1;
    @include base.trans;
  }
  &:hover {
    .cover-img {
      transform: scale(1.2) translate(-42%, -42%);
    }
  }
}
.intro-wrap {
  position: absolute;
  width: 100%;
  z-index: 3;
  padding: 16px 16px 0;
  min-height: 48px;
  bottom: 0;
  color: white;
  transform: translateY(calc(100% - 48px));
  @include base.trans;
}
.title {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: white;

  font-size: 20px;
  font-weight: 600;
  line-height: 20px;
  margin-bottom: 16px;
}
.describe {
  text-overflow: ellipsis;
  overflow: hidden;
}

@media screen and (max-width: 750px) {
  .video-preview {
    width: 100%;
    height: calc(66vw - 18px);
  }
  .intro-wrap {
    transform: translateY(-16px);
  }
}
</style>
