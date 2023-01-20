"use strict";
const common_vendor = require("../../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      text: ""
    };
  },
  methods: {}
};
if (!Array) {
  const _easycom_fui_input2 = common_vendor.resolveComponent("fui-input");
  const _easycom_fui_button2 = common_vendor.resolveComponent("fui-button");
  const _easycom_fui_icon2 = common_vendor.resolveComponent("fui-icon");
  (_easycom_fui_input2 + _easycom_fui_button2 + _easycom_fui_icon2)();
}
const _easycom_fui_input = () => "../../../../components/firstui/fui-input/fui-input.js";
const _easycom_fui_button = () => "../../../../components/firstui/fui-button/fui-button.js";
const _easycom_fui_icon = () => "../../../../components/firstui/fui-icon/fui-icon.js";
if (!Math) {
  (_easycom_fui_input + _easycom_fui_button + _easycom_fui_icon)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      borderTop: true,
      placeholder: "\u8BF7\u8F93\u5165\u7528\u6237\u540D"
    }),
    b: common_vendor.p({
      bottomLeft: 0,
      placeholder: "\u8BF7\u8F93\u5165\u624B\u673A\u53F7\u7801",
      maxlength: "11"
    }),
    c: common_vendor.p({
      label: "\u6807\u9898",
      borderTop: true,
      placeholder: "\u8FD9\u662F\u4E00\u4E2A\u8F93\u5165\u6846"
    }),
    d: common_vendor.p({
      label: "\u6807\u9898\u6587\u5B57",
      bottomLeft: 0,
      placeholder: "\u8BF7\u8F93\u5165\u6587\u672C"
    }),
    e: common_vendor.o(($event) => $data.text = $event),
    f: common_vendor.p({
      label: "\u6807\u9898",
      bottomLeft: 0,
      borderTop: true,
      placeholder: "\u8BF7\u8F93\u5165\u6587\u672C",
      clearable: true,
      modelValue: $data.text
    }),
    g: common_vendor.p({
      label: "\u6807\u9898",
      inputBorder: true,
      placeholder: "\u8BF7\u8F93\u5165\u6587\u672C"
    }),
    h: common_vendor.p({
      marginTop: 24,
      isFillet: true,
      inputBorder: true,
      placeholder: "\u8BF7\u8F93\u5165\u6587\u672C"
    }),
    i: common_vendor.p({
      required: true,
      label: "\u6807\u9898",
      borderTop: true,
      placeholder: "\u8BF7\u8F93\u5165\u6587\u672C"
    }),
    j: common_vendor.p({
      required: true,
      label: "\u6807\u9898\u6587\u5B57",
      bottomLeft: 0,
      placeholder: "\u8BF7\u8F93\u5165\u6587\u672C\u5185\u5BB9"
    }),
    k: common_vendor.p({
      textRight: true,
      label: "\u8EAB\u9AD8",
      borderTop: true,
      placeholder: "\u8BF7\u8F93\u5165\u8EAB\u9AD8"
    }),
    l: common_vendor.p({
      textRight: true,
      label: "\u4F53\u91CD",
      bottomLeft: 0,
      placeholder: "\u8BF7\u8F93\u5165\u4F53\u91CD"
    }),
    m: common_vendor.p({
      label: "\u6807\u9898",
      bottomLeft: 0,
      borderTop: true,
      placeholder: "\u8FD9\u662F\u4E00\u4E2A\u88AB\u7981\u7528\u7684\u8F93\u5165\u6846",
      disabled: true
    }),
    n: common_vendor.p({
      type: "gray",
      bold: true,
      width: "200rpx",
      height: "64rpx",
      size: 28,
      text: "\u83B7\u53D6\u9A8C\u8BC1\u7801"
    }),
    o: common_vendor.p({
      padding: ["20rpx", "32rpx"],
      label: "\u9A8C\u8BC1\u7801",
      bottomLeft: 0,
      placeholder: "\u8BF7\u8F93\u5165\u624B\u673A\u9A8C\u8BC1\u7801"
    }),
    p: common_vendor.p({
      name: "mobile",
      color: "#333",
      size: 48
    }),
    q: common_vendor.p({
      placeholder: "\u8BF7\u8F93\u5165\u624B\u673A\u53F7"
    }),
    r: common_vendor.p({
      name: "captcha",
      size: 48
    }),
    s: common_vendor.p({
      type: "gray",
      bold: true,
      width: "200rpx",
      height: "64rpx",
      size: 28,
      text: "\u83B7\u53D6\u9A8C\u8BC1\u7801"
    }),
    t: common_vendor.p({
      padding: ["20rpx", "32rpx"],
      placeholder: "\u8BF7\u8F93\u5165\u9A8C\u8BC1\u7801",
      bottomLeft: 0
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/H4L_Omip/MiniPoint/h4l-omip/pages/component/form/input/input.vue"]]);
my.createPage(MiniProgramPage);
