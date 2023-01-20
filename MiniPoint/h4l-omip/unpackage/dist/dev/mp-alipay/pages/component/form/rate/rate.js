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
    change(e) {
      console.log(e);
    }
  }
};
if (!Array) {
  const _easycom_fui_rate2 = common_vendor.resolveComponent("fui-rate");
  _easycom_fui_rate2();
}
const _easycom_fui_rate = () => "../../../../components/firstui/fui-rate/fui-rate.js";
if (!Math) {
  _easycom_fui_rate();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o((...args) => $options.vip && $options.vip(...args)),
    b: common_vendor.o($options.change),
    c: common_vendor.o($options.change),
    d: common_vendor.p({
      color: "#888",
      activeColor: "#465CFF"
    }),
    e: common_vendor.o($options.change),
    f: common_vendor.p({
      size: 48
    }),
    g: common_vendor.o($options.change),
    h: common_vendor.p({
      max: 8,
      score: 5
    }),
    i: common_vendor.o($options.change),
    j: common_vendor.p({
      allowHalf: true
    }),
    k: common_vendor.o($options.change),
    l: common_vendor.p({
      disabled: true,
      score: 3
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/H4L_Omip/MiniPoint/h4l-omip/pages/component/form/rate/rate.vue"]]);
my.createPage(MiniProgramPage);
