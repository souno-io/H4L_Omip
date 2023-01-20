"use strict";
const common_vendor = require("../../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      src: "",
      initAngle: 0,
      range: 0,
      resUrl: this.fui.resUrl()
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
      this.src = `${this.resUrl}/component/verify/img_logo.jpeg`;
      this.initAngle = 180;
      this.range = 10;
    },
    btnVerify() {
      this.$refs.rv && this.$refs.rv.show();
    },
    verifyRes(angle, initAngle, range) {
      let res = false;
      if (Math.abs(angle + initAngle - 360) <= range || Math.abs(angle + initAngle) <= range) {
        res = true;
      }
      return res;
    },
    verify(e) {
      console.log(e);
      console.log(e.angle);
      let res = this.verifyRes(e.angle, this.initAngle, this.range);
      if (res) {
        this.$refs.rv.success();
        this.fui.toast("\u9A8C\u8BC1\u901A\u8FC7\uFF01");
        setTimeout(() => {
          this.$refs.rv.closeVerify();
        }, 300);
      } else {
        this.$refs.rv.fail();
      }
    }
  }
};
if (!Array) {
  const _easycom_fui_button2 = common_vendor.resolveComponent("fui-button");
  const _easycom_fui_rotate_verify2 = common_vendor.resolveComponent("fui-rotate-verify");
  (_easycom_fui_button2 + _easycom_fui_rotate_verify2)();
}
const _easycom_fui_button = () => "../../../../components/firstui/fui-button/fui-button.js";
const _easycom_fui_rotate_verify = () => "../../../../components/firstui/fui-rotate-verify/fui-rotate-verify.js";
if (!Math) {
  (_easycom_fui_button + _easycom_fui_rotate_verify)();
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
    d: common_vendor.o($options.verify),
    e: common_vendor.p({
      src: $data.src
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/H4L_Omip/MiniPoint/h4l-omip/pages/component/expand/rotateVerify/rotateVerify.vue"]]);
my.createPage(MiniProgramPage);
