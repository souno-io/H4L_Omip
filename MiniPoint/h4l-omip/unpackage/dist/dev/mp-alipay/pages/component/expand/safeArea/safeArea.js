"use strict";
const common_vendor = require("../../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {};
  },
  methods: {
    vip() {
      this.fui.href("/pages/my/qa/qa?index=2&title=VIP\u4E13\u5C5E\u5185\u5BB9");
    }
  }
};
if (!Array) {
  const _easycom_fui_divider2 = common_vendor.resolveComponent("fui-divider");
  const _easycom_fui_safe_area2 = common_vendor.resolveComponent("fui-safe-area");
  (_easycom_fui_divider2 + _easycom_fui_safe_area2)();
}
const _easycom_fui_divider = () => "../../../../components/firstui/fui-divider/fui-divider.js";
const _easycom_fui_safe_area = () => "../../../../components/firstui/fui-safe-area/fui-safe-area.js";
if (!Math) {
  (_easycom_fui_divider + _easycom_fui_safe_area)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o((...args) => $options.vip && $options.vip(...args)),
    b: common_vendor.p({
      text: "\u5E95\u90E8\u5185\u5BB9"
    }),
    c: common_vendor.p({
      background: "#F1F4FA"
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/H4L_Omip/MiniPoint/h4l-omip/pages/component/expand/safeArea/safeArea.vue"]]);
my.createPage(MiniProgramPage);
