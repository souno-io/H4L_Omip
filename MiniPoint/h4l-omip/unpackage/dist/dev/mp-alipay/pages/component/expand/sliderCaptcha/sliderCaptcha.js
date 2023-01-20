"use strict";
const common_vendor = require("../../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      src: "",
      resUrl: this.fui.resUrl(),
      index: 0
    };
  },
  onLoad() {
    this.getVerifyImage();
  },
  methods: {
    vip() {
      this.fui.href("/pages/my/qa/qa?index=2&title=VIP\u4E13\u5C5E\u5185\u5BB9");
    },
    getVerifyImage() {
      let index = this.index;
      index++;
      if (index > 3) {
        index = 1;
      }
      this.index = index;
      this.src = `${this.resUrl}/component/sc/img_sc_${index}.png`;
    },
    btnVerify() {
      this.$refs.scRef && this.$refs.scRef.show();
    },
    success(e) {
      this.fui.toast("\u9A8C\u8BC1\u901A\u8FC7\uFF01");
      setTimeout(() => {
        this.$refs.scRef.closeVerify();
      }, 200);
    },
    fail(e) {
      let times = e.times;
      this.fui.toast("\u9A8C\u8BC1\u5931\u8D25\uFF01");
      if (times >= 3) {
        this.getVerifyImage();
      }
    }
  }
};
if (!Array) {
  const _easycom_fui_button2 = common_vendor.resolveComponent("fui-button");
  const _easycom_fui_slider_captcha2 = common_vendor.resolveComponent("fui-slider-captcha");
  (_easycom_fui_button2 + _easycom_fui_slider_captcha2)();
}
const _easycom_fui_button = () => "../../../../components/firstui/fui-button/fui-button.js";
const _easycom_fui_slider_captcha = () => "../../../../components/firstui/fui-slider-captcha/fui-slider-captcha.js";
if (!Math) {
  (_easycom_fui_button + _easycom_fui_slider_captcha)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o((...args) => $options.vip && $options.vip(...args)),
    b: common_vendor.o($options.btnVerify),
    c: common_vendor.p({
      type: "gray",
      width: "400rpx",
      height: "84rpx",
      text: "\u70B9\u51FB\u6309\u94AE\u8FDB\u884C\u9A8C\u8BC1",
      bold: true,
      margin: ["48rpx"]
    }),
    d: common_vendor.o($options.success),
    e: common_vendor.o($options.fail),
    f: common_vendor.p({
      src: $data.src
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/H4L_Omip/MiniPoint/h4l-omip/pages/component/expand/sliderCaptcha/sliderCaptcha.vue"]]);
my.createPage(MiniProgramPage);
