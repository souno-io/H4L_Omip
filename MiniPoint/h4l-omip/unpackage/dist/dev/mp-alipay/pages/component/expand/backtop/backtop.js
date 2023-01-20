"use strict";
const common_vendor = require("../../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      name: "top",
      background: "#FFFFFF",
      color: "#333333",
      scrollTop: 0
    };
  },
  methods: {
    vip() {
      this.fui.href("/pages/my/qa/qa?index=2&title=VIP\u4E13\u5C5E\u5185\u5BB9");
    },
    onChange(type) {
      if (type == 1) {
        this.name = "top";
        this.background = "#FFFFFF";
        this.color = "#333333";
      } else if (type == 2) {
        this.name = "turningup";
      } else {
        this.background = "#465CFF";
        this.color = "#FFFFFF";
      }
    }
  },
  onPageScroll(e) {
    this.scrollTop = e.scrollTop;
  }
};
if (!Array) {
  const _easycom_fui_button2 = common_vendor.resolveComponent("fui-button");
  const _easycom_fui_backtop2 = common_vendor.resolveComponent("fui-backtop");
  (_easycom_fui_button2 + _easycom_fui_backtop2)();
}
const _easycom_fui_button = () => "../../../../components/firstui/fui-button/fui-button.js";
const _easycom_fui_backtop = () => "../../../../components/firstui/fui-backtop/fui-backtop.js";
if (!Math) {
  (_easycom_fui_button + _easycom_fui_backtop)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o((...args) => $options.vip && $options.vip(...args)),
    b: common_vendor.o(($event) => $options.onChange(1)),
    c: common_vendor.p({
      type: "gray",
      width: "400rpx",
      height: "84rpx",
      text: "\u9ED8\u8BA4\u6837\u5F0F",
      bold: true,
      margin: ["24rpx"]
    }),
    d: common_vendor.o(($event) => $options.onChange(2)),
    e: common_vendor.p({
      type: "gray",
      width: "400rpx",
      height: "84rpx",
      text: "\u4FEE\u6539\u56FE\u6807",
      bold: true
    }),
    f: common_vendor.o(($event) => $options.onChange(3)),
    g: common_vendor.p({
      type: "gray",
      width: "400rpx",
      height: "84rpx",
      text: "\u8C03\u6574\u6837\u5F0F",
      bold: true,
      margin: ["24rpx"]
    }),
    h: common_vendor.p({
      scrollTop: $data.scrollTop,
      name: $data.name,
      background: $data.background,
      color: $data.color
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/H4L_Omip/MiniPoint/h4l-omip/pages/component/expand/backtop/backtop.vue"]]);
_sfc_main.__runtimeHooks = 1;
my.createPage(MiniProgramPage);
