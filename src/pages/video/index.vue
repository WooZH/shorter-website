<template>
  <headerVue></headerVue>
  <div class="video-container">
    <div class="container">
      <div class="wrap-default">
        <div class="page-intro">
          <p class="title title-h2">Video</p>
          <p class="describe">
            Learn more about Shorter, our technology, vision and ambassadors.
          </p>
        </div>

        <!-- Introduction -->
        <div class="row">
          <subTItleVue title="Introduction"></subTItleVue>
          <div class="card-wrap">
            <cardVue
              @play="play"
              v-for="(item, index) in introVideoList"
              :key="`card_intro_${index}`"
              :title="item.title"
              :img-url="item.imgUrl"
              :video-link="item.videoLink"
              :describe="item.describe"
            >
            </cardVue>
          </div>
        </div>

        <!-- Ambassador -->
        <div class="row">
          <subTItleVue title="Ambassador"></subTItleVue>
          <div class="card-wrap">
            <cardVue
              @play="play"
              class="am-card"
              v-for="(item, index) in ambassadorsSorted"
              :key="`card_intro_${index}`"
              :title="item.title"
              vertical
              :img-url="item.imgUrl"
              :video-link="item.videoLink"
              :describe="item.describe"
            ></cardVue>
          </div>
        </div>

        <!-- Tutorial -->
        <div class="row">
          <subTItleVue title="Tutorial"></subTItleVue>
          <div class="card-wrap">
            <cardVue
              @play="play"
              v-for="(item, index) in tutorialList"
              :key="`card_intro_${index}`"
              :title="item.title"
              :img-url="item.imgUrl"
              :video-link="item.videoLink"
              :describe="item.describe"
            ></cardVue>
          </div>
        </div>
        <div class="bg-img"></div>
      </div>
    </div>
  </div>
  <Transition name="fade">
    <dialogVideo
      :address="currentLink"
      v-if="openVideoDialog"
      @close="openVideoDialog = false"
    ></dialogVideo>
  </Transition>
</template>
<script setup>
import headerVue from "../../components/header.vue";
import subTItleVue from "./components/subTItle.vue";
import cardVue from "./components/card.vue";
import dialogVideo from "../../components/dialog-video.vue";
import { ref } from "@vue/reactivity";
import { computed, onMounted } from "@vue/runtime-core";

const PREFIX_YOUTUBE_EMBED = "https://www.youtube.com/embed/";
const VIDEO_COVER = "https://cdn.shorter.finance/images/video_covers/";
const introVideoList = [
  {
    title: "Shorter Finance Brief Introduction",
    describe: "Build for bear markets",
    videoLink: `${PREFIX_YOUTUBE_EMBED}djCap1Z8sXM`,
    imgUrl: `${VIDEO_COVER}introduction_1.png`,
  },
  {
    title: "Shorter Finance × Gitcoin",
    videoLink: `${PREFIX_YOUTUBE_EMBED}yIT1Vmz2doA`,
    describe: "Money Legos Hackathon August 2022",
    imgUrl: `${VIDEO_COVER}introduction_2.png`,
  },
];

