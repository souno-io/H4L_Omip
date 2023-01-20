"use strict";
const common_vendor = require("../../../common/vendor.js");
const components_firstui_fuiCircle_mpjs = require("./mpjs.js");
const components_firstui_fuiCircle_render = require("./render.js");
const components_firstui_fuiCircle_nvue = require("./nvue.js");
const _sfc_main = {
  name: "fui-circle",
  mixins: [components_firstui_fuiCircle_mpjs.mpjs, components_firstui_fuiCircle_render.render, components_firstui_fuiCircle_nvue.nvue],
  emits: ["change", "end"],
  props: {
    percent: {
      type: [Number, String],
      default: 0
    },
    width: {
      type: [Number, String],
      default: 120
    },
    fillStyle: {
      type: String,
      default: "#FFFFFF"
    },
    strokeWidth: {
      type: [Number, String],
      default: 4
    },
    lineCap: {
      type: String,
      default: "round"
    },
    size: {
      type: [Number, String],
      default: 12
    },
    color: {
      type: String,
      default: "#465CFF"
    },
    show: {
      type: Boolean,
      default: true
    },
    background: {
      type: String,
      default: "#CCCCCC"
    },
    defaultShow: {
      type: Boolean,
      default: true
    },
    foreground: {
      type: String,
      default: "#465CFF"
    },
    sAngle: {
      type: Number,
      default: 0
    },
    counterclockwise: {
      type: Boolean,
      default: false
    },
    speed: {
      type: [Number, String],
      default: 1
    },
    activeMode: {
      type: String,
      default: "forwards"
    }
  },
  watch: {
    width(val) {
      this.initWidth(val);
    }
  },
  data() {
    const circleId = `fui_cc_${Math.ceil(Math.random() * 1e6).toString(36)}`;
    return {
      circleId,
      w: 60
    };
  },
  created() {
    this.initWidth(this.width);
  },
  methods: {
    initWidth(val) {
      val = common_vendor.index.upx2px(Number(val) || 120);
      this.w = val % 2 === 0 ? val : val + 1;
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: $data.circleId,
    b: $data.circleId,
    c: $data.w * 4 + "px",
    d: $data.w * 4 + "px",
    e: $data.w + "px",
    f: $data.w + "px"
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-4673f12e"], ["__file", "E:/H4L_Omip/MiniPoint/h4l-omip/components/firstui/fui-circle/fui-circle.vue"]]);
my.createComponent(Component);
