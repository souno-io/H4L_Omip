"use strict";
const pages_layout_rollHor_index = require("./index.js");
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      records: pages_layout_rollHor_index.mock.records
    };
  },
  methods: {
    href(type) {
      const url = type === 1 ? "/pages/my/qa/qa?index=2&title=VIP\u4E13\u5C5E\u5185\u5BB9" : "/pages/component/nav/tabs/tabs";
      this.fui.href(url);
    }
  }
};
if (!Array) {
  const _easycom_fui_text2 = common_vendor.resolveComponent("fui-text");
  const _easycom_fui_list_cell2 = common_vendor.resolveComponent("fui-list-cell");
  const _easycom_fui_avatar2 = common_vendor.resolveComponent("fui-avatar");
  const _easycom_fui_overflow_hidden2 = common_vendor.resolveComponent("fui-overflow-hidden");
  const _easycom_fui_button2 = common_vendor.resolveComponent("fui-button");
  (_easycom_fui_text2 + _easycom_fui_list_cell2 + _easycom_fui_avatar2 + _easycom_fui_overflow_hidden2 + _easycom_fui_button2)();
}
const _easycom_fui_text = () => "../../../components/firstui/fui-text/fui-text.js";
const _easycom_fui_list_cell = () => "../../../components/firstui/fui-list-cell/fui-list-cell.js";
const _easycom_fui_avatar = () => "../../../components/firstui/fui-avatar/fui-avatar.js";
const _easycom_fui_overflow_hidden = () => "../../../components/firstui/fui-overflow-hidden/fui-overflow-hidden.js";
const _easycom_fui_button = () => "../../../components/firstui/fui-button/fui-button.js";
if (!Math) {
  (_easycom_fui_text + _easycom_fui_list_cell + _easycom_fui_avatar + _easycom_fui_overflow_hidden + _easycom_fui_button)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o(($event) => $options.href(1)),
    b: common_vendor.p({
      text: "\u6211\u7684\u7ECF\u5E38\u8BBF\u95EE",
      size: 28,
      fontWeight: "bold"
    }),
    c: common_vendor.p({
      text: "\u67E5\u770B\u5168\u90E8",
      size: 26,
      type: "gray"
    }),
    d: common_vendor.p({
      background: "transparent",
      arrow: true,
      bottomBorder: false,
      highlight: false,
      padding: ["24rpx", "24rpx", "48rpx"]
    }),
    e: common_vendor.f($data.records, (item, index, i0) => {
      return {
        a: "9fbe565a-3-" + i0,
        b: common_vendor.p({
          src: item.avatar,
          marginBottom: "20"
        }),
        c: "9fbe565a-4-" + i0,
        d: common_vendor.p({
          text: item.name,
          align: "center",
          size: 26,
          width: "128rpx"
        }),
        e: index
      };
    }),
    f: common_vendor.o(($event) => $options.href(2)),
    g: common_vendor.p({
      type: "gray",
      width: "400rpx",
      height: "84rpx",
      text: "tabs \u6807\u7B7E\u9875",
      bold: true
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/H4L_Omip/MiniPoint/h4l-omip/pages/layout/rollHor/rollHor.nvue"]]);
my.createPage(MiniProgramPage);
