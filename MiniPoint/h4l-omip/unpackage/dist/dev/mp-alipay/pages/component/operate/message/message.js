"use strict";
const common_vendor = require("../../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      background: "rgba(0,0,0,.6)"
    };
  },
  methods: {
    vip() {
      this.fui.href("/pages/my/qa/qa?index=2&title=VIP\u4E13\u5C5E\u5185\u5BB9");
    },
    showMsg(type) {
      this.background = "rgba(0,0,0,.6)";
      let options = {};
      switch (type) {
        case 1:
          options.text = "Hello First UI\uFF01";
          this.$refs.msg.show(options);
          break;
        case 2:
          this.background = "#09BE4F";
          options.text = "\u8FD9\u662F\u4E00\u6761\u6210\u529F\u63D0\u793A\u6D88\u606F\uFF01";
          this.$refs.msg.show(options);
          break;
        case 3:
          options.text = "\u60A8\u5DF2\u64CD\u4F5C\u6210\u529F\uFF01";
          this.$refs.tips.show(options);
          break;
        case 4:
          options.duration = 4e3;
          options.text = "4s\u540E\u5173\u95ED\u63D0\u793A\u4FE1\u606F\uFF01\u9ED8\u8BA42s~";
          this.$refs.msg.show(options);
          break;
      }
    }
  }
};
if (!Array) {
  const _easycom_fui_button2 = common_vendor.resolveComponent("fui-button");
  const _easycom_fui_message2 = common_vendor.resolveComponent("fui-message");
  const _easycom_fui_icon2 = common_vendor.resolveComponent("fui-icon");
  (_easycom_fui_button2 + _easycom_fui_message2 + _easycom_fui_icon2)();
}
const _easycom_fui_button = () => "../../../../components/firstui/fui-button/fui-button.js";
const _easycom_fui_message = () => "../../../../components/firstui/fui-message/fui-message.js";
const _easycom_fui_icon = () => "../../../../components/firstui/fui-icon/fui-icon.js";
if (!Math) {
  (_easycom_fui_button + _easycom_fui_message + _easycom_fui_icon)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o((...args) => $options.vip && $options.vip(...args)),
    b: common_vendor.o(($event) => $options.showMsg(1)),
    c: common_vendor.p({
      type: "gray",
      width: "400rpx",
      height: "84rpx",
      text: "\u57FA\u7840\u4F7F\u7528",
      bold: true,
      margin: ["24rpx"]
    }),
    d: common_vendor.o(($event) => $options.showMsg(2)),
    e: common_vendor.p({
      type: "gray",
      width: "400rpx",
      height: "84rpx",
      text: "\u81EA\u5B9A\u4E49\u80CC\u666F\u8272",
      bold: true
    }),
    f: common_vendor.o(($event) => $options.showMsg(3)),
    g: common_vendor.p({
      type: "gray",
      width: "400rpx",
      height: "84rpx",
      text: "\u5E26\u56FE\u6807\u63D0\u793A",
      bold: true,
      margin: ["24rpx"]
    }),
    h: common_vendor.o(($event) => $options.showMsg(4)),
    i: common_vendor.p({
      type: "gray",
      width: "400rpx",
      height: "84rpx",
      text: "\u8BBE\u7F6E\u663E\u793A\u65F6\u95F4",
      bold: true
    }),
    j: common_vendor.p({
      background: $data.background
    }),
    k: common_vendor.p({
      name: "checkbox",
      color: "#fff",
      size: 48
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/H4L_Omip/MiniPoint/h4l-omip/pages/component/operate/message/message.vue"]]);
my.createPage(MiniProgramPage);
