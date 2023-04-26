<template>
  <dialogMask @click.self="$emit('close')">
    <div class="subscribe-wrap">
      <div class="subscribe">
        <p class="title">Stay up-to-date with us</p>
        <p class="subscribe-title describe-lg">
          Receive updates to catch up on the latest stories
        </p>
        <subscribeMail
          @success="subscribeSuccess"
          :dialog="true"
          :type="true"
        ></subscribeMail>
      </div>
      <img
        class="close-btn"
        src="../img/close.svg"
        @click="$emit('close')"
        alt="closeSubscribe"
      />
    </div>
  </dialogMask>
</template>
<script setup>
import subscribeMail from "./subscribe-mail.vue";
import dialogMask from "./dialog-mask.vue";
const emit = defineEmits(["success"]);
function subscribeSuccess(address) {
  emit("success", address);
}
</script>
<style lang="scss" scoped>
@use "../assets/base.scss" as base;
@import "../assets/index.scss";
@import "../assets/base.scss";
.subscribe-wrap {
  position: relative;
  width: 560px;
  // height: 318px;
  border-radius: $dialogRadius;
  background: $defaultWhiteColor;
  z-index: 1000;
  padding: 24px 32px;
}
.subscribe {
  font-size: 20px;
  line-height: 30px;

  .title {
    font-weight: 600;
  }
}
.subscribe-title {
  margin-top: 40px;
  font-size: 16px;
  line-height: 24px;
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
</style>
