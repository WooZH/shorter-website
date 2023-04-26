<template>
  <div class="home">
    <headerVue :show-nav="showNavTool"></headerVue>

    <div class="container">
      <div class="wrap-default">
        <div class="first-page">
          <div class="first-page-wrap">
            <div class="slogan">
              <p>
                Build for<br class="mobile" />
                bear markets
              </p>
            </div>
            <div>
              <div>
                <animation></animation>
              </div>
              <div class="support-coins">
                <div class="support-title">
                  <ul>
                    <li>2,000+ altcoins single-sided farming</li>
                    <li>100% on-chain / open-source</li>
                    <li>100+ customized derivatives trading</li>
                  </ul>
                </div>
                <div class="coin-wrap">
                  <coinListScroll :list="tokens"></coinListScroll>
                  <div class="coin more coin-more">
                    <div class="dots">
                      <span class="dot"></span>
                      <span class="dot"></span>
                      <span class="dot"></span>
                    </div>
                    <div class="arrow-btn">
                      <p>Explore</p>
                      <arrowRight />
                    </div>
                  </div>
                </div>
                <div class="clear"></div>
              </div>

              <div class="btn-group btn-group-main mt-42px">
                <a class="btn btn-primary" id="launchApp" :href="url.launchApp">
                  Launch App
                </a>
                <a class="btn btn-normal ml-44px" :href="url.documentation">
                  Documentation
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="subscribe-us content-gap-lg">
          <div class="subscribe">
            <p class="title title-h2">Stay up-to-date with us</p>
            <p class="subscribe-title describe-lg">
              Receive updates to catch up on the latest stories
            </p>
            <subscribeMail @success="openSubscribeSuccess"></subscribeMail>
          </div>
          <div class="video">
            <img class="video-cover" src="../img/video-cover.png" alt="" />
            <div class="mask"></div>
            <playButton
              class="play-button"
              @click="openVideo('firstVideo')"
            ></playButton>
          </div>
        </div>

        <div class="features content-gap-r">
          <p class="title title-h2">Key Participants in Shorter Finance</p>

          <div class="card-wrap">
            <cardRoles
              v-for="(item, index) in cardList"
              :key="`card_${index}`"
              :info="item"
            ></cardRoles>
          </div>
          <div class="card-wrap-carousel">
            <Carousel
              :autoplay="4500"
              :items-to-show="1.5"
              style="width: 100%"
              :wrap-around="true"
            >
              <Slide v-for="(item, index) in cardList" :key="`card_${index}`">
                <cardRoles :info="item"></cardRoles>
              </Slide>

              <template #addons>
                <Pagination />
              </template>
            </Carousel>
          </div>
        </div>
      </div>
    </div>
    <div class="container bg-gray container-gap container-pt-80">
      <div class="wrap-default">
        <div class="support-wrap">
          <supportPanel class="support-item" :info="supportSource">
            <learnMoreDrawer
              class="support-link"
              text1="Review our"
              strong="Audit"
              text2="report"
            >
              <div class="small-wrap">
                <a :href="url.reviewCertikReport" target="_blank">
                  <div class="small-icon">
                    <img class="icon" src="../img/certik.svg" alt="" />
                    <span>Certik</span>
                  </div>
                </a>
                <a :href="url.reviewSalusReport" target="_blank">
                  <div class="small-icon">
                    <img class="full" src="../img/salus.svg" alt="" />
                  </div>
                </a>
              </div>
            </learnMoreDrawer>

            <learnMore
              class="support-link"
              text1="Explore our"
              strong="Github"
              text2="repository"
              :link="url.exploreOurGitHub"
            ></learnMore>
          </supportPanel>
          <supportPanel class="support-item" :info="supportChain">
            <learnMore
              class="support-link"
              text1="Enhance your"
              text2=" with Shorter"
              :link="url.enhance"
            >
              <floatWords></floatWords>
            </learnMore>

            <learnMore
              class="support-link"
              text1="Put Shorter in your"
              strong="Discord"
              text2="channel"
              :link="url.discordIntegrate"
            ></learnMore>
          </supportPanel>
        </div>
      </div>
    </div>
    <div class="container container-pt-80 container-pb-func">
      <div class="wrap-default func-wrap">
        <p class="title-h2 title">
          Enrolling as a <span class="strong">Provider</span> & Grab passive
          income
        </p>
        <div class="function-block">
          <div class="function-wrap">
            <cardFunction
              class="function-card"
              :info="infoCreatePool"
            ></cardFunction>
            <cardFunction
              class="function-card"
              :info="infoStakeSingle"
            ></cardFunction>
          </div>
          <div class="intro-video">
            <video
              class="guide-video"
              muted
              autoplay
              playsinline
              loop
              data-src="../img/guide.mp4"
              src=""
            ></video>
            <div class="video-border"></div>
          </div>
        </div>
      </div>
    </div>

    <!-- shorter in numbers -->
    <div class="container-numbers-wrap">
      <div class="container-numbers">
        <div class="container-bg">
          <div class="wrap-default numbers-board"></div>
          <div class="numbers-mask"></div>
        </div>
      </div>
      <div class="container-numbers container-numbers-data">
        <div class="wrap-default">
          <p class="title title-h2 numbers-title">Shorter in numbers</p>
          <div class="data-wrap">
            <dataBlock
              v-for="(item, index) in numbersList"
              :key="`numbers_${index}`"
              :info="item"
            ></dataBlock>
          </div>
        </div>
      </div>
    </div>
    <!-- trader -->
    <div class="container">
      <div class="wrap-default trader-wrap">
        <div class="trader-intro">
          <p class="title title-h2">
            We value <span class="strong">Traders</span>
          </p>
          <p class="intro">
            Carving trading experience constantly is our top priority. Shorter
            is driven under the ethos of downright on-chain and open-source,
            bringing traders one step further towards our valuation of erecting
            a transparent, reliable, community-owned TradFi ecosystem.
          </p>
          <div class="guards-methods mobile">
            <guardList></guardList>
          </div>
          <div class="guard-trades">
            <lineTitle
              class="video-title"
              :title="'How Shorter guard your equity?'"
            ></lineTitle>
            <div class="video">
              <img
                class="video-cover"
                src="https://cdn.shorter.finance/images/video_cover_guard_traders.png"
                alt=""
              />
              <div class="mask"></div>
              <!-- <playButton @click="openVideo"></playButton> -->
              <playButton @click="openVideo('')"></playButton>
              <p class="mobile-title">How Shorter guard your equity?</p>
            </div>
          </div>
        </div>
        <div class="guards-methods desktop">
          <guardList></guardList>
        </div>
      </div>
    </div>
    <!-- comment -->
    <div class="container">
      <div class="wrap-default comment-wrap">
        <cardComment
          class="comment-card"
          v-for="(comment, index) in commentList"
          :key="`comment_${index}`"
          :info="comment"
        ></cardComment>
      </div>
    </div>
    <!-- shorter own -->

    <div class="container">
      <div class="wrap-default every-wrap">
        <div class="for-everyone">
          <div class="sun"></div>
        </div>
        <div class="every-content">
          <div class="every-intro">
            <p class="title title-h2">Shorter is owned by everyone</p>
            <p class="intro">
              Shorter Finance equips individuals and institutions with varying
              and effective arms for maximum productivity amidst their
              exploration over this full-fledged innovative protocol.
            </p>
          </div>

          <div class="list">
            <every-list></every-list>
          </div>
        </div>
      </div>
    </div>

    <!-- news -->
    <!-- <div class="container container-news">
      <div class="wrap-default news-wrap">
        <cardNews class="news-article" :info="news"></cardNews>
        <cardNews class="news-article" :info="news" :sort="true"></cardNews>
      </div>
    </div> -->

    <!-- code -->
    <div class="container container-code">
      <div class="wrap-default code-wrap">
        <div class="code-item intro">
          <p class="title title-h2">Dive deeper into building</p>
          <p class="describe">
            Customize your own Shorter from scratch with the most powerful
            developer tools in blockchain combined by IPI Labs
          </p>
          <a class="btn btn-primary" :href="url.getStarted">Get started</a>
          <a class="btn btn-ghost" :href="url.CrunchTheDocs">Crunch the docs</a>
        </div>
        <div class="code-item code-box">
          <cardCode></cardCode>
        </div>
      </div>
    </div>

    <!-- vow -->
    <div class="container container-vow" id="charity-panel">
      <div class="wrap-default vow-wrap">
        <div class="vow-title">
          <div>
            <p class="title title-h2">We vow to do better on Diversity</p>
            <p class="describe">
              90% of our revenue are committed to combating injustice
            </p>
          </div>
          <a class="btn btn-ghost" :href="url.beWithUs" target="_blank">
            <span>Be with us</span>
            <arrowRight class="arrow"></arrowRight>
          </a>
        </div>
        <div class="vow-card-wrap">
          <cardVow
            class="vow-item"
            v-for="(vow, index) in vowList"
            :key="`vow_${index}`"
            :info="vow"
          ></cardVow>
        </div>
        <div class="mobile-vow-card-wrap">
          <!-- <Carousel
            :items-to-show="1.1"
            style="width: 100%"
            :wrap-around="true"
          >
            <Slide v-for="(vow, index) in vowList" :key="`card_${index}`">
              <cardVow
                class="vow-item"
                :key="`vow_${index}`"
                :info="vow"
              ></cardVow>
            </Slide>

            <template #addons>
              <Pagination />
            </template>
          </Carousel> -->
          <cardStakedSlider
            class="card-slider"
            :cards="vowList"
          ></cardStakedSlider>
        </div>
      </div>
    </div>

    <!-- partners -->
    <div class="container container-partners">
      <div class="wrap-default partners-wrap">
        <p class="title title-h2">Backed by</p>
        <p class="describe">Shorter is a joint endeavour from the best</p>
        <div class="partners-icons">
          <partnersIcons></partnersIcons>
        </div>
      </div>
    </div>

    <!-- Frequently Asked Question -->

    <div class="container container-faq">
      <div class="wrap-default faq-wrap">
        <div class="faq-more">
          <p class="title title-h2">FAQ</p>
          <a
            class="btn btn-text btn-faq"
            href="https://docs.shorter.finance/faqs/troubleshooting-issues.html"
            target="_blank"
            ><span>More</span>
          </a>
        </div>
        <div class="faq-list-wrap">
          <faq-list></faq-list>
        </div>
      </div>
    </div>

    <!-- footer -->
    <div class="container container-footer">
      <div class="wrap-default">
        <img class="footer-bg-left" src="../img/footer-2.svg" alt="" />
        <img class="footer-bg-right" src="../img/footer-1.svg" alt="" />
        <div class="footer-wrap">
          <logo class="item1" :type="true"></logo>
          <div class="footer-left item3">
            <p class="copyright">Copyright IPI Labs. © 2019-2022</p>
            <div class="follow-wrap">
              <p class="follow">Follow us</p>
              <followUs @mail="openSubscribe"></followUs>
            </div>
          </div>
          <div class="footer-right item2">
            <footerLinks></footerLinks>
          </div>
        </div>
      </div>
    </div>

    <Transition name="fade">
      <dialogSubscribe
        @success="openSubscribeSuccess"
        @close="openSubscribeDialog = false"
        v-if="openSubscribeDialog"
      ></dialogSubscribe>
    </Transition>
    <Transition name="fade">
      <dialogSubscribeSuccess
        :address="successMail"
        @close="openSubscribeDialogSuccess = false"
        v-if="openSubscribeDialogSuccess"
      ></dialogSubscribeSuccess>
    </Transition>
    <Transition name="fade">
      <dialogVideo
        :address="url.currentVideo"
        v-if="openVideoDialog"
        @close="openVideoDialog = false"
      ></dialogVideo>
    </Transition>
  </div>
