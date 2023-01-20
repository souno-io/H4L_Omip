"use strict";
const common_vendor = require("../../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      items: ["\u5386\u53F2\u6587\u7AE0", "\u9762\u8BD5\u603B\u7ED3", "\u6B22\u8FCE\u6295\u7A3F"],
      options: [{
        text: "\u6700\u65B0\u52A8\u6001",
        name: "menu",
        size: 24
      }, {
        text: "\u5B66\u4E60\u5E73\u53F0"
      }, {
        text: "\u52A0\u5165\u6211\u4EEC"
      }],
      subItems: [{
        text: "\u5B98\u65B9\u65B0\u95FB"
      }, {
        text: "\u7EBF\u4E0B\u6D3B\u52A8"
      }, {
        text: "\u5546\u57CE\u4F18\u60E0"
      }],
      height: 100,
      show: false
    };
  },
  methods: {
    vip() {
      this.fui.href("/pages/my/qa/qa?index=2&title=VIP\u4E13\u5C5E\u5185\u5BB9");
    },
    init(e) {
      this.height = Math.ceil(e.height / e.windowWidth * 750);
    },
    onClick(e) {
      console.log(e);
      if (e.index === 0) {
        this.show = true;
      } else {
        this.fui.toast(e.text);
      }
    },
    subClick(e) {
      console.log(e);
      this.fui.toast(this.subItems[e.index].text);
      this.onClose();
    },
    onClose() {
      this.show = false;
    }
  }
};
if (!Array) {
  const _easycom_fui_bottom_navbar2 = common_vendor.resolveComponent("fui-bottom-navbar");
  const _easycom_fui_bubble_box2 = common_vendor.resolveComponent("fui-bubble-box");
  (_easycom_fui_bottom_navbar2 + _easycom_fui_bubble_box2)();
}
const _easycom_fui_bottom_navbar = () => "../../../../components/firstui/fui-bottom-navbar/fui-bottom-navbar.js";
const _easycom_fui_bubble_box = () => "../../../../components/firstui/fui-bubble-box/fui-bubble-box.js";
if (!Math) {
  (_easycom_fui_bottom_navbar + _easycom_fui_bubble_box)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o((...args) => $options.vip && $options.vip(...args)),
    b: common_vendor.p({
      items: $data.items,
      isFixed: false
    }),
    c: common_vendor.p({
      background: "#222",
      color: "#d1d1d1",
      lineColor: "#333",
      items: $data.items,
      isFixed: false
    }),
    d: common_vendor.o($options.init),
    e: common_vendor.o($options.onClick),
    f: common_vendor.p({
      left: "8",
      items: $data.options
    }),
    g: common_vendor.o($options.subClick),
    h: common_vendor.o($options.onClose),
    i: common_vendor.p({
      width: "200",
      size: 28,
      direction: "top",
      show: $data.show,
      triangle: {
        left: 100
      },
      bottom: $data.height,
      left: 32,
      items: $data.subItems
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/H4L_Omip/MiniPoint/h4l-omip/pages/component/nav/bottomNavbar/bottomNavbar.vue"]]);
my.createPage(MiniProgramPage);