const ambassadorsList = [
  {
    title: "Петро",
    describe: "🇺🇦 Ukrainian Ambassador",
    videoLink: `${PREFIX_YOUTUBE_EMBED}BgLxCUo8kVI`,
    imgUrl: `${VIDEO_COVER}ambassador_ua.png`,
    country: "UA",
  },
  {
    title: "Théo",
    describe: "🇧🇷 Brazilian Ambassador",
    videoLink: `${PREFIX_YOUTUBE_EMBED}zG2WJ-WXjTA`,
    imgUrl: `${VIDEO_COVER}ambassador_br.png`,
    country: "BR",
  },
  {
    title: "Faisal",
    describe: "🇮🇩 Indonesian Ambassador",
    videoLink: `${PREFIX_YOUTUBE_EMBED}do0QAqU0MEs`,
    imgUrl: `${VIDEO_COVER}ambassador_id.png`,
    country: "ID",
  },
  {
    title: "에리카",
    describe: "🇰🇷 South Korean Ambassador",
    videoLink: `${PREFIX_YOUTUBE_EMBED}7AFbbpXAkZ4`,
    imgUrl: `${VIDEO_COVER}ambassador_kr.png`,
    country: "KR",
  },
  {
    title: "Matías",
    describe: "🇦🇷 Argentine Ambassador",
    videoLink: `${PREFIX_YOUTUBE_EMBED}NGg5ey756qk`,
    imgUrl: `${VIDEO_COVER}ambassador_ar.png`,
    country: "AR",
  },
  {
    title: "Юлия",
    describe: "🇷🇺 Russian Ambassador",
    videoLink: `${PREFIX_YOUTUBE_EMBED}R1AtLSz-ag4`,
    imgUrl: `${VIDEO_COVER}ambassador_ru.png`,
    country: "RU",
  },
  {
    title: "Eylül",
    describe: "🇹🇷 Turkish Ambassador",
    videoLink: `${PREFIX_YOUTUBE_EMBED}q0Oq8op0S5U`,
    imgUrl: `${VIDEO_COVER}ambassador_tr.png`,
    country: "TR",
  },
];

// tutorialList
const tutorialList = [
  {
    title: "Stake tokens to earn interest",
    describe: "Show you how to stake tokens on Shorter",
    imgUrl: `${VIDEO_COVER}tutorial_1.png`,
    videoLink: `${PREFIX_YOUTUBE_EMBED}9oS1gljt95Y`,
  },
  {
    title: "Open a position",
    describe: "Show you how to trade on Shorter",
    imgUrl: `${VIDEO_COVER}tutorial_2.png`,
    videoLink: `${PREFIX_YOUTUBE_EMBED}41g2tuov2kY`,
  },
  {
    title: "Manage your positions",
    describe: "Show you how to interact with your positions",
    imgUrl: `${VIDEO_COVER}tutorial_3.png`,
    videoLink: `${PREFIX_YOUTUBE_EMBED}40trbpXQb88`,
  },
  {
    title: "Buy IPISTR on Uniswap",
    describe: "Show you how to buy IPISTR tokens",
    imgUrl: `${VIDEO_COVER}tutorial_4.png`,
    videoLink: `${PREFIX_YOUTUBE_EMBED}LFtY6sEelXs`,
  },
  {
    title: "Create a new pool",
    describe: "Show you how to create a new token loan pool",
    imgUrl: `${VIDEO_COVER}tutorial_5.png`,
    videoLink: `${PREFIX_YOUTUBE_EMBED}Rf_me5PIxNQ`,
  },
  {
    title: "Become a Ruler",
    describe: "Show you how to become a Ruler on Shorter",
    imgUrl: `${VIDEO_COVER}tutorial_6.png`,
    videoLink: `${PREFIX_YOUTUBE_EMBED}15yapeGYVcA`,
  },
  {
    title: "Vote on a proposal",
    describe: "Show you how to vote on a proposal on Shorter",
    imgUrl: `${VIDEO_COVER}tutorial_7.png`,
    videoLink: `${PREFIX_YOUTUBE_EMBED}9RfqZ5gNA6k`,
  },
  {
    title: "Provide liquidity for IPISTR",
    describe: "Show you how to provide liquidity for IPISTR",
    imgUrl: `${VIDEO_COVER}tutorial_8.png`,
    videoLink: `${PREFIX_YOUTUBE_EMBED}3AT60cJ5LNY`,
  },
  {
    title: "Claim test tokens",
    describe: "Show you how to claim free test tokens",
    imgUrl: `${VIDEO_COVER}tutorial_9.png`,
    videoLink: `${PREFIX_YOUTUBE_EMBED}bRA2iL4-7-A`,
  },
];

let currentLink = ref("");
let openVideoDialog = ref(false);

function play(link) {
  currentLink.value = link;
  openVideoDialog.value = true;
}

