"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      checkeAll: false
    };
  },
  methods: {
    vip() {
      const url = "/pages/my/qa/qa?index=2&title=VIP\u4E13\u5C5E\u5185\u5BB9";
      this.fui.href(url);
    },
    change(e) {
      console.log(e);
      this.checkeAll = e.checked;
    }
  }
};
if (!Array) {
  const _easycom_fui_checkbox2 = common_vendor.resolveComponent("fui-checkbox");
  const _easycom_fui_button2 = common_vendor.resolveComponent("fui-button");
  const _easycom_fui_safe_area2 = common_vendor.resolveComponent("fui-safe-area");
  (_easycom_fui_checkbox2 + _easycom_fui_button2 + _easycom_fui_safe_area2)();
}
const _easycom_fui_checkbox = () => "../../../components/firstui/fui-checkbox/fui-checkbox.js";
const _easycom_fui_button = () => "../../../components/firstui/fui-button/fui-button.js";
const _easycom_fui_safe_area = () => "../../../components/firstui/fui-safe-area/fui-safe-area.js";
if (!Math) {
  (_easycom_fui_checkbox + _easycom_fui_button + _easycom_fui_safe_area)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.o((...args) => $options.vip && $options.vip(...args)),
    b: common_vendor.o($options.change),
    c: common_vendor.p({
      color: "#FF2B2B"
    }),
    d: $data.checkeAll
  }, $data.checkeAll ? {} : {}, {
    e: common_vendor.p({
      type: "danger",
      width: "192rpx",
      height: "72rpx",
      size: 26,
      radius: "60rpx",
      text: "\u53BB\u7ED3\u7B97(0)"
    }),
    f: common_vendor.p({
      type: "danger",
      width: "192rpx",
      height: "72rpx",
      size: 26,
      radius: "60rpx",
      text: "\u63D0\u4EA4\u8BA2\u5355"
    }),
    g: common_vendor.p({
      type: "danger",
      width: "192rpx",
      height: "72rpx",
      size: 26,
      radius: "60rpx",
      text: "\u63D0\u4EA4\u8BA2\u5355",
      disabled: true
    }),
    h: common_vendor.p({
      type: "danger",
      width: "192rpx",
      height: "72rpx",
      size: 26,
      radius: "60rpx",
      text: "\u63D0\u4EA4\u8BA2\u5355"
    })
  });
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/H4L_Omip/MiniPoint/h4l-omip/pages/layout/submitBar/submitBar.nvue"]]);
my.createPage(MiniProgramPage);
