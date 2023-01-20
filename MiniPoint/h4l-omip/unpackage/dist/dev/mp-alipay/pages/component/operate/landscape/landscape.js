"use strict";
const common_vendor = require("../../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      show: false,
      position: 3,
      closable: true
    };
  },
  methods: {
    vip() {
      this.fui.href("/pages/my/qa/qa?index=2&title=VIP\u4E13\u5C5E\u5185\u5BB9");
    },
    showPopup(type) {
      this.closable = type !== 4;
      this.position = type;
      setTimeout(() => {
        this.show = true;
      }, 50);
    },
    closePopup() {
      this.show = false;
    },
    btnClick(e) {
      this.fui.toast("\u60A8\u70B9\u51FB\u4E86\u6309\u94AE~");
      this.closePopup();
    }
  }
};
if (!Array) {
  const _easycom_fui_button2 = common_vendor.resolveComponent("fui-button");
  const _easycom_fui_landscape2 = common_vendor.resolveComponent("fui-landscape");
  (_easycom_fui_button2 + _easycom_fui_landscape2)();
}
const _easycom_fui_button = () => "../../../../components/firstui/fui-button/fui-button.js";
const _easycom_fui_landscape = () => "../../../../components/firstui/fui-landscape/fui-landscape.js";
if (!Math) {
  (_easycom_fui_button + _easycom_fui_landscape)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o((...args) => $options.vip && $options.vip(...args)),
    b: common_vendor.o(($event) => $options.showPopup(1)),
    c: common_vendor.p({
      type: "gray",
      width: "400rpx",
      height: "84rpx",
      text: "\u5173\u95ED\u6309\u94AE-\u5DE6\u4E0A",
      bold: true,
      margin: ["24rpx"]
    }),
    d: common_vendor.o(($event) => $options.showPopup(2)),
    e: common_vendor.p({
      type: "gray",
      width: "400rpx",
      height: "84rpx",
      text: "\u5173\u95ED\u6309\u94AE-\u53F3\u4E0A",
      bold: true
    }),
    f: common_vendor.o(($event) => $options.showPopup(3)),
    g: common_vendor.p({
      type: "gray",
      width: "400rpx",
      height: "84rpx",
      text: "\u5173\u95ED\u6309\u94AE-\u4E2D\u4E0B",
      bold: true,
      margin: ["24rpx"]
    }),
    h: common_vendor.o(($event) => $options.showPopup(4)),
    i: common_vendor.p({
      type: "gray",
      width: "400rpx",
      height: "84rpx",
      text: "\u65E0\u5173\u95ED\u6309\u94AE",
      bold: true
    }),
    j: common_vendor.o($options.btnClick),
    k: common_vendor.p({
      width: "400rpx",
      height: "84rpx",
      radius: "100rpx",
      background: "linear-gradient(180deg, #E3BF82 0%, #997B4A 100%)",
      borderColor: "rgba(0,0,0,0)",
      ["border-width"]: "0"
    }),
    l: common_vendor.o($options.closePopup),
    m: common_vendor.p({
      show: $data.show,
      closable: $data.closable,
      position: $data.position
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/H4L_Omip/MiniPoint/h4l-omip/pages/component/operate/landscape/landscape.vue"]]);
my.createPage(MiniProgramPage);
