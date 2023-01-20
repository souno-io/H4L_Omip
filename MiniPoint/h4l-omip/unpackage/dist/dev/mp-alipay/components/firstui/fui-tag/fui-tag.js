"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  name: "fui-tag",
  emits: ["click"],
  props: {
    text: {
      type: String,
      default: ""
    },
    type: {
      type: String,
      default: "primary"
    },
    theme: {
      type: String,
      default: "dark"
    },
    background: {
      type: String,
      default: ""
    },
    borderColor: {
      type: String,
      default: ""
    },
    color: {
      type: String,
      default: ""
    },
    size: {
      type: [Number, String],
      default: 24
    },
    scaleRatio: {
      type: Number,
      default: 1
    },
    originLeft: {
      type: Boolean,
      default: false
    },
    originRight: {
      type: Boolean,
      default: false
    },
    highlight: {
      type: Boolean,
      default: false
    },
    radius: {
      type: [Number, String],
      default: 8
    },
    padding: {
      type: Array,
      default() {
        return ["16rpx", "32rpx"];
      }
    },
    marginTop: {
      type: [Number, String],
      default: 0
    },
    marginBottom: {
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
    index: {
      type: Number,
      default: 0
    }
  },
  data() {
    let isNvue = false;
    return {
      isNvue
    };
  },
  computed: {
    getBackground() {
      let background = this.background;
      return background;
    },
    getColor() {
      let color = this.color;
      return color;
    },
    getBorderColor() {
      let borderColor = this.borderColor;
      return borderColor;
    }
  },
  methods: {
    handleClick() {
      this.$emit("click", {
        index: this.index
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $props.text
  }, $props.text ? {
    b: common_vendor.t($props.text),
    c: common_vendor.n(!$props.background ? `fui-tag_${$props.type}-${$props.theme}` : ""),
    d: $props.size + "rpx",
    e: $props.size + "rpx",
    f: $options.getColor
  } : {}, {
    g: common_vendor.n($props.highlight ? "fui-tag__opacity" : ""),
    h: common_vendor.n($props.originLeft ? "fui-tag__origin-left" : ""),
    i: common_vendor.n($props.originRight ? "fui-tag__origin-right" : ""),
    j: common_vendor.n(!$props.background ? `fui-tag__${$props.type}-${$props.theme}` : ""),
    k: $options.getBackground,
    l: $props.size + "rpx",
    m: $props.size + "rpx",
    n: $props.color,
    o: $options.getBorderColor,
    p: $data.isNvue ? 1 : $props.scaleRatio,
    q: `scale(${$data.isNvue ? $props.scaleRatio : 1})`,
    r: $props.radius + "rpx",
    s: $props.padding[0] || 0,
    t: $props.padding[1] || 0,
    v: $props.padding[2] || $props.padding[0] || 0,
    w: $props.padding[3] || $props.padding[1] || 0,
    x: $props.marginTop + "rpx",
    y: $props.marginRight + "rpx",
    z: $props.marginBottom + "rpx",
    A: $props.marginLeft + "rpx",
    B: common_vendor.o((...args) => $options.handleClick && $options.handleClick(...args))
  });
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-4d40641f"], ["__file", "E:/H4L_Omip/MiniPoint/h4l-omip/components/firstui/fui-tag/fui-tag.vue"]]);
my.createComponent(Component);
