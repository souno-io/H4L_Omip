"use strict";
const common_vendor = require("../../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      show: false,
      tips: "",
      itemList: [],
      isCancel: true,
      theme: "light"
    };
  },
  methods: {
    showActionSheet(type) {
      this.tips = "";
      this.isCancel = true;
      this.theme = "light";
      switch (type) {
        case 1:
          this.tips = "\u9000\u51FA\u540E\u4E0D\u4F1A\u5220\u9664\u4EFB\u4F55\u5386\u53F2\u6570\u636E\uFF0C\u4E0B\u6B21\u767B\u5F55\u4F9D\u7136\u53EF\u4EE5\u4F7F\u7528\u672C\u8D26\u53F7\u3002";
          this.itemList = [{
            text: "\u9000\u51FA\u767B\u5F55",
            color: "#FF2B2B"
          }];
          break;
        case 2:
          this.itemList = ["\u70B9\u8D5E", "\u8BC4\u8BBA", "\u6536\u85CF"];
          break;
        case 3:
          this.itemList = ["\u70B9\u8D5E", "\u8BC4\u8BBA", "\u6536\u85CF"];
          this.theme = "dark";
          break;
        case 4:
          this.tips = "\u8BF7\u9009\u62E9\u6027\u522B";
          this.itemList = ["\u7537", "\u5973", "\u672A\u77E5"];
          this.isCancel = false;
          break;
      }
      setTimeout(() => {
        this.show = true;
      }, 50);
    },
    itemClick(e) {
      console.log(e);
      this.fui.toast(e.text);
      this.cancel();
    },
    cancel() {
      this.show = false;
    }
  }
};
if (!Array) {
  const _easycom_fui_button2 = common_vendor.resolveComponent("fui-button");
  const _easycom_fui_actionsheet2 = common_vendor.resolveComponent("fui-actionsheet");
  (_easycom_fui_button2 + _easycom_fui_actionsheet2)();
}
const _easycom_fui_button = () => "../../../../components/firstui/fui-button/fui-button.js";
const _easycom_fui_actionsheet = () => "../../../../components/firstui/fui-actionsheet/fui-actionsheet.js";
if (!Math) {
  (_easycom_fui_button + _easycom_fui_actionsheet)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o(($event) => $options.showActionSheet(1)),
    b: common_vendor.p({
      type: "gray",
      width: "400rpx",
      height: "84rpx",
      text: "\u5E26\u63D0\u793A",
      bold: true,
      margin: ["24rpx"]
    }),
    c: common_vendor.o(($event) => $options.showActionSheet(2)),
    d: common_vendor.p({
      type: "gray",
      width: "400rpx",
      height: "84rpx",
      text: "\u65E0\u63D0\u793A\u64CD\u4F5C",
      bold: true
    }),
    e: common_vendor.o(($event) => $options.showActionSheet(3)),
    f: common_vendor.p({
      type: "gray",
      width: "400rpx",
      height: "84rpx",
      text: "\u6697\u9ED1\u6A21\u5F0F",
      margin: ["24rpx"],
      bold: true
    }),
    g: common_vendor.o(($event) => $options.showActionSheet(4)),
    h: common_vendor.p({
      type: "gray",
      width: "400rpx",
      height: "84rpx",
      text: "\u65E0\u53D6\u6D88\u6309\u94AE",
      bold: true
    }),
    i: common_vendor.o($options.itemClick),
    j: common_vendor.o($options.cancel),
    k: common_vendor.p({
      show: $data.show,
      tips: $data.tips,
      itemList: $data.itemList,
      isCancel: $data.isCancel,
      theme: $data.theme
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/H4L_Omip/MiniPoint/h4l-omip/pages/component/operate/actionsheet/actionsheet.vue"]]);
my.createPage(MiniProgramPage);
