"use strict";
const common_vendor = require("../../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      content: "First UI \u662F\u4E00\u5957\u57FA\u4E8Euni-app\u5F00\u53D1\u7684\u7EC4\u4EF6\u5316\u3001\u53EF\u590D\u7528\u3001\u6613\u6269\u5C55\u3001\u4F4E\u8026\u5408\u7684\u8DE8\u5E73\u53F0\u79FB\u52A8\u7AEFUI \u7EC4\u4EF6\u5E93\u3002",
      show: true
    };
  },
  methods: {
    vip() {
      this.fui.href("/pages/my/qa/qa?index=2&title=VIP\u4E13\u5C5E\u5185\u5BB9");
    },
    closeNotice() {
      this.show = false;
    }
  }
};
if (!Array) {
  const _easycom_fui_notice_bar2 = common_vendor.resolveComponent("fui-notice-bar");
  const _easycom_fui_icon2 = common_vendor.resolveComponent("fui-icon");
  (_easycom_fui_notice_bar2 + _easycom_fui_icon2)();
}
const _easycom_fui_notice_bar = () => "../../../../components/firstui/fui-notice-bar/fui-notice-bar.js";
const _easycom_fui_icon = () => "../../../../components/firstui/fui-icon/fui-icon.js";
if (!Math) {
  (_easycom_fui_notice_bar + _easycom_fui_icon)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.o((...args) => $options.vip && $options.vip(...args)),
    b: $data.show ? 1 : "",
    c: common_vendor.p({
      padding: ["0", "32rpx"],
      content: $data.content,
      single: true
    }),
    d: common_vendor.p({
      background: "#fff8d5",
      color: "#FFB703",
      padding: ["16rpx", "32rpx"],
      content: $data.content
    }),
    e: common_vendor.p({
      content: $data.content,
      scrollable: true
    }),
    f: common_vendor.p({
      name: "notice",
      size: 36,
      color: "#FF2B2B"
    }),
    g: common_vendor.p({
      content: $data.content,
      speed: 200,
      scrollable: true,
      activeMode: "forwards"
    }),
    h: common_vendor.p({
      name: "notice-fill",
      size: 40,
      color: "#465CFF"
    }),
    i: common_vendor.p({
      name: "arrowright",
      size: 36,
      color: "#7F7F7F"
    }),
    j: common_vendor.p({
      content: $data.content,
      height: "88",
      size: "30",
      single: true,
      background: "#fff",
      color: "#333"
    }),
    k: $data.show
  }, $data.show ? {
    l: common_vendor.p({
      name: "notice",
      size: 36,
      color: "#FF2B2B"
    }),
    m: common_vendor.p({
      name: "close",
      size: 40,
      color: "#FF2B2B"
    }),
    n: common_vendor.o((...args) => $options.closeNotice && $options.closeNotice(...args)),
    o: common_vendor.p({
      content: $data.content,
      background: "#fff8d5",
      color: "#FF2B2B",
      scrollable: true
    })
  } : {});
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/H4L_Omip/MiniPoint/h4l-omip/pages/component/nav/noticeBar/noticeBar.vue"]]);
my.createPage(MiniProgramPage);
