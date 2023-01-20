"use strict";
const components_firstui_fuiUtils_index = require("../../../../components/firstui/fui-utils/index.js");
const common_vendor = require("../../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      num: 0
    };
  },
  onLoad() {
    this.throttle = components_firstui_fuiUtils_index.utils.throttle(() => {
      this.num++;
    }, 3e3);
  },
  methods: {
    titleCase() {
      const text = "english";
      const val = components_firstui_fuiUtils_index.utils.titleCase(text);
      console.log(val);
      this.fui.toast(val);
    },
    compressLetter() {
      const text = "aabbbcddddddddd";
      const val = components_firstui_fuiUtils_index.utils.compressLetter(text);
      console.log(val);
      this.fui.toast(val);
    },
    sleep() {
      components_firstui_fuiUtils_index.utils.sleep(1e3);
      this.fui.toast("1000ms\u540E\u6267\u884C\uFF01");
    },
    trim() {
      const text = " abcd ";
      const val = components_firstui_fuiUtils_index.utils.trim(text);
      console.log(val);
      this.fui.toast(`\u5B57\u7B26\u4E32${val}`);
    },
    trimAll() {
      const text = " a b c d ";
      const val = components_firstui_fuiUtils_index.utils.trimAll(text);
      console.log(val);
      this.fui.toast(`\u5B57\u7B26\u4E32${val}`);
    },
    replaceAll() {
      const text = "##a###b#######c#";
      const val = components_firstui_fuiUtils_index.utils.replaceAll(text, "#", "");
      console.log(val);
      this.fui.toast(val);
    },
    numberFormatter() {
      const text = "15715600012";
      const val = components_firstui_fuiUtils_index.utils.numberFormatter(text);
      console.log(val);
      this.fui.toast(val);
    },
    moneyFormatter() {
      const text = "2021";
      const val = components_firstui_fuiUtils_index.utils.moneyFormatter(text);
      console.log(val);
      this.fui.toast(val);
    },
    btnThrottle() {
      this.throttle();
    }
  }
};
if (!Array) {
  const _easycom_fui_button2 = common_vendor.resolveComponent("fui-button");
  _easycom_fui_button2();
}
const _easycom_fui_button = () => "../../../../components/firstui/fui-button/fui-button.js";
if (!Math) {
  _easycom_fui_button();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o($options.titleCase),
    b: common_vendor.p({
      type: "gray",
      width: "400rpx",
      height: "84rpx",
      text: "\u9996\u5B57\u6BCD\u8F6C\u5927\u5199",
      bold: true,
      margin: ["24rpx"]
    }),
    c: common_vendor.o($options.compressLetter),
    d: common_vendor.p({
      type: "gray",
      width: "400rpx",
      height: "84rpx",
      text: "\u538B\u7F29",
      bold: true,
      margin: ["24rpx"]
    }),
    e: common_vendor.o($options.sleep),
    f: common_vendor.p({
      type: "gray",
      width: "400rpx",
      height: "84rpx",
      text: "\u7B49\u5F85 1000\u6BEB\u79D2",
      bold: true,
      margin: ["24rpx"]
    }),
    g: common_vendor.o($options.trim),
    h: common_vendor.p({
      type: "gray",
      width: "400rpx",
      height: "84rpx",
      text: "\u53BB\u5DE6\u53F3\u7A7A\u683C",
      bold: true,
      margin: ["24rpx"]
    }),
    i: common_vendor.o($options.trimAll),
    j: common_vendor.p({
      type: "gray",
      width: "400rpx",
      height: "84rpx",
      text: "\u53BB\u6240\u6709\u7A7A\u683C",
      bold: true,
      margin: ["24rpx"]
    }),
    k: common_vendor.o($options.replaceAll),
    l: common_vendor.p({
      type: "gray",
      width: "400rpx",
      height: "84rpx",
      text: "\u66FF\u6362",
      bold: true,
      margin: ["24rpx"]
    }),
    m: common_vendor.o($options.numberFormatter),
    n: common_vendor.p({
      type: "gray",
      width: "400rpx",
      height: "84rpx",
      text: "\u683C\u5F0F\u5316",
      bold: true,
      margin: ["24rpx"]
    }),
    o: common_vendor.o($options.moneyFormatter),
    p: common_vendor.p({
      type: "gray",
      width: "400rpx",
      height: "84rpx",
      text: "\u683C\u5F0F\u5316",
      bold: true,
      margin: ["24rpx"]
    }),
    q: common_vendor.t($data.num),
    r: common_vendor.o($options.btnThrottle),
    s: common_vendor.p({
      type: "gray",
      width: "400rpx",
      height: "84rpx",
      text: "\u6267\u884C +1",
      bold: true,
      margin: ["24rpx"]
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/H4L_Omip/MiniPoint/h4l-omip/pages/component/js/utils/utils.vue"]]);
my.createPage(MiniProgramPage);
