<template>
  <div class="footer-link-wrap">
    <div
      class="footer-column"
      v-for="(item, index) in list"
      :key="`heading_${index}`"
    >
      <p class="footer-heading">{{ item.heading }}</p>
      <ul>
        <li
          v-for="(link, index) in item.links"
          :key="`footer_link_${index}`"
          class="link"
        >
          <a :href="link.link">
            {{ link.name }}
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script setup>
const list = [
  {
    heading: "Products",
    links: [
      {
        name: "Open Protocol",
        link: "https://github.com/IPILabs/shorter-v1-periphery/",
      },
      {
        name: "IPI RPC",
        link: "javascript:;",
      },
      {
        name: "RulerBot",
        link: "javascript:;",
      },
      {
        name: "Toolkit & SDK",
        link: "https://docs.shorter.finance/dev-resource/reference/toolkit-and-sdk.html",
      },
    ],
  },
  {
    heading: "Resources",
    links: [
      {
        name: "Documentation",
        link: "https://docs.shorter.finance/",
      },
      {
        name: "Team Blog",
        link: "https://blog.shorter.finance/",
      },
      {
        name: "Hackathon & Bounty",
        link: "https://docs.shorter.finance/consensus/bounty.html",
      },
      {
        name: "Roadmap",
        link: "https://docs.shorter.finance/miscellaneous/roadmap.html",
      },
      {
        name: "Brand Assets",
        link: "https://cdn.shorter.finance/brand_assets.zip",
      },
    ],
  },
  // {
  //   heading: "Partnership",
  //   links: [
  //     {
  //       name: "Developer Updates",
  //       link: "",
  //     },
  //     {
  //       name: "Media",
  //       link: "",
  //     },
  //     {
  //       name: "Archive",
  //       link: "",
  //     },
  //     {
  //       name: "Press",
  //       link: "",
  //     },
  //   ],
  // },
  {
    heading: "About",
    links: [
      {
        name: "Team",
        link: "https://www.linkedin.com/company/ipilabs/people/",
      },
      {
        name: "Jobs",
        link: "https://docs.shorter.finance/miscellaneous/jobs/",
      },
      {
        name: "Media Inquires",
        link: "mailto:media@ipilabs.com",
      },
      {
        name: "Privacy Policy",
        link: "https://docs.shorter.finance/miscellaneous/privacy-policy.html",
      },
      {
        name: "Terms of Service",
        link: "https://docs.shorter.finance/miscellaneous/terms-of-service.html",
      },
    ],
  },
];
</script>
<style lang="scss" scoped>
@use "../assets/base.scss" as base;
@import "../assets/base.scss";

.footer-link-wrap {
  display: flex;
  justify-content: space-between;
  color: #ffffff;
}
.footer-heading {
  font-size: 20px;
  font-weight: 600;
  color: $fontColor;
  margin-bottom: 30px;
}
.link {
  opacity: 0.7;
  color: rgba($fontColor, 0.7);
  font-size: 16px;
  line-height: 24px;
  margin-bottom: 12px;
  @include base.trans;
  &:hover {
    opacity: 1;
  }
}
@media screen and (max-width: 750px) {
  .footer-column {
    min-width: 50%;
  }
  .footer-heading {
    font-size: 16px;
    line-height: 24px;
    margin-bottom: 16px;
  }
  .link {
    font-size: 14px;
    line-height: 20px;
  }
}
</style>
