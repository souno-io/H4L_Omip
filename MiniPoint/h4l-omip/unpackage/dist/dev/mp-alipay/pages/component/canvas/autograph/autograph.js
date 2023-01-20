"use strict";
const common_vendor = require("../../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      canvasId: "",
      src: ""
    };
  },
  methods: {
    vip() {
      this.fui.href("/pages/my/qa/qa?index=2&title=VIP\u4E13\u5C5E\u5185\u5BB9");
    },
    ready(e) {
      this.canvasId = e.canvasId;
    },
    redraw() {
      if (!this.canvasId)
        return;
      this.src = "";
      this.$refs.autograph.redraw();
    },
    complete() {
      if (!this.canvasId || this.src)
        return;
      this.$refs.autograph.drawComplete((res) => {
        this.src = res;
      });
    },
    preview() {
      if (!this.src)
        return;
      common_vendor.index.previewImage({
        enablesavephoto: true,
        enableShowPhotoDownload: true,
        urls: [this.src]
      });
    }
  }
};
if (!Array) {
  const _easycom_fui_autograph2 = common_vendor.resolveComponent("fui-autograph");
  const _easycom_fui_button2 = common_vendor.resolveComponent("fui-button");
  (_easycom_fui_autograph2 + _easycom_fui_button2)();
}
const _easycom_fui_autograph = () => "../../../../components/firstui/fui-autograph/fui-autograph.js";
const _easycom_fui_button = () => "../../../../components/firstui/fui-button/fui-button.js";
if (!Math) {
  (_easycom_fui_autograph + _easycom_fui_button)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.o((...args) => $options.vip && $options.vip(...args)),
    b: common_vendor.o($options.ready),
    c: common_vendor.o($options.redraw),
    d: common_vendor.p({
      type: "gray",
      width: "400rpx",
      height: "84rpx",
      text: "\u91CD\u7B7E",
      bold: true,
      margin: ["64rpx", "0", "24rpx"]
    }),
    e: common_vendor.o($options.complete),
    f: common_vendor.p({
      type: "gray",
      width: "400rpx",
      height: "84rpx",
      text: "\u5B8C\u6210",
      bold: true
    }),
    g: $data.src
  }, $data.src ? {
    h: $data.src,
    i: common_vendor.o((...args) => $options.preview && $options.preview(...args))
  } : {});
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/H4L_Omip/MiniPoint/h4l-omip/pages/component/canvas/autograph/autograph.vue"]]);
my.createPage(MiniProgramPage);
