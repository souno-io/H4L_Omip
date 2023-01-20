"use strict";
const common_vendor = require("../../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      show: false,
      show2: false,
      show3: false,
      itemList: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
    };
  },
  methods: {
    showPopup(type) {
      if (type === 1) {
        this.show = true;
      } else if (type === 2) {
        this.show2 = true;
      } else {
        this.show3 = true;
      }
    },
    closePopup(type) {
      if (type === 1) {
        this.show = false;
      } else if (type === 2) {
        this.show2 = false;
      } else {
        this.show3 = false;
      }
    }
  }
};
if (!Array) {
  const _easycom_fui_button2 = common_vendor.resolveComponent("fui-button");
  const _easycom_fui_top_popup2 = common_vendor.resolveComponent("fui-top-popup");
  const _easycom_fui_icon2 = common_vendor.resolveComponent("fui-icon");
  const _easycom_fui_list_cell2 = common_vendor.resolveComponent("fui-list-cell");
  (_easycom_fui_button2 + _easycom_fui_top_popup2 + _easycom_fui_icon2 + _easycom_fui_list_cell2)();
}
const _easycom_fui_button = () => "../../../../components/firstui/fui-button/fui-button.js";
const _easycom_fui_top_popup = () => "../../../../components/firstui/fui-top-popup/fui-top-popup.js";
const _easycom_fui_icon = () => "../../../../components/firstui/fui-icon/fui-icon.js";
const _easycom_fui_list_cell = () => "../../../../components/firstui/fui-list-cell/fui-list-cell.js";
if (!Math) {
  (_easycom_fui_button + _easycom_fui_top_popup + _easycom_fui_icon + _easycom_fui_list_cell)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o(($event) => $options.showPopup(1)),
    b: common_vendor.p({
      type: "gray",
      width: "400rpx",
      height: "84rpx",
      text: "\u57FA\u7840\u4F7F\u7528",
      bold: true,
      margin: ["24rpx"]
    }),
    c: common_vendor.o(($event) => $options.showPopup(2)),
    d: common_vendor.p({
      type: "gray",
      width: "400rpx",
      height: "84rpx",
      text: "\u6848\u4F8B\u4E00",
      bold: true
    }),
    e: common_vendor.o(($event) => $options.showPopup(3)),
    f: common_vendor.p({
      type: "gray",
      width: "400rpx",
      height: "84rpx",
      text: "\u5185\u5BB9\u53EF\u6EDA\u52A8",
      margin: ["24rpx"],
      bold: true
    }),
    g: common_vendor.o(($event) => $options.closePopup(1)),
    h: common_vendor.p({
      show: $data.show
    }),
    i: common_vendor.p({
      type: "gray",
      width: "240rpx",
      height: "80rpx",
      text: "\u8F85\u52A9\u64CD\u4F5C",
      margin: ["0", "16rpx"]
    }),
    j: common_vendor.p({
      width: "240rpx",
      height: "80rpx",
      text: "\u4E3B\u64CD\u4F5C",
      margin: ["0", "16rpx"]
    }),
    k: common_vendor.p({
      name: "close",
      size: 48
    }),
    l: common_vendor.o(($event) => $options.closePopup(2)),
    m: common_vendor.p({
      show: $data.show2,
      maskClosable: false
    }),
    n: common_vendor.f($data.itemList, (item, index, i0) => {
      return {
        a: common_vendor.t(index + 1),
        b: index,
        c: "004a161e-9-" + i0 + ",004a161e-8"
      };
    }),
    o: common_vendor.p({
      name: "close",
      size: 48
    }),
    p: common_vendor.o(($event) => $options.closePopup(3)),
    q: common_vendor.o(($event) => $options.closePopup(3)),
    r: common_vendor.p({
      show: $data.show3
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/H4L_Omip/MiniPoint/h4l-omip/pages/component/nav/topPopup/topPopup.vue"]]);
my.createPage(MiniProgramPage);
