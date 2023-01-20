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
      let url = "../tabbar-A/tabbar-A";
      if (type !== 1) {
        url = type == 2 ? "../tabbar-B/tabbar-B" : "../tabbar-C/tabbar-C";
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
      text: "\u57FA\u7840\u6F14\u793A",
      bold: true,
      margin: ["24rpx", "0", "0"]
    }),
    d: common_vendor.o(($event) => $options.href(2)),
    e: common_vendor.p({
      type: "gray",
      width: "400rpx",
      height: "84rpx",
      text: "\u4F7F\u7528\u6848\u4F8B\u4E00",
      bold: true,
      margin: ["24rpx"]
    }),
    f: common_vendor.o(($event) => $options.href(3)),
    g: common_vendor.p({
      type: "gray",
      width: "400rpx",
      height: "84rpx",
      text: "\u4F7F\u7528\u6848\u4F8B\u4E8C",
      bold: true
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/H4L_Omip/MiniPoint/h4l-omip/pages/component/nav/tabbar/tabbar.vue"]]);
my.createPage(MiniProgramPage);
