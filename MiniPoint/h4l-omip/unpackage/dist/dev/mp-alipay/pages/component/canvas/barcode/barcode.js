"use strict";
const common_vendor = require("../../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      val: "6937147252044"
    };
  },
  onReady() {
    setTimeout(() => {
      this.barcode();
    }, 50);
  },
  methods: {
    vip() {
      this.fui.href("/pages/my/qa/qa?index=2&title=VIP\u4E13\u5C5E\u5185\u5BB9");
    },
    barcode() {
      if (this.val.length === 13) {
        this.$refs.barcode.draw();
      } else {
        this.fui.toast("\u8BF7\u8F93\u516513\u4F4D\u6761\u5F62\u7801\uFF01");
      }
    }
  }
};
if (!Array) {
  const _easycom_fui_input2 = common_vendor.resolveComponent("fui-input");
  const _easycom_fui_button2 = common_vendor.resolveComponent("fui-button");
  const _easycom_fui_barcode2 = common_vendor.resolveComponent("fui-barcode");
  (_easycom_fui_input2 + _easycom_fui_button2 + _easycom_fui_barcode2)();
}
const _easycom_fui_input = () => "../../../../components/firstui/fui-input/fui-input.js";
const _easycom_fui_button = () => "../../../../components/firstui/fui-button/fui-button.js";
const _easycom_fui_barcode = () => "../../../../components/firstui/fui-barcode/fui-barcode.js";
if (!Math) {
  (_easycom_fui_input + _easycom_fui_button + _easycom_fui_barcode)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o((...args) => $options.vip && $options.vip(...args)),
    b: common_vendor.o(($event) => $data.val = $event),
    c: common_vendor.p({
      maxlength: "13",
      type: "number",
      modelValue: $data.val
    }),
    d: common_vendor.o($options.barcode),
    e: common_vendor.p({
      type: "gray",
      width: "400rpx",
      height: "84rpx",
      text: "\u751F\u6210",
      bold: true,
      margin: ["32rpx", "0", "64rpx"]
    }),
    f: common_vendor.p({
      value: $data.val
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/H4L_Omip/MiniPoint/h4l-omip/pages/component/canvas/barcode/barcode.vue"]]);
my.createPage(MiniProgramPage);
