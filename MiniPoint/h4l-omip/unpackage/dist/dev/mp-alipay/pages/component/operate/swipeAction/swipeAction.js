"use strict";
const common_vendor = require("../../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      show: false,
      buttons: [{
        text: "\u6807\u4E3A\u672A\u8BFB",
        background: "#465CFF"
      }, {
        text: "\u5220\u9664",
        background: "#FF2B2B"
      }]
    };
  },
  onLoad() {
    setTimeout(() => {
      this.show = true;
    }, 500);
  },
  methods: {
    vip() {
      this.fui.href("/pages/my/qa/qa?index=2&title=VIP\u4E13\u5C5E\u5185\u5BB9");
    },
    onClick(e) {
      console.log(e);
      this.fui.toast(e.item.text);
    },
    change(e) {
      console.log(e);
    }
  }
};
if (!Array) {
  const _easycom_fui_list_cell2 = common_vendor.resolveComponent("fui-list-cell");
  const _easycom_fui_swipe_action2 = common_vendor.resolveComponent("fui-swipe-action");
  const _easycom_fui_icon2 = common_vendor.resolveComponent("fui-icon");
  const _easycom_fui_swipeaction_group2 = common_vendor.resolveComponent("fui-swipeaction-group");
  (_easycom_fui_list_cell2 + _easycom_fui_swipe_action2 + _easycom_fui_icon2 + _easycom_fui_swipeaction_group2)();
}
const _easycom_fui_list_cell = () => "../../../../components/firstui/fui-list-cell/fui-list-cell.js";
const _easycom_fui_swipe_action = () => "../../../../components/firstui/fui-swipe-action/fui-swipe-action.js";
const _easycom_fui_icon = () => "../../../../components/firstui/fui-icon/fui-icon.js";
const _easycom_fui_swipeaction_group = () => "../../../../components/firstui/fui-swipeaction-group/fui-swipeaction-group.js";
if (!Math) {
  (_easycom_fui_list_cell + _easycom_fui_swipe_action + _easycom_fui_icon + _easycom_fui_swipeaction_group)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o((...args) => $options.vip && $options.vip(...args)),
    b: common_vendor.p({
      padding: ["36rpx", "32rpx"],
      highlight: false
    }),
    c: common_vendor.o($options.onClick),
    d: common_vendor.o($options.change),
    e: common_vendor.p({
      padding: ["36rpx", "32rpx"],
      highlight: false
    }),
    f: common_vendor.o($options.onClick),
    g: common_vendor.o($options.change),
    h: common_vendor.p({
      buttons: $data.buttons
    }),
    i: common_vendor.p({
      padding: ["36rpx", "32rpx"],
      highlight: false
    }),
    j: common_vendor.p({
      name: "delete",
      size: 44
    }),
    k: common_vendor.p({
      buttons: $data.buttons
    }),
    l: common_vendor.p({
      padding: ["36rpx", "32rpx"],
      highlight: false
    }),
    m: common_vendor.p({
      disabled: true
    }),
    n: common_vendor.p({
      padding: ["36rpx", "32rpx"],
      highlight: false
    }),
    o: common_vendor.p({
      show: $data.show
    }),
    p: common_vendor.p({
      padding: ["36rpx", "32rpx"],
      highlight: false
    }),
    q: common_vendor.p({
      autoClose: false
    }),
    r: common_vendor.p({
      padding: ["36rpx", "32rpx"],
      highlight: false
    }),
    s: common_vendor.p({
      autoClose: false,
      buttons: $data.buttons
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/H4L_Omip/MiniPoint/h4l-omip/pages/component/operate/swipeAction/swipeAction.vue"]]);
my.createPage(MiniProgramPage);
