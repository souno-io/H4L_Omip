"use strict";
const components_firstui_fuiSlider_bindingx = require("./bindingx.js");
const components_firstui_fuiSlider_mpjs = require("./mpjs.js");
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  name: "fui-slider",
  mixins: [components_firstui_fuiSlider_mpjs.mpjs, components_firstui_fuiSlider_bindingx.bindingx],
  emits: ["change", "changing"],
  props: {
    width: {
      type: [Number, String],
      default: 240
    },
    height: {
      type: [Number, String],
      default: 2
    },
    radius: {
      type: [Number, String],
      default: 2
    },
    min: {
      type: [Number, String],
      default: 0
    },
    max: {
      type: [Number, String],
      default: 100
    },
    step: {
      type: [Number, String],
      default: 1
    },
    value: {
      type: [Number, String],
      default: 0
    },
    section: {
      type: Boolean,
      default: false
    },
    endValue: {
      type: [Number, String],
      default: 100
    },
    background: {
      type: String,
      default: "#e1e1e1"
    },
    activeColor: {
      type: String,
      default: ""
    },
    blockWidth: {
      type: [Number, String],
      default: 24
    },
    blockHeight: {
      type: [Number, String],
      default: 24
    },
    blockColor: {
      type: String,
      default: "#fff"
    },
    blockRadius: {
      type: [Number, String],
      default: 12
    },
    disabled: {
      type: Boolean,
      default: false
    },
    showValue: {
      type: Boolean,
      default: false
    },
    valueWidth: {
      type: [Number, String],
      default: 32
    },
    valueSize: {
      type: [Number, String],
      default: 14
    },
    valueColor: {
      type: String,
      default: "#333"
    }
  },
  watch: {
    value(val) {
      let start = this.getStartVal(val);
      this.initValue = start;
      this.start = start;
    },
    endValue(val) {
      let end = this.getEndVal(val);
      this.initEndValue = end;
      this.end = end;
    }
  },
  data() {
    return {
      start: 0,
      end: 0,
      initValue: 0,
      initEndValue: 0
    };
  },
  mounted() {
    setTimeout(() => {
      this.start = this.getStartVal(this.value);
      this.end = this.getEndVal(this.endValue);
      this.initValue = this.start;
      this.initEndValue = this.end;
    }, 20);
  },
  methods: {
    getStartVal(val) {
      val = Number(val);
      let min = Number(this.min);
      val = val < min ? min : val;
      return val;
    },
    getEndVal(val) {
      val = Number(val);
      let min = Number(this.min);
      let max = Number(this.max);
      val = val < min ? min : val;
      val = val > max ? max : val;
      return val;
    },
    getParams(e) {
      let val = e.value || 0;
      if (this.section && !e.isStart) {
        this.end = val;
      } else {
        this.start = val;
      }
      let params = {
        value: this.start
      };
      if (this.section) {
        params.endValue = this.end;
      }
      return params;
    },
    change(e) {
      let params = this.getParams(e);
      this.$emit("change", params);
    },
    changing(e) {
      let params = this.getParams(e);
      this.$emit("changing", params);
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $props.section && $props.showValue
  }, $props.section && $props.showValue ? {
    b: common_vendor.t($data.start),
    c: $props.valueWidth + "px",
    d: $props.valueColor,
    e: $props.valueSize + "px"
  } : {}, {
    f: common_vendor.n($props.activeColor ? "" : "fui-slider__pole-bg"),
    g: $props.activeColor,
    h: _ctx.transLeft,
    i: common_vendor.n($props.activeColor ? "" : "fui-slider__pole-bg"),
    j: $props.activeColor,
    k: _ctx.transRight,
    l: $props.width + "px",
    m: $props.height + "px",
    n: $props.radius + "px",
    o: $props.background,
    p: $props.blockWidth + "px",
    q: $props.blockHeight + "px",
    r: $props.blockRadius + "px",
    s: $props.blockColor,
    t: _ctx.moveLeft,
    v: common_vendor.n(_ctx.isRight ? "fui-slider__handle-zi" : ""),
    w: common_vendor.o((...args) => _ctx.touchstart && _ctx.touchstart(...args)),
    x: common_vendor.o((...args) => _ctx.touchmove && _ctx.touchmove(...args)),
    y: common_vendor.o((...args) => _ctx.touchend && _ctx.touchend(...args)),
    z: $props.section
  }, $props.section ? {
    A: $props.blockWidth + "px",
    B: $props.blockHeight + "px",
    C: $props.blockRadius + "px",
    D: $props.blockColor,
    E: _ctx.moveRight,
    F: common_vendor.o((...args) => _ctx.endTouchstart && _ctx.endTouchstart(...args)),
    G: common_vendor.o((...args) => _ctx.endTouchmove && _ctx.endTouchmove(...args)),
    H: common_vendor.o((...args) => _ctx.endTouchend && _ctx.endTouchend(...args))
  } : {}, {
    I: $props.width + "px",
    J: ($props.blockHeight < $props.height ? $props.height : $props.blockHeight) + "px",
    K: $props.showValue
  }, $props.showValue ? {
    L: common_vendor.t($props.section ? $data.end : $data.start),
    M: $props.valueWidth + "px",
    N: $props.valueColor,
    O: $props.valueSize + "px"
  } : {});
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-b2fa3315"], ["__file", "E:/H4L_Omip/MiniPoint/h4l-omip/components/firstui/fui-slider/fui-slider.vue"]]);
my.createComponent(Component);
