"use strict";
const common_vendor = require("../../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      items: [{
        text: "First UI\uFF08App-vue\uFF09",
        src: "/static/images/common/logo.png"
      }, {
        text: "First UI\uFF08App-Nvue\uFF09",
        src: "/static/images/common/logo.png"
      }, {
        text: "First UI\uFF08\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F\uFF09",
        src: "/static/images/common/logo.png",
        checked: true
      }, {
        text: "First UI\uFF08\u652F\u4ED8\u5B9D\u5C0F\u7A0B\u5E8F\uFF09",
        src: "/static/images/common/logo.png"
      }, {
        text: "First UI\uFF08\u767E\u5EA6\u5C0F\u7A0B\u5E8F\uFF09",
        src: "/static/images/common/logo.png"
      }, {
        text: "First UI\uFF08\u5B57\u8282\u5C0F\u7A0B\u5E8F\uFF09",
        src: "/static/images/common/logo.png"
      }, {
        text: "First UI\uFF08QQ\u5C0F\u7A0B\u5E8F\uFF09",
        src: "/static/images/common/logo.png"
      }, {
        text: "First UI\uFF08H5\uFF09",
        src: "/static/images/common/icon_tabbar.png"
      }],
      items1: ["\u4E2D\u56FD\u94F6\u884C", "\u4E2D\u56FD\u5EFA\u8BBE\u94F6\u884C", "\u4E2D\u56FD\u5DE5\u5546\u94F6\u884C", "\u4E2D\u56FD\u519C\u4E1A\u94F6\u884C", "\u4E2D\u56FD\u90AE\u653F\u50A8\u84C4\u94F6\u884C"],
      show: false,
      show1: false,
      type: "select",
      result: ""
    };
  },
  methods: {
    vip() {
      this.fui.href("/pages/my/qa/qa?index=2&title=VIP\u4E13\u5C5E\u5185\u5BB9");
    },
    btnClick(type) {
      if (type === 2) {
        this.show1 = true;
      } else {
        this.type = type === 1 ? "select" : "list";
        setTimeout(() => {
          this.show = true;
        }, 80);
      }
    },
    onTap(e) {
      console.log(e);
      this.result = JSON.stringify(e);
      this.onClose(1);
    },
    onConfirm(e, type) {
      console.log(e);
      this.result = JSON.stringify(e);
      this.onClose(type);
    },
    onClose(type) {
      if (type === 1) {
        this.show = false;
      } else {
        this.show1 = false;
      }
    }
  }
};
if (!Array) {
  const _easycom_fui_button2 = common_vendor.resolveComponent("fui-button");
  const _easycom_fui_select2 = common_vendor.resolveComponent("fui-select");
  (_easycom_fui_button2 + _easycom_fui_select2)();
}
const _easycom_fui_button = () => "../../../../components/firstui/fui-button/fui-button.js";
const _easycom_fui_select = () => "../../../../components/firstui/fui-select/fui-select.js";
if (!Math) {
  (_easycom_fui_button + _easycom_fui_select)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o((...args) => $options.vip && $options.vip(...args)),
    b: common_vendor.o(($event) => $options.btnClick(1)),
    c: common_vendor.p({
      type: "gray",
      width: "400rpx",
      height: "84rpx",
      text: "\u5355\u9009+\u9ED8\u8BA4\u9009\u4E2D",
      bold: true
    }),
    d: common_vendor.o(($event) => $options.btnClick(2)),
    e: common_vendor.p({
      type: "gray",
      width: "400rpx",
      height: "84rpx",
      text: "\u591A\u9009",
      bold: true,
      margin: ["24rpx"]
    }),
    f: common_vendor.o(($event) => $options.btnClick(3)),
    g: common_vendor.p({
      type: "gray",
      width: "400rpx",
      height: "84rpx",
      text: "\u5217\u8868",
      bold: true
    }),
    h: common_vendor.t($data.result),
    i: common_vendor.o($options.onTap),
    j: common_vendor.o(($event) => $options.onConfirm($event, 1)),
    k: common_vendor.o(($event) => $options.onClose(1)),
    l: common_vendor.p({
      show: $data.show,
      options: $data.items,
      title: "\u8BF7\u9009\u62E9\u5E73\u53F0",
      type: $data.type
    }),
    m: common_vendor.o(($event) => $options.onConfirm($event, 2)),
    n: common_vendor.o(($event) => $options.onClose(2)),
    o: common_vendor.p({
      show: $data.show1,
      options: $data.items1,
      title: "\u8BF7\u9009\u62E9\u94F6\u884C",
      multiple: true,
      isReverse: true,
      checkboxColor: "#FFC529",
      btnBackground: "#FFC529",
      btnColor: "#1A1D26",
      closeColor: "#6D758A"
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/H4L_Omip/MiniPoint/h4l-omip/pages/component/form/select/select.vue"]]);
my.createPage(MiniProgramPage);
