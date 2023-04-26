<template>
  <dialogMask v-if="!dialogType" @click.self="closeDialog()">
    <div class="subscribe-wrap">
      <div class="subscribe">
        <img class="subscribe-icon" src="../img/icon-mail.svg" alt="" />
        <p class="title title-h2 subscribe-title">Thanks for signing up</p>
        <p class="subscribe-intro">
          Check your inbox {{ address }} for a welcome note.
        </p>
        <p class="subscribe-intro">
          Add <span class="strong">shorter@getrevue.co</span> to the address
          book to keep you in the loop.
        </p>
      </div>
      <img
        class="close-btn"
        src="../img/close.svg"
        @click="closeDialog()"
        alt=""
      />
    </div>
  </dialogMask>
  <dialogMobileMask v-else @click.self="closeDialog()">
    <Transition name="slide-fast">
      <div v-show="closeDialogFlag === false" class="subscribe-wrap-mobile">
        <div class="subscribe">
          <p class="title title-h2 subscribe-title">Thanks for signing up</p>
          <p class="subscribe-intro">
            Check your inbox {{ address }} for a welcome note.
          </p>
          <p class="subscribe-intro">
            Add <span class="strong">shorter@getrevue.co</span> to the address
            book to keep you in the loop.
          </p>
        </div>
        <div class="progress">
          <div class="bar"></div>
        </div></div
    ></Transition>
  </dialogMobileMask>
</template>
<script setup>
import { computed } from "@vue/reactivity";
import { onMounted, ref } from "vue";
import dialogMask from "./dialog-mask.vue";
import dialogMobileMask from "./dialog-mobile-mask.vue";
const emit = defineEmits(["close"]);

const closeDialogFlag = ref(null);
defineProps({
  address: {
    default: "",
    type: String,
  },
});

function closeDialog() {
  closeDialogFlag.value = true;
  setTimeout(() => {
    emit("close");
  }, 200);
}

const dialogType = computed(() => {
  const windowWidth = window.outerWidth;
  if (windowWidth <= 750) {
    return 1;
  } else {
    return 0;
  }
});
onMounted(() => {
  setTimeout(() => {
    closeDialogFlag.value = false;
  }, 200);
  if (dialogType) {
    setTimeout(() => {
      closeDialog();
    }, 5 * 1000);
  }
});
</script>
<style lang="scss" scoped>
@use "../assets/base.scss" as base;
@import "../assets/index.scss";
@import "../assets/base.scss";
.subscribe-wrap {
  position: relative;
  text-align: center;

  width: 560px;
  border-radius: $dialogRadius;
  background: $defaultWhiteColor;
  z-index: 1000;
  padding: 24px 32px;
}
.subscribe-title {
  text-align: left;
  font-size: 20px;
  font-weight: 600;
  line-height: 30px;
  margin-bottom: 12px;
}
.subscribe-intro {
  text-align: left;
  font-size: 16px;
  font-weight: normal;
  line-height: 24px;
  color: $describeFontColor;
}
.close-btn {
  @include base.round;
  @include base.trans;
  cursor: pointer;
  position: absolute;
  right: 32px;
  top: 24px;
  box-shadow: 0 10px 12px rgba(#e3e6ec, 0.5);
  &:hover {
    box-shadow: 0 10px 14px rgba(#e3e6ec, 0.8);
  }
}
.subscribe-wrap-mobile {
  background: $defaultBGColor;
  padding: 16px 16px 0;
  border-radius: 0 0 $cardRadius $cardRadius;
}
.progress {
  margin-top: 36px;
  width: 100%;
  height: 4px;
  border-radius: 4px;
  background-color: #e9e9e9;
  position: relative;
  .bar {
    position: absolute;
    width: 100%;
    height: 4px;
    border-radius: 4px;
    background-color: $primaryColor;
    animation: widthReduce 5s infinite linear;
  }
}
@keyframes widthReduce {
  from {
    width: 100%;
  }
  to {
    width: 0;
  }
}
</style>
