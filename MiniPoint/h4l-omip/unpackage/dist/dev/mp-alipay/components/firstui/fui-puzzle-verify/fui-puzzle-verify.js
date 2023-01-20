"use strict";
const common_vendor = require("../../../common/vendor.js");
const components_firstui_fuiPuzzleVerify_weex = require("./weex.js");
const components_firstui_fuiPuzzleVerify_mpjs = require("./mpjs.js");
const _sfc_main = {
  name: "fui-puzzle-verify",
  mixins: [components_firstui_fuiPuzzleVerify_mpjs.mpjs, components_firstui_fuiPuzzleVerify_weex.weex],
  emits: ["verify", "init"],
  props: {
    src: {
      type: String,
      default: ""
    },
    cutSrc: {
      type: String,
      default: ""
    },
    x: {
      type: [Number, String],
      default: 10
    },
    y: {
      type: [Number, String],
      default: 10
    },
    width: {
      type: [Number, String],
      default: 300
    },
    height: {
      type: [Number, String],
      default: 150
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
      this.reset();
    },
    cutSrc(val) {
      this.reset();
    }
  },
  data() {
    common_vendor.index.getSystemInfoSync();
    let isNvue = false;
    let isNvueAndroid = false;
    return {
      isNvueAndroid,
      isNvue,
      isShow: false,
      w: 300,
      h: 150,
      sliderH: 0,
      resetNum: 0,
      isPass: false,
      disabled: false
    };
  },
  created() {
    this.sliderH = this.getPx(64);
    this.$emit("init", {
      cutGraphWidth: 44
    });
  },
  methods: {
    getPx(value) {
      let val = parseInt(common_vendor.index.upx2px(Number(value)));
      return val % 2 === 0 ? val : val + 1;
    },
    verify(e) {
      this.disabled = true;
      this.$emit("verify", {
        slipDistance: e.slip
      });
    },
    success() {
      this.isPass = true;
    },
    reset() {
      this.resetNum += 1;
      this.isPass = false;
      this.disabled = false;
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
    b: common_vendor.t($props.title),
    c: $props.width + "px",
    d: $props.color,
    e: $props.size + "rpx",
    f: $props.width + "px",
    g: $props.descrColor,
    h: $props.descrSize + "rpx",
    i: $props.src
  }, $props.src ? {
    j: $props.src,
    k: $props.width + "px",
    l: $props.height + "px"
  } : {}, {
    m: $props.cutSrc
  }, $props.cutSrc ? {
    n: $props.cutSrc,
    o: _ctx.resetAni ? 1 : "",
    p: $props.x + "px",
    q: $props.y + "px",
    r: _ctx.transformSlot
  } : {}, {
    s: $props.width + "px",
    t: $props.width + "px",
    v: $data.sliderH / 2 + "px",
    w: $data.sliderH + "px",
    x: common_vendor.p({
      name: "slide",
      size: 56,
      color: $props.slideColor
    }),
    y: !$props.sliderBgColor ? 1 : "",
    z: _ctx.resetAni ? 1 : "",
    A: $data.sliderH * 2 + "px",
    B: $data.sliderH + "px",
    C: $data.sliderH + "px",
    D: $props.sliderBgColor,
    E: _ctx.transform,
    F: common_vendor.o((...args) => _ctx.touchstart && _ctx.touchstart(...args)),
    G: common_vendor.o((...args) => _ctx.touchmove && _ctx.touchmove(...args)),
    H: common_vendor.o((...args) => _ctx.touchend && _ctx.touchend(...args)),
    I: $props.width + "px",
    J: $data.sliderH + "px",
    K: common_vendor.p({
      name: "close",
      color: $props.closeColor
    }),
    L: common_vendor.o((...args) => $options.closeVerify && $options.closeVerify(...args)),
    M: $props.background,
    N: common_vendor.o((...args) => $options.stop && $options.stop(...args)),
    O: $data.isShow ? 1 : "",
    P: $props.maskBgColor,
    Q: $props.zIndex,
    R: common_vendor.o((...args) => $options.maskClose && $options.maskClose(...args)),
    S: common_vendor.o((...args) => $options.stop && $options.stop(...args))
  }) : {});
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-1603c5c2"], ["__file", "E:/H4L_Omip/MiniPoint/h4l-omip/components/firstui/fui-puzzle-verify/fui-puzzle-verify.vue"]]);
my.createComponent(Component);
