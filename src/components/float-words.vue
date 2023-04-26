<template>
  <div class="word-wrap">
    <ul class="word-list">
      <li v-for="(word, index) in scrollList" :key="`word_${index}`">
        {{ word }}
      </li>
    </ul>
  </div>
</template>
<script setup>
import { ref, onMounted } from "vue";
const list = ["Exchange", "Wallet", "Community", "Website"];
let scrollList = ref([]);
function setList() {
  let no = 1;
  scrollList.value[0] = list[0];
  scrollList.value[1] = list[1];
  setInterval(() => {
    no++;
    if (no > list.length - 1) {
      no = 0;
    }
    scrollList.value.push(list[no]);
    if (scrollList.value.length > 2) scrollList.value.splice(0, 1);
  }, 3000);
}
onMounted(() => {
  setList();
});
</script>
<style lang="scss" scoped>
@use "../assets/base.scss" as base;
@import "../assets/base.scss";
.word-wrap {
  display: inline-block;
  text-align: center;
  width: 124px;
  height: 30px;
  font-size: 20px;
  line-height: 30px;
  overflow: hidden;
  color: $primaryColor;
  border-bottom: $defaultSolidBorder;
  border-bottom-color: $primaryColor;
}
.word-list {
  animation: slideUp 3s infinite ease-out;
}
@keyframes slideUp {
  0% {
    transform: translateY(36px);
  }
  40% {
    transform: translateY(0px);
    opacity: 1;
  }
  85% {
    transform: translateY(0px);
    opacity: 1;
  }
  90% {
    transform: translateY(-3px);
    opacity: 0;
  }
  100% {
    transform: translateY(-12px);
    opacity: 0;
  }
}
@keyframes scroll {
  0% {
    transform: translateY(36px);
    opacity: 1;
  }
  20% {
    transform: translateY(0px);
    opacity: 1;
  }
  25% {
    transform: translateY(0px);
    opacity: 0;
  }
  45% {
    transform: translateY(-36px);
    opacity: 1;
  }
  50% {
    transform: translateY(-36px);
    opacity: 0;
  }
  70% {
    transform: translateY(-72px);
    opacity: 1;
  }
  75% {
    transform: translateY(-72px);
    opacity: 0;
  }
  95% {
    transform: translateY(-108px);
    opacity: 1;
  }
  100% {
    transform: translateY(-108px);
    opacity: 0;
  }
}
@media screen and (max-width: 750px) {
  .word-wrap {
    font-size: 16px;
    line-height: 24px;
    width: 104px;
    height: 24px;
  }
}
</style>
