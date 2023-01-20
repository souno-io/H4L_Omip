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
      let url = "../vtabs-A/vtabs-A";
      if (type !== 1) {
        url = "../vtabs-B/vtabs-B";
      }
      this.fui.href(url);
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
      text: "\u9009\u9879\u5361-\u8054\u52A8",
      bold: true,
      margin: ["24rpx"]
    }),
    d: common_vendor.o(($event) => $options.href(2)),
    e: common_vendor.p({
      type: "gray",
      width: "400rpx",
      height: "84rpx",
      text: "\u9009\u9879\u5361-\u4E0D\u8054\u52A8",
      bold: true
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/H4L_Omip/MiniPoint/h4l-omip/pages/component/nav/vtabs/vtabs.vue"]]);
my.createPage(MiniProgramPage);
