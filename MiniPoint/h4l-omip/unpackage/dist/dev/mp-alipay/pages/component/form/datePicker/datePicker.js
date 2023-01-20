"use strict";
const common_vendor = require("../../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      result: "",
      type: 1,
      range: false,
      value: "",
      show: false
    };
  },
  methods: {
    vip() {
      this.fui.href("/pages/my/qa/qa?index=2&title=VIP\u4E13\u5C5E\u5185\u5BB9");
    },
    btnClick(type, range, def) {
      this.show = false;
      this.type = type;
      this.range = range || false;
      this.value = def ? "2021-11-22 11:12" : "";
      setTimeout(() => {
        this.show = true;
      }, 80);
    },
    change(e) {
      this.show = false;
      console.log(e);
      this.result = JSON.stringify(e || {});
    },
    cancel() {
      this.show = false;
    }
  }
};
if (!Array) {
  const _easycom_fui_button2 = common_vendor.resolveComponent("fui-button");
  const _easycom_fui_date_picker2 = common_vendor.resolveComponent("fui-date-picker");
  (_easycom_fui_button2 + _easycom_fui_date_picker2)();
}
const _easycom_fui_button = () => "../../../../components/firstui/fui-button/fui-button.js";
const _easycom_fui_date_picker = () => "../../../../components/firstui/fui-date-picker/fui-date-picker.js";
if (!Math) {
  (_easycom_fui_button + _easycom_fui_date_picker)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o((...args) => $options.vip && $options.vip(...args)),
    b: common_vendor.o(($event) => $options.btnClick(2)),
    c: common_vendor.p({
      type: "gray",
      width: "400rpx",
      height: "84rpx",
      text: "\u5E74\u6708",
      bold: true,
      margin: ["24rpx"]
    }),
    d: common_vendor.o(($event) => $options.btnClick(3)),
    e: common_vendor.p({
      type: "gray",
      width: "400rpx",
      height: "84rpx",
      text: "\u5E74\u6708\u65E5",
      bold: true
    }),
    f: common_vendor.o(($event) => $options.btnClick(4)),
    g: common_vendor.p({
      type: "gray",
      width: "400rpx",
      height: "84rpx",
      text: "\u5E74\u6708\u65E5 \u65F6",
      bold: true,
      margin: ["24rpx"]
    }),
    h: common_vendor.o(($event) => $options.btnClick(5)),
    i: common_vendor.p({
      type: "gray",
      width: "400rpx",
      height: "84rpx",
      text: "\u5E74\u6708\u65E5 \u65F6\u5206",
      bold: true
    }),
    j: common_vendor.o(($event) => $options.btnClick(7)),
    k: common_vendor.p({
      type: "gray",
      width: "400rpx",
      height: "84rpx",
      text: "\u65F6\u5206\u79D2",
      bold: true,
      margin: ["24rpx"]
    }),
    l: common_vendor.o(($event) => $options.btnClick(3, true)),
    m: common_vendor.p({
      type: "gray",
      width: "400rpx",
      height: "84rpx",
      text: "\u65E5\u671F\u533A\u95F4\u9009\u62E9",
      bold: true
    }),
    n: common_vendor.o(($event) => $options.btnClick(5, false, true)),
    o: common_vendor.p({
      type: "gray",
      width: "400rpx",
      height: "84rpx",
      text: "\u8BBE\u7F6E\u9ED8\u8BA4\u503C",
      bold: true,
      margin: ["24rpx"]
    }),
    p: common_vendor.t($data.result),
    q: common_vendor.o($options.change),
    r: common_vendor.o($options.cancel),
    s: common_vendor.p({
      show: $data.show,
      type: $data.type,
      range: $data.range,
      value: $data.value
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/H4L_Omip/MiniPoint/h4l-omip/pages/component/form/datePicker/datePicker.vue"]]);
my.createPage(MiniProgramPage);
