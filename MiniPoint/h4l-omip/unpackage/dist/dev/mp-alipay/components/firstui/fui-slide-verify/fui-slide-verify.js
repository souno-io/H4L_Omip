"use strict";
const common_vendor = require("../../../common/vendor.js");
const components_firstui_fuiSlideVerify_weex = require("./weex.js");
const components_firstui_fuiSlideVerify_mpjs = require("./mpjs.js");
const _sfc_main = {
  name: "fui-slide-verify",
  mixins: [components_firstui_fuiSlideVerify_mpjs.mpjs, components_firstui_fuiSlideVerify_weex.weex],
  emits: ["success", "fail"],
  props: {
    range: {
      type: [Number, String],
      default: 3
    },
    error: {
      type: [Number, String],
      default: 3
    },
    width: {
      type: [Number, String],
      default: 640
    },
    height: {
      type: [Number, String],
      default: 80
    },
    background: {
      type: String,
      default: "#EEEEEE"
    },
    activeBgColor: {
      type: String,
      default: ""
    },
    sliderWidth: {
      type: [Number, String],
      default: 80
    },
    sliderBgColor: {
      type: String,
      default: "#FFFFFF"
    },
    borderColor: {
      type: String,
      default: "#EEEEEE"
    },
    passColor: {
      type: String,
      default: ""
    },
    size: {
      type: [Number, String],
      default: 28
    },
    color: {
      type: String,
      default: "#333333"
    },
    activeColor: {
      type: String,
      default: "#FFFFFF"
    },
    iconSize: {
      type: [Number, String],
      default: 48
    },
    arrowColor: {
      type: String,
      default: "#B2B2B2"
    },
    lineColor: {
      type: String,
      default: "#B2B2B2"
    }
  },
  computed: {
    getBackground() {
      return `-webkit-gradient(linear, left top, right top, color-stop(0, ${this.color}), color-stop(.4, ${this.color}), color-stop(.5, white), color-stop(.6, ${this.color}), color-stop(1, ${this.color}))`;
    }
  },
  watch: {
    width(val) {
      this.totalWidth = this.getPx(val);
    },
    sliderWidth(val) {
      this.sliderW = this.getPx(val);
    }
  },
  data() {
    return {
      totalWidth: 0,
      targetWidth: 0,
      sliderW: 0,
      isPass: false,
      resetNum: 0,
      times: 0
    };
  },
  created() {
    this.totalWidth = this.getPx(this.width);
    this.sliderW = this.getPx(this.sliderWidth);
    this.changeTargetPosi();
  },
  methods: {
    getPx(value) {
      let val = parseInt(common_vendor.index.upx2px(Number(value)));
      return val % 2 === 0 ? val : val + 1;
    },
    changeTargetPosi() {
      let range = Array.from(new Array(100 + 1).keys()).slice(50);
      let index = Math.floor(Math.random() * range.length);
      let width = common_vendor.index.upx2px(parseInt(this.width * (range[index] || 100) / 100));
      width = width <= this.sliderW ? this.sliderW + 20 : width;
      this.targetWidth = parseInt(width);
    },
    reset() {
      this.resetNum += 1;
      this.isPass = false;
      this.times = 0;
      this.changeTargetPosi();
    },
    success() {
      this.isPass = true;
      this.$emit("success", {});
    },
    fail() {
      this.times++;
      if (this.times >= Number(this.error)) {
        this.changeTargetPosi();
        this.times = 0;
      }
      this.$emit("fail", {});
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
    a: $props.size + "rpx",
    b: $options.getBackground,
    c: $props.color,
    d: $data.isPass ? 1 : "",
    e: !$data.isPass ? 1 : "",
    f: $props.size + "rpx",
    g: $props.activeColor,
    h: $data.isPass ? 1 : "",
    i: $data.totalWidth + "px",
    j: $props.size + "rpx",
    k: $props.height + "rpx",
    l: $props.height + "rpx",
    m: $props.activeColor,
    n: !$props.activeBgColor ? 1 : "",
    o: _ctx.resetAni ? 1 : "",
    p: $props.activeBgColor,
    q: _ctx.fwidth + "px",
    r: !$data.isPass
  }, !$data.isPass ? {
    s: common_vendor.p({
      name: "right",
      color: $props.arrowColor,
      size: $props.iconSize
    })
  } : {
    t: common_vendor.p({
      name: "checkbox-fill",
      color: $props.passColor,
      primary: true,
      size: $props.iconSize
    })
  }, {
    v: !$props.passColor && $data.isPass ? 1 : "",
    w: _ctx.resetAni ? 1 : "",
    x: $data.sliderW + "px",
    y: $data.isPass ? $props.passColor : $props.borderColor,
    z: _ctx.transform,
    A: common_vendor.o((...args) => _ctx.touchstart && _ctx.touchstart(...args)),
    B: common_vendor.o((...args) => _ctx.touchmove && _ctx.touchmove(...args)),
    C: common_vendor.o((...args) => _ctx.touchend && _ctx.touchend(...args)),
    D: $props.lineColor,
    E: $data.isPass ? 0 : "1px",
    F: $data.sliderW + "px",
    G: $data.targetWidth - $data.sliderW + "px",
    H: $data.totalWidth + "px",
    I: $props.height + "rpx",
    J: $props.background
  });
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-4dbe3987"], ["__file", "E:/H4L_Omip/MiniPoint/h4l-omip/components/firstui/fui-slide-verify/fui-slide-verify.vue"]]);
my.createComponent(Component);
