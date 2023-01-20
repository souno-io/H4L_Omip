"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {};
  },
  methods: {
    vip() {
      const url = "/pages/my/qa/qa?index=2&title=VIP\u4E13\u5C5E\u5185\u5BB9";
      this.fui.href(url);
    }
  }
};
if (!Array) {
  const _easycom_fui_icon2 = common_vendor.resolveComponent("fui-icon");
  const _easycom_fui_button2 = common_vendor.resolveComponent("fui-button");
  const _easycom_fui_badge2 = common_vendor.resolveComponent("fui-badge");
  const _easycom_fui_safe_area2 = common_vendor.resolveComponent("fui-safe-area");
  (_easycom_fui_icon2 + _easycom_fui_button2 + _easycom_fui_badge2 + _easycom_fui_safe_area2)();
}
const _easycom_fui_icon = () => "../../../components/firstui/fui-icon/fui-icon.js";
const _easycom_fui_button = () => "../../../components/firstui/fui-button/fui-button.js";
const _easycom_fui_badge = () => "../../../components/firstui/fui-badge/fui-badge.js";
const _easycom_fui_safe_area = () => "../../../components/firstui/fui-safe-area/fui-safe-area.js";
if (!Math) {
  (_easycom_fui_icon + _easycom_fui_button + _easycom_fui_badge + _easycom_fui_safe_area)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o((...args) => $options.vip && $options.vip(...args)),
    b: common_vendor.p({
      name: "shop",
      size: 40
    }),
    c: common_vendor.p({
      name: "message",
      size: 40
    }),
    d: common_vendor.p({
      name: "cart",
      size: 40
    }),
    e: common_vendor.p({
      text: "\u52A0\u5165\u8D2D\u7269\u8F66",
      type: "warning",
      height: "72rpx",
      size: 28,
      radius: "40rpx"
    }),
    f: common_vendor.p({
      text: "\u7ACB\u5373\u8D2D\u4E70",
      type: "danger",
      height: "72rpx",
      size: 28,
      radius: "40rpx"
    }),
    g: common_vendor.p({
      name: "message",
      size: 40
    }),
    h: common_vendor.p({
      name: "cart",
      size: 40
    }),
    i: common_vendor.p({
      text: "\u52A0\u5165\u8D2D\u7269\u8F66",
      type: "warning",
      height: "72rpx",
      size: 28,
      radius: "40rpx"
    }),
    j: common_vendor.p({
      text: "\u7ACB\u5373\u8D2D\u4E70",
      type: "danger",
      height: "72rpx",
      size: 28,
      radius: "40rpx"
    }),
    k: common_vendor.p({
      name: "shop",
      size: 40,
      color: "#FF2B2B"
    }),
    l: common_vendor.p({
      name: "message",
      size: 40
    }),
    m: common_vendor.p({
      name: "cart",
      size: 40
    }),
    n: common_vendor.p({
      absolute: true,
      value: 2,
      type: "danger",
      scaleRatio: 0.8
    }),
    o: common_vendor.p({
      text: "\u52A0\u5165\u8D2D\u7269\u8F66",
      type: "warning",
      height: "72rpx",
      size: 28,
      radius: "40rpx"
    }),
    p: common_vendor.p({
      text: "\u7ACB\u5373\u8D2D\u4E70",
      type: "danger",
      height: "72rpx",
      size: 28,
      radius: "40rpx"
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/H4L_Omip/MiniPoint/h4l-omip/pages/layout/goodsBar/goodsBar.nvue"]]);
my.createPage(MiniProgramPage);
