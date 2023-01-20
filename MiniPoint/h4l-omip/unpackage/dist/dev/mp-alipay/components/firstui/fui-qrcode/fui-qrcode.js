"use strict";
const common_vendor = require("../../../common/vendor.js");
const components_firstui_fuiQrcode_fuiQr_index = require("./fui-qr/index.js");
require("./fui-qr/lib/QRCode.js");
require("./fui-qr/lib/8BitByte.js");
require("./fui-qr/lib/mode.js");
require("./fui-qr/lib/RSBlock.js");
require("./fui-qr/lib/ErrorCorrectLevel.js");
require("./fui-qr/lib/BitBuffer.js");
require("./fui-qr/lib/util.js");
require("./fui-qr/lib/Polynomial.js");
require("./fui-qr/lib/math.js");
const utf16to8 = (str) => {
  const len = str.length;
  let out = "";
  for (let i = 0; i < len; i++) {
    const c = str.charCodeAt(i);
    if (c >= 1 && c <= 127) {
      out += str.charAt(i);
    } else if (c > 2047) {
      out += String.fromCharCode(224 | c >> 12 & 15);
      out += String.fromCharCode(128 | c >> 6 & 63);
      out += String.fromCharCode(128 | c >> 0 & 63);
    } else {
      out += String.fromCharCode(192 | c >> 6 & 31);
      out += String.fromCharCode(128 | c >> 0 & 63);
    }
  }
  return out;
};
const _sfc_main = {
  name: "fui-qrcode",
  emits: ["ready", "longclick", "touchStart", "touchEnd"],
  props: {
    width: {
      type: [Number, String],
      default: 400
    },
    height: {
      type: [Number, String],
      default: 400
    },
    value: {
      type: String,
      default: ""
    },
    foreground: {
      type: String,
      default: "#181818"
    },
    background: {
      type: String,
      default: "#ffffff"
    }
  },
  data() {
    const canvasId = `fui_qr_${Math.ceil(Math.random() * 1e6).toString(36)}`;
    return {
      canvasId,
      errorCorrectLevel: 2,
      typeNumber: -1,
      w: 200,
      h: 200
    };
  },
  computed: {
    initDraw() {
      return `${this.width}_${this.height}_${this.foreground}_${this.background}_${this.value}`;
    }
  },
  watch: {
    initDraw(val) {
      this.w = common_vendor.index.upx2px(this.width || 400);
      this.h = common_vendor.index.upx2px(this.height || 400);
      this.$nextTick(() => {
        this.draw();
      });
    }
  },
  created() {
    this.w = common_vendor.index.upx2px(this.width || 400);
    this.h = common_vendor.index.upx2px(this.height || 400);
    this.ctx = null;
  },
  mounted() {
    setTimeout(() => {
      this.draw();
      this.$emit("ready", {
        canvasId: this.canvasId
      });
    }, 50);
  },
  beforeUnmount() {
    this.ctx = null;
  },
  methods: {
    draw() {
      const qrcode = components_firstui_fuiQrcode_fuiQr_index.qrcode(utf16to8(this.value), {
        typeNumber: this.typeNumber,
        errorCorrectLevel: this.errorCorrectLevel
      });
      const cells = qrcode.modules;
      const tileW = this.w / cells.length;
      const tileH = this.h / cells.length;
      if (!this.ctx) {
        this.ctx = common_vendor.index.createCanvasContext(this.canvasId, this);
      }
      this.ctx.scale(1, 1);
      cells.forEach((row, rdx) => {
        row.forEach((cell, cdx) => {
          this.ctx.setFillStyle(cell ? this.foreground : this.background);
          const w = Math.ceil((cdx + 1) * tileW) - Math.floor(cdx * tileW);
          const h = Math.ceil((rdx + 1) * tileH) - Math.floor(rdx * tileH);
          this.ctx.fillRect(Math.round(cdx * tileW), Math.round(rdx * tileH), w, h);
        });
      });
      this.ctx.draw();
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
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/H4L_Omip/MiniPoint/h4l-omip/components/firstui/fui-qrcode/fui-qrcode.vue"]]);
my.createComponent(Component);
