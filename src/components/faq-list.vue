<template>
  <div class="faq-row">
    <div
      v-for="(item, index) in faqList"
      :key="`faq_${index}`"
      :id="`faq_${index}`"
      class="faq-item more"
      :class="{ 'faq-item-spread': item.show }"
      @click="toggleItem(index, item)"
    >
      <svg
        class="icon-plus"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        fill="none"
        version="1.1"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <defs>
          <mask id="master_svg0_3330_03389">
            <g style="mix-blend-mode: passthrough">
              <rect
                x="0"
                y="24"
                width="24"
                height="24"
                rx="0"
                fill="#"
                fill-opacity="1"
              />
            </g>
          </mask>
        </defs>
        <g
          style="mix-blend-mode: passthrough"
          transform="matrix(1,0,0,-1,0,48)"
          mask="url(#master_svg0_3330_03389)"
        >
          <g>
            <path
              d="M12.49999,39.157830000000004L5.2471,31.245738C4.992443,30.9508005,4.544998,30.9165092,4.247702,31.169146C3.9504069,31.421784,3.9158417,31.86568,4.170499,32.16062L12.01269,40.7543C12.3121,41.1013,12.86035,41.0771,13.12754,40.70512L20.8677,32.11284C21.0954,31.796943,21.0218,31.357766,20.7034,31.131906C20.385,30.9060463,19.9423,30.9790327,19.7146,31.294926L12.49999,39.157830000000004Z"
              fill="#"
              fill-opacity="1"
            />
          </g>
        </g>
      </svg>
      <div class="faq-item-block">
        <div class="faq-item-title">
          <p>{{ item.question }}</p>
        </div>
      </div>
      <p class="faq-item-content" v-html="item.answer" />
    </div>
  </div>
</template>

<script setup>
import { onBeforeUnmount, onMounted, ref } from "vue";
import { tool } from "../utils/tools";

function toggleItem(index, item) {
  item.show = !item.show;
  const openItem = document.querySelector(`#faq_${index}`);
  const titleEl = document.querySelector(`#faq_${index} .faq-item-title`);
  const contentEl = document.querySelector(`#faq_${index} .faq-item-content`);
  const contentHeight = contentEl.offsetHeight + 40;
  const titleHeight = titleEl.offsetHeight + 48;
  if (item.show) {
    //open
    openItem.style.height = `${titleHeight + contentHeight}px`;
  } else {
    openItem.style.height = `${titleHeight}px`;
  }
}

function resizeAll() {
  const itemList = document.querySelectorAll(".faq-item");
  itemList.forEach((item) => {
    const titleEl = item.children[1];
    const contentEl = item.children[2];
    const titleHeight = titleEl.offsetHeight + 48;
    const contentHeight = contentEl.offsetHeight + 40;

    const isOpen = item.className.includes("faq-item-spread");
    if (isOpen) {
      item.style.height = `${titleHeight + contentHeight}px`;
    } else {
      item.style.height = `${titleHeight}px`;
    }
  });
}

onMounted(() => {
  resizeAll();
  window.addEventListener("resize", tool.debounce(resizeAll, 1000));
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", tool.debounce(resizeAll, 1000));
});

const faqList = ref([
  {
    show: false,
    question: "What’s the goal of this project?",
    answer:
      "Being a top-tier infrastructure allows users to short any token and reap interest from lending any token in TradFi sector.",
  },
  {
    show: false,
    question: "What’s Shorter for?",
    answer:
      "Shorter was born out of a desire to provide intrinsic value and seek to build TradFi things serving intrepid users directly, decoupling from convoluted and redundant procedures.",
  },
  {
    show: false,
    question: "How is Shorter outperform the other TradFi infrastructures?",
    answer:
      'Shorter is a refined one-stop trading venue to leverage the full potential of TradFi. <br> Physical delivery of token derivatives / Direct borrowing pattern / Flexible maximum holding term / Transparent position lifecycle management etc. <br> Check the "Highlights" section on overview page in documentation center for more.',
  },
  {
    show: false,
    question: "Is Shorter secure enough to use?",
    answer:
      "Absolutely. Proprietaries of positions are restricted to smart contracts manageable with users’ manipulation, yet nearly all of the underlying tokens exist beneath thick shims of monitoring without any opening.",
  },
]);
</script>

<style lang="scss" scoped>
@use "../assets/base.scss" as base;
@import "../assets/base.scss";
@import "../assets/index.scss";
.faq-row {
  :last-child.faq-item {
    margin-bottom: 0;
  }
}
.faq-item {
  grid-template-rows: 24px calc(100% - 48px);
  position: relative;
  border-bottom: $defaultSolidBorder;
  padding: 24px 24px;
  padding-left: 0;
  overflow: hidden;
  @include base.trans;
  &:last-child {
    border-bottom: 0;
  }
  &:hover {
    border-color: $primaryColor;
    .faq-item-title {
      color: $primaryColor;
    }
    .icon-plus {
      fill: $primaryColor;
    }
  }
  .faq-item-title {
    @include base.trans;
    color: $fontColor;
    font-size: 20px;
    font-weight: 600;
    line-height: 30px;
  }
  .faq-item-content {
    @include base.trans;
    margin-top: 24px;
    margin-bottom: 16px;
    color: $describeFontColor;
    font-size: 16px;
    line-height: 24px;
  }
}

.faq-item-spread {
  @include base.trans;
  border-color: $primaryColor;
  .faq-item-content {
    color: $describeFontColor;
    font-size: 16px;
    line-height: 24px;
  }
  .faq-item-title {
    color: $primaryColor;
  }
  .icon-plus {
    transform: rotateX(0deg);
  }
}
.icon-plus {
  @include base.flexCenter;
  @include base.trans;

  width: 24px;
  height: 24px;
  fill: $describeFontColor;
  position: absolute;
  top: 28px;
  right: 0;
  transform: rotateX(-180deg);
}

@media screen and (max-width: 750px) {
  .faq-item {
    padding-right: 20%;
  }
}
</style>
