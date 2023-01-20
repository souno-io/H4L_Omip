"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  name: "fui-badge",
  emits: ["click"],
  props: {
    value: {
      type: [Number, String],
      default: ""
    },
    max: {
      type: [Number, String],
      default: -1
    },
    type: {
      type: String,
      default: "primary"
    },
    background: {
      type: String,
      default: ""
    },
    color: {
      type: String,
      default: "#FFFFFF"
    },
    dot: {
      type: Boolean,
      default: false
    },
    marginTop: {
      type: [Number, String],
      default: 0
    },
    marginLeft: {
      type: [Number, String],
      default: 0
    },
    marginRight: {
      type: [Number, String],
      default: 0
    },
    absolute: {
      type: Boolean,
      default: false
    },
    top: {
      type: String,
      default: "-8rpx"
    },
    right: {
      type: String,
      default: "-18rpx"
    },
    scaleRatio: {
      type: Number,
      default: 1
    }
  },
  data() {
    let isNvue = false;
    return {
      isNvue,
      width: 0,
      showValue: ""
    };
  },
  watch: {
    value(val) {
      this.getWidth();
    }
  },
  mounted() {
    this.getWidth();
  },
  methods: {
    getWidth() {
      let max = Number(this.max);
      let val = Number(this.value);
      let value = "";
      if (isNaN(val) || max === -1) {
        value = this.value;
      } else {
        value = val > max ? `${max}+` : val;
      }
      this.showValue = value;
      this.width = this.dot ? "8px" : String(value).length * 16 + 21 + "rpx";
    },
    handleClick() {
      this.$emit("click");
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $data.showValue || $props.dot
  }, $data.showValue || $props.dot ? {
    b: common_vendor.t($props.dot ? "" : $data.showValue),
    c: common_vendor.n($props.dot ? "fui-badge__dot" : "fui-badge__wrap"),
    d: common_vendor.n($props.background ? "" : "fui-badge__bg-" + $props.type),
    e: common_vendor.n($props.absolute ? "fui-badge__absolute" : ""),
    f: common_vendor.n($props.scaleRatio != 1 && $data.isNvue ? "fui-badge__trans-origin" : ""),
    g: common_vendor.n(!$props.background && $props.type === "white" ? "fui-badge__text-color" : ""),
    h: $props.absolute ? $props.top : "auto",
    i: $props.absolute ? $props.right : "auto",
    j: $props.scaleRatio,
    k: $data.isNvue ? `scale(${$props.scaleRatio})` : "scale(1)",
    l: $props.marginTop + "rpx",
    m: $props.marginLeft + "rpx",
    n: $props.marginRight + "rpx",
    o: $data.width,
    p: $props.color,
    q: $props.background,
    r: common_vendor.o((...args) => $options.handleClick && $options.handleClick(...args))
  } : {});
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-d3d4490c"], ["__file", "E:/H4L_Omip/MiniPoint/h4l-omip/components/firstui/fui-badge/fui-badge.vue"]]);
my.createComponent(Component);
