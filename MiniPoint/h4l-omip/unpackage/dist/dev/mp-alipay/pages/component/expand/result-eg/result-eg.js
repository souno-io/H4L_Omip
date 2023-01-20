"use strict";
const common_vendor = require("../../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      type: "success",
      btnType: "success",
      color: "#09BE4F",
      title: "\u64CD\u4F5C\u6210\u529F",
      descr: "Result \u7ED3\u679C\u9875\uFF0C\u5728\u9875\u9762\u4E2D\u7EC4\u7EC7\u56FE\u6807\u3001\u6587\u5B57\u7B49\u5185\u5BB9\uFF0C\u5411\u7528\u6237\u53CD\u9988\u64CD\u4F5C\u7ED3\u679C"
    };
  },
  onLoad(e) {
    let type = Number(e.type || 1);
    this.title = ["\u64CD\u4F5C\u6210\u529F", "\u64CD\u4F5C\u5931\u8D25", "\u64CD\u4F5C\u5931\u8D25", "\u6B63\u5728\u5BA1\u6838", "\u64CD\u4F5C\u6807\u9898"][type - 1];
    this.type = ["success", "warning", "fail", "waiting", "custom"][type - 1];
    this.btnType = ["success", "warning", "primary", "primary", "danger"][type - 1];
    this.color = ["#09BE4F", "#FFB703", "#465CFF", "#465CFF", "#FF2B2B"][type - 1];
  },
  methods: {}
};
if (!Array) {
  const _easycom_fui_icon2 = common_vendor.resolveComponent("fui-icon");
  const _easycom_fui_button2 = common_vendor.resolveComponent("fui-button");
  const _easycom_fui_result2 = common_vendor.resolveComponent("fui-result");
  (_easycom_fui_icon2 + _easycom_fui_button2 + _easycom_fui_result2)();
}
const _easycom_fui_icon = () => "../../../../components/firstui/fui-icon/fui-icon.js";
const _easycom_fui_button = () => "../../../../components/firstui/fui-button/fui-button.js";
const _easycom_fui_result = () => "../../../../components/firstui/fui-result/fui-result.js";
if (!Math) {
  (_easycom_fui_icon + _easycom_fui_button + _easycom_fui_result)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $data.type === "custom"
  }, $data.type === "custom" ? {
    b: common_vendor.p({
      name: "warning",
      color: "#FF2B2B",
      size: 128
    }),
    c: common_vendor.p({
      width: "400rpx",
      height: "84rpx",
      text: "\u4E3B\u8981\u64CD\u4F5C",
      type: $data.btnType,
      bold: true,
      margin: ["48rpx", "0", "24rpx"]
    }),
    d: common_vendor.p({
      width: "400rpx",
      height: "84rpx",
      text: "\u6B21\u8981\u64CD\u4F5C",
      type: "gray",
      color: $data.color,
      bold: true
    }),
    e: common_vendor.p({
      type: $data.type,
      title: $data.title,
      descr: $data.descr
    })
  } : {
    f: common_vendor.p({
      width: "400rpx",
      height: "84rpx",
      text: "\u4E3B\u8981\u64CD\u4F5C",
      type: $data.btnType,
      bold: true,
      margin: ["48rpx", "0", "24rpx"]
    }),
    g: common_vendor.p({
      width: "400rpx",
      height: "84rpx",
      text: "\u6B21\u8981\u64CD\u4F5C",
      type: "gray",
      color: $data.color,
      bold: true
    }),
    h: common_vendor.p({
      type: $data.type,
      title: $data.title,
      descr: $data.descr
    })
  });
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/H4L_Omip/MiniPoint/h4l-omip/pages/component/expand/result-eg/result-eg.vue"]]);
my.createPage(MiniProgramPage);
