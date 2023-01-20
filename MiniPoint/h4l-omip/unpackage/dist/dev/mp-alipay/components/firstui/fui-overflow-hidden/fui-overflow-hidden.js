"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  name: "fui-overflow-hidden",
  emits: ["click"],
  props: {
    text: {
      type: String,
      default: ""
    },
    type: {
      type: [Number, String],
      default: 1
    },
    rows: {
      type: [Number, String],
      default: 1
    },
    width: {
      type: String,
      default: "100%"
    },
    height: {
      type: String,
      default: "auto"
    },
    padding: {
      type: Array,
      default() {
        return ["0", "0"];
      }
    },
    align: {
      type: String,
      default: "left"
    },
    background: {
      type: String,
      default: "transparent"
    },
    size: {
      type: [Number, String],
      default: 32
    },
    color: {
      type: String,
      default: "#333333"
    },
    fontWeight: {
      type: [Number, String],
      default: "normal"
    },
    overflow: {
      type: String,
      default: "ellipsis"
    },
    gradientColor: {
      type: String,
      default: "#FFFFFF"
    },
    visible: {
      type: Boolean,
      default: false
    },
    param: {
      type: [Number, String],
      default: 0
    }
  },
  computed: {
    getGradientBgColor() {
      return `-webkit-linear-gradient(top, rgba(255,255,255,0), ${this.gradientColor})`;
    }
  },
  methods: {
    handleTap(e) {
      this.$emit("click", {
        param: this.param
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.t($props.text),
    b: $props.type == 2 && !$props.visible
  }, $props.type == 2 && !$props.visible ? {
    c: $options.getGradientBgColor
  } : {}, {
    d: $props.type == 1 ? 1 : "",
    e: $props.type == 2 && !$props.visible ? 1 : "",
    f: $props.type == 1 && $props.rows == 1 ? 1 : "",
    g: $props.width,
    h: $props.type == 1 || $props.visible ? "auto" : $props.height,
    i: $props.type == 2 ? $props.padding[0] : "0",
    j: $props.type == 2 ? $props.padding[1] : 0,
    k: $props.type == 2 ? $props.padding[2] || $props.padding[0] : 0,
    l: $props.type == 2 ? $props.padding[3] || $props.padding[1] : 0,
    m: $props.background,
    n: $props.size + "rpx",
    o: $props.color,
    p: $props.fontWeight,
    q: $props.type == 1 ? $props.rows : "none",
    r: $props.overflow,
    s: $props.align,
    t: common_vendor.o((...args) => $options.handleTap && $options.handleTap(...args))
  });
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-82bcd206"], ["__file", "E:/H4L_Omip/MiniPoint/h4l-omip/components/firstui/fui-overflow-hidden/fui-overflow-hidden.vue"]]);
my.createComponent(Component);
