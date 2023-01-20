"use strict";
const common_vendor = require("../../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      init: true
    };
  },
  onReady() {
    setTimeout(() => {
      this.$refs.fui_cdv2 && this.$refs.fui_cdv2.success();
      this.init = false;
    }, 50);
  },
  methods: {
    vip() {
      this.fui.href("/pages/my/qa/qa?index=2&title=VIP\u4E13\u5C5E\u5185\u5BB9");
    },
    sendCode() {
      setTimeout(() => {
        this.$refs.fui_cdv && this.$refs.fui_cdv.success();
      }, 800);
    },
    sendCode2() {
      this.init = false;
      setTimeout(() => {
        this.$refs.fui_cdv2 && this.$refs.fui_cdv2.success();
      }, 800);
    },
    end2() {
      this.init = true;
    },
    sendCode3() {
      setTimeout(() => {
        this.$refs.fui_cdv3 && this.$refs.fui_cdv3.success();
      }, 800);
    },
    sendCode4() {
      setTimeout(() => {
        this.fui.toast("\u624B\u673A\u53F7\u7801\u683C\u5F0F\u4E0D\u6B63\u786E\uFF01");
        this.$refs.fui_cdv4 && this.$refs.fui_cdv4.reset();
      }, 200);
    }
  }
};
if (!Array) {
  const _easycom_fui_countdown_verify2 = common_vendor.resolveComponent("fui-countdown-verify");
  _easycom_fui_countdown_verify2();
}
const _easycom_fui_countdown_verify = () => "../../../../components/firstui/fui-countdown-verify/fui-countdown-verify.js";
if (!Math) {
  _easycom_fui_countdown_verify();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o((...args) => $options.vip && $options.vip(...args)),
    b: common_vendor.o($options.sendCode),
    c: common_vendor.o($options.sendCode2),
    d: common_vendor.o($options.end2),
    e: common_vendor.p({
      borderColor: $data.init ? "#465CFF" : "#B2B2B2",
      color: $data.init ? "#465CFF" : "#B2B2B2"
    }),
    f: common_vendor.o($options.sendCode3),
    g: common_vendor.p({
      borderColor: "#FFB703",
      background: "#FFB703",
      sent: "\u79D2\u540E\u83B7\u53D6",
      color: "#fff",
      radius: "40"
    }),
    h: common_vendor.o($options.sendCode4)
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/H4L_Omip/MiniPoint/h4l-omip/pages/component/expand/countdownVerify/countdownVerify.vue"]]);
my.createPage(MiniProgramPage);
