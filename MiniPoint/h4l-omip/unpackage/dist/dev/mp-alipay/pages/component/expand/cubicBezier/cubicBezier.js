"use strict";
const common_vendor = require("../../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      left: 116,
      bottom: 140,
      right: 100
    };
  },
  methods: {
    vip() {
      this.fui.href("/pages/my/qa/qa?index=2&title=VIP\u4E13\u5C5E\u5185\u5BB9");
    },
    handleClick(e) {
      console.log(e);
    }
  }
};
if (!Array) {
  const _easycom_fui_icon2 = common_vendor.resolveComponent("fui-icon");
  const _easycom_fui_cubic_bezier2 = common_vendor.resolveComponent("fui-cubic-bezier");
  const _easycom_fui_list_cell2 = common_vendor.resolveComponent("fui-list-cell");
  (_easycom_fui_icon2 + _easycom_fui_cubic_bezier2 + _easycom_fui_list_cell2)();
}
const _easycom_fui_icon = () => "../../../../components/firstui/fui-icon/fui-icon.js";
const _easycom_fui_cubic_bezier = () => "../../../../components/firstui/fui-cubic-bezier/fui-cubic-bezier.js";
const _easycom_fui_list_cell = () => "../../../../components/firstui/fui-list-cell/fui-list-cell.js";
if (!Math) {
  (_easycom_fui_icon + _easycom_fui_cubic_bezier + _easycom_fui_list_cell)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o((...args) => $options.vip && $options.vip(...args)),
    b: common_vendor.p({
      name: "plussign"
    }),
    c: common_vendor.o($options.handleClick),
    d: common_vendor.p({
      left: $data.left,
      bottom: $data.bottom,
      param: 0
    }),
    e: common_vendor.p({
      highlight: false
    }),
    f: common_vendor.p({
      name: "plussign"
    }),
    g: common_vendor.o($options.handleClick),
    h: common_vendor.p({
      left: $data.left,
      bottom: $data.bottom,
      param: 1
    }),
    i: common_vendor.p({
      highlight: false
    }),
    j: common_vendor.p({
      name: "plussign"
    }),
    k: common_vendor.o($options.handleClick),
    l: common_vendor.p({
      left: $data.left,
      bottom: $data.bottom,
      param: 1
    }),
    m: common_vendor.p({
      highlight: false
    }),
    n: common_vendor.p({
      name: "plussign"
    }),
    o: common_vendor.o($options.handleClick),
    p: common_vendor.p({
      direction: "rb",
      right: $data.right,
      bottom: $data.bottom,
      param: 1
    }),
    q: common_vendor.p({
      highlight: false
    }),
    r: common_vendor.p({
      name: "plussign"
    }),
    s: common_vendor.o($options.handleClick),
    t: common_vendor.p({
      direction: "rb",
      right: $data.right,
      bottom: $data.bottom,
      param: 0
    }),
    v: common_vendor.p({
      highlight: false
    }),
    w: common_vendor.p({
      name: "plussign"
    }),
    x: common_vendor.o($options.handleClick),
    y: common_vendor.p({
      direction: "rb",
      right: $data.right,
      bottom: $data.bottom,
      param: 1
    }),
    z: common_vendor.p({
      highlight: false
    }),
    A: common_vendor.p({
      name: "cart"
    }),
    B: common_vendor.p({
      name: "cart"
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/H4L_Omip/MiniPoint/h4l-omip/pages/component/expand/cubicBezier/cubicBezier.vue"]]);
my.createPage(MiniProgramPage);