</template>
<script setup>
import { onBeforeMount, onBeforeUnmount, ref } from "@vue/runtime-core";
import headerVue from "../components/header.vue";
import animation from "../components/animation.vue";
import logo from "../components/logo.vue";
import arrowRight from "../components/arrow-right.vue";
import coinListScroll from "../components/coin-list.vue";
import subscribeMail from "../components/subscribe-mail.vue";
import playButton from "../components/play-button.vue";
import cardRoles from "../components/card-roles.vue";
import supportPanel from "../components/support-panel.vue";
import learnMore from "../components/learn-more.vue";
import learnMoreDrawer from "../components/learn-more-drawer.vue";
import cardFunction from "../components/card-function.vue";
import dataBlock from "../components/data-block.vue";
import lineTitle from "../components/line-title.vue";
import guardList from "../components/guard-list.vue";
import cardComment from "../components/card-comment.vue";
import everyList from "../components/every-list.vue";
import cardNews from "../components/card-news.vue";
import cardStakedSlider from "../components/card-staked-slider.vue";
import cardCode from "../components/card-code.vue";
import cardVow from "../components/card-vow.vue";
import partnersIcons from "../components/partners-icons.vue";
import faqList from "../components/faq-list.vue";
import followUs from "../components/follow-us.vue";
import footerLinks from "../components/footer-links.vue";
import floatWords from "../components/float-words.vue";
import dialogSubscribe from "../components/dialog-subscribe.vue";
import dialogSubscribeSuccess from "../components/dialog-subscribe-success.vue";
import dialogVideo from "../components/dialog-video.vue";
import { Carousel, Pagination, Slide } from "vue3-carousel";
import { tool } from "../utils/tools";
import { onMounted } from "@vue/runtime-core";
const url = {
  launchApp: "https://app.shorter.finance",
  documentation: "https://docs.shorter.finance",
  getStarted:
    "https://docs.shorter.finance/dev-resource/reference/toolkit-and-sdk.html",
  CrunchTheDocs: "https://docs.shorter.finance/dev-resource/contracts/",
  beWithUs:
    "https://form.jotform.com/shorterfinance/donate-to-shorter-charity-fund",
  reviewCertikReport: "https://www.certik.com/projects/shorter-finance",
  reviewSalusReport:
    "https://cdn.shorter.finance/documents/ShorterFinance-audit-report-v3.pdf",
  exploreOurGitHub: "https://github.com/IPILabs",
  createYourOwnPool:
    "https://docs.shorter.finance/roles/provider/create-a-pool.html",
  stakeSingleSidedToken:
    "https://docs.shorter.finance/roles/provider/create-a-pool.html",
  enhance: "https://docs.shorter.finance/dev-resource/integrate/exchanges.html",
  discordIntegrate:
    "https://docs.shorter.finance/dev-resource/integrate/discord.html",
  firstVideo: "https://www.youtube.com/embed/djCap1Z8sXM",
  secondVideo: "",
  currentVideo: "https://www.youtube.com/embed/djCap1Z8sXM",
};
const cardList = [
  {
    name: "Provider",
    title: "/ Earn",
    strong: "Supply",
    content:
      "Collect tangible yield from providing idle single-sided token and creating derivatives, away from impermanent loss.",
    url: "https://docs.shorter.finance/roles/key-actors.html#provider",
  },
  {
    name: "Trader",
    title: "/ Short",
    strong: "Leverage",
    content:
      "Trade any token-related derivative within continuous liquidity driven by AMM stifling the loss caused in spikes.",
    url: "https://docs.shorter.finance/roles/key-actors.html#trader",
  },
  {
    name: "Ruler",
    title: "/ Profit",
    strong: "Govern",
    content:
      "Pivot as the spine maintaining the stability of the intact protocol and take risk-free profit from governance.",
    url: "https://docs.shorter.finance/roles/key-actors.html#ruler",
  },
];
const supportSource = {
  title: "Open-source",
  intro: "Unleash Shorter by development in different languages",
  list: [
    {
      name: "solidity",
      url: "solidity.svg",
    },
    {
      name: "c++",
      url: "c_plusplus.svg",
    },
    {
      name: "node",
      url: "node.svg",
    },
    {
      name: "Golang",
      url: "golang.svg",
    },
  ],
};
const supportChain = {
  title: "On-chain",
  intro: "Align Shorter to varying tailored ends for maximum interoperability",
  list: [
    {
      name: "discord",
      url: "discord.svg",
    },
    {
      name: "exchange",
      url: "exchange.svg",
    },
    {
      name: "telegram",
      url: "telegram.svg",
    },
    {
      name: "wallet",
      url: "wallet.svg",
    },
  ],
};

