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
    success() {
      this.fui.toast("\u9A8C\u8BC1\u901A\u8FC7\uFF01");
    },
    fail() {
      this.fui.toast("\u9A8C\u8BC1\u5931\u8D25\uFF01");
    },
    reset() {
      this.$refs.sv && this.$refs.sv.reset();
      this.fui.toast("\u91CD\u7F6E\u6210\u529F\uFF01");
    }
  }
};
if (!Array) {
  const _easycom_fui_slide_verify2 = common_vendor.resolveComponent("fui-slide-verify");
  const _easycom_fui_button2 = common_vendor.resolveComponent("fui-button");
  (_easycom_fui_slide_verify2 + _easycom_fui_button2)();
}
const _easycom_fui_slide_verify = () => "../../../../components/firstui/fui-slide-verify/fui-slide-verify.js";
const _easycom_fui_button = () => "../../../../components/firstui/fui-button/fui-button.js";
if (!Math) {
  (_easycom_fui_slide_verify + _easycom_fui_button)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o((...args) => $options.vip && $options.vip(...args)),
    b: common_vendor.o($options.success),
    c: common_vendor.o($options.fail),
    d: common_vendor.o($options.success),
    e: common_vendor.o($options.fail),
    f: common_vendor.p({
      background: "rgba(9, 190, 79, .05)",
      activeBgColor: "#09BE4F",
      passColor: "#09BE4F",
      lineColor: "#FFB703"
    }),
    g: common_vendor.o($options.success),
    h: common_vendor.o($options.fail),
    i: common_vendor.o($options.reset),
    j: common_vendor.p({
      type: "gray",
      width: "400rpx",
      height: "84rpx",
      text: "\u91CD\u7F6E\u9A8C\u8BC1",
      bold: true,
      margin: ["40rpx"]
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/H4L_Omip/MiniPoint/h4l-omip/pages/component/expand/slideVerify/slideVerify.vue"]]);
my.createPage(MiniProgramPage);
