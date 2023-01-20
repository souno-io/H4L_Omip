"use strict";
const common_vendor = require("../../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {};
  },
  methods: {
    change(e) {
      console.log(e);
    }
  }
};
if (!Array) {
  const _easycom_fui_pagination2 = common_vendor.resolveComponent("fui-pagination");
  const _easycom_fui_icon2 = common_vendor.resolveComponent("fui-icon");
  (_easycom_fui_pagination2 + _easycom_fui_icon2)();
}
const _easycom_fui_pagination = () => "../../../../components/firstui/fui-pagination/fui-pagination.js";
const _easycom_fui_icon = () => "../../../../components/firstui/fui-icon/fui-icon.js";
if (!Math) {
  (_easycom_fui_pagination + _easycom_fui_icon)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o($options.change),
    b: common_vendor.p({
      total: 100
    }),
    c: common_vendor.p({
      total: 100,
      color: "#FFB703",
      background: "transparent",
      currentColor: "#FFB703"
    }),
    d: common_vendor.p({
      name: "arrowleft"
    }),
    e: common_vendor.p({
      name: "arrowright"
    }),
    f: common_vendor.p({
      total: 100,
      custom: true,
      background: "transparent"
    }),
    g: common_vendor.p({
      total: 100,
      isPage: false,
      borderColor: "#09BE4F",
      color: "#09BE4F",
      background: "transparent"
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/H4L_Omip/MiniPoint/h4l-omip/pages/component/nav/pagination/pagination.vue"]]);
my.createPage(MiniProgramPage);
