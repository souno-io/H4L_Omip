"use strict";
const common_vendor = require("../../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      isLeft: true,
      items: [{
        name: "star",
        text: "\u6536\u85CF"
      }, {
        name: "share",
        text: "\u5206\u4EAB"
      }, {
        name: "fabulous",
        text: "\u70B9\u8D5E"
      }, {
        name: "comment",
        text: "\u8BC4\u8BBA"
      }],
      items2: [{
        name: "calendar",
        text: "\u65E5\u7A0B\u5B89\u6392",
        background: "#3BBE88"
      }, {
        name: "location",
        text: "\u5730\u7406\u4F4D\u7F6E",
        background: "#F7953B"
      }, {
        name: "community",
        text: "\u793E\u533A\u4EA4\u6D41",
        background: "#3493F0"
      }],
      list: [{
        abbr: "A",
        abbrSize: 48,
        text: "Apple"
      }, {
        abbr: "F",
        abbrSize: 48,
        text: "firstui@126.com"
      }, {
        abbr: "S",
        abbrSize: 48,
        text: "subject@126.com"
      }, {
        name: "message-fill",
        abbrSize: 56,
        text: "\u63D0\u9192"
      }],
      background: "#465CFF",
      fabs: []
    };
  },
  onLoad() {
    this.fabs = this.items;
  },
  methods: {
    vip() {
      this.fui.href("/pages/my/qa/qa?index=2&title=VIP\u4E13\u5C5E\u5185\u5BB9");
    },
    fab(type) {
      switch (type) {
        case 1:
          this.fabs = this.items;
          this.background = "#465CFF";
          this.fui.toast("\u5DF2\u6062\u590D\u9ED8\u8BA4\u72B6\u6001~");
          break;
        case 2:
          this.fabs = this.items2;
          this.background = "linear-gradient(300deg, #F53423 0%, #F67F48 100%)";
          this.fui.toast("\u5DF2\u66F4\u6362~");
          break;
        case 3:
          this.fabs = this.list;
          this.background = "#465CFF";
          this.fui.toast("\u5DF2\u5207\u6362~");
          break;
        case 4:
          this.isLeft = !this.isLeft;
          break;
      }
    },
    handleClick(e) {
      console.log(e);
      this.fui.toast(`\u60A8\u70B9\u51FB\u4E86\u3010${this.fabs[e.index].text}\u3011\u6309\u94AE~`);
    },
    fabClick() {
      this.fui.toast("\u8FD9\u662F\u4E00\u4E2A\u5355\u72EC\u7684\u6309\u94AE~");
    }
  }
};
if (!Array) {
  const _easycom_fui_button2 = common_vendor.resolveComponent("fui-button");
  const _easycom_fui_fab2 = common_vendor.resolveComponent("fui-fab");
  const _easycom_fui_icon2 = common_vendor.resolveComponent("fui-icon");
  (_easycom_fui_button2 + _easycom_fui_fab2 + _easycom_fui_icon2)();
}
const _easycom_fui_button = () => "../../../../components/firstui/fui-button/fui-button.js";
const _easycom_fui_fab = () => "../../../../components/firstui/fui-fab/fui-fab.js";
const _easycom_fui_icon = () => "../../../../components/firstui/fui-icon/fui-icon.js";
if (!Math) {
  (_easycom_fui_button + _easycom_fui_fab + _easycom_fui_icon)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o((...args) => $options.vip && $options.vip(...args)),
    b: common_vendor.o(($event) => $options.fab(1)),
    c: common_vendor.p({
      type: "gray",
      width: "400rpx",
      height: "84rpx",
      text: "\u57FA\u7840\u4F7F\u7528",
      bold: true,
      margin: ["24rpx"]
    }),
    d: common_vendor.o(($event) => $options.fab(2)),
    e: common_vendor.p({
      type: "gray",
      width: "400rpx",
      height: "84rpx",
      text: "\u66F4\u6362\u80CC\u666F\u8272",
      bold: true
    }),
    f: common_vendor.o(($event) => $options.fab(3)),
    g: common_vendor.p({
      type: "gray",
      width: "400rpx",
      height: "84rpx",
      text: "\u56FE\u6807\u6362\u4E3A\u6587\u672C",
      bold: true,
      margin: ["24rpx"]
    }),
    h: common_vendor.o(($event) => $options.fab(4)),
    i: common_vendor.p({
      type: "gray",
      width: "400rpx",
      height: "84rpx",
      text: "\u5207\u6362\u4F4D\u7F6E",
      bold: true
    }),
    j: common_vendor.o($options.handleClick),
    k: common_vendor.p({
      background: $data.background,
      position: $data.isLeft ? "left" : "right",
      fabs: $data.fabs
    }),
    l: common_vendor.p({
      name: "edit-fill",
      color: "#fff"
    }),
    m: common_vendor.o($options.fabClick),
    n: common_vendor.p({
      zIndex: 10,
      position: $data.isLeft ? "right" : "left"
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/H4L_Omip/MiniPoint/h4l-omip/pages/component/nav/fab/fab.vue"]]);
my.createPage(MiniProgramPage);
