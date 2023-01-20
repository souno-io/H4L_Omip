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
      this.fui.toast(`\u60A8\u8F93\u5165\u7684\u5BC6\u7801\u4E3A\uFF1A${e.detail.value}`);
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
      border: "1",
      borderWidth: "1",
      radius: "16",
      activeColor: "#FFB703",
      cursorHeight: "40",
      cursorColor: "#FFB703",
      length: 6,
      width: "80",
      height: "80",
      size: "24",
      password: true,
      isFocus: true
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/H4L_Omip/MiniPoint/h4l-omip/pages/component/expand/singleInput-B/singleInput-B.vue"]]);
my.createPage(MiniProgramPage);