const infoCreatePool = {
  url: tool.imgSrc("pool.svg"),
  title: "Create your own pool",
  intro:
    "Being a proprietor by occupying differing self-made pools regarding the market-oriented goals",
  link: "https://docs.shorter.finance/roles/provider/create-a-pool.html",
};
const infoStakeSingle = {
  url: tool.imgSrc("stake.svg"),
  title: "Stake single-sided token",
  intro:
    "Deposit idle tokens in existing pools and benefit from the practical trading needs",
  link: "https://docs.shorter.finance/roles/provider/interacting-with-pools.html#deposit-into-a-pool",
};

const numbersList = ref([]);

const commentList = [
  {
    company: "ARK Invest",
    logo: "ark-invest.png",
    comment:
      '"Open source software and research ecosystem seem to be flourishing and encouraging more investment in innovation. ARKInvest applauds the innovation evolving on and around the Ethereum."',
    avatar: "CathieWood.jpg",
    position: "CEO",
    name: "Cathie Wood",
  },
  {
    company: "Paradigm",
    logo: "paradigm.png",
    comment:
      '"A huge breakthrough! Their focus on great products and regulatory engagement will be a good formula for product development in Web3."',
    avatar: "MattHuang.jpg",
    position: "Co-Founder",
    name: "Matt Huang",
  },
];

