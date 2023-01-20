"use strict";
const common_vendor = require("../../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {};
  },
  methods: {}
};
if (!Array) {
  const _easycom_fui_avatar2 = common_vendor.resolveComponent("fui-avatar");
  const _easycom_fui_icon2 = common_vendor.resolveComponent("fui-icon");
  (_easycom_fui_avatar2 + _easycom_fui_icon2)();
}
const _easycom_fui_avatar = () => "../../../../components/firstui/fui-avatar/fui-avatar.js";
const _easycom_fui_icon = () => "../../../../components/firstui/fui-icon/fui-icon.js";
if (!Math) {
  (_easycom_fui_avatar + _easycom_fui_icon)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      size: "small",
      text: "A"
    }),
    b: common_vendor.p({
      text: "B"
    }),
    c: common_vendor.p({
      size: "large",
      text: "\u4E01"
    }),
    d: common_vendor.p({
      text: "\u5218",
      background: "#FFB703"
    }),
    e: common_vendor.p({
      size: "small",
      text: "\u90B9",
      background: "#465CFF"
    }),
    f: common_vendor.p({
      size: "small",
      text: "A",
      shape: "square",
      marginRight: "24"
    }),
    g: common_vendor.p({
      text: "B",
      shape: "square",
      marginRight: "24"
    }),
    h: common_vendor.p({
      size: "large",
      text: "\u4E01",
      radius: "30",
      marginRight: "24"
    }),
    i: common_vendor.p({
      text: "\u5218",
      background: "#FFB703",
      radius: "30",
      marginRight: "24"
    }),
    j: common_vendor.p({
      size: "small",
      text: "\u90B9",
      background: "#465CFF",
      radius: "0"
    }),
    k: common_vendor.p({
      size: "small",
      src: "/static/images/common/img_logo.png",
      shape: "square"
    }),
    l: common_vendor.p({
      src: "/static/images/common/img_logo.png",
      radius: "0"
    }),
    m: common_vendor.p({
      size: "large",
      src: "/static/images/common/img_logo.png",
      radius: "30"
    }),
    n: common_vendor.p({
      src: "/static/images/common/img_logo.png"
    }),
    o: common_vendor.p({
      size: "small",
      src: "/static/images/common/img_logo.png"
    }),
    p: common_vendor.p({
      name: "my",
      color: "#fff"
    }),
    q: common_vendor.p({
      marginRight: "24"
    }),
    r: common_vendor.p({
      name: "my-fill",
      color: "#fff"
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/H4L_Omip/MiniPoint/h4l-omip/pages/component/data/avatar/avatar.vue"]]);
my.createPage(MiniProgramPage);
