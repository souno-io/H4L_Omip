"use strict";
const common_vendor = require("../../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      resUrl: this.fui.resUrl(),
      src: "",
      cutSrc: "",
      width: 300,
      height: 150,
      x: 0,
      y: 0
    };
  },
  methods: {
    getPx(value) {
      let val = parseInt(common_vendor.index.upx2px(Number(value)));
      return val % 2 === 0 ? val : val + 1;
    },
    init(e) {
      e.cutGraphWidth;
      this.width = 300;
      this.height = 150;
      this.getVerifyImage();
    },
    getVerifyImage() {
      this.src = `${this.resUrl}/component/sc/bg_img_verify.png`;
      this.cutSrc = `${this.resUrl}/component/sc/cut_img.png`;
      this.x = 40;
      this.y = 49;
    },
    btnVerify() {
      this.$refs.pvRef && this.$refs.pvRef.show();
    },
    verify(e) {
      let slipDistance = e.slipDistance;
      let x1 = 222;
      let width = x1 - this.x;
      let range = 3;
      if (Math.abs(slipDistance - width) <= range) {
        this.success();
      } else {
        this.fui.toast("\u9A8C\u8BC1\u5931\u8D25\uFF01");
        this.$refs.pvRef.reset();
      }
    },
    success() {
      this.fui.toast("\u9A8C\u8BC1\u901A\u8FC7\uFF01");
      setTimeout(() => {
        this.$refs.pvRef.closeVerify();
      }, 200);
    },
    vip() {
      this.fui.href("/pages/my/qa/qa?index=2&title=VIP\u4E13\u5C5E\u5185\u5BB9");
    }
  }
};
if (!Array) {
  const _easycom_fui_button2 = common_vendor.resolveComponent("fui-button");
  const _easycom_fui_puzzle_verify2 = common_vendor.resolveComponent("fui-puzzle-verify");
  (_easycom_fui_button2 + _easycom_fui_puzzle_verify2)();
}
const _easycom_fui_button = () => "../../../../components/firstui/fui-button/fui-button.js";
const _easycom_fui_puzzle_verify = () => "../../../../components/firstui/fui-puzzle-verify/fui-puzzle-verify.js";
if (!Math) {
  (_easycom_fui_button + _easycom_fui_puzzle_verify)();
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
    d: common_vendor.o($options.init),
    e: common_vendor.o($options.verify),
    f: common_vendor.p({
      width: $data.width,
      height: $data.height,
      src: $data.src,
      cutSrc: $data.cutSrc,
      x: 40,
      y: 49
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/H4L_Omip/MiniPoint/h4l-omip/pages/component/expand/puzzleVerify/puzzleVerify.vue"]]);
my.createPage(MiniProgramPage);