const news = {
  url: "#",
  title: "Here are the headlines",
  subtitle: "Here are the subheadings",
  describe:
    "Review all of your transactions, organized by type and data. Get instant access to critical information including timestamps, currencies were involved, transaction amounts and the protocols that were used.Better tools for deposits, powered by our comprehensive functionality. Monitor all of the funds that you’ve staked within pools, stakings, and more. Identify new profitable opportunities.",
  link: "/#",
  linkName: "READ NOW",
};

const vowList = [
  {
    url: "https://cdn.shorter.finance/images/clarity/racial_inequality.png",
    title: "Overturning racial inequality",
    describe:
      "Learn about our efforts to fight injustice and promote all cultures",
  },
  {
    url: "https://cdn.shorter.finance/images/clarity/women_rights.png",
    title: "Upholding women’s rights",
    describe:
      "Learn about our efforts to fight injustice and promote all cultures",
  },
  {
    url: "https://cdn.shorter.finance/images/clarity/lgbt_organizations.png",
    title: "Standing with LGBT+ organizations",
    describe:
      "Learn about our efforts to fight injustice and promote all cultures",
  },
  {
    url: "https://cdn.shorter.finance/images/clarity/gun_violence.png",
    title: "Combating gun violence",
    describe:
      "Learn about our efforts to fight injustice and promote all cultures",
  },
];
const tokens = ref([]);
const stats = ref({
  pools: " ",
  traders: " ",
  tvl: " ",
});
const showNavTool = ref(false);

