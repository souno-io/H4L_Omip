"use strict";
const common_vendor = require("../../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      val: "https://doc.firstui.cn",
      value: ""
    };
  },
  onLoad() {
    this.value = this.val;
  },
  methods: {
    vip() {
      this.fui.href("/pages/my/qa/qa?index=2&title=VIP\u4E13\u5C5E\u5185\u5BB9");
    },
    qrcode() {
      this.value = this.val;
    },
    ready(e) {
      console.log(e);
    }
  }
};
if (!Array) {
  const _easycom_fui_textarea2 = common_vendor.resolveComponent("fui-textarea");
  const _easycom_fui_button2 = common_vendor.resolveComponent("fui-button");
  const _easycom_fui_qrcode2 = common_vendor.resolveComponent("fui-qrcode");
  (_easycom_fui_textarea2 + _easycom_fui_button2 + _easycom_fui_qrcode2)();
}
const _easycom_fui_textarea = () => "../../../../components/firstui/fui-textarea/fui-textarea.js";
const _easycom_fui_button = () => "../../../../components/firstui/fui-button/fui-button.js";
const _easycom_fui_qrcode = () => "../../../../components/firstui/fui-qrcode/fui-qrcode.js";
if (!Math) {
  (_easycom_fui_textarea + _easycom_fui_button + _easycom_fui_qrcode)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o((...args) => $options.vip && $options.vip(...args)),
    b: common_vendor.o(($event) => $data.val = $event),
    c: common_vendor.p({
      modelValue: $data.val
    }),
    d: common_vendor.o($options.qrcode),
    e: common_vendor.p({
      type: "gray",
      width: "400rpx",
      height: "84rpx",
      text: "\u751F\u6210",
      bold: true,
      margin: ["32rpx", "0", "64rpx"]
    }),
    f: common_vendor.o($options.ready),
    g: common_vendor.p({
      value: $data.value
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/H4L_Omip/MiniPoint/h4l-omip/pages/component/canvas/qrcode/qrcode.vue"]]);
my.createPage(MiniProgramPage);