let userCountry = ref("");
async function getUserCountry() {
  const request_url = "/api/video";
  const xhr = new XMLHttpRequest();
  xhr.open("GET", request_url);
  xhr.send();
  xhr.onreadystatechange = function () {
    let res = "";
    if (xhr.readyState === 4 && xhr.status === 200) {
      const tmp = xhr?.responseText || "";
      if (typeof tmp == "string") {
        try {
          res = JSON.parse(tmp);
          userCountry.value = res?.country || "";
        } catch (e) {
          userCountry.value = "";
        }
      }
    }
  };
}
onMounted(async () => {
  getUserCountry();
});

function sortByAscii(a, b) {
  const aCountry = a.country;
  const bCountry = b.country;
  const aAscii = aCountry.charCodeAt();
  const bAscii = bCountry.charCodeAt();
  if (aAscii > bAscii) {
    return 1;
  }
  if (aAscii < bAscii) {
    return -1;
  }
  return 0;
}

// country sort
const ambassadorsSorted = computed(() => {
  let sortByCountry = ambassadorsList.concat();
  // sort by Ascii
  sortByCountry = sortByCountry.sort(sortByAscii);
  let temp = [];
  // sort by user's origin
  if (userCountry.value !== "") {
    sortByCountry.forEach((item, index) => {
      if (
        item.country === userCountry.value ||
        item.country.includes(userCountry.value)
      ) {
        temp.push(item);
        sortByCountry.splice(index, 1);
      }
    });
  }
  // special handle
  // if user comes from RU, put the UA ambassador to bottom
  // OR user comes from UA, put the RU ambassador to bottom
  if (userCountry.value === "RU") {
    const tempCountry = "UA";
    const tempItem = {};
    sortByCountry.forEach((item, index) => {
      if (item.country === tempCountry || item.country.includes(tempCountry)) {
        Object.assign(tempItem, item);
        sortByCountry.splice(index, 1);
      }
    });
    sortByCountry.push(tempItem);
  } else if (userCountry.value === "UA") {
    const tempCountry = "RU";
    const tempItem = {};
    sortByCountry.forEach((item, index) => {
      if (item.country === tempCountry || item.country.includes(tempCountry)) {
        Object.assign(tempItem, item);
        sortByCountry.splice(index, 1);
      }
    });
    sortByCountry.push(tempItem);
  }

  return temp.concat(sortByCountry);
});
</script>

<style lang="scss" scoped>
@use "../../assets/base.scss" as base;
@import "../../assets/index.scss";
@import "../../assets/base.scss";

.video-container {
  padding-top: 80px;
  padding-bottom: 160px;
  overflow-x: auto;
  background-image: url("../../img/videos_bg.svg");
  background-repeat: no-repeat;
  background-position: calc(50vw + 272px) 80px;
  background-size: 691px 620px;
}
.container {
  width: 1200px;
  min-width: 1200px;
  position: relative;
  margin: 0 auto;
}

.page-intro {
  margin-top: 145px;
  justify-content: flex-start;

  .describe {
    margin-top: 16px;
    color: $describeFontColor;
    font-size: 20px;
    line-height: 30px;
  }
}

.row {
  margin-top: 120px;
}

.card-wrap {
  margin-top: 32px;
  display: grid;
  grid-template-columns: 384px 384px 384px;
  gap: 75px 24px;
}

.am-card {
  background: #fff;
}
@media screen and (max-width: 750px) {
  .page-intro {
    margin-top: 68px;
    .describe {
      margin-top: 4px;
      font-size: 16px;
      line-height: 24px;
    }
  }
  .row {
    margin-top: 48px;
  }
  .video-container {
    width: 100vw;
    min-width: 100vw;
    padding: 0;
    z-index: 1;
    background-image: none;

    &::before {
      content: "";
      background-position: right 44px;
      background-size: 200px 180px;
      background-image: url("../../img/videos_bg.svg");
      opacity: 0.4;
      background-repeat: no-repeat;
      position: absolute;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
      z-index: 0;
    }
  }
  .container {
    width: 100%;
    min-width: 100%;
  }
  .card-wrap {
    margin-top: 24px;
    display: flex;
    flex-direction: column;
    gap: 24px;
  }
}
</style>
