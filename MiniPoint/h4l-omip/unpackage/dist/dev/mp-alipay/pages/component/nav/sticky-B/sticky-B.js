"use strict";
const common_vendor = require("../../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {};
  },
  onReady() {
  },
  methods: {
    vip() {
      this.fui.href("/pages/my/qa/qa?index=2&title=VIP\u4E13\u5C5E\u5185\u5BB9");
    }
  }
};
if (!Array) {
  const _easycom_fui_list_cell2 = common_vendor.resolveComponent("fui-list-cell");
  const _easycom_fui_sticky2 = common_vendor.resolveComponent("fui-sticky");
  (_easycom_fui_list_cell2 + _easycom_fui_sticky2)();
}
const _easycom_fui_list_cell = () => "../../../../components/firstui/fui-list-cell/fui-list-cell.js";
const _easycom_fui_sticky = () => "../../../../components/firstui/fui-sticky/fui-sticky.js";
if (!Math) {
  (_easycom_fui_list_cell + _easycom_fui_sticky)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o((...args) => $options.vip && $options.vip(...args)),
    b: common_vendor.p({
      range: true
    }),
    c: common_vendor.p({
      range: true
    }),
    d: common_vendor.p({
      range: true
    }),
    e: common_vendor.p({
      range: true
    }),
    f: common_vendor.p({
      range: true
    }),
    g: common_vendor.p({
      range: true
    }),
    h: common_vendor.p({
      range: true
    }),
    i: common_vendor.p({
      range: true
    }),
    j: common_vendor.p({
      range: true
    }),
    k: common_vendor.p({
      range: true
    }),
    l: common_vendor.p({
      range: true
    }),
    m: common_vendor.p({
      range: true
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/H4L_Omip/MiniPoint/h4l-omip/pages/component/nav/sticky-B/sticky-B.vue"]]);
my.createPage(MiniProgramPage);
