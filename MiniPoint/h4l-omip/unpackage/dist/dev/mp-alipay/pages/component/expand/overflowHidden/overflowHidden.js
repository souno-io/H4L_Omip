"use strict";
const common_vendor = require("../../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      text: "First UI\u662F\u4E00\u5957\u8D85\u9AD8\u6027\u80FD\u3001\u8D85\u9AD8\u989C\u503C\u7684\u79FB\u52A8\u7AEFUI\u7EFC\u5408\u89E3\u51B3\u65B9\u6848\uFF0C\u5305\u542B\u4E1A\u5185\u9876\u5C16\u7684\u7EC4\u4EF6\u5E93\u3001\u5F3A\u5927\u7684\u529F\u80FD\u5E93\u3001\u4E30\u5BCC\u7CBE\u7F8E\u7684\u6A21\u677F\u5E93\uFF0C\u63D0\u4F9Buni-app(\u5B8C\u7F8E\u652F\u6301nvue)\u3001\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F\u3001\u652F\u4ED8\u5B9D\u5C0F\u7A0B\u5E8F\u7B49\u7248\u672C\uFF0C\u517C\u987E\u9AD8\u6548\u7387\u4E0E\u9AD8\u6027\u80FD\uFF0C\u8BA9\u60A8\u7684\u5F00\u53D1\u83B7\u5F97\u767E\u500D\u63D0\u8D28\u63D0\u901F\uFF01",
      text2: "First UI\u662F\u4E00\u5957\u8D85\u9AD8\u6027\u80FD\u3001\u8D85\u9AD8\u989C\u503C\u7684\u79FB\u52A8\u7AEFUI\u7EFC\u5408\u89E3\u51B3\u65B9\u6848\uFF0C\u5305\u542B\u4E1A\u5185\u9876\u5C16\u7684\u7EC4\u4EF6\u5E93\u3001\u5F3A\u5927\u7684\u529F\u80FD\u5E93\u3001\u4E30\u5BCC\u7CBE\u7F8E\u7684\u6A21\u677F\u5E93\uFF0C\u63D0\u4F9Buni-app(\u5B8C\u7F8E\u652F\u6301nvue)\u3001\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F\u3001\u652F\u4ED8\u5B9D\u5C0F\u7A0B\u5E8F\u7B49\u7248\u672C\uFF0C\u517C\u987E\u9AD8\u6548\u7387\u4E0E\u9AD8\u6027\u80FD\uFF0C\u8BA9\u60A8\u7684\u5F00\u53D1\u83B7\u5F97\u767E\u500D\u63D0\u8D28\u63D0\u901F\uFF01\u6B64\u5916FirstUI\u51C6\u5907\u6253\u9020\u5176\u4ED6\u7248\u672C\u6846\u67B6\uFF0C\u4E0D\u4EC5\u4EC5\u5C40\u9650\u4E8Euni-app\uFF0C\u76EE\u524D\u8003\u8651\u7684\u6709\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F\u539F\u751F\u7248\u672C\u3001\u652F\u4ED8\u5B9D\u539F\u751F\u7248\u672C\u3001Taro\u7248\u672C\u7B49\u3002\u76EE\u524D\u5DF2\u4E0A\u67B6\u7684\u9664uni-app\u5916\uFF0C\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F\u539F\u751F\u7248\u672C\u5DF2\u4E8E2022\u5E7402\u6708\u6B63\u5F0F\u4E0A\u7EBF\u3002",
      visible: false,
      btnText: "\u70B9\u51FB\u67E5\u770B\u6240\u6709\u5185\u5BB9"
    };
  },
  methods: {
    vip() {
      this.fui.href("/pages/my/qa/qa?index=2&title=VIP\u4E13\u5C5E\u5185\u5BB9");
    },
    readMore() {
      if (this.visible) {
        this.visible = false;
        this.btnText = "\u70B9\u51FB\u67E5\u770B\u6240\u6709\u5185\u5BB9";
      } else {
        this.visible = true;
        this.btnText = "\u70B9\u51FB\u9690\u85CF\u5185\u5BB9";
      }
    }
  }
};
if (!Array) {
  const _easycom_fui_overflow_hidden2 = common_vendor.resolveComponent("fui-overflow-hidden");
  const _easycom_fui_button2 = common_vendor.resolveComponent("fui-button");
  (_easycom_fui_overflow_hidden2 + _easycom_fui_button2)();
}
const _easycom_fui_overflow_hidden = () => "../../../../components/firstui/fui-overflow-hidden/fui-overflow-hidden.js";
const _easycom_fui_button = () => "../../../../components/firstui/fui-button/fui-button.js";
if (!Math) {
  (_easycom_fui_overflow_hidden + _easycom_fui_button)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o((...args) => $options.vip && $options.vip(...args)),
    b: common_vendor.p({
      text: $data.text
    }),
    c: common_vendor.p({
      text: $data.text,
      rows: 2
    }),
    d: common_vendor.p({
      text: $data.text,
      size: 28,
      color: "#FFB703",
      rows: 3
    }),
    e: common_vendor.p({
      text: $data.text2,
      size: 28,
      color: "#FF2B2B",
      type: "2",
      gradientColor: "#FFFFFF",
      height: "200rpx",
      visible: $data.visible
    }),
    f: common_vendor.o($options.readMore),
    g: common_vendor.p({
      type: "gray",
      width: "400rpx",
      height: "84rpx",
      text: $data.btnText,
      bold: true,
      margin: ["48rpx", "auto"]
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/H4L_Omip/MiniPoint/h4l-omip/pages/component/expand/overflowHidden/overflowHidden.vue"]]);
my.createPage(MiniProgramPage);
