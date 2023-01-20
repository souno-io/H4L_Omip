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
  const _easycom_fui_load_ani2 = common_vendor.resolveComponent("fui-load-ani");
  const _easycom_fui_grid_item2 = common_vendor.resolveComponent("fui-grid-item");
  const _easycom_fui_grid2 = common_vendor.resolveComponent("fui-grid");
  (_easycom_fui_load_ani2 + _easycom_fui_grid_item2 + _easycom_fui_grid2)();
}
const _easycom_fui_load_ani = () => "../../../../components/firstui/fui-load-ani/fui-load-ani.js";
const _easycom_fui_grid_item = () => "../../../../components/firstui/fui-grid-item/fui-grid-item.js";
const _easycom_fui_grid = () => "../../../../components/firstui/fui-grid/fui-grid.js";
if (!Math) {
  (_easycom_fui_load_ani + _easycom_fui_grid_item + _easycom_fui_grid)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o((...args) => $options.vip && $options.vip(...args)),
    b: common_vendor.p({
      highlight: false
    }),
    c: common_vendor.p({
      color: "#FFB703"
    }),
    d: common_vendor.p({
      highlight: false
    }),
    e: common_vendor.p({
      color: "-webkit-linear-gradient(top,#FF416C,#6831FF)"
    }),
    f: common_vendor.p({
      highlight: false
    }),
    g: common_vendor.p({
      type: "2"
    }),
    h: common_vendor.p({
      highlight: false
    }),
    i: common_vendor.p({
      type: "2",
      color: "#6831FF"
    }),
    j: common_vendor.p({
      highlight: false
    }),
    k: common_vendor.p({
      type: "2",
      color: "-webkit-linear-gradient(top,#FF416C,#FFB703)"
    }),
    l: common_vendor.p({
      highlight: false
    }),
    m: common_vendor.p({
      type: "3"
    }),
    n: common_vendor.p({
      highlight: false
    }),
    o: common_vendor.p({
      type: "3",
      color: "#09BE4F"
    }),
    p: common_vendor.p({
      highlight: false
    }),
    q: common_vendor.p({
      type: "3",
      color: "#B2B2B2"
    }),
    r: common_vendor.p({
      highlight: false
    }),
    s: common_vendor.p({
      type: "4"
    }),
    t: common_vendor.p({
      highlight: false
    }),
    v: common_vendor.p({
      type: "4",
      color: "#FFB703"
    }),
    w: common_vendor.p({
      highlight: false
    }),
    x: common_vendor.p({
      type: "4",
      color: "#B2B2B2"
    }),
    y: common_vendor.p({
      highlight: false
    }),
    z: common_vendor.p({
      type: "5"
    }),
    A: common_vendor.p({
      highlight: false
    }),
    B: common_vendor.p({
      type: "5",
      color: "#7F7F7F"
    }),
    C: common_vendor.p({
      highlight: false
    }),
    D: common_vendor.p({
      type: "5",
      color: "-webkit-linear-gradient(top,#FF416C,#6831FF)"
    }),
    E: common_vendor.p({
      highlight: false
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/H4L_Omip/MiniPoint/h4l-omip/pages/component/operate/loadAni/loadAni.vue"]]);
my.createPage(MiniProgramPage);