const openSubscribeDialog = ref(false);
const openSubscribeDialogSuccess = ref(false);
const openVideoDialog = ref(false);
const successMail = ref(false);
function openVideo(item) {
  if (item) {
    url.currentVideo = url[item] || "";
    openVideoDialog.value = true;
  }
}
function openSubscribe() {
  const windowWidth = window.outerWidth;
  if (windowWidth <= 750) {
    const element = document.querySelector(".subscribe-us");
    element.scrollIntoView();
  } else {
    openSubscribeDialog.value = true;
  }
}
function openSubscribeSuccess(address) {
  if (openSubscribeDialog.value) openSubscribeDialog.value = false;
  successMail.value = address;
  openSubscribeDialogSuccess.value = true;
}
function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom - el.clientHeight <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}
function filterNumber(num) {
  let parts = num.toString().split(".");
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return parts.join(".");
}
onBeforeMount(async () => {
  const jsonFile = "https://cdn.shorter.finance/index_profile.json";
  const statsFile = "https://cdn.shorter.finance/stats/sys.json";
  fetch(jsonFile).then((homeData) => {
    homeData.json().then((file) => {
      if (file.showcase_tokens && file.stats) {
        tokens.value = file.showcase_tokens;
      }
    });
  });
  fetch(statsFile).then((statsData) => {
    statsData.json().then((file) => {
      stats.value = file;
      numbersList.value = [
        {
          name: "Total Value Locked",
          data: "$" + filterNumber(stats.value.tvl),
          origin: Number(stats.value.tvl),
        },
        {
          name: "Pools",
          data: filterNumber(stats.value.pools),
          origin: Number(stats.value.pools),
        },
        {
          name: "Active Traders",
          data: filterNumber(stats.value.traders),
          origin: Number(stats.value.traders),
        },
      ];
    });
  });
});

