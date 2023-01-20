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
      if (this.percent >= 100) {
        this.percent = 40;
      } else {
        this.percent += 30;
      }
    }
  }
};
if (!Array) {
  const _easycom_fui_progress2 = common_vendor.resolveComponent("fui-progress");
  const _easycom_fui_button2 = common_vendor.resolveComponent("fui-button");
  (_easycom_fui_progress2 + _easycom_fui_button2)();
}
const _easycom_fui_progress = () => "../../../../components/firstui/fui-progress/fui-progress.js";
const _easycom_fui_button = () => "../../../../components/firstui/fui-button/fui-button.js";
if (!Math) {
  (_easycom_fui_progress + _easycom_fui_button)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o((...args) => $options.vip && $options.vip(...args)),
    b: common_vendor.p({
      percent: 80
    }),
    c: common_vendor.p({
      percent: 70,
      showInfo: true
    }),
    d: common_vendor.p({
      percent: 60,
      background: "#ddd",
      activeColor: "#FFB703"
    }),
    e: common_vendor.p({
      percent: 70,
      height: "16",
      radius: "16",
      activeColor: "#09BE4F"
    }),
    f: common_vendor.p({
      percent: $data.percent,
      showInfo: true
    }),
    g: common_vendor.o($options.percentChange),
    h: common_vendor.p({
      type: "gray",
      width: "400rpx",
      height: "84rpx",
      text: "percent",
      bold: true,
      margin: ["24rpx"]
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/H4L_Omip/MiniPoint/h4l-omip/pages/component/data/progress/progress.vue"]]);
my.createPage(MiniProgramPage);
