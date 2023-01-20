"use strict";
const common_vendor = require("../../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      urls: [{
        src: "/static/images/common/logo.png",
        descr: "First UI \u662F\u4E00\u5957\u57FA\u4E8Euni-app\u5F00\u53D1\u7684\u7EC4\u4EF6\u5316\u3001\u53EF\u590D\u7528\u3001\u6613\u6269\u5C55\u3001\u4F4E\u8026\u5408\u7684\u8DE8\u5E73\u53F0\u79FB\u52A8\u7AEFUI \u7EC4\u4EF6\u5E93\u3002"
      }, {
        src: "/static/images/component/img_goods_3x.jpg"
      }, {
        src: "/static/images/component/img_bg_poster.png"
      }],
      show: false,
      resUrl: this.fui.resUrl()
    };
  },
  methods: {
    vip() {
      this.fui.href("/pages/my/qa/qa?index=2&title=VIP\u4E13\u5C5E\u5185\u5BB9");
    },
    showGallery() {
      this.show = true;
    },
    hideGallery() {
      this.show = false;
    },
    previewImage() {
      common_vendor.index.previewImage({
        urls: [`${this.resUrl}/common/logo.png`, `${this.resUrl}/component/img_goods_3x.jpg`]
      });
    }
  }
};
if (!Array) {
  const _easycom_fui_button2 = common_vendor.resolveComponent("fui-button");
  const _easycom_fui_gallery2 = common_vendor.resolveComponent("fui-gallery");
  (_easycom_fui_button2 + _easycom_fui_gallery2)();
}
const _easycom_fui_button = () => "../../../../components/firstui/fui-button/fui-button.js";
const _easycom_fui_gallery = () => "../../../../components/firstui/fui-gallery/fui-gallery.js";
if (!Math) {
  (_easycom_fui_button + _easycom_fui_gallery)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o((...args) => $options.vip && $options.vip(...args)),
    b: common_vendor.o($options.showGallery),
    c: common_vendor.p({
      type: "gray",
      width: "400rpx",
      height: "84rpx",
      text: "\u81EA\u5B9A\u4E49Gallery",
      bold: true,
      margin: ["24rpx"]
    }),
    d: common_vendor.o($options.previewImage),
    e: common_vendor.p({
      type: "gray",
      width: "400rpx",
      height: "84rpx",
      text: "\u539F\u751F\u9884\u89C8",
      bold: true
    }),
    f: common_vendor.o($options.hideGallery),
    g: common_vendor.p({
      urls: $data.urls,
      show: $data.show
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/H4L_Omip/MiniPoint/h4l-omip/pages/component/operate/gallery/gallery.vue"]]);
my.createPage(MiniProgramPage);
