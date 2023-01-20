"use strict";
const common_vendor = require("../../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {};
  },
  methods: {
    onInput(e) {
      console.log(e);
    },
    onComplete(e) {
      console.log(e);
      this.fui.toast(`\u60A8\u8F93\u5165\u7684\u9A8C\u8BC1\u7801\u4E3A\uFF1A${e.detail.value}`);
    },
    vip() {
      this.fui.href("/pages/my/qa/qa?index=2&title=VIP\u4E13\u5C5E\u5185\u5BB9");
    }
  }
};
if (!Array) {
  const _easycom_fui_single_input2 = common_vendor.resolveComponent("fui-single-input");
  _easycom_fui_single_input2();
}
const _easycom_fui_single_input = () => "../../../../components/firstui/fui-single-input/fui-single-input.js";
if (!Math) {
  _easycom_fui_single_input();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o((...args) => $options.vip && $options.vip(...args)),
    b: common_vendor.o($options.onInput),
    c: common_vendor.o($options.onComplete),
    d: common_vendor.p({
      type: "number",
      isFocus: true
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/H4L_Omip/MiniPoint/h4l-omip/pages/component/expand/singleInput-A/singleInput-A.vue"]]);
my.createPage(MiniProgramPage);
