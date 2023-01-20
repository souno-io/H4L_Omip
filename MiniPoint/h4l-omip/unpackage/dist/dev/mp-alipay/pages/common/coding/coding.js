"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      resUrl: this.fui.resUrl()
    };
  },
  methods: {
    goIndex() {
      this.fui.href("/pages/tabbar/index/index", true);
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
    a: `${$data.resUrl}/common/img_coding_3x.png`,
    b: common_vendor.o($options.goIndex),
    c: common_vendor.p({
      text: "\u8FD4\u56DE\u9996\u9875",
      size: 28,
      width: "336rpx",
      height: "84rpx",
      radius: "100rpx",
      background: "#fff",
      borderColor: "#465CFF",
      color: "#465CFF"
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/H4L_Omip/MiniPoint/h4l-omip/pages/common/coding/coding.vue"]]);
my.createPage(MiniProgramPage);
