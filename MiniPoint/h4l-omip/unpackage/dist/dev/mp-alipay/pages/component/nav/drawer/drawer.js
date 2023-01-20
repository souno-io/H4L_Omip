"use strict";
const common_vendor = require("../../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      show: false,
      show2: false,
      itemList: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
    };
  },
  methods: {
    showDrawer(type) {
      if (type === 1) {
        this.show = true;
      } else {
        this.show2 = true;
      }
    },
    closeDrawer(type) {
      if (type === 1) {
        this.show = false;
      } else {
        this.show2 = false;
      }
    }
  }
};
if (!Array) {
  const _easycom_fui_button2 = common_vendor.resolveComponent("fui-button");
  const _easycom_fui_list_cell2 = common_vendor.resolveComponent("fui-list-cell");
  const _easycom_fui_drawer2 = common_vendor.resolveComponent("fui-drawer");
  (_easycom_fui_button2 + _easycom_fui_list_cell2 + _easycom_fui_drawer2)();
}
const _easycom_fui_button = () => "../../../../components/firstui/fui-button/fui-button.js";
const _easycom_fui_list_cell = () => "../../../../components/firstui/fui-list-cell/fui-list-cell.js";
const _easycom_fui_drawer = () => "../../../../components/firstui/fui-drawer/fui-drawer.js";
if (!Math) {
  (_easycom_fui_button + _easycom_fui_list_cell + _easycom_fui_drawer)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o(($event) => $options.showDrawer(1)),
    b: common_vendor.p({
      type: "gray",
      width: "400rpx",
      height: "84rpx",
      text: "\u4ECE\u53F3\u5F80\u5DE6\u5F00",
      bold: true,
      margin: ["24rpx"]
    }),
    c: common_vendor.o(($event) => $options.showDrawer(2)),
    d: common_vendor.p({
      type: "gray",
      width: "400rpx",
      height: "84rpx",
      text: "\u4ECE\u5DE6\u5F80\u53F3\u5F00",
      bold: true
    }),
    e: common_vendor.f($data.itemList, (item, index, i0) => {
      return {
        a: common_vendor.t(index + 1),
        b: index,
        c: "5b80165e-3-" + i0 + ",5b80165e-2"
      };
    }),
    f: common_vendor.p({
      arrow: true
    }),
    g: common_vendor.o(($event) => $options.closeDrawer(1)),
    h: common_vendor.p({
      show: $data.show
    }),
    i: common_vendor.f($data.itemList, (item, index, i0) => {
      return {
        a: common_vendor.t(index + 1),
        b: index,
        c: "5b80165e-5-" + i0 + ",5b80165e-4"
      };
    }),
    j: common_vendor.o(($event) => $options.closeDrawer(2)),
    k: common_vendor.p({
      type: "warning",
      width: "400rpx",
      height: "84rpx",
      text: "\u5173\u95ED\u83DC\u5355\u680F",
      bold: true
    }),
    l: common_vendor.p({
      show: $data.show2,
      direction: "left",
      maskClosable: false
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/H4L_Omip/MiniPoint/h4l-omip/pages/component/nav/drawer/drawer.vue"]]);
my.createPage(MiniProgramPage);
