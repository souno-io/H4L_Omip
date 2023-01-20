"use strict";
const components_firstui_fuiClipboard_index = require("../../../../components/firstui/fui-clipboard/index.js");
const common_vendor = require("../../../../common/vendor.js");
const icons = [
  "addfriends",
  "addfriends-fill",
  "backspace",
  "backspace-fill",
  "bankcard",
  "bankcard-fill",
  "camera",
  "camera-fill",
  "captcha",
  "captcha-fill",
  "cart",
  "cart-fill",
  "classify",
  "classify-fill",
  "comment",
  "comment-fill",
  "community",
  "community-fill",
  "coupon",
  "coupon-fill",
  "delete",
  "delete-fill",
  "edit",
  "edit-fill",
  "fabulous",
  "fabulous-fill",
  "find",
  "find-fill",
  "help",
  "help-fill",
  "home",
  "home-fill",
  "idcard",
  "idcard-fill",
  "info",
  "info-fill",
  "invite",
  "invite-fill",
  "kefu",
  "kefu-fill",
  "like",
  "like-fill",
  "location",
  "location-fill",
  "lock",
  "lock-fill",
  "mail",
  "mail-fill",
  "message",
  "message-fill",
  "mobile",
  "mobile-fill",
  "more",
  "more-fill",
  "my",
  "my-fill",
  "notice",
  "notice-fill",
  "order",
  "order-fill",
  "picture",
  "picture-fill",
  "setup",
  "setup-fill",
  "share",
  "share-fill",
  "shop",
  "shop-fill",
  "star",
  "starhalf",
  "star-fill",
  "stepon",
  "stepon-fill",
  "wait",
  "wait-fill",
  "warning",
  "warning-fill",
  "plus",
  "plussign",
  "plussign-fill",
  "minus",
  "minussign",
  "minussign-fill",
  "close",
  "clear",
  "clear-fill",
  "checkbox-fill",
  "checkround",
  "checkbox",
  "check",
  "pulldown-fill",
  "pullup",
  "pullup-fill",
  "pulldown",
  "roundright-fill",
  "roundright",
  "arrowright",
  "arrowleft",
  "arrowdown",
  "left",
  "up",
  "right",
  "back",
  "top",
  "dropdown",
  "turningleft",
  "turningup",
  "turningright",
  "turningdown",
  "refresh",
  "loading",
  "search",
  "rotate",
  "screen",
  "signin",
  "calendar",
  "scan",
  "qrcode",
  "wallet",
  "telephone",
  "visible",
  "invisible",
  "menu",
  "operate",
  "slide",
  "list",
  "nonetwork",
  "partake",
  "qa",
  "barchart",
  "piechart",
  "linechart",
  "at",
  "face",
  "redpacket",
  "suspend",
  "link",
  "keyboard",
  "play",
  "video",
  "voice",
  "addressbook",
  "principal",
  "sina",
  "browser",
  "moments",
  "qq",
  "wechat",
  "balance",
  "bankcardpay",
  "wxpay",
  "alipay",
  "payment",
  "receive",
  "sendout",
  "evaluate",
  "aftersale",
  "warehouse",
  "transport",
  "delivery",
  "switch",
  "goods",
  "goods-fill",
  "",
  ""
];
const _sfc_main = {
  data() {
    return {
      icons
    };
  },
  methods: {
    getName(e) {
      const name = this.icons[e.detail.index];
      if (!name)
        return;
      components_firstui_fuiClipboard_index.$fui.getClipboardData(name, (res) => {
        this.fui.toast("\u56FE\u6807\u540D\u79F0\u590D\u5236\u6210\u529F");
      }, e);
    }
  }
};
if (!Array) {
  const _easycom_fui_icon2 = common_vendor.resolveComponent("fui-icon");
  const _easycom_fui_grid_item2 = common_vendor.resolveComponent("fui-grid-item");
  const _easycom_fui_grid2 = common_vendor.resolveComponent("fui-grid");
  (_easycom_fui_icon2 + _easycom_fui_grid_item2 + _easycom_fui_grid2)();
}
const _easycom_fui_icon = () => "../../../../components/firstui/fui-icon/fui-icon.js";
const _easycom_fui_grid_item = () => "../../../../components/firstui/fui-grid-item/fui-grid-item.js";
const _easycom_fui_grid = () => "../../../../components/firstui/fui-grid/fui-grid.js";
if (!Math) {
  (_easycom_fui_icon + _easycom_fui_grid_item + _easycom_fui_grid)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($data.icons, (item, index, i0) => {
      return {
        a: "5809bf1a-2-" + i0 + "," + ("5809bf1a-1-" + i0),
        b: common_vendor.p({
          name: item
        }),
        c: common_vendor.t(item),
        d: index,
        e: "5809bf1a-1-" + i0 + ",5809bf1a-0",
        f: common_vendor.p({
          highlight: item != "",
          index
        })
      };
    }),
    b: common_vendor.o($options.getName),
    c: common_vendor.p({
      columns: 3
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/H4L_Omip/MiniPoint/h4l-omip/pages/component/basics/icon/icon.vue"]]);
my.createPage(MiniProgramPage);
