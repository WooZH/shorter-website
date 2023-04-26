<template>
  <div class="play-btn">
    <div class="gray">
      <img src="../img/play_btn_gray.svg" alt="" />
    </div>
    <img class="active" src="../img/play_btn.svg" alt="" />
  </div>
</template>

<style lang="scss" scoped>
@use "../assets/base.scss" as base;
@import "../assets/base.scss";
.play-btn {
  position: absolute;
  top: calc(50% - 36px);
  left: calc(50% - 36px);
  z-index: 3;

  .gray {
    width: 72px;
    height: 72px;
    border: 4px solid rgba($color: #fff, $alpha: 0.8);
    @include base.flexCenter;
    @include base.round;

    img {
      width: 36px;
      height: 27.53px;
    }
  }
  .active {
    opacity: 0;
    @include base.trans;
    position: absolute;
  }
  .gray {
    opacity: 1;
    @include base.trans;
    position: absolute;
  }

  cursor: pointer;
  &:hover {
    .active {
      opacity: 1;
    }
    .gray {
      opacity: 0;
    }
  }
}

@media screen and (max-width: 750px) {
  .play-btn {
    top: calc(50% - 28px);
    left: calc(50% - 28px);
    .gray {
      width: 56px;
      height: 56px;
    }
    .active {
      width: 56px;
      height: 56px;
    }
  }
}
</style>
