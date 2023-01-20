"use strict";
const common_vendor = require("../../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      status: false
    };
  },
  methods: {
    change(e) {
      this.status = e.detail.value;
    }
  }
};
if (!Array) {
  const _easycom_fui_switch2 = common_vendor.resolveComponent("fui-switch");
  const _easycom_fui_list_cell2 = common_vendor.resolveComponent("fui-list-cell");
  const _easycom_fui_label2 = common_vendor.resolveComponent("fui-label");
  (_easycom_fui_switch2 + _easycom_fui_list_cell2 + _easycom_fui_label2)();
}
const _easycom_fui_switch = () => "../../../../components/firstui/fui-switch/fui-switch.js";
const _easycom_fui_list_cell = () => "../../../../components/firstui/fui-list-cell/fui-list-cell.js";
const _easycom_fui_label = () => "../../../../components/firstui/fui-label/fui-label.js";
if (!Math) {
  (_easycom_fui_switch + _easycom_fui_list_cell + _easycom_fui_label)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.t($data.status ? "ON" : "OFF"),
    b: common_vendor.o($options.change),
    c: common_vendor.p({
      highlight: false,
      padding: ["28rpx", "32rpx"]
    }),
    d: common_vendor.p({
      checked: true
    }),
    e: common_vendor.p({
      highlight: false,
      padding: ["28rpx", "32rpx"]
    }),
    f: common_vendor.p({
      checked: true,
      disabled: true
    }),
    g: common_vendor.p({
      highlight: false,
      padding: ["28rpx", "32rpx"]
    }),
    h: common_vendor.p({
      scaleRatio: 0.8,
      color: "#FFB703"
    }),
    i: common_vendor.p({
      type: "checkbox",
      color: "#FFB703",
      scaleRatio: 1.1
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/H4L_Omip/MiniPoint/h4l-omip/pages/component/form/switch/switch.vue"]]);
my.createPage(MiniProgramPage);
