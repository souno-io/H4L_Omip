"use strict";
const common_vendor = require("../../../common/vendor.js");
const components_firstui_fuiRotateVerify_weex = require("./weex.js");
const components_firstui_fuiRotateVerify_mpjs = require("./mpjs.js");
const _sfc_main = {
  name: "fui-rotate-verify",
  mixins: [components_firstui_fuiRotateVerify_mpjs.mpjs, components_firstui_fuiRotateVerify_weex.weex],
  emits: ["verify"],
  props: {
    width: {
      type: [Number, String],
      default: 600
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
      default: 32
    },
    src: {
      type: String,
      default: ""
    },
    imgWidth: {
      type: [Number, String],
      default: 240
    },
    borderColor: {
      type: String,
      default: "#EEEEEE"
    },
    sliderBgColor: {
      type: String,
      default: "#FFFFFF"
    },
    closeColor: {
      type: String,
      default: "#B2B2B2"
    },
    slideColor: {
      type: String,
      default: "#333333"
    },
    passColor: {
      type: String,
      default: "#09BE4F"
    },
    failColor: {
      type: String,
      default: "#FF2B2B"
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
    imgWidth(val) {
      this.imgW = this.getPx(val);
    },
    width(val) {
      this.sliderWidth = this.getPx(Number(val) - 64);
    }
  },
  data() {
    let isNvue = false;
    return {
      isNvue,
      isShow: false,
      isPass: false,
      disabled: false,
      showRes: false,
      sliderHeight: 0,
      imgW: 0,
      sliderWidth: 0,
      resetNum: 0
    };
  },
  created() {
    this.sliderWidth = this.getPx(Number(this.width) - 64);
    this.sliderHeight = this.getPx(92);
    this.imgW = this.getPx(this.imgWidth);
  },
  methods: {
    getPx(value) {
      let val = parseInt(common_vendor.index.upx2px(Number(value)));
      return val % 2 === 0 ? val : val + 1;
    },
    success() {
      this.isPass = true;
    },
    fail() {
      this.showRes = true;
      this.isPass = false;
      setTimeout(() => {
        this.reset();
      }, 300);
    },
    verify(e) {
      this.disabled = true;
      this.$emit("verify", e);
    },
    verifyRes(angle, initAngle, range, callback) {
      let res = false;
      if (Math.abs(angle + initAngle - 360) <= range || Math.abs(angle + initAngle) <= range) {
        res = true;
      }
      callback && callback(res);
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
    show() {
      this.isShow = true;
    },
    reset() {
      this.resetNum += 1;
      this.isPass = false;
      this.disabled = false;
      this.showRes = false;
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
    b: common_vendor.p({
      name: "close",
      color: $props.closeColor
    }),
    c: common_vendor.o((...args) => $options.closeVerify && $options.closeVerify(...args)),
    d: common_vendor.t($props.title),
    e: $props.color,
    f: $props.size + "rpx",
    g: $props.descrColor,
    h: $props.descrSize + "rpx",
    i: _ctx.resetAni ? 1 : "",
    j: $props.src,
    k: $data.imgW + "px",
    l: $data.imgW + "px",
    m: $data.isNvue ? $data.imgW + "px" : "50%",
    n: "rotate(" + _ctx.angle + "deg)",
    o: $data.showRes || $data.isPass
  }, $data.showRes || $data.isPass ? {
    p: common_vendor.p({
      name: $data.isPass ? "check" : "close",
      size: 96,
      color: $data.isPass ? $props.passColor : $props.failColor
    }),
    q: $data.imgW + "px",
    r: $data.imgW + "px",
    s: $data.isNvue ? $data.imgW + "px" : "50%"
  } : {}, {
    t: $data.imgW + "px",
    v: $data.imgW + "px",
    w: $data.isNvue ? $data.imgW + "px" : "50%",
    x: common_vendor.p({
      name: "slide",
      size: 60,
      color: $props.slideColor
    }),
    y: _ctx.resetAni ? 1 : "",
    z: $data.sliderHeight + "px",
    A: $data.sliderHeight - 2 + "px",
    B: $props.sliderBgColor,
    C: $props.borderColor,
    D: $data.isNvue ? $data.sliderHeight + "px" : "50%",
    E: _ctx.transform,
    F: common_vendor.o((...args) => _ctx.touchstart && _ctx.touchstart(...args)),
    G: common_vendor.o((...args) => _ctx.touchmove && _ctx.touchmove(...args)),
    H: common_vendor.o((...args) => _ctx.touchend && _ctx.touchend(...args)),
    I: $data.sliderWidth + "px",
    J: $data.sliderHeight + "px",
    K: $props.borderColor,
    L: $data.sliderHeight + "px",
    M: $props.width + "rpx",
    N: $props.background,
    O: common_vendor.o((...args) => $options.stop && $options.stop(...args)),
    P: $data.isShow ? 1 : "",
    Q: $props.maskBgColor,
    R: $props.zIndex,
    S: common_vendor.o((...args) => $options.maskClose && $options.maskClose(...args)),
    T: common_vendor.o((...args) => $options.stop && $options.stop(...args))
  }) : {});
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-93c479b6"], ["__file", "E:/H4L_Omip/MiniPoint/h4l-omip/components/firstui/fui-rotate-verify/fui-rotate-verify.vue"]]);
my.createComponent(Component);
