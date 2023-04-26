<template>
  <div class="header" :class="{ filter: isFilter }">
    <div class="header-wrap">
      <div class="logo"><logo class="main-logo"></logo></div>
      <div class="nav-wrap">
        <navigator></navigator>
        <div class="navigator" :class="{ 'transition-nav': showNav }">
          <a class="btn btn-primary btn-launch" :href="url.launchApp">
            Launch App
          </a>
        </div>
      </div>
      <div class="stack" @click="turnNavMask()">
        <Transition name="rotate">
          <svg
            v-show="!isOpen"
            class="closed"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            fill="none"
            version="1.1"
            width="20"
            height="16"
            viewBox="0 0 20 16"
          >
            <g>
              <path
                d="M18.4615,3.1068L1.53846,3.1068C0.692307,3.1068,0,2.40777,0,1.5534C0,0.699029,0.692307,0,1.53846,0L18.4615,0C19.3077,0,20,0.699029,20,1.5534C20,2.40777,19.3077,3.1068,18.4615,3.1068ZM18.4615,9.5534L1.53846,9.5534C0.692307,9.5534,0,8.85437,0,8C0,7.14563,0.692307,6.4466,1.53846,6.4466L18.4615,6.4466C19.3077,6.4466,20,7.14563,20,8C20,8.85437,19.3077,9.5534,18.4615,9.5534ZM18.4615,16L1.53846,16C0.692307,16,0,15.301,0,14.4466C0,13.5922,0.692307,12.8932,1.53846,12.8932L18.4615,12.8932C19.3077,12.8932,20,13.5922,20,14.4466C20,15.301,19.3077,16,18.4615,16Z"
                fill="#333333"
                fill-opacity="1"
              />
            </g>
          </svg>
        </Transition>
        <Transition name="rotate">
          <svg
            v-show="isOpen"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            fill="none"
            version="1.1"
            width="28"
            height="28"
            viewBox="0 0 28 28"
          >
            <defs>
              <mask id="master_svg0_2852_3843">
                <g style="mix-blend-mode: passthrough">
                  <rect
                    x="0"
                    y="0"
                    width="28"
                    height="28"
                    rx="0"
                    fill="#FFFFFF"
                    fill-opacity="1"
                  />
                </g>
              </mask>
            </defs>
            <g
              style="mix-blend-mode: passthrough"
              mask="url(#master_svg0_2852_3843)"
            >
              <g style="mix-blend-mode: passthrough">
                <g
                  style="mix-blend-mode: passthrough"
                  transform="matrix(0.7071067690849304,-0.7071067690849304,0.7071067690849304,0.7071067690849304,-3.985120977507904,6.621254001511261)"
                >
                  <rect
                    x="6"
                    y="8.12109375"
                    width="3"
                    height="20"
                    rx="1.5"
                    fill="#333333"
                    fill-opacity="1"
                  />
                </g>
                <g
                  style="mix-blend-mode: passthrough"
                  transform="matrix(-0.7071067690849304,-0.7071067690849304,-0.7071067690849304,0.7071067690849304,43.74852855138306,18.121233841011417)"
                >
                  <rect
                    x="22.263427734375"
                    y="8.12109375"
                    width="3"
                    height="20"
                    rx="1.5"
                    fill="#333333"
                    fill-opacity="1"
                  />
                </g>
              </g>
            </g>
          </svg>
        </Transition>
      </div>
    </div>
    <Transition name="slide">
      <div class="nav-mask" v-show="isOpen" @click="turnNavMask()">
        <div class="nav-container">
          <div class="nav-menu">
            <div
              class="vertical-nav"
              v-for="(item, index) in navList"
              :key="`vn_${index}`"
              @click="jump(item.link)"
            >
              <p class="title item">
                {{ item.name }}
              </p>
            </div>
          </div>
          <div class="launch-wrap">
            <div class="vertical-nav">
              <a
                :href="url.launchApp"
                target="_blank"
                class="btn btn-primary launch-btn"
                >Launch APP</a
              >
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>
<script setup>
import { computed } from "@vue/reactivity";
import { onMounted, ref } from "@vue/runtime-core";
import { useRouter, useRoute } from "vue-router";
import logo from "./logo.vue";
import navigator from "./navigator.vue";
const route = useRoute();
const router = useRouter();
const navList = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Video",
    link: "/video",
  },
];
const currentPage = computed(() => {
  return route.path;
});
function jump(path) {
  router.push({ path: path });
}

const url = {
  launchApp: "https://app.shorter.finance",
};
defineProps({
  showNav: {
    default: false,
    type: Boolean,
  },
});

const isFilter = ref(false);
const isOpen = ref(false);
let bodyEl = document.body;
let top = ref(0);
function turnNavMask() {
  isOpen.value = !isOpen.value;
  // stopBodyScroll(isOpen.value);
}
function stopBodyScroll(isFixed) {
  if (isFixed) {
    top.value = window.scrollY;

    bodyEl.style.position = "fixed";
    bodyEl.style.top = -top.value + "px";
  } else {
    bodyEl.style.position = "";
    bodyEl.style.top = "";

    window.scrollTo(0, top.value);
  }
}
onMounted(() => {
  window.addEventListener("scroll", (e) => {
    const scrollY = window.scrollY;
    isFilter.value = scrollY > 0;
  });
});
</script>

<style lang="scss" scoped>
@use "../assets/base.scss" as base;
@import "../assets/base.scss";
@import "../assets/index.scss";
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;
  background: $defaultBGColor;
  z-index: 101;
  @include base.flexCenter;
  @include base.trans;
}
.filter {
  background: rgba($defaultBGColor, 0.9);
  backdrop-filter: blur(20px);
  box-shadow: 0px 4px 10px 0px rgba(239, 129, 78, 0.06);
}
.nav-wrap {
  @include base.flexCenter;
}
.header-wrap {
  z-index: 101;
  width: 1200px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.navigator {
  width: 0;
  opacity: 0;
  @include base.trans;

  .btn {
    height: 48px;
    line-height: 100%;
  }
  .btn-launch {
    width: 200px;
    font-size: 16px;
  }
}
.transition-nav {
  margin-left: 53px;
  width: 200px;
  opacity: 1;
}
.stack {
  display: none;
}

@media screen and (max-width: 750px) {
  .header {
    height: 44px;
  }
  .header-wrap {
    width: 100%;
    padding: 0 16px;
  }
  .logo,
  .main-logo {
    width: 86px;
    height: 32px;
  }
  .nav-wrap {
    display: none;
  }
  .stack {
    display: block;
    width: 28px;
    height: 28px;
    position: relative;
    svg {
      position: absolute;
    }
    .closed {
      margin-top: 6px;
      margin-left: 4px;
    }
  }
  .nav-container {
    background: $defaultBGColor;
    padding-top: 60px;
  }
  .nav-mask {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba($color: #000000, $alpha: 0.4);
    z-index: 10;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .vertical-nav {
      padding: 0 16px;
      .item {
        padding: 25px 0;
        font-size: 20px;
        font-weight: 600;
        line-height: 30px;
        color: $fontColor;
      }
      .active {
        color: $primaryColor;
      }
      &:not(:last-child) .item {
        border-bottom: 1px solid #e6e6e6;
      }
    }
    .launch-wrap {
      padding: 16px 0;
      .launch-btn {
        width: 100%;
        height: 56px;
        font-size: 20px;
        line-height: 36px;
      }
    }
  }
}
</style>
