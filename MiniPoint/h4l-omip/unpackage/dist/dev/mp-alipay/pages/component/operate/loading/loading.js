"use strict";
const common_vendor = require("../../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {};
  },
  methods: {}
};
if (!Array) {
  const _easycom_fui_loading2 = common_vendor.resolveComponent("fui-loading");
  _easycom_fui_loading2();
}
const _easycom_fui_loading = () => "../../../../components/firstui/fui-loading/fui-loading.js";
if (!Math) {
  _easycom_fui_loading();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      type: "row",
      isFixed: false
    }),
    b: common_vendor.p({
      isFixed: false
    }),
    c: common_vendor.p({
      type: "row",
      isFixed: false,
      srcRow: "/static/images/component/loading_gray.png",
      text: "\u6B63\u5728\u52A0\u8F7D..."
    }),
    d: common_vendor.p({
      isFixed: false,
      srcCol: "/static/images/component/loading_white.png",
      text: "\u6B63\u5728\u52A0\u8F7D..."
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/H4L_Omip/MiniPoint/h4l-omip/pages/component/operate/loading/loading.vue"]]);
my.createPage(MiniProgramPage);
