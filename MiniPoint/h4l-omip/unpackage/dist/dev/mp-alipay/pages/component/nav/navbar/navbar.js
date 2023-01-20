"use strict";
const common_vendor = require("../../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {};
  },
  methods: {
    leftClick(e) {
      console.log("\u5DE6\u4FA7\u6309\u94AE\u70B9\u51FB");
    },
    rightClick(e) {
      console.log("\u53F3\u4FA7\u6309\u94AE\u70B9\u51FB");
    },
    vip() {
      this.fui.href("/pages/my/qa/qa?index=2&title=VIP\u4E13\u5C5E\u5185\u5BB9");
    }
  }
};
if (!Array) {
  const _easycom_fui_nav_bar2 = common_vendor.resolveComponent("fui-nav-bar");
  const _easycom_fui_icon2 = common_vendor.resolveComponent("fui-icon");
  (_easycom_fui_nav_bar2 + _easycom_fui_icon2)();
}
const _easycom_fui_nav_bar = () => "../../../../components/firstui/fui-nav-bar/fui-nav-bar.js";
const _easycom_fui_icon = () => "../../../../components/firstui/fui-icon/fui-icon.js";
if (!Math) {
  (_easycom_fui_nav_bar + _easycom_fui_icon)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o((...args) => $options.vip && $options.vip(...args)),
    b: common_vendor.p({
      title: "\u6807\u9898",
      splitLine: true
    }),
    c: common_vendor.p({
      title: "\u6807\u9898",
      statusBar: false,
      background: "linear-gradient(300deg, #6831FF, #465CFF)",
      color: "#fff"
    }),
    d: common_vendor.p({
      name: "arrowleft"
    }),
    e: common_vendor.p({
      name: "plus"
    }),
    f: common_vendor.o($options.leftClick),
    g: common_vendor.o($options.rightClick),
    h: common_vendor.p({
      title: "\u6807\u9898\u5185\u5BB9"
    }),
    i: common_vendor.p({
      custom: true,
      padding: "12"
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/H4L_Omip/MiniPoint/h4l-omip/pages/component/nav/navbar/navbar.vue"]]);
my.createPage(MiniProgramPage);
