<template>
  <div class="screen-mask">
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
@use "../assets/base.scss" as base;
.screen-mask {
  @include base.trans;
  @include base.flexCenter;
  position: fixed;
  width: 100vw;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  z-index: 999;
}
</style>
