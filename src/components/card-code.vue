<template>
  <div>
    <div class="install" :class="{ success: copySuccess }">
      <p>{{ data }}</p>
      <img @click="copy" class="copy more" src="../img/copy.svg" alt="" />
    </div>
    <div class="code-highlight">
      <pre>
        <code class="JavaScript">    const { ethers } = require('hardhat')

    const poolGuardian = ethers.getContractFactory("IPoolGuardian")
    const onlinePoolIds = poolGuardian.getOnlinePoolIds()
    let poolId = onlinePoolIds[12]
    let balToDeposit = utils.toWei(109)
    poolGuardian.deposit(poolId, balToDeposit)

    const tradingHub = ethers.getContractFactory("ITradingHub")
    let balToTrade = utils.toWei(108)
    let tx = tradingHub.openPosition(
      poolId, 
      balToTrade, 
      slippage, 
      swapRouter, 
      [token1, token2])
    await tx.wait()</code>
      </pre>
    </div>
  </div>
</template>
<script setup>
import { onMounted, ref } from "vue";
let copySuccess = ref(false);
const codeRef = ref(null);
const data = "yarn add -D @ipilabs/shorter-v1-periphery";

function copy() {
  copyToClipboard(data)
    .then(() => {
      copySuccess.value = true;
      setTimeout(() => {
        copySuccess.value = false;
      }, 1500);
    })
    .catch(() => console.log("error"));
}
function copyToClipboard(textToCopy) {
  if (navigator.clipboard && window.isSecureContext) {
    return navigator.clipboard.writeText(textToCopy);
  } else {
    let textArea = document.createElement("textarea");
    textArea.value = textToCopy;
    textArea.style.position = "fixed";
    textArea.style.left = "-999999px";
    textArea.style.top = "-999999px";
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    return new Promise((res, rej) => {
      document.execCommand("copy") ? res() : rej();
      textArea.remove();
    });
  }
}

onMounted(() => {
  hljs.highlightAll();
  hljsln.initLineNumbersOnLoad();
});
</script>
<style lang="scss" scoped>
@use "../assets/base.scss" as base;

@import "../assets/base.scss";
$successColor: #1ba27a;
.install {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  width: 100%;
  height: 58px;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.1);
  box-sizing: border-box;
  border: 1px solid rgba(255, 255, 255, 0.4);
  font-size: 20px;
  color: rgba(#ffffff, 0.8);
  position: relative;

  .copy {
    @include base.trans;
    width: 24px;
    height: 24px;
    transform: scale(1);
  }
  &::after {
    @include base.trans;
    pointer-events: none;
    position: absolute;
    right: 20px;
    top: 16px;
    opacity: 0;
    transform: scale(0);

    width: 24px;
    height: 24px;
    background: url("../img/icon-success.svg");
    content: "";
  }
}
.success {
  .copy {
    visibility: hidden;
    transform: scale(0);
  }
  &::after {
    visibility: visible;
    transform: scale(1);
    opacity: 1;
  }
}
.hljs {
  background: transparent;
  font-family: $contextFontFamily;
}

.code-highlight {
  margin-top: 24px;
  font-size: 16px;
  font-weight: normal;
  line-height: 24px;
  height: 384px;
  // height: 306px;
  transform: translateX(-8px);
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 2px;
  }
  &::-webkit-scrollbar-thumb {
    background: #666;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: #797979;
  }
  &::-webkit-scrollbar-thumb:active {
    background: #949494;
  }
  pre code {
    position: absolute;
    top: 0;
    padding: 0;
  }
}
</style>
