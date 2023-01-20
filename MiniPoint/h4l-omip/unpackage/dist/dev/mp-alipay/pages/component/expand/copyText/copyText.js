"use strict";
const common_vendor = require("../../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {};
  },
  methods: {
    vip() {
      this.fui.href("/pages/my/qa/qa?index=2&title=VIP\u4E13\u5C5E\u5185\u5BB9");
    },
    btnClick(e) {
      console.log(e);
      this.fui.toast(`\u60A8\u70B9\u51FB\u4E86\u3010${e.text}\u3011\u6309\u94AE`);
    }
  }
};
if (!Array) {
  const _easycom_fui_copy_text2 = common_vendor.resolveComponent("fui-copy-text");
  _easycom_fui_copy_text2();
}
const _easycom_fui_copy_text = () => "../../../../components/firstui/fui-copy-text/fui-copy-text.js";
if (!Math) {
  _easycom_fui_copy_text();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o((...args) => $options.vip && $options.vip(...args)),
    b: common_vendor.p({
      text: "\u957F\u6309\u6587\u672C\u590D\u5236"
    }),
    c: common_vendor.p({
      direction: "bottom",
      text: "\u957F\u6309\u6587\u672C\u590D\u5236",
      value: "https://doc.firstui.cn",
      color: "#465CFF",
      size: "30"
    }),
    d: common_vendor.p({
      direction: "left",
      text: "\u957F\u6309\u6587\u672C\u590D\u5236",
      value: "https://doc.firstui.cn",
      color: "#465CFF",
      size: "30"
    }),
    e: common_vendor.p({
      direction: "right",
      text: "\u957F\u6309\u6587\u672C\u590D\u5236",
      value: "https://doc.firstui.cn",
      color: "#465CFF",
      size: "30"
    }),
    f: common_vendor.o($options.btnClick),
    g: common_vendor.p({
      text: "\u957F\u6309\u6587\u672C\u590D\u5236",
      value: "https://doc.firstui.cn",
      color: "#FFB703",
      size: "30",
      buttons: ["\u56DE\u590D", "\u8BC4\u8BBA"]
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/H4L_Omip/MiniPoint/h4l-omip/pages/component/expand/copyText/copyText.vue"]]);
my.createPage(MiniProgramPage);
