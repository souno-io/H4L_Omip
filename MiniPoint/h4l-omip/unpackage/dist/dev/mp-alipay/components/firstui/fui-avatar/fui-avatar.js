"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  name: "fui-avatar",
  emits: ["click"],
  props: {
    src: {
      type: String,
      default: ""
    },
    mode: {
      type: String,
      default: "widthFix"
    },
    lazyLoad: {
      type: Boolean,
      default: true
    },
    webp: {
      type: Boolean,
      default: false
    },
    background: {
      type: String,
      default: "#D1D1D1"
    },
    size: {
      type: String,
      default: "middle"
    },
    width: {
      type: [Number, String],
      default: 0
    },
    height: {
      type: [Number, String],
      default: 0
    },
    shape: {
      type: String,
      default: "circle"
    },
    radius: {
      type: [Number, String],
      default: -1
    },
    text: {
      type: String,
      default: ""
    },
    color: {
      type: String,
      default: "#fff"
    },
    fontSize: {
      type: [Number, String],
      default: 0
    },
    fontWeight: {
      type: [Number, String],
      default: 600
    },
    marginRight: {
      type: [Number, String],
      default: 0
    },
    marginBottom: {
      type: [Number, String],
      default: 0
    },
    index: {
      type: Number,
      default: 0
    },
    params: {
      type: [Number, String],
      default: 0
    }
  },
  computed: {
    wrapStyles() {
      return `background:${this.background};margin-right:${this.marginRight}rpx;margin-bottom:${this.marginBottom}rpx;${this.styles}`;
    },
    styles() {
      let styles = "";
      if (this.width) {
        styles = `width:${this.width}rpx;height:${this.height || this.width}rpx;`;
      }
      if (this.radius !== -1) {
        styles += `border-radius:${this.radius}rpx;`;
      }
      return styles;
    },
    textStyles() {
      let styles = `color:${this.color};font-weight:${this.fontWeight};`;
      if (this.fontSize) {
        styles += `font-size:${this.fontSize}rpx;`;
      }
      return styles;
    }
  },
  methods: {
    handleClick() {
      this.$emit("click", {
        index: this.index,
        params: this.params
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $props.src
  }, $props.src ? {
    b: common_vendor.s($options.styles),
    c: common_vendor.n($props.radius === -1 ? "fui-avatar__" + $props.shape : ""),
    d: common_vendor.n($props.width ? "" : "fui-avatar__size-" + $props.size),
    e: $props.src,
    f: $props.mode,
    g: $props.webp,
    h: $props.lazyLoad
  } : {}, {
    i: !$props.src && $props.text
  }, !$props.src && $props.text ? {
    j: common_vendor.t($props.text),
    k: common_vendor.n($props.width ? "" : "fui-avatar__text-" + $props.size),
    l: common_vendor.s($options.textStyles)
  } : {}, {
    m: common_vendor.n($props.width ? "" : "fui-avatar__size-" + $props.size),
    n: common_vendor.n($props.radius === -1 ? "fui-avatar__" + $props.shape : ""),
    o: common_vendor.s($options.wrapStyles),
    p: common_vendor.o((...args) => $options.handleClick && $options.handleClick(...args))
  });
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-dbeabcd1"], ["__file", "E:/H4L_Omip/MiniPoint/h4l-omip/components/firstui/fui-avatar/fui-avatar.vue"]]);
my.createComponent(Component);
