"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  name: "fui-steps",
  emits: ["click"],
  props: {
    items: {
      type: Array,
      default() {
        return [];
      }
    },
    current: {
      type: [Number, String],
      default: 0
    },
    direction: {
      type: String,
      default: "row"
    },
    padding: {
      type: Array,
      default() {
        return [];
      }
    },
    background: {
      type: String,
      default: "transparent"
    },
    height: {
      type: [Number, String],
      default: 50
    },
    nodeColor: {
      type: String,
      default: "#ccc"
    },
    color: {
      type: String,
      default: "#181818"
    },
    size: {
      type: [Number, String],
      default: 32
    },
    fontWeight: {
      type: [Number, String],
      default: 400
    },
    descrColor: {
      type: String,
      default: "#B2B2B2"
    },
    descrSize: {
      type: [Number, String],
      default: 24
    },
    activeColor: {
      type: String,
      default: ""
    },
    radius: {
      type: String,
      default: "0rpx"
    },
    isMark: {
      type: Boolean,
      default: true
    },
    isWait: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    getStyles() {
      let styles = `height:${this.height}rpx`;
      if (this.direction === "column") {
        styles = `width:${this.height}rpx`;
      }
      return styles;
    }
  },
  data() {
    let isNvue = false;
    return {
      isNvue
    };
  },
  methods: {
    handleClick(index) {
      this.$emit("click", {
        index,
        ...this.items[index]
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($props.items, (item, index, i0) => {
      return common_vendor.e($props.direction === "row" ? {
        a: common_vendor.n($props.direction === "row" ? "fui-steps__line-row" : "fui-steps__line-col"),
        b: common_vendor.n(index <= $props.current && index !== 0 && !$props.activeColor ? "fui-steps__background" : ""),
        c: index === 0 ? "transparent" : index <= $props.current ? $props.activeColor : $props.nodeColor
      } : {}, {
        d: item.text && !($props.isMark && index == $props.current)
      }, item.text && !($props.isMark && index == $props.current) ? {
        e: common_vendor.t(item.text),
        f: index <= $props.current && !$props.activeColor ? 1 : "",
        g: index <= $props.current && !$props.activeColor ? 1 : "",
        h: index <= $props.current ? $props.activeColor : "#fff",
        i: index <= $props.current ? $props.activeColor : $props.nodeColor,
        j: index <= $props.current ? "#fff" : $props.color
      } : {}, {
        k: $props.isMark && index == $props.current
      }, $props.isMark && index == $props.current ? {
        l: !$props.activeColor ? 1 : "",
        m: $props.activeColor
      } : {}, {
        n: !item.text && !item.src && !($props.isMark && index == $props.current)
      }, !item.text && !item.src && !($props.isMark && index == $props.current) ? {
        o: index <= $props.current && !$props.activeColor ? 1 : "",
        p: index <= $props.current ? $props.activeColor : $props.nodeColor
      } : {}, {
        q: !item.text && item.src && !($props.isMark && index == $props.current)
      }, !item.text && item.src && !($props.isMark && index == $props.current) ? {
        r: index <= $props.current ? item.activeSrc || item.src : item.src,
        s: $props.radius || 0
      } : {}, {
        t: common_vendor.n(index !== $props.items.length - 1 && !$props.activeColor && (index < $props.current || index == $props.current && $props.isWait && $props.direction === "row") ? "fui-steps__background" : ""),
        v: index === $props.items.length - 1 ? "transparent" : index < $props.current || index == $props.current && $props.isWait && $props.direction === "row" ? $props.activeColor : $props.nodeColor,
        w: item.title
      }, item.title ? {
        x: common_vendor.t(item.title),
        y: $props.direction === "row" ? 1 : "",
        z: index <= $props.current && !$props.activeColor ? 1 : "",
        A: index <= $props.current ? $props.activeColor : $props.color,
        B: $props.size + "rpx",
        C: $props.fontWeight
      } : {}, {
        D: item.descr
      }, item.descr ? {
        E: common_vendor.t(item.descr),
        F: $props.direction === "row" ? 1 : "",
        G: index <= $props.current && !$props.activeColor ? 1 : "",
        H: index <= $props.current ? $props.activeColor : $props.descrColor,
        I: $props.descrSize + "rpx"
      } : {}, {
        J: index === $props.items.length - 1 || $props.direction === "row" ? "0rpx" : "64rpx",
        K: index,
        L: common_vendor.o(($event) => $options.handleClick(index))
      });
    }),
    b: $props.direction === "row",
    c: common_vendor.n($props.direction === "row" ? "fui-steps__line-row" : "fui-steps__line-col"),
    d: common_vendor.n($props.direction === "row" ? "fui-steps__flex-row" : "fui-steps__flex-col"),
    e: common_vendor.n($props.direction === "row" ? "" : "fui-steps__node-weex"),
    f: common_vendor.s($options.getStyles),
    g: common_vendor.n($props.direction === "row" ? "fui-steps__content-row" : "fui-steps__content-col"),
    h: $props.direction === "row" ? "20rpx" : $data.isNvue ? `${$props.height + 24}rpx` : "24rpx",
    i: common_vendor.n($props.direction === "column" ? "fui-steps__flex-row" : "fui-steps__flex-col"),
    j: common_vendor.n($props.direction === "row" ? "fui-steps__nw-col" : "fui-steps__nw-row"),
    k: $props.direction === "row" ? 1 : "",
    l: $props.padding[0] || 0,
    m: $props.padding[1] || 0,
    n: $props.padding[2] || $props.padding[0] || 0,
    o: $props.padding[3] || $props.padding[1] || 0,
    p: $props.background
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-585f7ecd"], ["__file", "E:/H4L_Omip/MiniPoint/h4l-omip/components/firstui/fui-steps/fui-steps.vue"]]);
my.createComponent(Component);
