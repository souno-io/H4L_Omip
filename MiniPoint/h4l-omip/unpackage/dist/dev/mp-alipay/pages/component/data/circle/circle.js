"use strict";
const common_vendor = require("../../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      percent: 0
    };
  },
  methods: {
    vip() {
      this.fui.href("/pages/my/qa/qa?index=2&title=VIP\u4E13\u5C5E\u5185\u5BB9");
    },
    percentChange() {
      let percent = this.percent + 25;
      this.percent = percent > 100 ? 25 : percent;
    }
  }
};
if (!Array) {
  const _easycom_fui_circle2 = common_vendor.resolveComponent("fui-circle");
  const _easycom_fui_button2 = common_vendor.resolveComponent("fui-button");
  (_easycom_fui_circle2 + _easycom_fui_button2)();
}
const _easycom_fui_circle = () => "../../../../components/firstui/fui-circle/fui-circle.js";
const _easycom_fui_button = () => "../../../../components/firstui/fui-button/fui-button.js";
if (!Math) {
  (_easycom_fui_circle + _easycom_fui_button)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o((...args) => $options.vip && $options.vip(...args)),
    b: common_vendor.p({
      percent: 80
    }),
    c: common_vendor.p({
      percent: 75,
      color: "#FFB703",
      background: "#EEEEEE",
      foreground: "#FFB703",
      width: 200,
      strokeWidth: 6,
      size: 16
    }),
    d: common_vendor.p({
      percent: $data.percent
    }),
    e: common_vendor.o($options.percentChange),
    f: common_vendor.p({
      type: "gray",
      width: "400rpx",
      height: "84rpx",
      text: "percent",
      bold: true,
      margin: ["24rpx"]
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/H4L_Omip/MiniPoint/h4l-omip/pages/component/data/circle/circle.vue"]]);
my.createPage(MiniProgramPage);
