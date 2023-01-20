"use strict";
const common_vendor = require("../../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      items: [{
        text: "First UI",
        src: "/static/images/common/logo.png"
      }, {
        text: "\u6C14\u6CE1\u6846",
        src: "/static/images/common/logo.png"
      }],
      show1: false,
      show2: false,
      show3: false,
      show4: false,
      show5: false,
      show6: false
    };
  },
  methods: {
    vip() {
      this.fui.href("/pages/my/qa/qa?index=2&title=VIP\u4E13\u5C5E\u5185\u5BB9");
    },
    bubble(type) {
      switch (type) {
        case 1:
          this.show1 = true;
          break;
        case 2:
          this.show2 = true;
          break;
        case 3:
          this.show3 = true;
          break;
        case 4:
          this.show4 = true;
          break;
        case 5:
          this.show5 = true;
          break;
        case 6:
          this.show6 = true;
          break;
      }
    },
    itemClick(e, type) {
      console.log(e);
      this.onClose(type);
    },
    onClose(type) {
      switch (type) {
        case 1:
          this.show1 = false;
          break;
        case 2:
          this.show2 = false;
          break;
        case 3:
          this.show3 = false;
          break;
        case 4:
          this.show4 = false;
          break;
        case 5:
          this.show5 = false;
          break;
        case 6:
          this.show6 = false;
          break;
      }
    }
  }
};
if (!Array) {
  const _easycom_fui_button2 = common_vendor.resolveComponent("fui-button");
  const _easycom_fui_bubble_box2 = common_vendor.resolveComponent("fui-bubble-box");
  (_easycom_fui_button2 + _easycom_fui_bubble_box2)();
}
const _easycom_fui_button = () => "../../../../components/firstui/fui-button/fui-button.js";
const _easycom_fui_bubble_box = () => "../../../../components/firstui/fui-bubble-box/fui-bubble-box.js";
if (!Math) {
  (_easycom_fui_button + _easycom_fui_bubble_box)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o((...args) => $options.vip && $options.vip(...args)),
    b: common_vendor.o(($event) => $options.bubble(1)),
    c: common_vendor.p({
      type: "gray",
      width: "320rpx",
      height: "84rpx",
      text: "\u4E0A\u65B9\u663E\u793A",
      bold: true,
      margin: ["24rpx"]
    }),
    d: common_vendor.o(($event) => $options.itemClick($event, 1)),
    e: common_vendor.o(($event) => $options.onClose(1)),
    f: common_vendor.p({
      items: $data.items,
      direction: "top",
      position: "absolute",
      show: $data.show1
    }),
    g: common_vendor.o(($event) => $options.bubble(3)),
    h: common_vendor.p({
      type: "gray",
      width: "320rpx",
      height: "84rpx",
      text: "\u53F3\u4FA7\u663E\u793A",
      bold: true
    }),
    i: common_vendor.o(($event) => $options.itemClick($event, 3)),
    j: common_vendor.o(($event) => $options.onClose(3)),
    k: common_vendor.p({
      background: "#4c4c4c",
      color: "#fff",
      lineColor: "#666",
      items: $data.items,
      direction: "right",
      position: "absolute",
      triangle: {
        top: 78
      },
      show: $data.show3
    }),
    l: common_vendor.o(($event) => $options.bubble(2)),
    m: common_vendor.p({
      type: "gray",
      width: "320rpx",
      height: "84rpx",
      text: "\u5DE6\u4FA7\u663E\u793A",
      bold: true
    }),
    n: common_vendor.o(($event) => $options.itemClick($event, 2)),
    o: common_vendor.o(($event) => $options.onClose(2)),
    p: common_vendor.p({
      items: $data.items,
      direction: "left",
      position: "absolute",
      triangle: {
        top: 78
      },
      show: $data.show2
    }),
    q: common_vendor.o(($event) => $options.bubble(4)),
    r: common_vendor.p({
      type: "gray",
      width: "320rpx",
      height: "84rpx",
      text: "\u4E0B\u65B9\u663E\u793A",
      bold: true,
      margin: ["24rpx"]
    }),
    s: common_vendor.o(($event) => $options.itemClick($event, 4)),
    t: common_vendor.o(($event) => $options.onClose(4)),
    v: common_vendor.p({
      items: $data.items,
      direction: "bottom",
      position: "absolute",
      show: $data.show4
    }),
    w: common_vendor.o(($event) => $options.bubble(5)),
    x: common_vendor.p({
      type: "gray",
      width: "320rpx",
      height: "84rpx",
      text: "\u5DE6\u4E0A\u65B9\u663E\u793A",
      bold: true
    }),
    y: common_vendor.o(($event) => $options.bubble(6)),
    z: common_vendor.p({
      type: "gray",
      width: "320rpx",
      height: "84rpx",
      text: "\u53F3\u4E0A\u65B9\u663E\u793A",
      bold: true,
      margin: ["24rpx"]
    }),
    A: common_vendor.o(($event) => $options.itemClick($event, 5)),
    B: common_vendor.o(($event) => $options.onClose(5)),
    C: common_vendor.p({
      items: $data.items,
      show: $data.show5,
      left: 8,
      triangle: {
        left: 56
      }
    }),
    D: common_vendor.o(($event) => $options.itemClick($event, 6)),
    E: common_vendor.o(($event) => $options.onClose(6)),
    F: common_vendor.p({
      padding: ["26rpx", "30rpx"],
      background: "#4c4c4c",
      color: "#fff",
      lineColor: "#666",
      items: $data.items,
      show: $data.show6
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/H4L_Omip/MiniPoint/h4l-omip/pages/component/nav/bubbleBox/bubbleBox.vue"]]);
my.createPage(MiniProgramPage);
