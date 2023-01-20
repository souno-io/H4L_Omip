"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      searchList: [
        "\u6301\u7EED\u5DE9\u56FA\u62D3\u5C55\u8131\u8D2B\u653B\u575A\u6210\u679C",
        "\u5927\u5B97\u5546\u54C1\u672A\u6765\u8D70\u52BF\u5982\u4F55?",
        "13\u4E07\u7EA7\u6DF7\u52A8SUV\u7693\u6781\u9884\u552E\u706B\u7206\uFF0C4\u5C0F\u65F6\u8BA2\u5355\u8D85700000000"
      ]
    };
  },
  methods: {
    vip() {
      const url = "/pages/my/qa/qa?index=2&title=VIP\u4E13\u5C5E\u5185\u5BB9";
      this.fui.href(url);
    },
    href() {
      const url = "/pages/component/nav/noticeBar/noticeBar";
      this.fui.href(url);
    }
  }
};
if (!Array) {
  const _easycom_fui_icon2 = common_vendor.resolveComponent("fui-icon");
  const _easycom_fui_button2 = common_vendor.resolveComponent("fui-button");
  (_easycom_fui_icon2 + _easycom_fui_button2)();
}
const _easycom_fui_icon = () => "../../../components/firstui/fui-icon/fui-icon.js";
const _easycom_fui_button = () => "../../../components/firstui/fui-button/fui-button.js";
if (!Math) {
  (_easycom_fui_icon + _easycom_fui_button)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o((...args) => $options.vip && $options.vip(...args)),
    b: common_vendor.p({
      name: "search",
      size: 36
    }),
    c: common_vendor.f($data.searchList, (item, index, i0) => {
      return {
        a: common_vendor.t(item),
        b: index
      };
    }),
    d: common_vendor.p({
      name: "search",
      size: 36,
      color: "#fff"
    }),
    e: common_vendor.f($data.searchList, (item, index, i0) => {
      return {
        a: common_vendor.t(item),
        b: index
      };
    }),
    f: common_vendor.p({
      name: "scan",
      size: 44,
      color: "#fff"
    }),
    g: common_vendor.p({
      name: "notice",
      size: 36,
      color: "#FFB703"
    }),
    h: common_vendor.f($data.searchList, (item, index, i0) => {
      return {
        a: common_vendor.t(item),
        b: index
      };
    }),
    i: common_vendor.o($options.href),
    j: common_vendor.p({
      type: "gray",
      width: "400rpx",
      height: "84rpx",
      text: "More",
      bold: true,
      margin: ["24rpx"]
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/H4L_Omip/MiniPoint/h4l-omip/pages/layout/rollNews/rollNews.nvue"]]);
my.createPage(MiniProgramPage);
