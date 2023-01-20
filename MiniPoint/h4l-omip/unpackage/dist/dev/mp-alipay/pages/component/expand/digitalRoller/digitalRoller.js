"use strict";
const common_vendor = require("../../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      value: 361
    };
  },
  onLoad() {
    setTimeout(() => {
      this.value = 908;
    }, 1200);
  },
  methods: {
    vip() {
      this.fui.href("/pages/my/qa/qa?index=2&title=VIP\u4E13\u5C5E\u5185\u5BB9");
    },
    roller(val) {
      this.value = val;
    }
  }
};
if (!Array) {
  const _easycom_fui_digital_roller2 = common_vendor.resolveComponent("fui-digital-roller");
  const _easycom_fui_button2 = common_vendor.resolveComponent("fui-button");
  (_easycom_fui_digital_roller2 + _easycom_fui_button2)();
}
const _easycom_fui_digital_roller = () => "../../../../components/firstui/fui-digital-roller/fui-digital-roller.js";
const _easycom_fui_button = () => "../../../../components/firstui/fui-button/fui-button.js";
if (!Math) {
  (_easycom_fui_digital_roller + _easycom_fui_button)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o((...args) => $options.vip && $options.vip(...args)),
    b: common_vendor.p({
      value: $data.value
    }),
    c: common_vendor.p({
      value: $data.value,
      color: "#FFB703",
      size: 48,
      height: 48
    }),
    d: common_vendor.o(($event) => $options.roller("188.21")),
    e: common_vendor.p({
      type: "gray",
      width: "400rpx",
      height: "84rpx",
      text: "188.21",
      bold: true,
      margin: ["24rpx"]
    }),
    f: common_vendor.o(($event) => $options.roller("5,890.89")),
    g: common_vendor.p({
      type: "gray",
      width: "400rpx",
      height: "84rpx",
      text: "5,890.89",
      bold: true
    }),
    h: common_vendor.o(($event) => $options.roller("$1,314.20")),
    i: common_vendor.p({
      type: "gray",
      width: "400rpx",
      height: "84rpx",
      text: "$1,314.20",
      bold: true,
      margin: ["24rpx"]
    }),
    j: common_vendor.o(($event) => $options.roller("\uFFE59,790.95")),
    k: common_vendor.p({
      type: "gray",
      width: "400rpx",
      height: "84rpx",
      text: "\uFFE59,790.95",
      bold: true
    }),
    l: common_vendor.o(($event) => $options.roller("8913")),
    m: common_vendor.p({
      type: "gray",
      width: "400rpx",
      height: "84rpx",
      text: "8913",
      bold: true,
      margin: ["24rpx"]
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/H4L_Omip/MiniPoint/h4l-omip/pages/component/expand/digitalRoller/digitalRoller.vue"]]);
my.createPage(MiniProgramPage);
