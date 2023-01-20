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
      let url = type == 1 ? "../singleInput-A/singleInput-A" : "../singleInput-B/singleInput-B";
      this.fui.href(url);
    },
    dk() {
      this.fui.href("../digitalKeyboard/digitalKeyboard");
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
      text: "\u9A8C\u8BC1\u7801\u8F93\u5165\u6846",
      bold: true,
      margin: ["24rpx"]
    }),
    d: common_vendor.o(($event) => $options.href(2)),
    e: common_vendor.p({
      type: "gray",
      width: "400rpx",
      height: "84rpx",
      text: "\u5BC6\u7801\u8F93\u5165\u6846",
      bold: true
    }),
    f: common_vendor.o($options.dk),
    g: common_vendor.p({
      type: "gray",
      width: "400rpx",
      height: "84rpx",
      text: "\u7ED3\u5408\u81EA\u5B9A\u4E49\u952E\u76D8",
      bold: true,
      margin: ["24rpx"]
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/H4L_Omip/MiniPoint/h4l-omip/pages/component/expand/singleInput/singleInput.vue"]]);
my.createPage(MiniProgramPage);
