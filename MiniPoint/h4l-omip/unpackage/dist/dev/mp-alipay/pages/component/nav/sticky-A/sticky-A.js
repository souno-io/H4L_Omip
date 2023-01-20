"use strict";
const common_vendor = require("../../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      scrollTop: 0
    };
  },
  methods: {
    vip() {
      this.fui.href("/pages/my/qa/qa?index=2&title=VIP\u4E13\u5C5E\u5185\u5BB9");
    }
  }
};
if (!Array) {
  const _easycom_fui_sticky2 = common_vendor.resolveComponent("fui-sticky");
  _easycom_fui_sticky2();
}
const _easycom_fui_sticky = () => "../../../../components/firstui/fui-sticky/fui-sticky.js";
if (!Math) {
  _easycom_fui_sticky();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o((...args) => $options.vip && $options.vip(...args)),
    b: common_vendor.p({
      zIndex: 1001,
      scrollTop: $data.scrollTop
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/H4L_Omip/MiniPoint/h4l-omip/pages/component/nav/sticky-A/sticky-A.vue"]]);
my.createPage(MiniProgramPage);
