"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  data() {
    let spacing = 12;
    return {
      spacing,
      isVoice: true,
      focus: false
    };
  },
  methods: {
    vip() {
      const url = "/pages/my/qa/qa?index=2&title=VIP\u4E13\u5C5E\u5185\u5BB9";
      this.fui.href(url);
    },
    change() {
      this.isVoice = !this.isVoice;
    },
    focusChange() {
      this.focus = true;
    },
    blurChange() {
      this.focus = false;
    }
  }
};
if (!Array) {
  const _easycom_fui_icon2 = common_vendor.resolveComponent("fui-icon");
  const _easycom_fui_safe_area2 = common_vendor.resolveComponent("fui-safe-area");
  (_easycom_fui_icon2 + _easycom_fui_safe_area2)();
}
const _easycom_fui_icon = () => "../../../components/firstui/fui-icon/fui-icon.js";
const _easycom_fui_safe_area = () => "../../../components/firstui/fui-safe-area/fui-safe-area.js";
if (!Math) {
  (_easycom_fui_icon + _easycom_fui_safe_area)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.o((...args) => $options.vip && $options.vip(...args)),
    b: common_vendor.p({
      name: $data.isVoice ? "voice" : "keyboard"
    }),
    c: common_vendor.o((...args) => $options.change && $options.change(...args)),
    d: !$data.isVoice
  }, !$data.isVoice ? {} : {}, {
    e: common_vendor.p({
      name: "face"
    }),
    f: common_vendor.p({
      name: "plussign"
    }),
    g: common_vendor.p({
      name: $data.isVoice ? "voice" : "keyboard"
    }),
    h: common_vendor.o((...args) => $options.change && $options.change(...args)),
    i: !$data.isVoice
  }, !$data.isVoice ? {} : {}, {
    j: common_vendor.p({
      name: $data.isVoice ? "voice" : "keyboard"
    }),
    k: common_vendor.o((...args) => $options.change && $options.change(...args)),
    l: $data.spacing,
    m: common_vendor.o((...args) => $options.focusChange && $options.focusChange(...args)),
    n: common_vendor.o((...args) => $options.blurChange && $options.blurChange(...args)),
    o: !$data.isVoice
  }, !$data.isVoice ? {} : {}, {
    p: !$data.focus
  }, !$data.focus ? {
    q: common_vendor.p({
      background: "#f8f8f8"
    })
  } : {});
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/H4L_Omip/MiniPoint/h4l-omip/pages/layout/chatBar/chatBar.nvue"]]);
my.createPage(MiniProgramPage);
