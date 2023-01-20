"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  name: "fui-message",
  props: {
    padding: {
      type: Array,
      default() {
        return ["24rpx", "32rpx"];
      }
    },
    background: {
      type: String,
      default: "rgba(0, 0, 0, 0.6)"
    },
    color: {
      type: String,
      default: "#fff"
    },
    size: {
      type: [Number, String],
      default: 30
    },
    textAlign: {
      type: String,
      default: "center"
    },
    top: {
      type: [Number, String],
      default: 0
    },
    left: {
      type: [Number, String],
      default: 0
    },
    right: {
      type: [Number, String],
      default: 0
    },
    ridus: {
      type: [Number, String],
      default: 0
    },
    zIndex: {
      type: Number,
      default: 1001
    }
  },
  watch: {
    color(val) {
      this.opts_color = val;
    },
    background(val) {
      this.opts_bg = val;
    },
    size(val) {
      this.opts_size = val;
    },
    textAlign(val) {
      this.opts_align = val;
    }
  },
  data() {
    let isNvue = false;
    return {
      text: "",
      timer: null,
      isShow: false,
      isNvue,
      opts_bg: "rgba(0, 0, 0, 0.6)",
      opts_color: "#fff",
      opts_size: 30,
      opts_align: "center"
    };
  },
  beforeUnmount() {
    this.clearTimer();
  },
  created() {
    this.setOptions();
  },
  methods: {
    setOptions(options = {}) {
      this.opts_color = options.color || this.color;
      this.opts_bg = options.background || this.background;
      this.opts_size = options.size || this.background;
      this.opts_align = options.textAlign || this.textAlign;
    },
    show(options) {
      this.clearTimer();
      this.setOptions(options);
      this.text = options.text || "";
      let duration = options.duration || 2e3;
      this.isShow = true;
      this.timer = setTimeout(() => {
        this.isShow = false;
      }, duration);
    },
    clearTimer() {
      clearTimeout(this.timer);
      this.timer = null;
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: !$data.isNvue || $data.isShow
  }, !$data.isNvue || $data.isShow ? common_vendor.e({
    b: $data.text
  }, $data.text ? {
    c: common_vendor.t($data.text),
    d: $data.opts_align !== "center" ? 1 : "",
    e: $data.opts_color,
    f: $data.opts_size + "rpx",
    g: $data.opts_align
  } : {}, {
    h: $data.isShow ? 1 : "",
    i: $data.opts_align !== "center" ? 1 : "",
    j: $props.padding[0] || 0,
    k: $props.padding[1] || 0,
    l: $props.padding[2] || $props.padding[0] || 0,
    m: $props.padding[3] || $props.padding[1] || 0,
    n: $props.top + "px",
    o: $props.left + "rpx",
    p: $props.right + "rpx",
    q: $data.opts_bg,
    r: $props.ridus + "rpx",
    s: $props.zIndex
  }) : {});
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-0081df3a"], ["__file", "E:/H4L_Omip/MiniPoint/h4l-omip/components/firstui/fui-message/fui-message.vue"]]);
my.createComponent(Component);
