"use strict";
const common_vendor = require("../../../common/vendor.js");
var sys = common_vendor.index.getSystemInfoSync();
const _sfc_main = {
  name: "fui-nav-bar",
  emits: ["init", "leftClick", "rightClick", "titleClick"],
  props: {
    padding: {
      type: [Number, String],
      default: 8
    },
    title: {
      type: String,
      default: ""
    },
    size: {
      type: [Number, String],
      default: 17
    },
    color: {
      type: String,
      default: ""
    },
    fontWeight: {
      type: [Number, String],
      default: 500
    },
    background: {
      type: String,
      default: ""
    },
    splitLine: {
      type: Boolean,
      default: false
    },
    lineColor: {
      type: String,
      default: "#eee"
    },
    statusBar: {
      type: Boolean,
      default: true
    },
    isFixed: {
      type: Boolean,
      default: false
    },
    zIndex: {
      type: [Number, String],
      default: 996
    },
    custom: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      statusBarHeight: sys.statusBarHeight
    };
  },
  created() {
    let obj = {};
    my.hideAddToDesktopMenu();
    this.$emit("init", {
      windowWidth: sys.windowWidth,
      height: 44,
      statusBarHeight: this.statusBarHeight,
      left: obj.left || -1,
      btnWidth: obj.width || 0,
      btnHeight: obj.height || 0
    });
  },
  methods: {
    leftClick() {
      this.$emit("leftClick");
    },
    rightClick() {
      this.$emit("rightClick");
    },
    titleClick() {
      this.$emit("titleClick");
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $props.statusBar
  }, $props.statusBar ? {
    b: $data.statusBarHeight + "px"
  } : {}, {
    c: !$props.custom
  }, !$props.custom ? common_vendor.e({
    d: common_vendor.o((...args) => $options.leftClick && $options.leftClick(...args)),
    e: $props.title
  }, $props.title ? {
    f: common_vendor.t($props.title),
    g: $props.size + "px",
    h: $props.color,
    i: $props.fontWeight,
    j: common_vendor.o((...args) => $options.titleClick && $options.titleClick(...args))
  } : {}, {
    k: common_vendor.o((...args) => $options.rightClick && $options.rightClick(...args))
  }) : {}, {
    l: $props.custom
  }, $props.custom ? {} : {}, {
    m: $props.splitLine ? 1 : "",
    n: !$props.background ? 1 : "",
    o: $props.isFixed ? 1 : "",
    p: $props.background,
    q: $props.lineColor,
    r: $props.padding + "px",
    s: $props.padding + "px",
    t: $props.zIndex
  });
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-9bddc823"], ["__file", "E:/H4L_Omip/MiniPoint/h4l-omip/components/firstui/fui-nav-bar/fui-nav-bar.vue"]]);
my.createComponent(Component);
