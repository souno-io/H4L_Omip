"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  name: "fui-bubble-box",
  emits: ["click", "close"],
  props: {
    show: {
      type: Boolean,
      default: false
    },
    items: {
      type: Array,
      default() {
        return [];
      }
    },
    width: {
      type: [Number, String],
      default: 300
    },
    padding: {
      type: Array,
      default() {
        return ["26rpx", "32rpx"];
      }
    },
    position: {
      type: String,
      default: "fixed"
    },
    left: {
      type: [Number, String],
      default: 0
    },
    right: {
      type: [Number, String],
      default: 8
    },
    top: {
      type: [Number, String],
      default: 0
    },
    bottom: {
      type: [Number, String],
      default: 0
    },
    direction: {
      type: String,
      default: "bottom"
    },
    zIndex: {
      type: [Number, String],
      default: 1001
    },
    background: {
      type: String,
      default: "#fff"
    },
    size: {
      type: [Number, String],
      default: 32
    },
    color: {
      type: String,
      default: "#181818"
    },
    fontWeight: {
      type: [Number, String],
      default: 400
    },
    showLine: {
      type: Boolean,
      default: true
    },
    lineColor: {
      type: String,
      default: "#eee"
    },
    triangle: {
      type: Object,
      default() {
        return {};
      }
    },
    isMask: {
      type: Boolean,
      default: true
    },
    maskBackground: {
      type: String,
      default: "transparent"
    },
    maskClosable: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    getStyle() {
      let styles = "";
      if (this.direction === "left" || this.direction === "right") {
        styles += "width:8px;";
      } else {
        styles += "height:8px;";
      }
      return styles;
    },
    getBbStyl() {
      let styl = `position:${this.position};z-index:${this.zIndex};`;
      if (this.direction === "top" || this.direction === "bottom") {
        styl += `width:${this.width}rpx;`;
      }
      if (this.position === "fixed") {
        let tb = this.top ? `top:${this.top}rpx;` : "";
        tb += this.bottom ? `bottom:${this.bottom}rpx;` : "";
        styl += tb ? tb : `top:${this.top}rpx;`;
        let lr = this.left ? `left:${this.left}rpx;` : "";
        lr += this.right ? `right:${this.right}rpx;` : "";
        styl += lr ? lr : `left:${this.left}rpx;`;
      }
      return styl;
    },
    getStyles() {
      let $this = this.triangle || {};
      let styl = `background:${this.background};${this.direction}:0;`;
      if (this.direction === "top" || this.direction === "bottom") {
        styl += $this.left ? `left:${Math.max(32, $this.left || 0)}rpx;` : `right:${Math.max(32, $this.right || 0)}rpx;`;
      } else {
        styl += $this.top ? `top:${Math.max(32, $this.top || 0)}rpx;` : `bottom:${Math.max(32, $this.bottom || 0)}rpx;`;
      }
      return styl;
    },
    getMaskStyl() {
      return `background:${this.maskBackground};z-index:${Number(this.zIndex) - 1};`;
    }
  },
  watch: {
    show(val) {
    }
  },
  data() {
    return {
      isVisible: true,
      isShow: false
    };
  },
  methods: {
    handleClose() {
      if (!this.maskClosable)
        return;
      this.$emit("close", {});
    },
    handleClick(index) {
      this.$emit("click", {
        index
      });
    },
    stop() {
      return false;
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
    a: $props.isMask && $data.isVisible
  }, $props.isMask && $data.isVisible ? {
    b: common_vendor.o((...args) => $options.stop && $options.stop(...args)),
    c: common_vendor.n($props.show ? "fui-bb__unnvue-show" : ""),
    d: common_vendor.n($data.isShow ? "fui-bb__opciaty-show" : "fui-bb__opciaty-hidden"),
    e: common_vendor.s($options.getMaskStyl),
    f: common_vendor.o((...args) => $options.handleClose && $options.handleClose(...args))
  } : {}, {
    g: $data.isVisible
  }, $data.isVisible ? common_vendor.e({
    h: $props.direction === "bottom" || $props.direction === "right"
  }, $props.direction === "bottom" || $props.direction === "right" ? {
    i: common_vendor.s($options.getStyles),
    j: common_vendor.n("fui-bb__triangle-" + $props.direction),
    k: common_vendor.s($options.getStyle)
  } : {}, {
    l: common_vendor.f($props.items, (item, index, i0) => {
      return common_vendor.e({
        a: item.name
      }, item.name ? {
        b: "8cece2bb-0-" + i0,
        c: common_vendor.p({
          name: item.name,
          size: item.size || 60,
          color: item.color || $props.color
        })
      } : {}, {
        d: item.src && !item.name
      }, item.src && !item.name ? {
        e: item.src,
        f: (item.width || 48) + "rpx",
        g: (item.height || 48) + "rpx"
      } : {}, {
        h: common_vendor.t(item.text),
        i: item.name || item.src ? 1 : "",
        j: index !== $props.items.length - 1 && $props.showLine
      }, index !== $props.items.length - 1 && $props.showLine ? {
        k: common_vendor.n($props.direction === "left" ? "fui-bb__line-right" : "fui-bb__line-left"),
        l: $props.lineColor,
        m: $props.direction === "left" ? 0 : $props.padding[3] || $props.padding[1] || 0,
        n: $props.direction === "left" ? $props.padding[3] || $props.padding[1] || 0 : 0
      } : {}, {
        o: index,
        p: common_vendor.o(($event) => $options.handleClick(index))
      });
    }),
    m: $props.size + "rpx",
    n: $props.color,
    o: $props.fontWeight,
    p: $props.padding[0] || 0,
    q: $props.padding[1] || 0,
    r: $props.padding[2] || $props.padding[0] || 0,
    s: $props.padding[3] || $props.padding[1] || 0,
    t: $props.background,
    v: $props.width + "rpx",
    w: $props.direction === "top" || $props.direction === "left"
  }, $props.direction === "top" || $props.direction === "left" ? {
    x: common_vendor.s($options.getStyles),
    y: common_vendor.n("fui-bb__triangle-" + $props.direction),
    z: common_vendor.s($options.getStyle)
  } : {}, {
    A: common_vendor.s($options.getBbStyl),
    B: common_vendor.n($props.direction === "top" || $props.direction === "bottom" ? "fui-bubble__box-col" : "fui-bubble__box-row"),
    C: common_vendor.n($props.position === "absolute" ? "fui-bb__list-" + $props.direction : ""),
    D: common_vendor.n($props.show ? "fui-bb__unnvue-show" : ""),
    E: common_vendor.n($data.isShow ? "fui-bb__opciaty-show" : "fui-bb__opciaty-hidden")
  }) : {});
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-8cece2bb"], ["__file", "E:/H4L_Omip/MiniPoint/h4l-omip/components/firstui/fui-bubble-box/fui-bubble-box.vue"]]);
my.createComponent(Component);
