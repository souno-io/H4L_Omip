"use strict";
const common_vendor = require("../../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      isReady: false,
      basicData: {
        blocks: [{
          x: 0,
          y: 0,
          width: 560,
          height: 980,
          backgroundColor: "#ffffff"
        }, {
          x: 20,
          y: 20,
          width: 100,
          height: 100,
          borderRadius: 20,
          backgroundColor: "#465CFF",
          zIndex: 2
        }, {
          x: 140,
          y: 20,
          width: 100,
          height: 200,
          backgroundColor: "#FF2B2B",
          gradientColor: "#6831FF",
          zIndex: 2
        }, {
          x: 260,
          y: 20,
          width: 100,
          height: 100,
          borderWidth: 1,
          borderColor: "#465CFF",
          zIndex: 2
        }, {
          x: 380,
          y: 20,
          width: 100,
          height: 100,
          borderRadius: 100,
          backgroundColor: "#465CFF",
          zIndex: 2
        }],
        imgs: [{
          imgResource: "/static/images/common/img_logo.png",
          x: 20,
          y: 260,
          width: 100,
          height: 100,
          zIndex: 2
        }, {
          imgResource: "/static/images/common/img_logo.png",
          x: 140,
          y: 260,
          width: 100,
          height: 100,
          borderRadius: 16,
          zIndex: 2
        }, {
          imgResource: "/static/images/common/img_logo.png",
          x: 260,
          y: 260,
          width: 100,
          height: 100,
          borderRadius: 100,
          zIndex: 2
        }],
        texts: [{
          text: "First UI",
          x: 20,
          y: 420,
          fontSize: 32,
          color: "#181818",
          width: 520,
          fontWeight: "bold",
          zIndex: 3
        }, {
          text: "First UI \u662F\u4E00\u5957\u57FA\u4E8Euni-app\u5F00\u53D1\u7684\u7EC4\u4EF6\u5316\u3001\u53EF\u590D\u7528\u3001\u6613\u6269\u5C55\u3001\u4F4E\u8026\u5408\u7684\u8DE8\u5E73\u53F0\u79FB\u52A8\u7AEFUI \u7EC4\u4EF6\u5E93\u3002",
          x: 20,
          y: 460,
          fontSize: 20,
          color: "#181818",
          width: 496,
          zIndex: 3
        }, {
          text: "First UI \u662F\u4E00\u5957\u57FA\u4E8Euni-app\u5F00\u53D1\u7684\u7EC4\u4EF6\u5316\u3001\u53EF\u590D\u7528\u3001\u6613\u6269\u5C55\u3001\u4F4E\u8026\u5408\u7684\u8DE8\u5E73\u53F0\u79FB\u52A8\u7AEFUI \u7EC4\u4EF6\u5E93\u3002",
          x: 20,
          y: 520,
          fontSize: 20,
          lineHeight: 32,
          color: "#B2B2B2",
          width: 496,
          rows: 2,
          zIndex: 3
        }, {
          text: "\u6B64\u6BB5\u6587\u5B57\u4F5C\u5E9F",
          x: 20,
          y: 620,
          fontSize: 22,
          color: "#B2B2B2",
          width: 500,
          lineThrough: true,
          zIndex: 3
        }, {
          text: "End!",
          x: 20,
          y: 916,
          fontSize: 44,
          color: "#465CFF",
          width: 500,
          fontWeight: "bold",
          zIndex: 6
        }],
        lines: [{
          x: 20,
          y: 660,
          endX: 220,
          endY: 660,
          color: "#181818",
          width: 1,
          zIndex: 4
        }, {
          x: 20,
          y: 700,
          endX: 240,
          endY: 700,
          color: "#09BE4F",
          width: 4,
          zIndex: 4
        }, {
          x: 20,
          y: 740,
          endX: 240,
          endY: 780,
          color: "#6831FF",
          width: 4,
          zIndex: 4
        }, {
          x: 20,
          y: 780,
          endX: 240,
          endY: 740,
          color: "#FFB703",
          width: 4,
          zIndex: 5
        }, {
          x: 20,
          y: 820,
          endX: 520,
          endY: 820,
          color: "#465CFF",
          width: 4,
          zIndex: 5
        }]
      },
      goodsData: {
        blocks: [{
          x: 0,
          y: 0,
          width: 560,
          height: 980,
          backgroundColor: "#ffffff",
          borderRadius: 40
        }, {
          x: 56,
          y: 128,
          width: 448,
          height: 648,
          backgroundColor: "#ffffff",
          borderRadius: 24,
          zIndex: 2
        }],
        imgs: [{
          imgResource: "/static/images/component/img_bg_poster.png",
          x: 0,
          y: 0,
          width: 560,
          height: 800,
          zIndex: 1
        }, {
          imgResource: "/static/images/component/img_goods_3x.jpg",
          x: 56,
          y: 128,
          width: 448,
          height: 448,
          borderRadius: 24,
          zIndex: 3
        }, {
          imgResource: "/static/images/qrcode/wx_qrcode.jpg",
          x: 378,
          y: 822,
          width: 136,
          height: 136,
          zIndex: 2
        }],
        texts: [{
          text: "\u6EE1\u8D60\u4FC3\u9500 \u6EE150\u4EF6\u9001\u8D60\u54C1",
          x: 280,
          y: 68,
          fontSize: 38,
          color: "#FFFFFF",
          width: 400,
          fontWeight: "bold",
          textAlign: "center",
          zIndex: 2
        }, {
          text: "\u6D3B\u52A8\u65F6\u95F4: 7\u67082\u65E5-7\u670820\u65E5",
          x: 280,
          y: 104,
          fontSize: 22,
          color: "#FFFFFF",
          width: 260,
          textAlign: "center",
          zIndex: 2
        }, {
          text: "\u4E09\u5947\u533B\u7597 3Q\u4E00\u6B21\u6027\u533B\u7528\u5916\u79D1\u53E3\u7F69\u900F\u6C14\u8F7B\u8584\u6210\u4EBA3\u5C42\u533B\u7528\u53E3\u7F69 1\u888B10\u53EA",
          x: 85,
          y: 620,
          fontSize: 24,
          lineHeight: 36,
          color: "#333333",
          width: 380,
          rows: 2,
          zIndex: 3
        }, {
          text: "\u70ED\u9500\u5546\u54C1 \u6BCF\u6EE11000\u51CF90\uFF01",
          x: 85,
          y: 696,
          fontSize: 18,
          color: "#999999",
          fontWeight: "normal",
          width: 388,
          zIndex: 3
        }, {
          text: "\uFFE57.00",
          x: 84,
          y: 746,
          fontSize: 32,
          color: "#FF2B2B",
          width: 200,
          zIndex: 3
        }, {
          text: "\uFFE512.00",
          x: 84,
          y: 746,
          fontSize: 20,
          color: "#999999",
          width: 200,
          lineThrough: true,
          frontText: "\uFFE57.00",
          frontSize: 32,
          spacing: 12,
          zIndex: 3
        }, {
          text: "First UI \u5546\u57CE\u5C0F\u7A0B\u5E8F",
          x: 50,
          y: 870,
          fontSize: 30,
          color: "#333333",
          width: 290,
          zIndex: 2
        }, {
          text: "\u957F\u6309\u8BC6\u522B  \u8D2D\u597D\u7269",
          x: 50,
          y: 922,
          fontSize: 24,
          color: "#666666",
          width: 180,
          zIndex: 2
        }]
      },
      filePath: "",
      goodsFilePath: "",
      showFilePath: "",
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
  computed: common_vendor.mapState(["status"]),
  methods: {
    vip() {
      this.fui.href("/pages/my/qa/qa?index=2&title=VIP\u4E13\u5C5E\u5185\u5BB9");
    },
    ready() {
      this.isReady = true;
    },
    previewImage() {
      common_vendor.index.previewImage({
        enablesavephoto: true,
        enableShowPhotoDownload: true,
        urls: [this.showFilePath]
      });
    },
    poster(type) {
      if (this.isReady) {
        this.showFilePath = type === 1 ? this.filePath : this.goodsFilePath;
        if (this.showFilePath) {
          this.previewImage();
        } else {
          common_vendor.index.showLoading({
            title: "\u6B63\u5728\u751F\u6210..."
          });
          this.$refs.generator.generatePoster(type === 1 ? this.basicData : this.goodsData, (res) => {
            console.log(res);
            this.showFilePath = res;
            if (type === 1) {
              this.filePath = res;
            } else {
              this.goodsFilePath = res;
            }
            this.previewImage();
            common_vendor.index.hideLoading();
          });
        }
      } else {
        this.fui.toast("\u7EC4\u4EF6\u5C1A\u672A\u521D\u59CB\u5316\u5B8C\u6210\uFF01");
      }
    },
    share() {
      this.fui.href("/pages/my/share/share");
    },
    handleClick() {
      this.show = false;
    },
    saveImage() {
      this.$refs.generator.saveImage(this.filePath);
    }
  }
};
if (!Array) {
  const _easycom_fui_button2 = common_vendor.resolveComponent("fui-button");
  const _easycom_fui_poster2 = common_vendor.resolveComponent("fui-poster");
  (_easycom_fui_button2 + _easycom_fui_poster2)();
}
const _easycom_fui_button = () => "../../../../components/firstui/fui-button/fui-button.js";
const _easycom_fui_poster = () => "../../../../components/firstui/fui-poster/fui-poster.js";
if (!Math) {
  (_easycom_fui_button + _easycom_fui_poster)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o((...args) => $options.vip && $options.vip(...args)),
    b: common_vendor.o(($event) => $options.poster(1)),
    c: common_vendor.p({
      type: "gray",
      width: "400rpx",
      height: "84rpx",
      text: "\u57FA\u672C\u4F7F\u7528",
      bold: true,
      margin: ["24rpx"]
    }),
    d: common_vendor.o(($event) => $options.poster(2)),
    e: common_vendor.p({
      type: "gray",
      width: "400rpx",
      height: "84rpx",
      text: "\u751F\u6210\u5546\u54C1\u6D77\u62A5",
      bold: true
    }),
    f: common_vendor.o($options.share),
    g: common_vendor.p({
      type: "gray",
      width: "400rpx",
      height: "84rpx",
      text: "First UI\u5206\u4EAB\u6D77\u62A5",
      bold: true,
      margin: ["24rpx"]
    }),
    h: common_vendor.o($options.ready),
    i: common_vendor.p({
      width: 560,
      height: 980
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/H4L_Omip/MiniPoint/h4l-omip/pages/component/canvas/poster/poster.vue"]]);
my.createPage(MiniProgramPage);
