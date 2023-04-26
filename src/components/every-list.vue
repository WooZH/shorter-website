<template>
  <div class="desktop">
    <div class="design-card-row">
      <div
        v-for="(item, index) in everyList"
        :key="`evel_${index}`"
        class="design-card"
      >
        <img
          class="card-icon"
          :src="tool.imgSrc(`${item.url}.svg`)"
          type="image/svg+xml"
        />
        <p class="card-title title">{{ item.name }}</p>
      </div>
    </div>
    <div class="design-card-row">
      <div
        v-for="(item, index) in everyList"
        :key="`evel_copy_${index}`"
        class="design-card"
      >
        <img
          class="card-icon"
          :src="tool.imgSrc(`${item.url}.svg`)"
          type="image/svg+xml"
        />
        <p class="card-title title">{{ item.name }}</p>
      </div>
    </div>
  </div>
  <div class="mobile">
    <div class="card-wrap">
      <div
        class="design-card"
        v-for="(item, index) in everyList"
        :key="`evel_m_${index}`"
      >
        <img
          class="card-icon"
          :src="tool.imgSrc(`${item.url}.svg`)"
          type="image/svg+xml"
        />
        <p class="card-title title">{{ item.name }}</p>
      </div>
      <div
        class="design-card"
        v-for="(item, index) in everyList"
        :key="`evel_copy_${index}`"
      >
        <img
          class="card-icon"
          :src="tool.imgSrc(`${item.url}.svg`)"
          type="image/svg+xml"
        />
        <p class="card-title title">{{ item.name }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { tool } from "../utils/tools";

const everyList = [
  {
    name: "Crypto Capitals",
    url: "participant1",
  },
  {
    name: "Traders",
    url: "participant2",
  },
  {
    name: "Developers",
    url: "participant3",
  },
  {
    name: "Scholars",
    url: "participant4",
  },
  {
    name: "Fintech Companies",
    url: "participant5",
  },
  {
    name: "Hedge Funds",
    url: "participant6",
  },
];
</script>

<style lang="scss" scoped>
.design-card-row {
  padding: 75px 0 150px;
  padding-top: 0;
  padding-bottom: 70px;
  width: 100%;
  display: grid;
  grid-template-columns: calc(50% - 20px) calc(50% - 20px);
  gap: 70px 40px;
  :nth-child(2n).design-card {
    transform: translateY(40%);
  }
  animation: scrollToTop 6s infinite linear;
}
.design-card {
  position: relative;
  background: #ffffff;
  border-radius: 8px;
  padding: 36px 36px 32px;

  background-image: radial-gradient(
    circle at 100% 0%,
    #fcf3ed 0 18%,
    #fdf7f3 18% 36%,
    #fefbf9 36% 54%,
    #ffffff 54% 100%
  );
}
.card-icon {
  width: 38px;
  height: 38px;
}
.card-title {
  margin-top: 34px;
  font-size: 20px;
  font-weight: 600;
  line-height: 28px;
}
.mobile {
  display: none;
}
@keyframes scrollToTop {
  from {
    transform: translateY(0%);
  }
  to {
    transform: translateY(-100%);
  }
}
@media screen and (max-width: 750px) {
  .design-card-row {
    display: flex;
    padding: 0;
    grid-template-columns: initial;
    gap: 0;
    :nth-child(2n).design-card {
      transform: translateY(0);
    }
  }
  .design-card {
    min-width: 62vw;
    height: 41vw;
    margin-left: 16px;
    padding: 30px 30px 28px;
  }
  .card-title {
    margin-top: 30px;
  }
  .desktop {
    display: none;
  }
  .mobile {
    display: flex;
    // animation: scrollLeft 3s infinite linear;
  }
  .card-wrap {
    display: flex;
    animation: scrollLeft 12s infinite linear;
  }
  .scroll {
    display: flex;
  }
  @keyframes scrollLeft {
    from {
      transform: translateX(0%);
    }
    to {
      transform: translateX(-50%);
    }
  }
}
</style>
