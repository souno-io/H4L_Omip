"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  name: "fui-swiper-dot",
  emits: ["click"],
  props: {
    items: {
      type: Array,
      default() {
        return [];
      }
    },
    type: {
      type: [Number, String],
      default: 1
    },
    current: {
      type: [Number, String],
      default: 0
    },
    styles: {
      type: Object,
      default() {
        return {};
      }
    },
    field: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      dots: {
        left: 0,
        right: 0,
        bottom: 32,
        width: 16,
        activeWidth: 16,
        height: 16,
        radius: true,
        background: "rgba(0,0,0,.6)",
        activeBackground: "",
        color: "#fff",
        activeColor: "#fff",
        size: 28,
        margin: 8,
        padding: 32
      },
      width: 0,
      activeWidth: 0,
      height: 0,
      radius: 0
    };
  },
  watch: {
    styles(newVal) {
      this.dots = Object.assign(this.dots, this.styles);
      this.initStyles();
    }
  },
  created() {
    this.dots = Object.assign(this.dots, this.styles);
    this.initStyles();
  },
  methods: {
    getPx(val, radius) {
      let res = 0;
      if (val && radius) {
        res = Math.floor(common_vendor.index.upx2px(val));
        res = res % 2 === 0 ? res : res + 1;
      }
      return res + "px";
    },
    initStyles() {
      this.width = this.getPx(this.dots.width, true);
      this.activeWidth = this.getPx(this.dots.activeWidth, true);
      this.height = this.getPx(this.dots.height, true);
      this.radius = this.getPx(this.dots.width, this.dots.radius);
    },
    itemClick(index) {
      this.$emit("click", {
        index
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $props.type == 1
  }, $props.type == 1 ? {
    b: common_vendor.f($props.items, (item, index, i0) => {
      return {
        a: common_vendor.o(($event) => $options.itemClick(index)),
        b: !$data.dots.activeBackground && index == $props.current ? 1 : "",
        c: index == $props.current ? $data.activeWidth : $data.width,
        d: index == $props.current ? $data.dots.activeBackground : $data.dots.background,
        e: index
      };
    }),
    c: $data.height,
    d: $data.radius,
    e: $data.dots.margin + "rpx",
    f: $data.dots.margin + "rpx",
    g: $data.dots.left + "rpx",
    h: $data.dots.right + "rpx",
    i: $data.dots.bottom + "rpx"
  } : {}, {
    j: $props.type == 2
  }, $props.type == 2 ? {
    k: common_vendor.f($props.items, (item, index, i0) => {
      return {
        a: common_vendor.t(index + 1),
        b: common_vendor.o(($event) => $options.itemClick(index)),
        c: !$data.dots.activeBackground && index == $props.current ? 1 : "",
        d: index == $props.current ? $data.dots.activeBackground : $data.dots.background,
        e: index == $props.current ? $data.dots.activeColor : $data.dots.color,
        f: index
      };
    }),
    l: $data.width,
    m: $data.height,
    n: $data.radius,
    o: $data.dots.margin + "rpx",
    p: $data.dots.margin + "rpx",
    q: $data.dots.size + "rpx",
    r: $data.dots.left + "rpx",
    s: $data.dots.right + "rpx",
    t: $data.dots.bottom + "rpx"
  } : {}, {
    v: $props.type == 3
  }, $props.type == 3 ? {
    w: common_vendor.t($props.items[$props.current][$props.field]),
    x: common_vendor.o(($event) => $options.itemClick($props.current)),
    y: $data.dots.size + "rpx",
    z: $data.dots.color,
    A: $data.dots.left + "rpx",
    B: $data.dots.right + "rpx",
    C: $data.dots.bottom + "rpx",
    D: ($data.dots.height < 64 ? 64 : $data.dots.height) + "rpx",
    E: $data.dots.background,
    F: $data.dots.padding + "rpx",
    G: $data.dots.padding + "rpx"
  } : {}, {
    H: $props.type == 4
  }, $props.type == 4 ? {
    I: common_vendor.t($props.current + 1),
    J: common_vendor.t($props.items.length),
    K: common_vendor.o(($event) => $options.itemClick($props.current)),
    L: $data.width,
    M: $data.height,
    N: $data.radius,
    O: $data.radius,
    P: $data.dots.background,
    Q: $data.dots.color,
    R: $data.dots.size + "rpx",
    S: $data.dots.right + "rpx",
    T: $data.dots.bottom + "rpx"
  } : {});
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-cdd03668"], ["__file", "E:/H4L_Omip/MiniPoint/h4l-omip/components/firstui/fui-swiper-dot/fui-swiper-dot.vue"]]);
my.createComponent(Component);
