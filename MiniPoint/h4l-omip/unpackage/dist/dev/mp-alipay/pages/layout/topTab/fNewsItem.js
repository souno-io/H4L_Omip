"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  name: "fNewsItem",
  emits: ["click"],
  props: {
    item: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  methods: {
    handleClick() {
      this.$emit("click");
    }
  }
};
if (!Array) {
  const _easycom_fui_overflow_hidden2 = common_vendor.resolveComponent("fui-overflow-hidden");
  const _easycom_fui_lazyload2 = common_vendor.resolveComponent("fui-lazyload");
  const _easycom_fui_text2 = common_vendor.resolveComponent("fui-text");
  const _easycom_fui_list2 = common_vendor.resolveComponent("fui-list");
  (_easycom_fui_overflow_hidden2 + _easycom_fui_lazyload2 + _easycom_fui_text2 + _easycom_fui_list2)();
}
const _easycom_fui_overflow_hidden = () => "../../../components/firstui/fui-overflow-hidden/fui-overflow-hidden.js";
const _easycom_fui_lazyload = () => "../../../components/firstui/fui-lazyload/fui-lazyload.js";
const _easycom_fui_text = () => "../../../components/firstui/fui-text/fui-text.js";
const _easycom_fui_list = () => "../../../components/firstui/fui-list/fui-list.js";
if (!Math) {
  (_easycom_fui_overflow_hidden + _easycom_fui_lazyload + _easycom_fui_text + _easycom_fui_list)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.p({
      text: $props.item.title,
      size: 36,
      rows: 3
    }),
    b: $props.item.imageList && $props.item.imageList.length
  }, $props.item.imageList && $props.item.imageList.length ? {
    c: common_vendor.f($props.item.imageList, (src, idx, i0) => {
      return {
        a: idx,
        b: "7fed9c45-2-" + i0 + ",7fed9c45-0",
        c: common_vendor.p({
          src,
          width: $props.item.imageList.length > 1 ? 200 : 400,
          height: $props.item.imageList.length > 1 ? 200 : 0,
          marginRight: "20",
          mode: "aspectFill"
        })
      };
    })
  } : {}, {
    d: $props.item.isTop
  }, $props.item.isTop ? {
    e: common_vendor.p({
      padding: ["0", "20rpx", "0", "0"],
      text: "\u7F6E\u9876",
      size: 25,
      color: "#FF2B2B"
    })
  } : {}, {
    f: common_vendor.p({
      padding: ["0", "20rpx", "0", "0"],
      text: $props.item.source,
      size: 25,
      color: "#7F7F7F"
    }),
    g: common_vendor.p({
      text: `${$props.item.comment}\u8BC4\u8BBA`,
      size: 25,
      color: "#7F7F7F"
    }),
    h: common_vendor.o((...args) => $options.handleClick && $options.handleClick(...args)),
    i: common_vendor.p({
      topBorder: false,
      bottomBorder: true,
      bottomLeft: "32",
      bottomRight: "32"
    })
  });
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-7fed9c45"], ["__file", "E:/H4L_Omip/MiniPoint/h4l-omip/pages/layout/topTab/fNewsItem.nvue"]]);
my.createComponent(Component);
