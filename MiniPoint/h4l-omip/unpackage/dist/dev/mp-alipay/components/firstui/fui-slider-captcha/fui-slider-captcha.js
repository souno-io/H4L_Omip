"use strict";
const common_vendor = require("../../../common/vendor.js");
const components_firstui_fuiSliderCaptcha_weex = require("./weex.js");
const components_firstui_fuiSliderCaptcha_mpjs = require("./mpjs.js");
const _sfc_main = {
  name: "fui-slider-captcha",
  mixins: [components_firstui_fuiSliderCaptcha_mpjs.mpjs, components_firstui_fuiSliderCaptcha_weex.weex],
  emits: ["success", "fail", "verify", "init"],
  props: {
    type: {
      type: [Number, String],
      default: 1
    },
    range: {
      type: [Number, String],
      default: 3
    },
    location: {
      type: Object,
      default() {
        return {};
      }
    },
    src: {
      type: String,
      default: ""
    },
    imageType: {
      type: [Number, String],
      default: 1
    },
    width: {
      type: [Number, String],
      default: 640
    },
    height: {
      type: [Number, String],
      default: 320
    },
    background: {
      type: String,
      default: "#FFFFFF"
    },
    title: {
      type: String,
      default: "\u5B89\u5168\u9A8C\u8BC1"
    },
    color: {
      type: String,
      default: "#B2B2B2"
    },
    size: {
      type: [Number, String],
      default: 28
    },
    descrColor: {
      type: String,
      default: "#333333"
    },
    descrSize: {
      type: [Number, String],
      default: 36
    },
    closeColor: {
      type: String,
      default: "#B2B2B2"
    },
    sliderBgColor: {
      type: String,
      default: ""
    },
    slideColor: {
      type: String,
      default: "#FFFFFF"
    },
    zIndex: {
      type: [Number, String],
      default: 996
    },
    maskBgColor: {
      type: String,
      default: "rgba(0,0,0,.6)"
    },
    maskClosable: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    src(newValue, oldValue) {
      if (this.type == 1) {
        newValue && this.handleImage();
      } else {
        if (this.location.x !== void 0 && newValue) {
          this.handleImage();
        }
      }
    },
    location(obj) {
      if (this.type == 2 && obj) {
        this.x = obj.x || 10;
        this.y = obj.y || 10;
        this.x1 = obj.x1 || 160;
        if ((this.x + this.y + this.x1) % 2 === 0) {
          this.circle = true;
        } else {
          this.circle = false;
        }
        this.src && this.handleImage();
      }
    }
  },
  data() {
    let sys = common_vendor.index.getSystemInfoSync();
    const canvasId = `fui_sc_${Math.ceil(Math.random() * 1e6).toString(36)}`;
    let isNvue = false;
    let pixelRatio = 2;
    let isNvueAndroid = false;
    pixelRatio = sys.pixelRatio == 1 ? 2 : sys.pixelRatio;
    return {
      pixelRatio,
      isNvueAndroid,
      canvasId,
      isNvue,
      isShow: false,
      w: 320,
      h: 160,
      sliderH: 0,
      imgSrc: "",
      slotSrc: "",
      x: 0,
      y: 0,
      x1: 0,
      circle: false,
      resetNum: 0,
      isPass: false,
      disabled: false,
      times: 0
    };
  },
  created() {
    this.w = this.getPx(this.width);
    this.h = this.getPx(this.height);
    this.sliderH = this.getPx(64);
    this.$emit("init", {
      width: this.w,
      height: this.h,
      cutGraphWidth: 44
    });
  },
  mounted() {
    if (this.type == 1) {
      this.src && this.handleImage();
    } else {
      if (this.location.x !== void 0 && this.src) {
        this.handleImage();
      }
    }
  },
  methods: {
    getPx(value) {
      let val = parseInt(common_vendor.index.upx2px(Number(value)));
      return val % 2 === 0 ? val : val + 1;
    },
    getImage(url, callback) {
      common_vendor.index.downloadFile({
        url,
        success: (res) => {
          callback && callback(res.tempFilePath);
        },
        fail: (res) => {
          callback && callback(false);
        }
      });
    },
    getRandom(min, max) {
      let range = Array.from(new Array(max + 1).keys()).slice(min);
      let index = Math.floor(Math.random() * range.length);
      return range[index];
    },
    getXY() {
      this.x = this.getRandom(20, this.w / 2 - 44);
      this.y = this.getRandom(20, this.h - 60);
      this.x1 = this.getRandom(this.w / 2 + 44, this.w - 60);
      if ((this.x + this.y + this.x1) % 2 === 0) {
        this.circle = true;
      } else {
        this.circle = false;
      }
    },
    darwImage(src) {
      let context = common_vendor.index.createCanvasContext(this.canvasId, this);
      context.drawImage(src, 0, 0, this.w, this.h);
      context.draw(false, () => {
        setTimeout(() => {
          common_vendor.index.canvasToTempFilePath({
            canvasId: this.canvasId,
            x: this.x1,
            y: this.y,
            width: 44,
            height: 44,
            success: (res) => {
              this.slotSrc = res.tempFilePath;
            },
            fail: (err) => {
              this.toast("\u56FE\u7247\u8D44\u6E90\u5904\u7406\u5931\u8D25~");
            }
          }, this);
        }, 200);
      });
    },
    handleImage() {
      this.slotSrc = "";
      this.times = 0;
      if (this.type == 1) {
        this.getXY();
      }
      this.reset();
      if (this.imageType == 1) {
        this.getImage(this.src, (res) => {
          if (!res) {
            this.toast("\u56FE\u7247\u8D44\u6E90\u5904\u7406\u5931\u8D25~");
          } else {
            this.imgSrc = res;
            this.darwImage(res);
          }
        });
      } else if (this.imageType == 2) {
        this.toast("\u6682\u4E0D\u652F\u6301base64\u56FE\u7247\uFF01");
      } else {
        this.imgSrc = this.src;
        this.darwImage(this.imgSrc);
      }
    },
    reset() {
      this.resetNum += 1;
      this.isPass = false;
      this.disabled = false;
    },
    verify(e) {
      this.disabled = true;
      this.$emit("verify", {
        x: this.x,
        x1: this.x1,
        slipDistance: e.slip
      });
    },
    success() {
      this.isPass = true;
      if (this.type == 1) {
        this.$emit("success", {});
      }
    },
    fail() {
      if (this.type == 1) {
        this.times += 1;
        this.$emit("fail", {
          times: this.times
        });
      }
      this.reset();
    },
    maskClose() {
      if (!this.maskClosable)
        return;
      this.closeVerify();
    },
    closeVerify() {
      this.reset();
      this.isShow = false;
    },
    show(refresh) {
      if (refresh) {
        if (this.type == 1) {
          this.src && this.handleImage();
        } else {
          if (this.location.x !== void 0 && this.src) {
            this.handleImage();
          }
        }
      }
      this.isShow = true;
    },
    stop() {
    }
  }
};
if (!Array) {
  const _easycom_fui_icon2 = common_vendor.resolveComponent("fui-icon");
  _easycom_fui_icon2();
}
const _easycom_fui_icon = () => "../fui-icon/fui-icon.js";
if (!Math) {
  _easycom_fui_icon();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $data.isShow || !$data.isNvue
  }, $data.isShow || !$data.isNvue ? common_vendor.e({
    b: $data.canvasId,
    c: $data.canvasId,
    d: $data.w + "px",
    e: $data.h + "px",
    f: common_vendor.t($props.title),
    g: $data.w + "px",
    h: $props.color,
    i: $props.size + "rpx",
    j: $data.w + "px",
    k: $props.descrColor,
    l: $props.descrSize + "rpx",
    m: $props.src
  }, $props.src ? {
    n: $props.src,
    o: $data.w + "px",
    p: $data.h + "px"
  } : {}, {
    q: $data.slotSrc
  }, $data.slotSrc ? {
    r: $data.circle ? 1 : "",
    s: !$data.isNvueAndroid ? 1 : "",
    t: $data.x1 + "px",
    v: $data.y + "px"
  } : {}, {
    w: $data.slotSrc
  }, $data.slotSrc ? {
    x: $data.slotSrc,
    y: $data.circle ? 1 : "",
    z: _ctx.resetAni ? 1 : "",
    A: $data.x + "px",
    B: $data.y + "px",
    C: _ctx.transformSlot
  } : {}, {
    D: $data.w + "px",
    E: $data.w + "px",
    F: $data.sliderH / 2 + "px",
    G: $data.sliderH + "px",
    H: common_vendor.p({
      name: "slide",
      size: 56,
      color: $props.slideColor
    }),
    I: !$props.sliderBgColor ? 1 : "",
    J: _ctx.resetAni ? 1 : "",
    K: $data.sliderH * 2 + "px",
    L: $data.sliderH + "px",
    M: $data.sliderH + "px",
    N: $props.sliderBgColor,
    O: _ctx.transform,
    P: common_vendor.o((...args) => _ctx.touchstart && _ctx.touchstart(...args)),
    Q: common_vendor.o((...args) => _ctx.touchmove && _ctx.touchmove(...args)),
    R: common_vendor.o((...args) => _ctx.touchend && _ctx.touchend(...args)),
    S: $data.w + "px",
    T: $data.sliderH + "px",
    U: common_vendor.p({
      name: "close",
      color: $props.closeColor
    }),
    V: common_vendor.o((...args) => $options.closeVerify && $options.closeVerify(...args)),
    W: $props.background,
    X: common_vendor.o((...args) => $options.stop && $options.stop(...args)),
    Y: $data.isShow ? 1 : "",
    Z: $props.maskBgColor,
    aa: $props.zIndex,
    ab: common_vendor.o((...args) => $options.maskClose && $options.maskClose(...args)),
    ac: common_vendor.o((...args) => $options.stop && $options.stop(...args))
  }) : {});
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-9af6c4ea"], ["__file", "E:/H4L_Omip/MiniPoint/h4l-omip/components/firstui/fui-slider-captcha/fui-slider-captcha.vue"]]);
my.createComponent(Component);
