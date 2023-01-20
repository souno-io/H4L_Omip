"use strict";
const pages_layout_productList_index = require("./index.js");
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      productList: pages_layout_productList_index.dataList
    };
  },
  methods: {
    getPrice(price, type) {
      if (!price)
        return "";
      const arr = price.split(".");
      return type === 1 ? arr[0] : `.${arr[1]}`;
    },
    vip() {
      const url = "/pages/my/qa/qa?index=2&title=VIP\u4E13\u5C5E\u5185\u5BB9";
      this.fui.href(url);
    },
    handleClick() {
      this.fui.toast("\u70B9\u51FB\u4E86~");
    }
  }
};
if (!Array) {
  const _easycom_fui_lazyload2 = common_vendor.resolveComponent("fui-lazyload");
  const _easycom_fui_overflow_hidden2 = common_vendor.resolveComponent("fui-overflow-hidden");
  const _easycom_fui_tag2 = common_vendor.resolveComponent("fui-tag");
  const _easycom_fui_text2 = common_vendor.resolveComponent("fui-text");
  (_easycom_fui_lazyload2 + _easycom_fui_overflow_hidden2 + _easycom_fui_tag2 + _easycom_fui_text2)();
}
const _easycom_fui_lazyload = () => "../../../components/firstui/fui-lazyload/fui-lazyload.js";
const _easycom_fui_overflow_hidden = () => "../../../components/firstui/fui-overflow-hidden/fui-overflow-hidden.js";
const _easycom_fui_tag = () => "../../../components/firstui/fui-tag/fui-tag.js";
const _easycom_fui_text = () => "../../../components/firstui/fui-text/fui-text.js";
if (!Math) {
  (_easycom_fui_lazyload + _easycom_fui_overflow_hidden + _easycom_fui_tag + _easycom_fui_text)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o((...args) => $options.vip && $options.vip(...args)),
    b: common_vendor.f($data.productList, (item, index, i0) => {
      return {
        a: "40f67855-0-" + i0,
        b: common_vendor.p({
          radius: "16rpx 16rpx 0 0",
          width: 345,
          height: 344,
          src: item.src,
          mode: "aspectFill"
        }),
        c: "40f67855-1-" + i0,
        d: common_vendor.p({
          rows: 2,
          size: 28,
          text: item.title
        }),
        e: "40f67855-2-" + i0,
        f: common_vendor.p({
          text: item.tag,
          padding: ["4rpx", "4rpx"],
          background: "rgba(255, 43, 43, .05)",
          color: "#FF2B2B",
          borderColor: "transparent"
        }),
        g: "40f67855-3-" + i0,
        h: "40f67855-4-" + i0,
        i: common_vendor.p({
          lineHeight: true,
          ["font-weight"]: "500",
          text: $options.getPrice(item.price, 1),
          size: 34,
          color: "#FF2B2B"
        }),
        j: "40f67855-5-" + i0,
        k: common_vendor.p({
          ["font-weight"]: "500",
          text: $options.getPrice(item.price, 2),
          size: 24,
          color: "#FF2B2B"
        }),
        l: "40f67855-6-" + i0,
        m: common_vendor.p({
          padding: ["4rpx", "0", "0"],
          text: `${item.evaluate}\u6761\u8BC4\u4EF7`,
          size: 24,
          color: "#7F7F7F"
        }),
        n: index % 2 === 0 ? 1 : "",
        o: index
      };
    }),
    c: common_vendor.p({
      text: "\uFFE5",
      ["font-weight"]: "500",
      size: 22,
      color: "#FF2B2B"
    }),
    d: common_vendor.o((...args) => $options.handleClick && $options.handleClick(...args)),
    e: common_vendor.f($data.productList, (item, index, i0) => {
      return {
        a: "40f67855-7-" + i0,
        b: common_vendor.p({
          radius: "16",
          width: 252,
          height: 252,
          src: item.src,
          mode: "aspectFill"
        }),
        c: "40f67855-8-" + i0,
        d: common_vendor.p({
          rows: 2,
          size: 28,
          text: item.title
        }),
        e: "40f67855-9-" + i0,
        f: common_vendor.p({
          text: item.tag,
          padding: ["4rpx", "4rpx"],
          background: "rgba(255, 43, 43, .05)",
          color: "#FF2B2B",
          borderColor: "transparent"
        }),
        g: "40f67855-10-" + i0,
        h: "40f67855-11-" + i0,
        i: common_vendor.p({
          ["font-weight"]: "500",
          lineHeight: true,
          text: $options.getPrice(item.price, 1),
          size: 34,
          color: "#FF2B2B"
        }),
        j: "40f67855-12-" + i0,
        k: common_vendor.p({
          ["font-weight"]: "500",
          text: $options.getPrice(item.price, 2),
          size: 24,
          color: "#FF2B2B"
        }),
        l: "40f67855-13-" + i0,
        m: common_vendor.p({
          padding: ["4rpx", "0", "0"],
          text: `${item.evaluate}\u6761\u8BC4\u4EF7`,
          size: 24,
          color: "#7F7F7F"
        }),
        n: index
      };
    }),
    f: common_vendor.p({
      ["font-weight"]: "500",
      text: "\uFFE5",
      size: 22,
      color: "#FF2B2B"
    }),
    g: common_vendor.o((...args) => $options.handleClick && $options.handleClick(...args))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/H4L_Omip/MiniPoint/h4l-omip/pages/layout/productList/productList.nvue"]]);
my.createPage(MiniProgramPage);
