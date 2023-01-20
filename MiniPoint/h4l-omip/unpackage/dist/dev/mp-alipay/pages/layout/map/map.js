"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {};
  },
  methods: {
    href(type) {
      let url = "/pages/my/qa/qa?index=2&title=VIP\u4E13\u5C5E\u5185\u5BB9";
      if (type) {
        url = type === 1 ? "/pages/layout/route/route" : "/pages/layout/markerCluster/markerCluster";
      }
      this.fui.href(url);
    }
  }
};
if (!Array) {
  const _easycom_fui_button2 = common_vendor.resolveComponent("fui-button");
  _easycom_fui_button2();
}
const _easycom_fui_button = () => "../../../components/firstui/fui-button/fui-button.js";
if (!Math) {
  _easycom_fui_button();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o((...args) => $options.href && $options.href(...args)),
    b: common_vendor.o(($event) => $options.href(1)),
    c: common_vendor.p({
      type: "gray",
      width: "400rpx",
      height: "84rpx",
      text: "\u8DEF\u7EBF\u89C4\u5212\u793A\u4F8B",
      bold: true,
      margin: ["24rpx"]
    }),
    d: common_vendor.o(($event) => $options.href(2)),
    e: common_vendor.p({
      type: "gray",
      width: "400rpx",
      height: "84rpx",
      text: "\u66F4\u591A\u793A\u4F8B",
      bold: true
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/H4L_Omip/MiniPoint/h4l-omip/pages/layout/map/map.nvue"]]);
my.createPage(MiniProgramPage);
