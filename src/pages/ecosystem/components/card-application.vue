<template>
  <div class="application-introduction">
    <img class="cover-img" :src="imgUrl" :alt="title" />
    <div class="intro-wrap">
      <p class="title-row">
        <span class="title title-h2">
          {{ title }}
        </span>
        <a :href="link" target="_blank" class="more circle-btn">
          <arrowRight class="arrow" />
        </a>
      </p>
      <p class="tags-wrap">
        <span class="tag" v-for="(item, index) in tags" :key="`${title}_${index}`">{{ item }}
        </span>
      </p>
      <p class="describe">
        {{ describe }}
      </p>
    </div>
  </div>
</template>

<script setup>
import arrowRight from "../../../components/arrow-right.vue";
const props = defineProps({
  title: {
    default: "Title",
    type: String,
  },
  describe: {
    default: "",
    type: String,
  },
  tags: {
    default: () => [],
    type: Array,
  },
  imgUrl: {
    default: "",
    type: String,
  },
  link: {
    default: "",
    type: String,
  },
});
</script>

<style lang="scss" scoped>
@use "../../../assets/base.scss" as base;
@import "../../../assets/base.scss";

.application-introduction {
  display: flex;
}

.title-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.intro-wrap {
  flex: 1;
  padding-left: 48px;

  .title {
    font-size: 30px;
    font-weight: 600;
    line-height: 45px;
  }

  .tags-wrap {
    margin-top: 16px;
    color: $primaryColor;

    .tag {
      display: inline-block;
      height: 32px;
      margin-right: 16px;
      font-size: 16px;
      line-height: 32px;
      padding: 0 16px;
      border-radius: $tagRadius;
      border: $defaultSolidBorder;
      border-color: $primaryColor;
    }
  }

  .describe {
    margin-top: 46px;
    font-size: 20px;
    line-height: 30px;
    color: $describeFontColor;
  }
}

.cover-img {
  width: 200px;
  height: 200px;
  border-radius: 8px;
}

.circle-btn {
  @include base.flexCenter;

  width: 28px;
  height: 28px;
  background-color: transparent;
  border-radius: 50%;
  border: $defaultSolidBorder;
  border-width: 2px;
  @include base.trans;

  .arrow {
    fill: $borderColor;
  }

  &:hover {
    border-color: $primaryColor;
    background-color: $primaryColor;

    .arrow {
      fill: #fff;
    }
  }
}
</style>
