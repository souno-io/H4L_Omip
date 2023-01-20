"use strict";
const common_vendor = require("../../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      show: false,
      buttons: [],
      radius: 16,
      maskClosable: false,
      descr: "",
      direction: "row",
      show2: false,
      show3: false
    };
  },
  methods: {
    vip() {
      this.fui.href("/pages/my/qa/qa?index=2&title=VIP\u4E13\u5C5E\u5185\u5BB9");
    },
    showModal(type) {
      this.radius = 16;
      this.maskClosable = false;
      this.buttons = [];
      this.direction = "row";
      switch (type) {
        case 1:
          this.show = true;
          break;
        case 2:
          this.descr = "\u60A8\u8FD8\u672A\u767B\u5F55\uFF0C\u8BF7\u5148\u767B\u5F55";
          this.buttons = ["\u786E\u5B9A"];
          this.show2 = true;
          break;
        case 3:
          this.descr = "\u8BF7\u9009\u62E9\u60A8\u7684\u8EAB\u4EFD";
          this.direction = "column";
          this.buttons = [{
            text: "\u5F00\u53D1\u8005"
          }, {
            text: "\u8FD0\u8425\u4EBA\u5458",
            background: "#FFB703"
          }, {
            text: "\u7BA1\u7406\u5458",
            background: "#FF2B2B"
          }];
          this.show2 = true;
          break;
        case 4:
          this.radius = 80;
          this.descr = "\u662F\u5426\u5C06\u6B64\u6B21\u7F16\u8F91\u4FDD\u7559\uFF1F";
          this.buttons = [{
            text: "\u4E0D\u4FDD\u7559",
            plain: true,
            color: "#FFB703",
            background: "#FFB703"
          }, {
            text: "\u4FDD\u7559",
            background: "#FFB703"
          }];
          this.show2 = true;
          break;
        case 5:
          this.maskClosable = true;
          this.descr = "\u662F\u5426\u5C06\u6B64\u6B21\u7F16\u8F91\u4FDD\u7559\uFF1F";
          this.buttons = [{
            text: "\u4E0D\u4FDD\u7559",
            plain: true,
            color: "#FF2B2B",
            background: "#FF2B2B"
          }, {
            text: "\u4FDD\u7559",
            background: "#FF2B2B"
          }];
          this.show2 = true;
          break;
        case 6:
          this.show3 = true;
          break;
      }
    },
    onClick(e) {
      console.log(e);
      this.fui.toast(`\u60A8\u70B9\u51FB\u4E86${e.text}`);
      this.show = false;
    },
    onClick2(e) {
      console.log(e);
      this.onCancel2();
    },
    onCancel2(e) {
      this.show2 = false;
    },
    onCancel3(e) {
      this.show3 = false;
    }
  }
};
if (!Array) {
  const _easycom_fui_button2 = common_vendor.resolveComponent("fui-button");
  const _easycom_fui_modal2 = common_vendor.resolveComponent("fui-modal");
  const _easycom_fui_icon2 = common_vendor.resolveComponent("fui-icon");
  (_easycom_fui_button2 + _easycom_fui_modal2 + _easycom_fui_icon2)();
}
const _easycom_fui_button = () => "../../../../components/firstui/fui-button/fui-button.js";
const _easycom_fui_modal = () => "../../../../components/firstui/fui-modal/fui-modal.js";
const _easycom_fui_icon = () => "../../../../components/firstui/fui-icon/fui-icon.js";
if (!Math) {
  (_easycom_fui_button + _easycom_fui_modal + _easycom_fui_icon)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o((...args) => $options.vip && $options.vip(...args)),
    b: common_vendor.o(($event) => $options.showModal(1)),
    c: common_vendor.p({
      type: "gray",
      width: "400rpx",
      height: "84rpx",
      text: "\u57FA\u7840\u4F7F\u7528",
      bold: true,
      margin: ["24rpx"]
    }),
    d: common_vendor.o(($event) => $options.showModal(2)),
    e: common_vendor.p({
      type: "gray",
      width: "400rpx",
      height: "84rpx",
      text: "\u5355\u4E2A\u6309\u94AE",
      bold: true
    }),
    f: common_vendor.o(($event) => $options.showModal(3)),
    g: common_vendor.p({
      type: "gray",
      width: "400rpx",
      height: "84rpx",
      text: "\u591A\u4E2A\u6309\u94AE",
      bold: true,
      margin: ["24rpx"]
    }),
    h: common_vendor.o(($event) => $options.showModal(4)),
    i: common_vendor.p({
      type: "gray",
      width: "400rpx",
      height: "84rpx",
      text: "\u8BBE\u7F6E\u6309\u94AE\u5706\u89D2",
      bold: true
    }),
    j: common_vendor.o(($event) => $options.showModal(5)),
    k: common_vendor.p({
      type: "gray",
      width: "400rpx",
      height: "84rpx",
      text: "\u70B9\u906E\u7F69\u53EF\u5173\u95ED",
      bold: true,
      margin: ["24rpx"]
    }),
    l: common_vendor.o(($event) => $options.showModal(6)),
    m: common_vendor.p({
      type: "gray",
      width: "400rpx",
      height: "84rpx",
      text: "\u81EA\u5B9A\u4E49\u5185\u5BB9",
      bold: true
    }),
    n: common_vendor.o($options.onClick),
    o: common_vendor.p({
      show: $data.show,
      title: "\u63D0\u793A",
      descr: "\u786E\u5B9A\u5173\u6CE8 FirstUI \u5417\uFF1F"
    }),
    p: common_vendor.o($options.onClick2),
    q: common_vendor.o($options.onCancel2),
    r: common_vendor.p({
      show: $data.show2,
      descr: $data.descr,
      buttons: $data.buttons,
      radius: $data.radius,
      maskClosable: $data.maskClosable,
      direction: $data.direction
    }),
    s: common_vendor.p({
      name: "checkbox-fill",
      size: 108,
      color: "#09BE4F"
    }),
    t: common_vendor.o($options.onCancel3),
    v: common_vendor.p({
      text: "\u6211\u77E5\u9053\u4E86",
      width: "240rpx",
      height: "72rpx",
      size: 28,
      radius: "36rpx",
      background: "#FFB703",
      borderWidth: "0",
      margin: ["0", "0", "24rpx"]
    }),
    w: common_vendor.p({
      name: "close",
      color: "#B2B2B2",
      size: 48
    }),
    x: common_vendor.o((...args) => $options.onCancel3 && $options.onCancel3(...args)),
    y: common_vendor.p({
      buttons: [],
      width: "600",
      show: $data.show3
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/H4L_Omip/MiniPoint/h4l-omip/pages/component/operate/modal/modal.vue"]]);
my.createPage(MiniProgramPage);
