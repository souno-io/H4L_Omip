"use strict";
const common_vendor = require("../../../common/vendor.js");
const components_firstui_fuiBarcode_barcode = require("./barcode.js");
const defalutOptions = {
  number: true,
  prefix: true,
  color: "#181818",
  debug: false,
  onValid() {
  },
  onInvalid() {
  },
  onSuccess() {
  },
  onError() {
  }
};
const _sfc_main = {
  name: "fui-barcode",
  emits: ["ready", "longclick", "touchStart", "touchEnd"],
  props: {
    width: {
      type: [Number, String],
      default: 480
    },
    height: {
      type: [Number, String],
      default: 200
    },
    value: {
      type: String,
      default: ""
    }
  },
  data() {
    const canvasId = `fui_bc_${Math.ceil(Math.random() * 1e6).toString(36)}`;
    return {
      canvasId,
      defalutOptions,
      w: 240,
      h: 100
    };
  },
  watch: {
    width(val) {
      this.w = common_vendor.index.upx2px(val || 480);
    },
    height(val) {
      this.h = common_vendor.index.upx2px(val || 200);
    }
  },
  created() {
    this.w = common_vendor.index.upx2px(this.width || 480);
    this.h = common_vendor.index.upx2px(this.height || 200);
    this.ctx = null;
  },
  mounted() {
    setTimeout(() => {
      this.$emit("ready", {
        canvasId: this.canvasId
      });
    }, 50);
  },
  beforeUnmount() {
    this.ctx = null;
  },
  methods: {
    draw(options = {}) {
      if (!this.ctx) {
        this.ctx = common_vendor.index.createCanvasContext(this.canvasId, this);
      }
      const opts = Object.assign({}, this.defalutOptions, options);
      new components_firstui_fuiBarcode_barcode.barcode(this.value, Object.assign({
        width: this.w,
        height: this.h
      }, opts), this.ctx);
    },
    longtap() {
      this.$emit("longclick", {});
    },
    touchstart() {
      this.$emit("touchStart", {});
    },
    touchend() {
      this.$emit("touchEnd", {});
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: $data.canvasId,
    b: $data.canvasId,
    c: $data.w + "px",
    d: $data.h + "px",
    e: common_vendor.o((...args) => $options.longtap && $options.longtap(...args)),
    f: common_vendor.o((...args) => $options.touchstart && $options.touchstart(...args)),
    g: common_vendor.o((...args) => $options.touchend && $options.touchend(...args))
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/H4L_Omip/MiniPoint/h4l-omip/components/firstui/fui-barcode/fui-barcode.vue"]]);
my.createComponent(Component);
