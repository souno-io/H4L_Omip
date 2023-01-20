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
  const _easycom_fui_textarea2 = common_vendor.resolveComponent("fui-textarea");
  _easycom_fui_textarea2();
}
const _easycom_fui_textarea = () => "../../../../components/firstui/fui-textarea/fui-textarea.js";
if (!Math) {
  _easycom_fui_textarea();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      placeholder: "\u8BF7\u8F93\u5165\u5185\u5BB9"
    }),
    b: common_vendor.p({
      flexStart: true,
      label: "\u6807\u9898",
      placeholder: "\u8BF7\u8F93\u5165\u5185\u5BB9"
    }),
    c: common_vendor.p({
      required: true,
      height: "40rpx",
      label: "\u6807\u9898",
      placeholder: "\u8BF7\u8F93\u5165\u5185\u5BB9"
    }),
    d: common_vendor.o(($event) => $data.text = $event),
    e: common_vendor.p({
      isCounter: true,
      placeholder: "\u8BF7\u8F93\u5165\u5185\u5BB9",
      modelValue: $data.text
    }),
    f: common_vendor.p({
      textareaBorder: true,
      placeholder: "\u8BF7\u8F93\u5165\u7B80\u4ECB"
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/H4L_Omip/MiniPoint/h4l-omip/pages/component/form/textarea/textarea.vue"]]);
my.createPage(MiniProgramPage);
