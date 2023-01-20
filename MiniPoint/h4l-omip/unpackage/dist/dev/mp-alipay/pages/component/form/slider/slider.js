"use strict";
const common_vendor = require("../../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      init: true,
      width: common_vendor.index.upx2px(600)
    };
  },
  onReady() {
  },
  methods: {
    vip() {
      this.fui.href("/pages/my/qa/qa?index=2&title=VIP\u4E13\u5C5E\u5185\u5BB9");
    },
    onChange(e) {
      console.log(e);
      if (!this.init || e.value !== 0) {
        this.fui.toast(`\u60A8\u9009\u62E9\u7684\u503C\u4E3A\uFF1A${e.value}`);
      }
      this.init = false;
    },
    onChanging(e) {
    },
    sectionChange(e) {
      console.log(e);
    }
  }
};
if (!Array) {
  const _easycom_fui_slider2 = common_vendor.resolveComponent("fui-slider");
  _easycom_fui_slider2();
}
const _easycom_fui_slider = () => "../../../../components/firstui/fui-slider/fui-slider.js";
if (!Math) {
  _easycom_fui_slider();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o((...args) => $options.vip && $options.vip(...args)),
    b: common_vendor.o($options.onChange),
    c: common_vendor.o($options.onChanging),
    d: common_vendor.p({
      width: $data.width
    }),
    e: common_vendor.p({
      value: 50,
      showValue: true
    }),
    f: common_vendor.p({
      value: 70,
      showValue: true,
      disabled: true
    }),
    g: common_vendor.p({
      showValue: true,
      background: "rgba(255, 183, 3, .3)",
      activeColor: "#FFB703",
      blockColor: "#FFB703",
      valueColor: "#FFB703"
    }),
    h: common_vendor.o($options.sectionChange),
    i: common_vendor.p({
      showValue: true,
      section: true,
      width: "220",
      min: 100,
      max: 800,
      value: 100,
      endValue: 800
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/H4L_Omip/MiniPoint/h4l-omip/pages/component/form/slider/slider.vue"]]);
my.createPage(MiniProgramPage);
