"use strict";
const common_vendor = require("../../../../common/vendor.js");
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
  const _easycom_fui_empty2 = common_vendor.resolveComponent("fui-empty");
  (_easycom_fui_button2 + _easycom_fui_empty2)();
}
const _easycom_fui_button = () => "../../../../components/firstui/fui-button/fui-button.js";
const _easycom_fui_empty = () => "../../../../components/firstui/fui-empty/fui-empty.js";
if (!Math) {
  (_easycom_fui_button + _easycom_fui_empty)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o($options.goIndex),
    b: common_vendor.p({
      text: "\u8FD4\u56DE\u9996\u9875",
      size: 28,
      width: "336rpx",
      height: "84rpx",
      radius: "100rpx",
      background: "#fff",
      margin: ["64rpx", "0"],
      borderColor: "#465CFF",
      color: "#465CFF"
    }),
    c: common_vendor.p({
      src: `${$data.resUrl}/component/empty/img_data_3x.png`,
      title: "\u6682\u65E0\u6570\u636E",
      descr: "\u529F\u80FD\u5F00\u53D1\u4E2D\uFF0C\u656C\u8BF7\u671F\u5F85\uFF01"
    }),
    d: common_vendor.p({
      src: `${$data.resUrl}/component/empty/img_news_3x.png`,
      title: "\u6682\u65E0\u65B0\u6D88\u606F",
      marginTop: "64"
    }),
    e: common_vendor.p({
      src: `${$data.resUrl}/component/empty/img_address_3x.png`,
      title: "\u6682\u65E0\u5730\u5740\u4FE1\u606F",
      marginTop: "64"
    }),
    f: common_vendor.p({
      src: `${$data.resUrl}/component/empty/img_network_3x.png`,
      title: "\u8BF7\u68C0\u67E5\u7F51\u7EDC\u8BBE\u7F6E\uFF01",
      marginTop: "64"
    }),
    g: common_vendor.p({
      src: `${$data.resUrl}/component/empty/img_order_3x.png`,
      title: "\u6682\u65E0\u8BA2\u5355",
      marginTop: "64"
    }),
    h: common_vendor.p({
      src: `${$data.resUrl}/component/empty/img_search_3x.png`,
      title: "\u6CA1\u6709\u627E\u5230\u641C\u7D22\u7684\u5185\u5BB9\u989D~",
      marginTop: "64"
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/H4L_Omip/MiniPoint/h4l-omip/pages/component/data/empty/empty.vue"]]);
my.createPage(MiniProgramPage);
