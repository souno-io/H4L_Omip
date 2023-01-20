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
  const _easycom_fui_spin2 = common_vendor.resolveComponent("fui-spin");
  const _easycom_fui_grid_item2 = common_vendor.resolveComponent("fui-grid-item");
  const _easycom_fui_icon2 = common_vendor.resolveComponent("fui-icon");
  const _easycom_fui_grid2 = common_vendor.resolveComponent("fui-grid");
  (_easycom_fui_spin2 + _easycom_fui_grid_item2 + _easycom_fui_icon2 + _easycom_fui_grid2)();
}
const _easycom_fui_spin = () => "../../../../components/firstui/fui-spin/fui-spin.js";
const _easycom_fui_grid_item = () => "../../../../components/firstui/fui-grid-item/fui-grid-item.js";
const _easycom_fui_icon = () => "../../../../components/firstui/fui-icon/fui-icon.js";
const _easycom_fui_grid = () => "../../../../components/firstui/fui-grid/fui-grid.js";
if (!Math) {
  (_easycom_fui_spin + _easycom_fui_grid_item + _easycom_fui_icon + _easycom_fui_grid)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o((...args) => $options.vip && $options.vip(...args)),
    b: common_vendor.p({
      highlight: false
    }),
    c: common_vendor.p({
      highlight: false
    }),
    d: common_vendor.p({
      highlight: false
    }),
    e: common_vendor.p({
      name: "loading",
      color: "#FFB703"
    }),
    f: common_vendor.p({
      highlight: false
    }),
    g: common_vendor.p({
      name: "moments",
      color: "#09BE4F"
    }),
    h: common_vendor.p({
      highlight: false
    }),
    i: common_vendor.p({
      name: "aftersale",
      color: "#FF2B2B"
    }),
    j: common_vendor.p({
      highlight: false
    }),
    k: common_vendor.p({
      highlight: false
    }),
    l: common_vendor.p({
      highlight: false
    }),
    m: common_vendor.p({
      highlight: false
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/H4L_Omip/MiniPoint/h4l-omip/pages/component/operate/spin/spin.vue"]]);
my.createPage(MiniProgramPage);
