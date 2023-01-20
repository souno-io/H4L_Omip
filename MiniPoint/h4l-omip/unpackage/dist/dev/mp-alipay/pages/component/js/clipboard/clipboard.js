"use strict";
const common_vendor = require("../../../../common/vendor.js");
const components_firstui_fuiClipboard_index = require("../../../../components/firstui/fui-clipboard/index.js");
const _sfc_main = {
  data() {
    return {};
  },
  computed: common_vendor.mapState(["status"]),
  methods: {
    copy(e) {
      const text = "www.firstui.cn";
      this.copyText(e, text, "\u5B98\u7F51\u5730\u5740\u590D\u5236\u6210\u529F");
    },
    copyText(e, text, tips) {
      components_firstui_fuiClipboard_index.$fui.getClipboardData(text, (res) => {
        if (res) {
          this.fui.toast(tips || "\u6587\u6863\u5730\u5740\u590D\u5236\u6210\u529F");
        }
      }, e);
    },
    vip() {
      this.fui.href("/pages/my/qa/qa?index=2&title=VIP\u4E13\u5C5E\u5185\u5BB9");
    }
  }
};
if (!Array) {
  const _easycom_fui_button2 = common_vendor.resolveComponent("fui-button");
  _easycom_fui_button2();
}
const _easycom_fui_button = () => "../../../../components/firstui/fui-button/fui-button.js";
if (!Math) {
  _easycom_fui_button();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o((...args) => $options.vip && $options.vip(...args)),
    b: common_vendor.o($options.copy),
    c: common_vendor.p({
      type: "gray",
      width: "400rpx",
      height: "84rpx",
      text: "www.firstui.cn",
      bold: true,
      margin: ["24rpx"]
    }),
    d: common_vendor.o(($event) => $options.copyText($event, "doc.firstui.cn")),
    e: common_vendor.p({
      type: "gray",
      width: "400rpx",
      height: "84rpx",
      text: "doc.firstui.cn",
      bold: true
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/H4L_Omip/MiniPoint/h4l-omip/pages/component/js/clipboard/clipboard.vue"]]);
my.createPage(MiniProgramPage);
