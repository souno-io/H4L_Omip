"use strict";
const common_vendor = require("../../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      resUrl: this.fui.resUrl(),
      src: "/static/images/common/icon_tabbar_3x.png",
      src2: "/static/images/common/img_logo.png"
    };
  },
  methods: {}
};
if (!Array) {
  const _easycom_fui_card2 = common_vendor.resolveComponent("fui-card");
  _easycom_fui_card2();
}
const _easycom_fui_card = () => "../../../../components/firstui/fui-card/fui-card.js";
if (!Math) {
  _easycom_fui_card();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      src: $data.src,
      title: "\u6807\u9898\u6587\u5B57",
      tag: "\u989D\u5916\u4FE1\u606F"
    }),
    b: common_vendor.p({
      padding: ["20rpx", "32rpx"],
      full: true,
      src: $data.src,
      title: "\u6807\u9898\u6587\u5B57",
      tag: "\u989D\u5916\u4FE1\u606F"
    }),
    c: `${$data.resUrl}/cooperate/light/img_banner_3x.png`,
    d: common_vendor.p({
      src: $data.src2,
      imageRadius: "50%",
      title: "First UI",
      color: "#465CFF",
      tag: "23\u5C0F\u65F6\u524D",
      headerLine: false,
      showBorder: true
    }),
    e: `${$data.resUrl}/cooperate/dark/img_banner_3x.png`
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/H4L_Omip/MiniPoint/h4l-omip/pages/component/layout/card/card.vue"]]);
my.createPage(MiniProgramPage);
