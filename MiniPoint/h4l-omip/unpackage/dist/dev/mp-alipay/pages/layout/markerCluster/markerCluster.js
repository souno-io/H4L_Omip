"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {};
  },
  methods: {}
};
if (!Array) {
  const _easycom_fui_empty2 = common_vendor.resolveComponent("fui-empty");
  _easycom_fui_empty2();
}
const _easycom_fui_empty = () => "../../../components/firstui/fui-empty/fui-empty.js";
if (!Math) {
  _easycom_fui_empty();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      src: "https://res.firstui.cn/static/images/common/img_coding_3x.png",
      isFixed: true,
      title: "\u5F00\u53D1\u4E2D~",
      descr: "\u66F4\u591A\u793A\u4F8B\u656C\u8BF7\u671F\u5F85!"
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/H4L_Omip/MiniPoint/h4l-omip/pages/layout/markerCluster/markerCluster.nvue"]]);
my.createPage(MiniProgramPage);