let loadListener = ref(null);
let io = ref(null);
onMounted(async () => {
  const launchAppBtn = document.querySelector("#launchApp");
  io = new IntersectionObserver((entries) => {
    entries.forEach((item) => {
      if (item.isIntersecting) {
        showNavTool.value = false;
      } else {
        showNavTool.value = true;
      }
    });
  });
  io.observe(launchAppBtn);
  // const vp = document.querySelector("meta[name=viewport]");
  // const windowWidth = window.outerWidth;
  // const first = document.querySelector(".first-page");
  // if (windowWidth <= 768) {
  //   vp.setAttribute("content", `width=device-width, initial-scale=1`);
  //   first.className = "first-mobile";
  //   first.style = "padding-top: 180px;";
  // }
  // lazy load guide video
  loadListener = function lazyLoadVideo() {
    const iv = document.querySelector(".container-pb-func");
    const gv = document.querySelector(".guide-video");
    if (isElementInViewport(iv)) {
      const guideVideoLink =
        "https://cdn.shorter.finance/video/guide.2da48f1b.mp4";
      gv.setAttribute("src", guideVideoLink);
      window.removeEventListener("scroll", loadListener);
    }
  };
  window.addEventListener("scroll", loadListener);

  // disable scroll
  const carousels = document.querySelectorAll(".carousel__viewport");
  const cardSlider = document.querySelector(".card-slider");
  if (cardSlider) {
    cardSlider.addEventListener("touchstart", function (e) {
      e.preventDefault();
    });
  }
  if (carousels.length > 0) {
    carousels.forEach((el) => {
      el.addEventListener("touchstart", function (e) {
        e.preventDefault();
      });
    });
  }

  let anchor = window.location.hash;
  if (anchor === "#charity") {
    document.querySelector("#charity-panel").scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  }
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", loadListener);
  const launchAppBtn = document.querySelector("#launchApp");
  io.unobserve(launchAppBtn);
});
</script>
<style lang="scss" scoped>
@import "../assets/index.scss";
</style>
