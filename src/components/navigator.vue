<!-- Home Video Ecosystem -->
<template>
  <div class="navigator-top">
    <div v-for="(item, index) in navList" class="nav-item" :class="{ active: item.link === currentPage }"
      :key="`nav_${index}`" @click="jump(item.link)">
      {{ item.name }}
    </div>
  </div>
</template>

<script setup>
import { computed } from '@vue/reactivity'
import { useRouter, useRoute } from 'vue-router'
const route = useRoute()
const router = useRouter()
const navList = [
  {
    name: 'Home',
    link: '/',
  },
  {
    name: 'Video',
    link: '/video',
  },
  // {
  //   name: "Ecosystem",
  //   link: "/ecosystem",
  // },
]
const currentPage = computed(() => {
  return route.path
})
function jump (path) {
  router.push({ path: path })
}
</script>

<style lang="scss" scoped>
@use '../assets/base.scss' as base;
@import '../assets/base.scss';

.navigator-top {
  width: auto;
  height: 48px;
}

.nav-item {
  cursor: pointer;
  margin-left: 4px;
  display: inline-block;
  padding: 0 32px;
  text-align: center;
  // width: 160px;
  height: 48px;
  line-height: 48px;
  border-radius: 8px;
  color: #3d3d3d;
  @include base.trans;

  &:hover {
    background: rgba(#ef814e, 0.1);
    color: #ef814e;
  }
}

.active {
  background: rgba(#ef814e, 0.1);
  color: #ef814e;
}
</style>
