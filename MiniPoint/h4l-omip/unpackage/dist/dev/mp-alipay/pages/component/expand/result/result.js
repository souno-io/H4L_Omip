"use strict";
const common_vendor = require("../../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {};
  },
  methods: {
    vip() {
      this.fui.href("/pages/my/qa/qa?index=2&title=VIP\u4E13\u5C5E\u5185\u5BB9");
    },
    href(type) {
      this.fui.href(`../result-eg/result-eg?type=${type}`);
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
    a: common_vendor.o((...args) => $options.vip && $options.vip(...args)),
    b: common_vendor.o(($event) => $options.href(1)),
    c: common_vendor.p({
      type: "gray",
      width: "400rpx",
      height: "84rpx",
      text: "\u6210\u529F success",
      bold: true,
      margin: ["24rpx"]
    }),
    d: common_vendor.o(($event) => $options.href(2)),
    e: common_vendor.p({
      type: "gray",
      width: "400rpx",
      height: "84rpx",
      text: "\u8B66\u544A warning",
      bold: true
    }),
    f: common_vendor.o(($event) => $options.href(3)),
    g: common_vendor.p({
      type: "gray",
      width: "400rpx",
      height: "84rpx",
      text: "\u5931\u8D25 fail",
      bold: true,
      margin: ["24rpx"]
    }),
    h: common_vendor.o(($event) => $options.href(4)),
    i: common_vendor.p({
      type: "gray",
      width: "400rpx",
      height: "84rpx",
      text: "\u7B49\u5F85 waiting",
      bold: true
    }),
    j: common_vendor.o(($event) => $options.href(5)),
    k: common_vendor.p({
      type: "gray",
      width: "400rpx",
      height: "84rpx",
      text: "\u81EA\u5B9A\u4E49\u56FE\u6807",
      bold: true,
      margin: ["24rpx"]
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/H4L_Omip/MiniPoint/h4l-omip/pages/component/expand/result/result.vue"]]);
my.createPage(MiniProgramPage);
