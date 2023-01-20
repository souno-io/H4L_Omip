"use strict";
const common_vendor = require("../../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      show: false,
      value: "",
      theme: "light",
      toolbar: true
    };
  },
  methods: {
    vip() {
      this.fui.href("/pages/my/qa/qa?index=2&title=VIP\u4E13\u5C5E\u5185\u5BB9");
    },
    onFocus() {
      if (!this.show) {
        this.show = true;
        this.$refs.fui_si.initFocus(true);
      }
    },
    keyClick(e) {
      console.log(e);
      let val = e.value;
      if (this.value.length === 8)
        return;
      this.value += val;
    },
    complete(e) {
      this.show = false;
      this.$refs.fui_si.initFocus(false);
    },
    backspace(e) {
      let val = this.value;
      if (val) {
        this.value = val.substring(0, val.length - 1);
      }
    },
    btnTap(type) {
      if (type === 1) {
        this.theme = "light";
      } else {
        this.theme = "dark";
      }
      if (!this.show) {
        this.show = true;
        this.$refs.fui_si.initFocus(true);
      }
    }
  }
};
if (!Array) {
  const _easycom_fui_single_input2 = common_vendor.resolveComponent("fui-single-input");
  const _easycom_fui_button2 = common_vendor.resolveComponent("fui-button");
  const _easycom_fui_license_plate2 = common_vendor.resolveComponent("fui-license-plate");
  (_easycom_fui_single_input2 + _easycom_fui_button2 + _easycom_fui_license_plate2)();
}
const _easycom_fui_single_input = () => "../../../../components/firstui/fui-single-input/fui-single-input.js";
const _easycom_fui_button = () => "../../../../components/firstui/fui-button/fui-button.js";
const _easycom_fui_license_plate = () => "../../../../components/firstui/fui-license-plate/fui-license-plate.js";
if (!Math) {
  (_easycom_fui_single_input + _easycom_fui_button + _easycom_fui_license_plate)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o((...args) => $options.vip && $options.vip(...args)),
    b: common_vendor.o($options.onFocus),
    c: common_vendor.p({
      native: false,
      borderColor: "#ccc",
      border: "1",
      borderWidth: "1",
      radius: "16",
      cursorHeight: "40",
      length: 8,
      width: "80",
      height: "80",
      size: "40",
      padding: "32",
      value: $data.value
    }),
    d: common_vendor.o(($event) => $options.btnTap(1)),
    e: common_vendor.p({
      type: "gray",
      width: "400rpx",
      height: "84rpx",
      text: "\u9ED8\u8BA4\u952E\u76D8",
      bold: true
    }),
    f: common_vendor.o(($event) => $options.btnTap(2)),
    g: common_vendor.p({
      type: "gray",
      width: "400rpx",
      height: "84rpx",
      text: "\u6697\u9ED1\u6A21\u5F0F",
      bold: true,
      margin: ["24rpx"]
    }),
    h: common_vendor.o($options.keyClick),
    i: common_vendor.o($options.backspace),
    j: common_vendor.o($options.complete),
    k: common_vendor.p({
      show: $data.show,
      theme: $data.theme,
      toolbar: $data.toolbar
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/H4L_Omip/MiniPoint/h4l-omip/pages/component/expand/licensePlate/licensePlate.vue"]]);
my.createPage(MiniProgramPage);
