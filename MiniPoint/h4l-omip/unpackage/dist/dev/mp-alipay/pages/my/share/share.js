"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      posterData: {
        imgs: [{
          imgResource: "/static/images/share/img_bg_3x.png",
          x: 64,
          y: 112,
          width: 622,
          height: 466,
          zIndex: 1
        }, {
          imgResource: "/static/images/common/img_logo.png",
          x: 329,
          y: 48,
          width: 92,
          height: 92,
          borderRadius: 24,
          zIndex: 3
        }, {
          imgResource: "/static/images/qrcode/ali_qrcode.png",
          x: 175,
          y: 546,
          width: 400,
          height: 400,
          zIndex: 3
        }],
        blocks: [{
          width: 750,
          height: 1064,
          x: 0,
          y: 0,
          backgroundColor: "#F1F4FA"
        }, {
          width: 512,
          height: 512,
          x: 119,
          y: 490,
          backgroundColor: "#FFFFFF",
          borderRadius: 48,
          shadow: {
            offsetX: 0,
            offsetY: 20,
            blur: 50,
            color: "rgba(9, 41, 134, 0.12)"
          },
          zIndex: 2
        }],
        texts: [{
          text: "First UI\u7EC4\u4EF6\u5E93",
          x: 375,
          y: 184,
          fontSize: 28,
          color: "#181818",
          width: 184,
          fontWeight: "bold",
          textAlign: "center",
          zIndex: 3
        }]
      },
      isReady: false,
      filePath: "",
      show: false,
      styles: {
        position: "fixed",
        bottom: 0,
        top: 0,
        left: 0,
        right: 0,
        display: "flex",
        "justify-content": "center",
        "align-items": "center",
        backgroundColor: "rgba(0,0,0,0.6)"
      }
    };
  },
  methods: {
    ready() {
      this.isReady = true;
    },
    previewImage() {
      common_vendor.index.previewImage({
        enablesavephoto: true,
        enableShowPhotoDownload: true,
        urls: [this.filePath]
      });
    },
    generatePoster() {
      if (this.isReady) {
        if (this.filePath) {
          this.previewImage();
        } else {
          common_vendor.index.showLoading({
            title: "\u6B63\u5728\u751F\u6210..."
          });
          this.$refs.generator.generatePoster(this.posterData, (res) => {
            console.log(res);
            this.filePath = res;
            this.previewImage();
            common_vendor.index.hideLoading();
          });
        }
      } else {
        this.fui.toast("\u7EC4\u4EF6\u5C1A\u672A\u521D\u59CB\u5316\u5B8C\u6210\uFF01");
      }
    },
    saveImage() {
      this.$refs.generator.saveImage(this.filePath);
    },
    handleClick() {
      this.show = false;
    },
    share(e) {
    }
  },
  onShareAppMessage() {
    return {
      title: "First UI\u7EC4\u4EF6\u5E93"
    };
  }
};
if (!Array) {
  const _easycom_fui_button2 = common_vendor.resolveComponent("fui-button");
  const _easycom_fui_poster2 = common_vendor.resolveComponent("fui-poster");
  (_easycom_fui_button2 + _easycom_fui_poster2)();
}
const _easycom_fui_button = () => "../../../components/firstui/fui-button/fui-button.js";
const _easycom_fui_poster = () => "../../../components/firstui/fui-poster/fui-poster.js";
if (!Math) {
  (_easycom_fui_button + _easycom_fui_poster)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o($options.share),
    b: common_vendor.p({
      ["open-type"]: "share",
      radius: "100rpx",
      background: "-webkit-linear-gradient(90deg, #465CFF 0%, #6831FF 100%)",
      margin: ["64rpx", "0", "32rpx"]
    }),
    c: common_vendor.o($options.generatePoster),
    d: common_vendor.p({
      radius: "100rpx",
      background: "#F1F4FA",
      color: "#333333",
      borderColor: "#465CFF"
    }),
    e: common_vendor.o($options.ready),
    f: common_vendor.p({
      width: 750,
      height: 1064
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/H4L_Omip/MiniPoint/h4l-omip/pages/my/share/share.vue"]]);
_sfc_main.__runtimeHooks = 2;
my.createPage(MiniProgramPage);
