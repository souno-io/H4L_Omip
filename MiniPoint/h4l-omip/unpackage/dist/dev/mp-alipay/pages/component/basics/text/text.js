"use strict";
const common_vendor = require("../../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      text: "First UI\u662F\u4E00\u5957\u8D85\u9AD8\u6027\u80FD\u3001\u8D85\u9AD8\u989C\u503C\u7684\u79FB\u52A8\u7AEFUI\u7EFC\u5408\u89E3\u51B3\u65B9\u6848\uFF0C\u5305\u542B\u4E1A\u5185\u9876\u5C16\u7684\u7EC4\u4EF6\u5E93\u3001\u5F3A\u5927\u7684\u529F\u80FD\u5E93\u3001\u4E30\u5BCC\u7CBE\u7F8E\u7684\u6A21\u677F\u5E93\uFF0C\u63D0\u4F9Buni-app(\u5B8C\u7F8E\u652F\u6301nvue)\u3001\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F\u3001\u652F\u4ED8\u5B9D\u5C0F\u7A0B\u5E8F\u7B49\u7248\u672C\uFF0C\u517C\u987E\u9AD8\u6548\u7387\u4E0E\u9AD8\u6027\u80FD\uFF0C\u8BA9\u60A8\u7684\u5F00\u53D1\u83B7\u5F97\u767E\u500D\u63D0\u8D28\u63D0\u901F\uFF01"
    };
  },
  methods: {
    handleClick(e) {
      console.log(e);
      this.fui.toast("\u70B9\u51FB\u4E86~");
    }
  }
};
if (!Array) {
  const _easycom_fui_text2 = common_vendor.resolveComponent("fui-text");
  _easycom_fui_text2();
}
const _easycom_fui_text = () => "../../../../components/firstui/fui-text/fui-text.js";
if (!Math) {
  _easycom_fui_text();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      text: $data.text,
      size: 28
    }),
    b: common_vendor.p({
      text: "primary",
      type: "primary"
    }),
    c: common_vendor.p({
      text: "success",
      type: "success"
    }),
    d: common_vendor.p({
      text: "warning",
      type: "warning"
    }),
    e: common_vendor.p({
      text: "danger",
      type: "danger"
    }),
    f: common_vendor.p({
      text: "purple",
      type: "purple"
    }),
    g: common_vendor.p({
      text: "gray",
      type: "gray"
    }),
    h: common_vendor.p({
      text: "black",
      type: "black"
    }),
    i: common_vendor.p({
      text: "block",
      color: "brown",
      block: true
    }),
    j: common_vendor.p({
      text: "yellow",
      color: "yellow",
      block: true
    }),
    k: common_vendor.p({
      text: "\u5F20\u4E09",
      ["text-type"]: "name",
      format: true,
      block: true
    }),
    l: common_vendor.p({
      text: "\u738B\u5C0F\u4ED9",
      ["text-type"]: "name",
      format: true,
      block: true
    }),
    m: common_vendor.p({
      text: "13544339908",
      ["text-type"]: "mobile",
      format: true
    }),
    n: common_vendor.p({
      text: "20000",
      ["text-type"]: "amount",
      format: true
    }),
    o: common_vendor.o($options.handleClick),
    p: common_vendor.p({
      text: "https://firstui.cn",
      highlight: true
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/H4L_Omip/MiniPoint/h4l-omip/pages/component/basics/text/text.vue"]]);
my.createPage(MiniProgramPage);
